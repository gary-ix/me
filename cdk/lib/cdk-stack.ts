import * as cdk from 'aws-cdk-lib';
import { aws_certificatemanager as acm, aws_cloudfront as cloudfront, aws_cloudfront_origins as origins, aws_route53 as route53, aws_s3 as s3, aws_s3_deployment as s3deploy, aws_route53_targets as targets } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as path from 'path';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, {
      ...props,
      env: {
        account: process.env.CDK_DEFAULT_ACCOUNT, // or specify your AWS account ID
        region: process.env.CDK_DEFAULT_REGION,   // or specify your AWS region
      },
    });

    // Create an S3 bucket to store the static website
    const websiteBucket = new s3.Bucket(this, 'WebsiteBucket', {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      publicReadAccess: false,
      websiteIndexDocument: 'index.html',
    });

    // Request an ACM certificate for both domains
    const certificate = new acm.Certificate(this, 'SiteCertificate', {
      domainName: 'theprogrammertest.com',
      subjectAlternativeNames: ['www.theprogrammertest.com'],
      validation: acm.CertificateValidation.fromDns(),
    });

    // Create a CloudFront distribution with ACM certificate
    const distribution = new cloudfront.Distribution(this, 'Distribution', {
      certificate: certificate, // Use the ACM certificate
      defaultBehavior: {
        origin: new origins.OriginGroup({
          fallbackOrigin: origins.S3BucketOrigin.withOriginAccessControl(websiteBucket),
          fallbackStatusCodes: [404],
          primaryOrigin: origins.S3BucketOrigin.withOriginAccessControl(websiteBucket),
        }),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS, // Enforce HTTPS
      },
      defaultRootObject: 'index.html',
      domainNames: ['theprogrammertest.com'],
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
        },
      ],
    });

    // Deploy site contents to S3 bucket
    new s3deploy.BucketDeployment(this, 'DeployWebsite', {
      destinationBucket: websiteBucket,
      distribution,
      distributionPaths: ['/*'],
      sources: [s3deploy.Source.asset(path.join(__dirname, '../../build'))],
    });

    // Output the CloudFront URL
    new cdk.CfnOutput(this, 'DistributionDomainName', {
      description: 'CloudFront Distribution Domain Name',
      value: distribution.domainName,
    });

    // Create an S3 bucket for www redirection
    const redirectBucket = new s3.Bucket(this, 'RedirectBucket', {
      bucketName: 'www.theprogrammertest.com',
      websiteRedirect: {
        hostName: 'theprogrammertest.com',
        protocol: s3.RedirectProtocol.HTTPS,
      },
    });

    // Retrieve the hosted zone
    const hostedZone = route53.HostedZone.fromLookup(this, 'HostedZone', {
      domainName: 'theprogrammertest.com',
    });

    // Update DNS settings in Route 53
    new route53.ARecord(this, 'WWWRedirectRecord', {
      recordName: 'www',
      target: route53.RecordTarget.fromAlias(new targets.BucketWebsiteTarget(redirectBucket)),
      zone: hostedZone,
    });
  }
}

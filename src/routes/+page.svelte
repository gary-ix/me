<script lang="ts">
	import { Button } from '$lib/components/ui/button'
	import ProjectCard from '$lib/components/ui/project-card.svelte'
	import SkillCard from '$lib/components/ui/skill-card.svelte'

	const languages = [
		'Javascript/Typescript',
		'HTML',
		'CSS/Tailwind',
		'Python',
		' C++',
		'Go'
	]

	const frontendSkills = [
		'Svelte',
		'Vanilla JS',
		'React',
		'Local Storage',
		'IndexDB',
		'XSS/CSRF Prevention',
		'Workers'
	]

	const backendSkills = [
		'REST API',
		'Websockets',
		'OAuth',
		'JWT',
		'Express',
		'Redis',
		'SQL & NoSQL',
		'Docker',
		'Serverless & Serverful'
	]

	const ciSkills = [
		'Github Actions',
		'AWS',
		'Cloudflare',
		'Firebase',
		'Docker',
		'Digital Ocean (VPS)'
	]

	const toolingSkills = ['ESLint', 'Prettier', 'CLI', 'Husky', 'Vite', 'Vitest']
</script>

<div class="flex flex-col space-y-24">
	<!-- About Section -->
	<section id="about">
		<h2 class="mb-8 text-3xl font-bold text-foreground">
			About <span class="ml-2"></span>
		</h2>
		<div class="text-md select-none space-y-6 text-foreground-alt1">
			<p class="leading-relaxed">
				Hi (hello world), My name is <span
					class="font-bold text-accentHard-alt3">Garrett</span
				>, and programming started for me by being a curious child who liked to
				play on the computer.
			</p>

			<p class="leading-relaxed">
				Currently I am building the best retail trading platform,
				<span class="font-bold text-accentHard-alt3">Tradester </span>, which I
				co-founded. I enjoy making things
				<span class="font-bold text-accentHard-alt3">look good</span> and
				<span class="font-bold text-accentHard-alt3"> fast</span>
				through multiple iterations. In my free time I
				<span class="font-bold text-accentHard-alt3">build</span> various tools
				(many trading related), and dabble in whatever re-ignites that childhood
				<span class="font-bold text-accentHard-alt3">curiosity</span>.
			</p>

			<p class="leading-relaxed">
				When I am not programming and am touching grass I enjoy playing
				<span class="font-bold text-accentHard-alt3"> golf, </span> going on
				<span class="font-bold text-accentHard-alt3">walks </span>, and
				<span class="font-bold text-accentHard-alt3"> socializing</span>
				with friends and family.
			</p>
		</div>
	</section>

	<!-- Skills Section -->
	<section id="skills">
		<h2 class="mb-6 text-3xl font-bold text-foreground">Skills</h2>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<SkillCard skills={languages} title="Lanuages" />
			<SkillCard skills={frontendSkills} title="Frontend" />
			<SkillCard skills={backendSkills} title="Backend" />
			<SkillCard skills={ciSkills} title="CI" />
			<SkillCard skills={toolingSkills} title="Tooling" />
		</div>
	</section>

	<!-- Projects Section -->
	<section id="projects">
		<h2 class="mb-8 text-3xl font-bold text-foreground">
			Projects <span class="ml-2"></span>
		</h2>
		<div class="flex flex-col space-y-12">
			<ProjectCard
				description="Is this really needed? Look around."
				imageUrl="/image.png"
				route="/"
				tags={['Svelte', 'Tailwind', 'Cloudflare Pages', 'ESLint', 'Prettier']}
				title="This Website"
			/>
			<ProjectCard
				description="Making Sierra Chart accessible to everyone."
				imageUrl="/image.png"
				route="/projects/trading-platform-help"
				tags={[
					'C++',
					'Python - Tkinter',
					'Powershell',
					'Vanilla JS/CSS',
					'Firebase',
					'Cloudflare'
				]}
				title="Trading Platform Help"
			/>
			<ProjectCard
				description="Two versions available for use. One is a desktop application built 
					using Python & TKinter, the other is a chrome extension built using vanilla JS/CSS."
				imageUrl="/image.png"
				route="/projects/tradingview-indicator-manager"
				tags={['Python', 'Typescript', 'Chrome Extension', 'API', 'SQLite']}
				title="Tradingview Indicator Manager"
			/>
			<ProjectCard
				description="An all-in-one discord bot for moderation, fun, and utility. Primarily
					 built for the Good Gains trading discord with over 20K members. Good Gains branch
					  also includes a Youtube Livestream Chatbot."
				imageUrl="/image.png"
				route="/projects/discord-antispam-bot"
				tags={['Python', 'Docker', 'VPS', 'Image Matching/Comparison']}
				title="Discord Antispam Bot"
			/>
			<ProjectCard
				description="A group of discord bots that provide real-time market info. Includes
					 price/indicator value updates every minute, as well as a news bot that broadcasts live market news."
				imageUrl="/image.png"
				route="/projects/discord-market-bots"
				tags={['NodeJs', 'Docker', 'Redis', 'Express', 'Cloudflare']}
				title="Discord Market Bots"
			/>
			<ProjectCard
				description="Uses Youtube's PubSub API to subscribe to channel events. This
					 implementation makes annoucement posts in Discord when a channel is live, or when a video is uploaded."
				imageUrl="/image.png"
				route="/projects/youtube-notifications-to-discord"
				tags={['Typescript', 'Firebase', 'Cloudflare', 'API', 'PubSub']}
				title="Youtube Notifications to Discord"
			/>

			<ProjectCard
				description="Freelance programming of over a thousand custom indicators...written in a variety of languages."
				imageUrl="/image.png"
				route="/projects/trading-indicators"
				tags={['Pinescript', 'Python', 'Thinkscript', 'C++', 'TS-EasyLanguage']}
				title="Trading Indicators"
			/>
		</div>

		<div class="mt-12 text-center">
			<Button
				class="text-sm font-medium text-foreground-alt1"
				href="https://github.com/gary-ix"
				rel="noopener noreferrer"
				target="_blank"
				variant="outline"
			>
				+ More on GitHub
			</Button>
		</div>
	</section>
</div>

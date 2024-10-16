<script lang="ts">
	import ProjectCard from '$lib/components/ui/project-card.svelte'
</script>

<div class="w-full px-10">
	<!-- About Section -->
	<section class="mb-36 pt-10" id="about">
		<h2 class="mb-8 text-3xl font-bold text-foreground">
			About <span class="ml-2">📖</span>
		</h2>
		<div class="text-md space-y-6 text-foreground-alt1">
			<p class="leading-relaxed">
				It all started being a curious child who liked to tinker with tech and
				an entrepreneurial spirit. Today, I'm a full-stack developer with over 7
				years of experience.
			</p>
			<p class="leading-relaxed">
				Today my main focus is building the best retail futures trading
				platform, Tradester, which I co-founded. I most enjoy making elegant &
				efficient UI and UX, but my OCD motivates me to continously iterate for
				optimized performance. In my free time I build trading tools for public
				& personal use, and dabble in whatever re-ignites that childhood
				curiosity.
			</p>
			<p class="leading-relaxed">
				When I'm not programming, I'm touching grass. That involves spending
				time with family and friends, working on my fitness (chad devs only),
				playing golf (looking for ball in rough), or laughing at my own jokes.
			</p>
		</div>
	</section>

	<!-- Projects Section -->
	<section class="mb-40 pt-10" id="projects">
		<h2 class="mb-8 text-3xl font-bold text-foreground">
			Projects <span class="ml-2">🛠️</span>
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
				route="/projects/discord-market-bots"
				tags={['Typescript', 'Firebase', 'Cloudflare', 'API', 'PubSub']}
				title="Youtube Notifications to Discord"
			/>

			<ProjectCard
				description="Freelance programming of over a thousand custom indicators...written in a variety of languages."
				imageUrl="/image.png"
				route="/projects/indicators"
				tags={['Pinescript', 'Python', 'Thinkscript', 'C++', 'TS-EasyLanguage']}
				title="Trading Indicators"
			/>
		</div>

		<div class="mt-12 text-center">
			<a
				class="rounded-lg bg-transparent px-3
				py-1 text-sm font-medium text-foreground-alt1
				transition-colors hover:border hover:border-accentHard-alt1"
				href="https://github.com/theprogrammergary"
				rel="noopener noreferrer"
				target="_blank"
			>
				+ More on GitHub
			</a>
		</div>
	</section>

	<!-- Experience Section -->
	<!-- TODO: put an interactive chart here -->
	<section class="mb-16 pt-10" id="experience">
		<h2 class="mb-8 text-3xl font-bold text-foreground">
			Experience <span class="ml-2">🧑🏻‍💻</span>
		</h2>
		<div class="text-md space-y-6 text-foreground-alt1">
			<p class="leading-relaxed">
				It all started being a curious child who liked to tinker with tech and
				an entrepreneurial spirit. Today, I'm a full-stack developer with over 7
				years of experience.
			</p>
			<p class="leading-relaxed">
				Today my main focus is building the best retail futures trading
				platform, Tradester, which I co-founded. I most enjoy making elegant &
				efficient UI and UX, but my OCD motivates me to continously iterate for
				optimized performance. In my free time I build trading tools for public
				& personal use, and dabble in whatever re-ignites that childhood
				curiosity.
			</p>
			<p class="leading-relaxed">
				When I'm not programming, I'm touching grass. That involves spending
				time with family and friends, working on my fitness (chad devs only),
				playing golf (looking for ball in rough), or laughing at my own jokes.
			</p>
		</div>
	</section>
</div>

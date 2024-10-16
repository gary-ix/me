<script lang="ts">
	import ProjectCard from '$lib/components/ui/project-card.svelte'
</script>

<div class="w-full px-10">
	<!-- About Section -->
	<section class="mb-40 mt-8" id="about">
		<h2 class="mb-8 text-3xl font-bold text-foreground">
			About <span class="ml-2">📖</span>
		</h2>
		<div class="text-md space-y-6 text-foreground-alt1">
			<p class="leading-relaxed">
				It all started being a curious child who liked to tinker with things and
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
				time with family and friends, working on my fitness (chad devs only), or
				playing golf (looking for ball in rough).
			</p>
		</div>
	</section>

	<!-- Projects Section -->
	<section class="mb-16" id="projects">
		<h2 class="mb-8 text-3xl font-bold text-foreground">
			Projects <span class="ml-2">🛠️</span>
		</h2>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<ProjectCard
				buttonText="Enter Bot Arena 🤖"
				description="Tailored Discord bots to enhance server functionality and user engagement."
				route="/projects/discord-bots"
				title="Discord Bots"
			/>
			<!-- Trading Platform Help -->
			<ProjectCard
				buttonText="Learn More 📈"
				description="Making Sierra Chart accesible to everyone."
				route="/projects/trading-platform-help"
				title="Trading Platform Help"
			/>
			<!-- Tradingview Access Management-->
			<ProjectCard
				buttonText="Meet the Tradingview Assistant 🧑🏻‍💻"
				description="Desktop app to manage tradingview indicator access."
				route="/projects/tradingview"
				title="Tradingview"
			/>
			<!-- Indicators -->
			<ProjectCard
				buttonText="Discover Indicators 📊"
				description="Freelance programming of over a thousand custom indicators...written in a variety of languages."
				route="/projects/indicators"
				title="Indicators"
			/>
		</div>
	</section>

	<!-- Experience Section -->
	<!-- TODO: put an interactive chart here -->
	<section class="mb-16" id="experience">
		<h2 class="mb-8 text-3xl font-bold text-foreground">
			Experience <span class="ml-2">🧑🏻‍💻</span>
		</h2>
	</section>
</div>

<script lang="ts">
	import ProjectCard from '$lib/components/ui/project-card.svelte'
</script>

<div class="flex min-h-screen flex-col">
	<!-- Home Section -->
	<section
		class="flex min-h-screen items-center justify-center bg-background"
		id="home"
	>
		<div class="text-center">
			<h1 class="mb-4 text-4xl font-bold text-foreground">
				Welcome to My Portfolio
			</h1>
			<p class="text-xl text-foreground-alt1">
				I'm a passionate developer creating amazing web experiences
			</p>
		</div>
	</section>

	<!-- About Section -->
	<section class="bg-background py-16" id="about">
		<div class="container mx-auto px-4">
			<h2 class="mb-8 text-center text-3xl font-bold text-foreground">
				About Me
			</h2>
			<p class="text-lg text-foreground-alt1">
				I'm a skilled web developer with experience in various technologies. My
				passion lies in creating efficient and user-friendly applications.
			</p>
		</div>
	</section>

	<!-- Projects Section -->
	<section class="bg-background py-16" id="projects">
		<div class="container mx-auto px-16 sm:px-24 md:px-32 lg:px-48">
			<h2 class="mb-24 text-center text-3xl font-bold text-foreground">
				My Projects
			</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				<!-- Discord Bots -->
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
		</div>
	</section>

	<!-- Contact Section -->
	<section class="bg-background py-16" id="contact">
		<div class="container mx-auto px-4">
			<h2 class="mb-8 text-center text-3xl font-bold text-foreground">
				Contact Me
			</h2>
			<form class="mx-auto max-w-md">
				<div class="mb-4">
					<input
						class="w-full rounded border bg-background p-2 text-foreground"
						placeholder="Your Name"
						type="text"
					/>
				</div>
				<div class="mb-4">
					<input
						class="w-full rounded border bg-background p-2 text-foreground"
						placeholder="Your Email"
						type="email"
					/>
				</div>
				<div class="mb-4">
					<textarea
						class="w-full rounded border bg-background p-2 text-foreground"
						placeholder="Your Message"
						rows="4"
					></textarea>
				</div>
				<button
					class="rounded bg-accentHard px-4 py-2 text-foreground transition duration-300 hover:bg-accentHard-alt1"
					type="submit">Send Message</button
				>
			</form>
		</div>
	</section>
</div>

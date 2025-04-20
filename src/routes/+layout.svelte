<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import Footer from '$lib/components/layout/footer/footer.svelte'
	import MouseGlow from '$lib/components/layout/mouseGlow/mouse-glow.svelte'
	import SocialLinks from '$lib/components/layout/sidebar/icon-links.svelte'
	import ThemeMode from '$lib/components/layout/themeMode/theme-mode.svelte'
	import { onMount } from 'svelte'

	import '../app.css'

	let observer: IntersectionObserver

	// // Handle navigation and smooth scrolling to sections
	// async function navigateOrScroll(event: MouseEvent, sectionId: string) {
	// 	// ... existing code ...
	// }

	// // Setup intersection observer to track active sections during scroll
	// function setupObserver() {
	// 	// ... existing code ...
	// }

	// // Initialize observers and handle page changes
	// onMount(() => {
	// 	// ... existing code ...
	// })

	let { children } = $props()
	let activeSection = $state('about')
	let isProjectsRoute = $derived($page.url.pathname.startsWith('/projects'))
</script>

<MouseGlow />
<div class="relative md:flex md:h-screen">
	<!-- Left Sidebar -->
	<div
		class="bg-background-start p-4 md:flex md:w-2/5 md:flex-col md:px-24 md:py-16"
	>
		<!-- Header Section with Name and Theme Toggle -->
		<div class="flex items-center justify-between md:mb-8 md:block">
			<!-- Name and Title -->
			<div>
				<a
					class="cursor-pointer"
					href="/"
					onclick={() => {
						return window.scrollTo(0, 0)
					}}
				>
					<h1 class="text-2xl font-bold text-foreground md:mb-4 md:text-4xl">
						Gary
					</h1>
					<p class="md:text-md py-2 text-xl text-foreground md:mb-6 md:block">
						Full-Stack Dev
					</p>
					<p class="md:text-md text-md py-0 text-foreground-alt1 md:py-0">
						I build things.
					</p>
				</a>
			</div>
			<!-- Theme Toggle Button -->
			<ThemeMode />
		</div>

		<!-- Navigation Menu -->
		<nav class="mt-4 md:mt-24">
			<ul
				class="flex flex-row justify-between px-0 md:flex-col md:space-y-2 md:px-0"
			>
				{#each ['ABOUT', 'EXPERIENCE', 'PROJECTS'] as section}
					<li class="flex-1 md:flex-none">
						<a
							class="group relative block py-1.5 text-center text-sm font-medium transition-all
							duration-300 md:px-2 md:text-left md:text-lg"
							class:active-section={activeSection === section.toLowerCase() ||
								(section === 'PROJECTS' && isProjectsRoute)}
							href={`/#${section.toLowerCase()}`}
							onclick={e => {
								return navigateOrScroll(e, section.toLowerCase())
							}}
						>
							<!-- Section Indicator (📈 emoji) -->
							<span
								class="absolute left-0 hidden transition-all duration-300 md:block"
								class:opacity-0={activeSection !== section.toLowerCase() &&
									!(section === 'PROJECTS' && isProjectsRoute)}
								class:opacity-100={activeSection === section.toLowerCase() ||
									(section === 'PROJECTS' && isProjectsRoute)}
							>
								{activeSection === section.toLowerCase() ||
								(section === 'PROJECTS' && isProjectsRoute)
									? '📈'
									: ''}
							</span>
							<!-- Navigation Link Text -->
							<span
								class="relative z-10 text-accentHard-alt3 transition-all duration-300 group-hover:text-foreground-alt1"
								class:md:font-bold={activeSection === section.toLowerCase() ||
									(section === 'PROJECTS' && isProjectsRoute)}
								class:md:pl-6={activeSection === section.toLowerCase() ||
									(section === 'PROJECTS' && isProjectsRoute)}
								class:md:translate-x-4={activeSection ===
									section.toLowerCase() ||
									(section === 'PROJECTS' && isProjectsRoute)}
								class:text-foreground={activeSection ===
									section.toLowerCase() ||
									(section === 'PROJECTS' && isProjectsRoute)}
							>
								{section}
							</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<!-- Social Links (Desktop Only) -->
		<div class="hidden md:mt-auto md:flex md:space-x-4">
			<SocialLinks />
		</div>
	</div>

	<!-- Main Content Area -->
	<div class="md:w-3/5 md:overflow-y-auto">
		<!-- Page Content -->
		<div class="p-4 md:p-8">
			{@render children()}
		</div>

		<!-- Footer -->
		<Footer />
	</div>
</div>

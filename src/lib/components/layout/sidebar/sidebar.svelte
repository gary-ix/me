<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import SocialLinks from '$lib/components/layout/sidebar/icon-links.svelte'
	import { onMount } from 'svelte'

	import ThemeMode from '../themeMode/theme-mode.svelte'

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

	let activeSection = $state('about')
	let isProjectsRoute = $derived($page.url.pathname.startsWith('/projects'))
</script>

<!-- Left Sidebar -->
<div
	class="sticky top-0 z-50 p-4 backdrop-blur-xl md:flex
md:h-screen md:w-2/5 md:flex-col md:px-24"
>
	<!-- Header Section with Name and Theme Toggle -->
	<div>
		<div class="flex items-center justify-between md:mb-8 md:block">
			<!-- Name and Title -->
			<div>
				<a
					class="flex cursor-pointer flex-col gap-2 md:gap-4"
					href="/"
					onclick={() => {
						return window.scrollTo(0, 0)
					}}
				>
					<h1 class="text-2xl font-bold text-foreground md:text-4xl">Gary</h1>
					<p class="md:text-md text-xl text-foreground">Full-Stack Dev</p>
					<p class="text-md text-foreground-alt1">I build things.</p>
				</a>
			</div>
			<!-- Theme Toggle Button -->
			<div class="relative md:fixed md:right-12 md:top-8">
				<ThemeMode />
			</div>
		</div>

		<!-- Navigation Menu -->
		<nav class="mt-6 md:mt-24">
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
	</div>

	<!-- Social Links (Desktop Only on Sidebar) -->
	<div class="mb-12 hidden md:mt-auto md:flex md:space-x-4">
		<SocialLinks />
	</div>
</div>

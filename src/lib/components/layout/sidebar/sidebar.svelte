<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import SocialLinks from '$lib/components/layout/sidebar/icon-links.svelte'
	import { onDestroy, onMount } from 'svelte'
	import { tick } from 'svelte'

	import ThemeMode from '../themeMode/theme-mode.svelte'

	let activeSection = 'about'
	let unsubscribe: () => void

	// Helper: check if current route is a projects route
	// $: isProjectsRoute = $page.url.pathname.startsWith('/projects')
	let isProjectsRoute = $page.url.pathname.startsWith('/projects')

	// Navigation and smooth scroll
	async function navigateOrScroll(event: MouseEvent, sectionId: string) {
		event.preventDefault()
		const isHome = $page.url.pathname === '/'

		const mobileOffset = 175 // px, adjust as needed
		const desktopOffset = 50 // px, adjust as needed

		function getOffset() {
			return window.innerWidth < 768 ? mobileOffset : desktopOffset
		}

		async function scrollToSection() {
			const el = document.getElementById(sectionId)

			if (el) {
				const y = el.getBoundingClientRect().top + window.scrollY - getOffset()
				window.scrollTo({ behavior: 'smooth', top: y })
				activeSection = sectionId
			}
		}

		if (isHome) {
			scrollToSection()
		} else {
			await goto(`/#${sectionId}`)
			await tick()
			scrollToSection()
		}
	}

	// Intersection Observer for active section
	function setupObserver() {
		const sectionIds = ['about', 'skills', 'projects']

		const sections = sectionIds
			.map(id => {
				return document.getElementById(id)
			})
			.filter(Boolean) as HTMLElement[]

		if (!sections.length) return

		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						activeSection = entry.target.id
					}
				})
			},
			{
				root: null,
				rootMargin: '0px 0px -60% 0px', // Trigger when section is 40% from top
				threshold: 0.2
			}
		)

		sections.forEach(section => {
			return observer.observe(section)
		})

		return () => {
			return observer.disconnect()
		}
	}

	onMount(() => {
		// Only observe on homepage
		if ($page.url.pathname === '/') {
			const cleanup = setupObserver()
			unsubscribe = cleanup || (() => {})
		}
	})

	onDestroy(() => {
		if (unsubscribe) unsubscribe()
	})
</script>

<!-- Theme Toggle Button - Fixed in top right -->
<div class="fixed right-4 top-8 z-[60] md:right-8">
	<ThemeMode />
</div>

<!-- Left Sidebar -->
<div
	class="sticky top-0 z-50 bg-transparent p-4 backdrop-blur-xl md:flex md:h-screen
md:w-2/5 md:flex-col md:p-12 md:px-24 md:py-20"
>
	<!-- Header Section with Name -->
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
					<h1 class="text-netural-e8 text-2xl font-bold md:text-4xl">Gary</h1>
					<p class="md:text-md text-netural-e8 text-xl">Full-Stack Dev</p>
				</a>
			</div>
		</div>

		<!-- Navigation Menu -->
		<nav class="mt-6 md:mt-24">
			<ul
				class="flex flex-row justify-between px-0 md:flex-col md:space-y-2 md:px-0"
			>
				{#each ['ABOUT', 'SKILLS', 'PROJECTS'] as section}
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
								class="group-hover:text-netural-e4 relative z-10 text-secondary transition-all duration-300"
								class:md:font-bold={activeSection === section.toLowerCase() ||
									(section === 'PROJECTS' && isProjectsRoute)}
								class:md:pl-6={activeSection === section.toLowerCase() ||
									(section === 'PROJECTS' && isProjectsRoute)}
								class:md:translate-x-4={activeSection ===
									section.toLowerCase() ||
									(section === 'PROJECTS' && isProjectsRoute)}
								class:text-netural-e8={activeSection ===
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

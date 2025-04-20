<style>
	:global(body) {
		--mouse-x: 0px;
		--mouse-y: 0px;
	}
</style>

<script lang="ts">
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import MobileLinks from '$lib/components/header/mobile-links.svelte'
	import ThemeMode from '$lib/components/layout/themeMode/themeMode.svelte'
	import { onMount } from 'svelte'

	import '../app.css'

	async function navigateOrScroll(event: MouseEvent, sectionId: string) {
		event.preventDefault()
		const isHomePage = $page.url.pathname === '/'

		if (!isHomePage || sectionId === 'projects') {
			await goto('/')

			await new Promise(resolve => {
				return setTimeout(resolve, 100)
			})
		}

		const section = document.getElementById(sectionId)

		if (section) {
			section.scrollIntoView({ behavior: 'smooth' })
		}

		activeSection = sectionId
	}

	let observer: IntersectionObserver

	function setupObserver() {
		if (observer) {
			observer.disconnect()
		}

		observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						activeSection = entry.target.id
					}
				})
			},
			{ threshold: 0.5 }
		)

		const sections = ['about', 'experience', 'projects']

		sections.forEach(id => {
			const section = document.getElementById(id)

			if (section) {
				observer.observe(section)
			}
		})
	}

	onMount(() => {
		setupObserver()

		return page.subscribe($page => {
			if ($page.url.pathname === '/') {
				// Re-setup the observer when returning to the home page
				setTimeout(setupObserver, 0)
			} else if ($page.url.pathname.startsWith('/projects')) {
				activeSection = 'projects'
			}
		})
	})

	let { children } = $props()
	let activeSection = $state('about')
	let isProjectsRoute = $derived($page.url.pathname.startsWith('/projects'))

	let spotlight: HTMLElement

	function handleMouseMove(event: MouseEvent) {
		if (!spotlight) return

		const x = event.clientX
		const y = event.clientY

		spotlight.style.setProperty('--mouse-x', `${x}px`)
		spotlight.style.setProperty('--mouse-y', `${y}px`)
	}

	onMount(() => {
		document.addEventListener('mousemove', handleMouseMove)

		return () => {
			document.removeEventListener('mousemove', handleMouseMove)
		}
	})
</script>

<div class="relative md:flex md:h-screen">
	<div
		bind:this={spotlight}
		class="pointer-events-none fixed inset-0 z-50 bg-spotlight opacity-30"
	></div>

	<div
		class="bg-background-start p-4 md:flex md:w-2/5 md:flex-col md:px-24 md:py-16"
	>
		<div class="flex items-center justify-between md:mb-8 md:block">
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
						Full-Stack Developer
					</p>
					<p class="md:text-md text-md py-0 text-foreground-alt1 md:py-0">
						I build tools that empower traders to make informed decisions and
						optimize their trading workflow.
					</p>
				</a>
			</div>
			<ThemeMode />
		</div>
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
							<!-- Indicator character (hidden on mobile) -->
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
							<!-- Text content -->
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

		<div class="hidden md:mt-auto md:flex md:space-x-4">
			<MobileLinks />
		</div>
	</div>

	<div class="md:w-3/5 md:overflow-y-auto">
		<div class="p-4 md:p-8">
			{@render children()}
		</div>

		<!-- Footer Section -->
		<section class="mb-16" id="footer">
			<p class="text-center text-sm text-accentSubtle-alt2">
				Built with <span class="font-bold text-accentHard-alt3">Sveltekit</span
				>,
				<span class="font-bold text-accentHard-alt3">TailwindCSS</span>, and
				deployed on
				<span class="font-bold text-accentHard-alt3">Cloudflare</span> pages.
			</p>

			<div class="flex justify-center pt-2">
				<a href="/extras">
					<span class="text-center text-sm font-bold text-accentHard-alt3">
						👀 Extras
					</span>
				</a>
			</div>
		</section>
	</div>
</div>

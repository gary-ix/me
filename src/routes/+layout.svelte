<script lang="ts">
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import MobileLinks from '$lib/components/header/mobile-links.svelte'
	import IconDarkMode from '$lib/components/ui/icons/icon-dark-mode.svelte'
	import IconLightMode from '$lib/components/ui/icons/icon-light-mode.svelte'
	import { onMount } from 'svelte'

	import '../app.css'

	function toggleDarkMode() {
		isDarkMode = !isDarkMode
		document.documentElement.classList.toggle('dark')

		if (browser) {
			localStorage.setItem('darkMode', isDarkMode.toString())
		}
	}

	async function navigateOrScroll(event: MouseEvent, sectionId: string) {
		event.preventDefault()
		const isHomePage = $page.url.pathname === '/'

		if (!isHomePage) {
			await goto('/')

			// Wait for the next tick to ensure the DOM has updated
			await new Promise(resolve => {
				return setTimeout(resolve, 0)
			})

			const section = document.getElementById(sectionId)

			if (section) {
				section.scrollIntoView({ behavior: 'smooth' })
			}
		} else {
			const section = document.getElementById(sectionId)

			if (section) {
				section.scrollIntoView({ behavior: 'smooth' })
			}
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
		if (isDarkMode) {
			document.documentElement.classList.add('dark')
		}

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
	let isDarkMode = $state(
		browser ? localStorage.getItem('darkMode') === 'true' : false
	)
</script>

<div class="md:flex md:h-screen">
	<div class="bg-accentHard p-4 md:flex md:w-2/5 md:flex-col md:p-16">
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
			<button
				aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
				class="mx-4 flex h-10 w-10 items-center justify-center rounded-full bg-transparent
				 text-foreground transition-colors hover:bg-foreground-inverse md:absolute md:right-4 md:top-4"
				onclick={toggleDarkMode}
			>
				{#if isDarkMode}
					<IconDarkMode />
				{:else}
					<IconLightMode />
				{/if}
			</button>
		</div>
		<nav class="mt-4 md:mt-24">
			<ul class="flex justify-around md:block md:space-y-2">
				<li>
					<a
						class="relative text-foreground transition-all duration-300 hover:text-accentHard-alt4"
						class:active-section={activeSection === 'about'}
						class:text-test={activeSection === 'about'}
						href="/#about"
						onclick={e => {
							return navigateOrScroll(e, 'about')
						}}>ABOUT</a
					>
				</li>
				<li>
					<a
						class="relative text-foreground transition-all duration-300 hover:text-accentHard-alt4"
						class:text-test={activeSection === 'projects' || isProjectsRoute}
						href="/#projects"
						onclick={e => {
							return navigateOrScroll(e, 'projects')
						}}>PROJECTS</a
					>
				</li>
				<li>
					<a
						class="relative text-foreground transition-all duration-300 hover:text-accentHard-alt4"
						class:active-section={activeSection === 'experience'}
						class:text-test={activeSection === 'experience'}
						href="/#experience"
						onclick={e => {
							return navigateOrScroll(e, 'experience')
						}}>EXPERIENCE</a
					>
				</li>
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
		</section>
	</div>
</div>

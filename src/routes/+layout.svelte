<script lang="ts">
	import { browser } from '$app/environment'
	import IconDarkMode from '$lib/components/ui/icons/icon-dark-mode.svelte'
	import IconHamburger from '$lib/components/ui/icons/icon-hamburger.svelte'
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

	function navigateOrScroll(event: MouseEvent, sectionId: string) {
		event.preventDefault()
		const isHomePage = window.location.pathname === '/'

		if (!isHomePage) {
			window.location.href = '/'
		} else {
			const section = document.getElementById(sectionId)

			if (section) {
				section.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}

	function toggleMenu() {
		isMobileMenuOpen = !isMobileMenuOpen
	}

	onMount(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark')
		}

		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						activeSection = entry.target.id
					}
				})
			},
			{ threshold: 0.5 }
		)

		document.querySelectorAll('section[id]').forEach(section => {
			observer.observe(section)
		})
	})

	let { children } = $props()
	let activeSection = $state('home')
	let isDarkMode = $state(
		browser ? localStorage.getItem('darkMode') === 'true' : false
	)
	let isMobileMenuOpen = $state(false)
	const linkClasses = 'text-foreground hover:text-foreground pl-4'
</script>

<header
	class="shadow-background-end fixed left-0 right-0 top-0 z-50 bg-background shadow-lg"
>
	<nav class="container mx-auto flex items-center justify-between px-4 py-3">
		<div class="logo pl-2">
			<img alt="Logo" class="h-10 rounded-md" src="/favicon.png" />
		</div>
		<div class="flex items-center md:hidden">
			<button class="pl-4 text-2xl text-foreground" onclick={toggleMenu}>
				<IconHamburger />
			</button>
		</div>
		<ul class="hidden items-center space-x-6 pr-8 md:flex">
			<li>
				<a
					class={`${linkClasses} ${activeSection === 'home' ? 'font-bold text-foreground' : ''}`}
					href="/"
					onclick={e => {
						return navigateOrScroll(e, 'home')
					}}>Home</a
				>
			</li>
			<li>
				<a
					class={`${linkClasses} ${activeSection === 'about' ? 'font-bold text-foreground' : ''}`}
					href="/#about"
					onclick={e => {
						return navigateOrScroll(e, 'about')
					}}>About</a
				>
			</li>
			<li>
				<a
					class={`${linkClasses} ${activeSection === 'projects' ? 'font-bold text-foreground' : ''}`}
					href="/#projects"
					onclick={e => {
						return navigateOrScroll(e, 'projects')
					}}>Projects</a
				>
			</li>
			<li>
				<a
					class={`${linkClasses} ${activeSection === 'contact' ? 'font-bold text-foreground' : ''}`}
					href="/#contact"
					onclick={e => {
						return navigateOrScroll(e, 'contact')
					}}>Contact</a
				>
			</li>
			<li class="flex items-center">
				<button class={`${linkClasses} text-2xl`} onclick={toggleDarkMode}>
					{#if isDarkMode}
						<IconDarkMode />
					{:else}
						<IconLightMode />
					{/if}
				</button>
			</li>
		</ul>
	</nav>

	{#if isMobileMenuOpen}
		<div class="bg-background shadow-lg md:hidden">
			<ul class="flex flex-col items-center space-y-4 py-4">
				<li>
					<a
						class={`${linkClasses} ${activeSection === 'home' ? 'font-bold text-foreground' : ''}`}
						href="/"
						onclick={e => {
							toggleMenu()

							return navigateOrScroll(e, 'home')
						}}>Home</a
					>
				</li>
				<li>
					<a
						class={`${linkClasses} ${activeSection === 'about' ? 'font-bold text-foreground' : ''}`}
						href="/#about"
						onclick={e => {
							toggleMenu()

							return navigateOrScroll(e, 'about')
						}}>About</a
					>
				</li>
				<li>
					<a
						class={`${linkClasses} ${activeSection === 'projects' ? 'font-bold text-foreground' : ''}`}
						href="/#projects"
						onclick={e => {
							toggleMenu()

							return navigateOrScroll(e, 'projects')
						}}>Projects</a
					>
				</li>
				<li>
					<a
						class={`${linkClasses} ${activeSection === 'contact' ? 'font-bold text-foreground' : ''}`}
						href="/#contact"
						onclick={e => {
							toggleMenu()

							return navigateOrScroll(e, 'contact')
						}}>Contact</a
					>
				</li>
				<li>
					<button
						class={`${linkClasses} flex items-center`}
						onclick={toggleDarkMode}
					>
						{#if isDarkMode}
							<IconDarkMode />
						{:else}
							<IconLightMode />
						{/if}
					</button>
				</li>
			</ul>
		</div>
	{/if}
</header>

{@render children()}

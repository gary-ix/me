<script lang="ts">
	import { browser } from '$app/environment'
	import { onMount } from 'svelte'

	import '../app.css'

	function toggleDarkMode() {
		isDarkMode = !isDarkMode
		document.documentElement.classList.toggle('dark')

		if (browser) {
			localStorage.setItem('darkMode', isDarkMode.toString())
		}
	}

	function scrollToSection(event: MouseEvent, sectionId: string) {
		event.preventDefault()

		const isHomePage = window.location.pathname === '/'

		if (!isHomePage) {
			window.location.href = '/#' + sectionId
		} else {
			const section = document.getElementById(sectionId)

			if (section) {
				section.scrollIntoView({ behavior: 'smooth' })
			}
		}
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
	const linkClasses = 'text-foreground hover:text-foreground pl-4'
</script>

<header
	class="shadow-background-end fixed left-0 right-0 top-0 z-50 bg-background shadow-lg"
>
	<nav class="container mx-auto flex items-center justify-between px-4 py-3">
		<div class="logo pl-2">
			<img alt="Logo" class="h-10 rounded-md" src="./favicon.png" />
		</div>
		<ul class="flex items-center space-x-6 pr-8">
			<li>
				<a
					class={`${linkClasses} ${activeSection === 'home' ? 'font-bold text-foreground' : ''}`}
					href="#home"
					onclick={e => {
						return scrollToSection(e, 'home')
					}}>Home</a
				>
			</li>
			<li>
				<a
					class={`${linkClasses} ${activeSection === 'about' ? 'font-bold text-foreground' : ''}`}
					href="#about"
					onclick={e => {
						return scrollToSection(e, 'about')
					}}>About</a
				>
			</li>
			<li>
				<a
					class={`${linkClasses} ${activeSection === 'projects' ? 'font-bold text-foreground' : ''}`}
					href="#projects"
					onclick={e => {
						return scrollToSection(e, 'projects')
					}}>Projects</a
				>
			</li>
			<li>
				<a
					class={`${linkClasses} ${activeSection === 'contact' ? 'font-bold text-foreground' : ''}`}
					href="#contact"
					onclick={e => {
						return scrollToSection(e, 'contact')
					}}>Contact</a
				>
			</li>
			<li class="flex items-center">
				<button class={`${linkClasses} text-2xl`} onclick={toggleDarkMode}>
					{#if isDarkMode}
						<svg
							class="h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
						</svg>
					{:else}
						<svg
							class="h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
						</svg>
					{/if}
				</button>
			</li>
		</ul>
	</nav>
</header>

{@render children()}

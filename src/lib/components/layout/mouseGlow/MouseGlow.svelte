<style>
	:global(body) {
		--mouse-x: 0px;
		--mouse-y: 0px;
	}
</style>

<script lang="ts">
	import { onDestroy, onMount } from 'svelte'

	let spotlight: HTMLElement | null = null

	function isMobile() {
		return window.innerWidth < 1024
	}

	function centerSpotlight() {
		console.info('resize', isMobile())
		if (!isMobile()) return
		if (!spotlight) return
		const x = window.innerWidth / 2
		const y = window.innerHeight / 2
		spotlight.style.setProperty('--mouse-x', `${x}px`)
		spotlight.style.setProperty('--mouse-y', `${y}px`)
	}

	function handleMouseMove(event: MouseEvent) {
		console.info('mouse move')
		if (isMobile()) return
		if (!spotlight) return
		spotlight.style.setProperty('--mouse-x', `${event.clientX}px`)
		spotlight.style.setProperty('--mouse-y', `${event.clientY}px`)
	}

	// add event listeners
	onMount(() => {
		document.addEventListener('mousemove', handleMouseMove)
		window.addEventListener('resize', centerSpotlight)

		centerSpotlight()
	})

	onDestroy(() => {
		document.removeEventListener('mousemove', handleMouseMove)
		window.removeEventListener('resize', centerSpotlight)
	})
</script>

<div
	bind:this={spotlight}
	class="pointer-events-none fixed inset-0 z-50 bg-spotlight opacity-15 lg:opacity-25"
></div>

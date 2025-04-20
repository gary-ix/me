<script lang="ts">
	import IconDarkMode from '$lib/components/ui/icons/icon-dark-mode.svelte'
	import IconLightMode from '$lib/components/ui/icons/icon-light-mode.svelte'
	import { mode, ModeWatcher, setMode, toggleMode } from 'mode-watcher'
	import { onMount } from 'svelte'

	onMount(() => {
		setMode('dark')
	})
</script>

<ModeWatcher />

<button
	aria-label="Switch theme"
	class="mx-4 flex h-10 w-10 items-center justify-center rounded-full bg-transparent
 text-foreground transition-colors hover:bg-foreground-inverse md:absolute md:right-4 md:top-4"
	onclick={toggleMode}
>
	{#if mode.current === 'dark'}
		<IconDarkMode />
	{:else}
		<IconLightMode />
	{/if}
</button>

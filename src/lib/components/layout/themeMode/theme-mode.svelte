<script lang="ts">
	import { Moon, Sun } from '@lucide/svelte'
	import { Button } from '$lib/components/ui/button'
	import { mode, ModeWatcher, setMode, toggleMode } from 'mode-watcher'
	import { onMount } from 'svelte'

	onMount(() => {
		setMode('dark')
	})
</script>

<ModeWatcher />

<Button
	aria-label="Switch theme"
	class="mx-4  rounded-full bg-transparent text-foreground md:absolute md:right-8 md:top-6"
	onclick={toggleMode}
	variant="ghost"
>
	{#if mode.current === 'dark'}
		<Moon />
	{:else}
		<Sun />
	{/if}
</Button>

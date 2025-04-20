<script lang="ts">
	import { type Component } from 'svelte'

	let {
		title,
		icon,
		skills
	}: {
		title: string
		skills: string[]
		icon?: Component
	} = $props()
</script>

<div
	class="shadow-even-accent group rounded-xl bg-background-start p-5 py-8 shadow-accentHard-alt1
	hover:scale-105
	hover:shadow-accentHard-alt3
"
>
	<h3
		class="text-foregroundgroup-hover:text-accentHard-alt3 -mt-3 mb-3 flex items-center gap-2 font-bold"
	>
		{#if icon}
			{@html icon}
		{/if}
		{title}
	</h3>
	<div class="flex flex-wrap gap-2">
		{#each skills as skill}
			<span
				class="rounded px-3 py-1 text-sm font-medium text-foreground-alt1
				 transition-transform hover:scale-125 hover:text-accentHard-alt3"
			>
				{skill}
			</span>
		{/each}
	</div>
</div>

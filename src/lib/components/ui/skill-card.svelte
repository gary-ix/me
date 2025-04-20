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
	class="shadow-even-accent bg-neutral-e1 shadow-secondary-h1-alt2 group rounded-xl p-5 py-8 hover:scale-105
	hover:shadow-secondary
	hover:brightness-90
	dark:hover:brightness-150
	md:shadow-none
"
>
	<h3
		class="group-hover:text-secondary-h1-alt2 -mt-3 mb-3 flex items-center gap-2
		font-semibold
		text-foreground
		group-hover:font-bold"
	>
		{#if icon}
			{@html icon}
		{/if}
		{title}
	</h3>
	<div class="flex flex-wrap gap-2">
		{#each skills as skill}
			<span
				class="hover:text-secondary-h1-alt2 rounded px-3 py-1 text-sm font-medium
				 text-foreground-alt1 transition-transform hover:scale-125"
			>
				{skill}
			</span>
		{/each}
	</div>
</div>

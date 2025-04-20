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
	class="shadow-even-accent bg-neutral-e1 group rounded-xl p-5 py-8 shadow-secondary hover:scale-105
	hover:shadow-secondary
	hover:brightness-90
	dark:hover:brightness-150
	md:shadow-none
"
>
	<h3
		class="text-netural-e8 -mt-3 mb-3 flex items-center gap-2
		font-semibold
		group-hover:font-bold
		group-hover:text-secondary"
	>
		{#if icon}
			{@html icon}
		{/if}
		{title}
	</h3>
	<div class="flex flex-wrap gap-2">
		{#each skills as skill}
			<span
				class="text-netural-e4 rounded px-3 py-1 text-sm font-medium
				 transition-transform hover:scale-125 hover:text-secondary"
			>
				{skill}
			</span>
		{/each}
	</div>
</div>

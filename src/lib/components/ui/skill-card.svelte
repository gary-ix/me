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
	class="shadow-even-accent group rounded-xl bg-background-start p-5 py-8 shadow-accentHard-alt2 hover:scale-105
	hover:shadow-accentHard-alt3
	hover:brightness-90
	dark:hover:brightness-150
	md:shadow-none
"
>
	<h3
		class="-mt-3 mb-3 flex items-center gap-2 font-semibold
		text-foreground
		group-hover:font-bold
		group-hover:text-accentHard-alt2"
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
				 transition-transform hover:scale-125 hover:text-accentHard-alt2"
			>
				{skill}
			</span>
		{/each}
	</div>
</div>

<script lang="ts">
	let { title, description, imageUrl, route, tags } = $props<{
		title: string
		description: string
		route: string
		imageUrl?: string
		tags?: string[]
	}>()
</script>

<a
	class=" group overflow-hidden rounded-xl
	bg-background transition-all duration-100 hover:brightness-90 dark:hover:brightness-150 md:p-4"
	href={route}
>
	<div class="flex flex-col md:flex-row">
		<div class="w-full p-3 pt-6 md:w-1/3">
			{#if imageUrl}
				<div class="aspect-rectangle w-full overflow-hidden rounded-3xl">
					<img
						alt={title}
						class="h-full w-full rounded-3xl object-cover transition-transform
						 duration-200 group-hover:border-2 group-hover:border-accentHard-alt3"
						src={imageUrl}
					/>
				</div>
			{/if}
		</div>
		<div class="w-full p-6 md:w-2/3">
			<h3
				class="mb-2 text-xl font-semibold text-foreground transition-colors
				 group-hover:font-bold group-hover:text-accentHard-alt3"
			>
				{title}
			</h3>
			<p class="mb-4 text-foreground-alt1">{description}</p>
		</div>
	</div>

	{#if tags && tags.length > 0}
		<div class="flex flex-wrap gap-2 p-4 pb-8">
			{#each tags as tag}
				<span class="rounded-lg bg-accentHard-alt1 px-3 py-1 text-sm text-white"
					>{tag}</span
				>
			{/each}
		</div>
	{/if}
</a>

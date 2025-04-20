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
	class="
	shadow-even-accent group overflow-hidden rounded-xl bg-background-start transition-all duration-100
	hover:scale-105 hover:shadow-accentHard-alt3 hover:brightness-90 dark:hover:brightness-150 md:shadow-none
	"
	href={route}
>
	<div class="flex flex-col md:flex-row">
		<div class="w-full p-3 pt-6 md:w-1/3">
			{#if imageUrl}
				<div
					class="aspect-rectangle w-full overflow-hidden rounded-3xl bg-background p-6 md:p-2"
				>
					<img
						alt={title}
						class="h-full w-full rounded-xl object-cover transition-transform duration-200"
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

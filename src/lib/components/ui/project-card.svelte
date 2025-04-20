<script lang="ts">
	let {
		title,
		description,
		imageUrl,
		newTab = false,
		route,
		tags
	} = $props<{
		title: string
		description: string
		route: string
		imageUrl?: string
		newTab?: boolean
		tags?: string[]
	}>()
</script>

<a
	class="
	shadow-even-accent bg-neutral-e1 group overflow-hidden rounded-xl transition-all
	duration-100 hover:scale-105 hover:shadow-secondary hover:brightness-90
	dark:hover:brightness-125
	md:shadow-none
	"
	href={route}
	rel={newTab ? 'noopener noreferrer' : undefined}
	target={newTab ? '_blank' : undefined}
>
	<div class="flex flex-col md:flex-row">
		<div class="w-full p-3 pt-6 md:w-1/3">
			{#if imageUrl}
				<div
					class="aspect-rectangle w-full overflow-hidden rounded-3xl bg-background p-6 md:p-2"
				>
					<img
						alt={title}
						class="h-full w-full rounded-xl object-cover
						shadow-sm shadow-foreground-inverse transition-transform duration-200"
						src={imageUrl}
					/>
				</div>
			{/if}
		</div>
		<div class="w-full p-6 md:w-2/3">
			<h3
				class="mb-2 text-xl font-semibold text-foreground transition-colors
				 group-hover:font-bold group-hover:text-secondary"
			>
				{title}
			</h3>
			<p class="mb-4 text-foreground-alt1">{description}</p>
		</div>
	</div>

	{#if tags && tags.length > 0}
		<div class="flex flex-wrap gap-2 p-4 pb-8">
			{#each tags as tag}
				<span class="rounded-lg bg-secondary px-3 py-1 text-sm text-white"
					>{tag}</span
				>
			{/each}
		</div>
	{/if}
</a>

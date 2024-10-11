<script lang="ts">
	let {
		title,
		buttonText = 'Learn More',
		description,
		imageUrl = undefined,
		route
	} = $props<{
		title: string
		description: string
		route: string
		buttonText?: string
		imageUrl?: string
	}>()
</script>

<div class="overflow-hidden rounded-lg bg-background shadow-md">
	{#if imageUrl}
		<img alt={title} class="h-48 w-full object-cover" src={imageUrl} />
	{/if}
	<div class="p-6">
		<h3 class="mb-2 text-xl font-semibold text-foreground">{title}</h3>
		<p class="mb-4 text-foreground-alt1">{description}</p>
		<a
			class="inline-block rounded bg-accentHard px-4 py-2 text-foreground
       transition duration-300 hover:bg-accentHard-alt1"
			href={route}
		>
			{buttonText}
		</a>
	</div>
</div>

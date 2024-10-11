<div
	class="flex min-h-screen flex-col items-center justify-center bg-background"
>
	<div class="mb-8 text-8xl text-foreground">⚠</div>

	<p class="text-foreground-alt1 mb-8 text-xl">Oops! Something went wrong.</p>
	<button
		class="rounded border-2 border-foreground
			bg-transparent px-4 py-2 text-foreground transition duration-300
			hover:bg-foreground hover:text-background"
		onclick={() => {
			return (window.location.href = '/')
		}}
	>
		Go back to homepage
	</button>
</div>

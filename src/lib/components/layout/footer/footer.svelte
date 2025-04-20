<script lang="ts">
	import SocialLinks from '$lib/components/layout/sidebar/icon-links.svelte'
</script>

<!-- Footer Section -->
<section class="my-6 mt-16" id="footer">
	<!-- Social Links (Mobile Only in Footer) -->

	<div
		class="mt-auto flex items-center justify-center space-x-4 py-8 md:hidden"
	>
		<SocialLinks />
	</div>

	<p class="text-center text-sm text-accentSubtle-alt2">
		Built with <span class="font-bold text-accentHard-alt3">Sveltekit</span>,
		<span class="font-bold text-accentHard-alt3">TailwindCSS</span>, and
		deployed on
		<span class="font-bold text-accentHard-alt3">Cloudflare</span>.
	</p>

	<!-- Extras Link -->
	<div class="flex justify-center pt-2">
		<a href="/extras">
			<span
				class="text-center text-sm font-bold text-foreground opacity-5 hover:opacity-100"
			>
				Easter Eggs
			</span>
		</a>
	</div>
</section>

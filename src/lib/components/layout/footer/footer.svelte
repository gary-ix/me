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

	<p class="text-netural-e2 text-center text-sm">
		Built with <span class="font-bold text-secondary">Sveltekit</span>,
		<span class="font-bold text-secondary">TailwindCSS</span>, and deployed on
		<span class="font-bold text-secondary">Cloudflare</span>.
	</p>

	<!-- Extras Link -->
	<div class="flex justify-center pt-2">
		<a href="/extras">
			<span
				class="text-neutral-e8 text-center text-sm font-bold opacity-5 hover:opacity-100"
			>
				Easter Eggs
			</span>
		</a>
	</div>
</section>

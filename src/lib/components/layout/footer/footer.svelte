<script lang="ts">
	import SocialLinks from '$lib/components/layout/sidebar/icon-links.svelte'
</script>

<!-- Footer Section -->
<section class="mb-16 bg-test" id="footer">
	<p class="text-center text-sm text-accentSubtle-alt2">
		Built with <span class="font-bold text-accentHard-alt3">Sveltekit</span>,
		<span class="font-bold text-accentHard-alt3">TailwindCSS</span>, and
		deployed on
		<span class="font-bold text-accentHard-alt3">Cloudflare</span>.
	</p>

	<!-- Extras Link -->
	<!-- <div class="flex justify-center pt-2">
				<a href="/extras">
					<span class="text-center text-sm font-bold text-accentHard-alt3">
						👀 Extras
					</span>
				</a>
			</div> -->

	<!-- Social Links (Mobile Only in Footer) -->
	<div class="mt-auto flex space-x-4 md:hidden">
		<SocialLinks />
	</div>
</section>

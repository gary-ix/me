<script lang="ts">
	import Footer from '$lib/components/layout/footer/footer.svelte'
	import MouseGlow from '$lib/components/layout/mouseGlow/mouse-glow.svelte'
	import Sidebar from '$lib/components/layout/sidebar/sidebar.svelte'

	import '../app.css'

	let { children } = $props()
</script>

<MouseGlow />
<div class="bg-neutral-e1 relative min-h-screen md:flex">
	<!-- Sidebar (Always Sticky) -->

	<Sidebar />

	<!-- Main Content Area -->
	<div class="flex flex-col md:w-3/5 md:pt-12">
		<!-- Page Content -->
		<div class="w-full flex-grow px-8 py-2 md:px-14 md:py-8">
			{@render children()}
		</div>

		<!-- Footer -->
		<Footer />
	</div>
</div>

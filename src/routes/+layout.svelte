<script lang="ts">
	import Footer from '$lib/components/layout/footer/footer.svelte'
	import MouseGlow from '$lib/components/layout/mouseGlow/mouse-glow.svelte'
	import Sidebar from '$lib/components/layout/sidebar/sidebar.svelte'

	import '../app.css'

	let { children } = $props()
</script>

<MouseGlow />
<div class="relative bg-background-start md:flex md:h-screen">
	<!-- Sidebar (Header on Mobile ) -->
	<div class="p-4 md:flex md:w-2/5 md:flex-col md:px-24 md:py-20">
		<Sidebar />
	</div>

	<!-- Main Content Area -->
	<div class="overflow-y-auto md:w-3/5 md:pt-12">
		<!-- Page Content -->
		<div class="w-full px-8 py-2 md:px-14 md:py-8">
			{@render children()}
		</div>

		<!-- Footer -->
		<Footer />
	</div>
</div>

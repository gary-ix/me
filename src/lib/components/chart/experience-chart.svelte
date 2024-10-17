<script lang="ts">
	import Chart from 'chart.js/auto'
	import { onMount } from 'svelte'

	let chartCanvas: HTMLCanvasElement

	onMount(() => {
		const ctx = chartCanvas.getContext('2d')

		if (ctx) {
			new Chart(ctx, {
				type: 'bar',
				data: {
					datasets: [
						{
							backgroundColor: 'rgba(75, 192, 192, 0.6)',
							borderColor: 'rgba(75, 192, 192, 1)',
							borderWidth: 1,
							data: [1, 2, 3, 4, 5, 6, 7],
							label: 'Years of Experience'
						}
					],
					labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023']
				},
				options: {
					aspectRatio: 16 / 12,
					plugins: {
						legend: {
							position: 'top'
						}
					},
					responsive: true,
					scales: {
						x: {
							title: {
								display: true,
								text: 'Year'
							}
						},
						y: {
							title: {
								display: true,
								text: 'Years'
							},
							beginAtZero: true,
							suggestedMax: 8
						}
					}
				}
			})
		}
	})
</script>

<div class="mx-auto aspect-[16/12] w-full max-w-4xl">
	<canvas bind:this={chartCanvas}></canvas>
</div>

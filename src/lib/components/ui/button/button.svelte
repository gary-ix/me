<script lang="ts">
	import { cn } from '$lib/utils.js'
	import { Button as ButtonPrimitive } from 'bits-ui'

	import { type Events, type Props, buttonVariants } from './index.js'

	type $$Props = Props
	type $$Events = Events

	let className: $$Props['class'] = undefined
	export let variant: $$Props['variant'] = 'default'
	export let size: $$Props['size'] = 'default'
	export let builders: $$Props['builders'] = []
	export { className as class }
</script>

<ButtonPrimitive.Root
	builders={builders}
	class={cn(
		buttonVariants({ size, variant }),
		'scale transition-all duration-200 hover:scale-125',
		className
	)}
	type="button"
	{...$$restProps}
	on:click
	on:keydown
>
	<slot />
</ButtonPrimitive.Root>

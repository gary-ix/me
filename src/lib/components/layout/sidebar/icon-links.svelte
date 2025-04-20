<script lang="ts">
	import { Github, Mail, Twitter } from '@lucide/svelte'
	import { Button } from '$lib/components/ui/button'
</script>

<Button
	aria-label="GitHub"
	class="rounded-full bg-transparent p-2 text-foreground"
	href="https://github.com/gary-ix"
	rel="noopener noreferrer"
	target="_blank"
	variant="ghost"
>
	<Github />
</Button>

<Button
	aria-label="Email"
	class="rounded-full bg-transparent p-2 text-foreground"
	href="mailto:programming@garyix.com"
	variant="ghost"
>
	<Mail />
</Button>

<Button
	aria-label="Twitter"
	class="inline-block rounded-full bg-transparent p-2 text-foreground"
	href="https://x.com/gary_ix"
	rel="noopener noreferrer"
	target="_blank"
	variant="ghost"
>
	<Twitter />
</Button>

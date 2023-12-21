<script>
	import { Textarea, Label, Button, P, Heading } from 'flowbite-svelte';

	export let viewMode = false;
	export let note = 'My daily note';
</script>

<div class="mb-12">
	{#if viewMode}
		<div class="rounded border p-5">
			<P>{note}</P>
		</div>
	{:else}
		<Label for="entry">How was your day?</Label>
		<Textarea id="entry" placeholder="Your message" rows="6" name="message">
			{note}
			<div slot="footer" class="grid">
				<Button class="w-full max-w-32 justify-self-end">Post</Button>
			</div>
		</Textarea>
	{/if}
</div>
<!-- Mem of the day -->
<div class="mx-auto max-w-lg">
	<img src="https://app.supermeme.ai/static/login.png" alt="" />
</div>

<script>
	import { Button } from 'flowbite-svelte';
	import Summary from '$lib/components/Summary.svelte';

	export let notifications;

	function openNote() {
		// TODO: Add redirect to Journal Entry page after it's ready
		alert('Coming soon')
	}
</script>

<div class="flex flex-col grow-1 relative pb-12">
	<div class="flex flex-col gap-4">
		{#each notifications as notification}
			<Summary {...notification} />
		{/each}
	</div>

	<div class="fixed bottom-12 left-4 right-4">
		<Button class="uppercase w-full" on:click={openNote}>
			Todays Note
		</Button>
	</div>
</div>


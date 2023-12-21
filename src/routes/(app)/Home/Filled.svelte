<script>
	import { Button } from 'flowbite-svelte';
	import Summary from '$lib/components/Summary.svelte';
	import dayjs from 'dayjs';

	export let notifications;

	$: noteLink = `/entry/${dayjs().format('YYYY-MM-DD')}`
</script>

<div class="flex flex-col grow-1 relative pb-12">
	<div class="flex flex-col gap-4">
		{#each notifications as notification}
			<Summary {...notification} />
		{/each}
	</div>

	<div class="fixed bottom-20 left-4 right-4">
		<Button class="uppercase w-full" href={noteLink}>
			Todays Note
		</Button>
	</div>
</div>


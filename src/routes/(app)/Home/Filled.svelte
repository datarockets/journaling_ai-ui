<script lang="ts">
	import { Button, Heading } from 'flowbite-svelte';
	import Summary from '$lib/components/Summary.svelte';
  import MoodFlow from '$lib/components/MoodFlow.svelte';
	import dayjs from 'dayjs';

	export let notifications;
  export let moodData = [];

	$: noteLink = `/entry/${dayjs().format('YYYY-MM-DD')}`

  $: chartData = moodData.map(({date, mood}) => ({
		mood,
    date: dayjs(date).format('YYYY-MM-DD'),
	}))
</script>

<div class="flex flex-col grow-1 relative pb-12">
  {#if moodData.length > 0}
  <div>
    <Heading tag="h4">Mood flow</Heading>

    <MoodFlow datapoints={chartData} />
  </div>
  {/if}

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


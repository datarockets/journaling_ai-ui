<script>
	import Header from './Header.svelte';
	import Statistics from '@/routes/(app)/profile/Statistics.svelte';

	export let data;
</script>

<div>
	<Header username={data.username} dayStreak={data.dayStreak} entriesCount={data.entriesCount} />
</div>
<div>
	<Statistics />
</div>

<script lang="ts">
	import Filled from './Home/Filled.svelte'
	import Empty from './Home/Empty.svelte'

	export let data;

	$: isEmpty = !data || !data.hasPosts
	$: moodData = data?.moodData || []
</script>

{#if isEmpty}
	<Empty />
{:else}
	<Filled notifications={data?.notifications || []} moodData={moodData} />
{/if}

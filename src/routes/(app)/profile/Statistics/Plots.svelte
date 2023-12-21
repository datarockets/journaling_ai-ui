<script lang="ts">

	export let start_date;
	export let end_date;
	export let loadedData;

	$: {
		console.info('Rendering plots for', start_date, end_date, loadedData)
	}
</script>

<div>
	Loading data from {start_date.toISOString()} to {end_date.toISOString()}
</div>


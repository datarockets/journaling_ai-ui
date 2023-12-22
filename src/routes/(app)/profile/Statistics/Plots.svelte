<script lang="ts">
	import dayjs from 'dayjs';
	import MoodFlow from "@/lib/components/MoodFlow.svelte";
	import Trends from './Trends.svelte'
	import {Heading} from 'flowbite-svelte';

	export let start_date;
	export let end_date;
	export let loadedData;

	function loadData(start_date, end_date) {
		return {entries: []}
	}

	$: data = loadedData || loadData(start_date, end_date)


	// Ideally, it should calculate data by inteval for each period: days for weekly, weeks for monthly and months for yearly
	// Anyway, here is the code for taking max 7 values evenly distributed in the dataset
	let chartData;
	$: {
		let samplification = Math.max(1, data.entries.length / 7)
		chartData = data.entries.reduce(({accumulator, lastIndex}, {date, mood}, index) => ({
			accumulator: Math.ceil(lastIndex / samplification) < Math.ceil(index / samplification) ? [
				...accumulator,
				{mood, date: dayjs(date).format('YYYY-MM-DD')},
			] : accumulator,
			lastIndex: index,
		}), {accumulator: [], lastIndex: -1}).accumulator
	}

	$: maxEntries = end_date.diff(start_date, 'days')
	$: moodLabels = data.entries.map(({moodName}) => moodName)
</script>

<div>
	<!-- MoodFlow -->
	<div>
		<MoodFlow datapoints={chartData} />
	</div>

	<div>
		<Heading tag="h4">
			Trends
		</Heading>
		<Trends moodsLabels={moodLabels} maxDays={maxEntries} />
	</div>
</div>


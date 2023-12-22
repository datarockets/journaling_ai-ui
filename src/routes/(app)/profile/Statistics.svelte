<script lang="ts">
	import {Tabs, TabItem} from 'flowbite-svelte';
	import Plots from '@/routes/(app)/profile/Statistics/Plots.svelte';
	import dayjs from 'dayjs';
	import {getData} from './data'

	let week_interval = {
		start_date: dayjs().add(-1, 'week'),
		end_date: dayjs(),
	}

	let month_interval = {
		start_date: dayjs().add(-1, 'month'),
		end_date: dayjs(),
	}

	let year_interval = {
		start_date: dayjs().add(-1, 'year'),
		end_date: dayjs(),
	}

	let weekData = {entries: getData(6)}
	let monthData = {entries: getData(25)}
	let yearData = {entries: getData(270)}
</script>

<Tabs style="underline" class="justify-center">
	<TabItem open title="WEEK">
		<Plots {...week_interval} loadedData={weekData} />
	</TabItem>
	<TabItem title="MONTH">
		<Plots {...month_interval} loadedData={monthData} />
	</TabItem>
	<TabItem title="YEAR">
		<Plots {...year_interval} loadedData={yearData} />
	</TabItem>
</Tabs>

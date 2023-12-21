<script lang="ts">
	import {Tabs, TabItem} from 'flowbite-svelte';
	import Plots from '@/routes/(app)/profile/Statistics/Plots.svelte';
	import dayjs from 'dayjs';

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
</script>

<Tabs style="underline" class="justify-center">
	<TabItem open title="WEEK">
		<Plots {...week_interval} />
	</TabItem>
	<TabItem title="MONTH">
		<Plots {...month_interval} />
	</TabItem>
	<TabItem title="YEAR">
		<Plots {...year_interval} />
	</TabItem>
</Tabs>

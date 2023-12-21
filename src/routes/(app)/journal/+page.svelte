<script lang="ts">
	import Summary from '@/lib/components/Summary.svelte';
	import { Heading, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
	import dayjs from 'dayjs';

	const entries = [
		{
			type: '',
			title: '20-12-2023',
			description: 'Summary description'
		},
		{
			type: '',
			title: '20-12-2023',
			description: 'Summary description'
		},
		{
			type: '',
			title: '20-12-2023',
			description: 'Summary description'
		}
	]; // TODO: fetch from API

	const dateOptions = {
		0: 'Today',
		1: 'Yesterday',
		2: 'The day before yesterday'
	} as Record<number, string>;

	const addNoteOptions = [...Array(3)].map((item, index) => ({
		link: `/entry/${dayjs().subtract(index, 'days').format('YYYY-MM-DD')}`,
		label: dateOptions[index]
	}));
</script>

<div class="flex items-center justify-between">
	<Heading tag="h2" class="mb-6">History</Heading>

	<Button class="w-32">Add Note</Button>
	<Dropdown>
		{#each addNoteOptions as option, index}
			<DropdownItem href={option.link}>{option.label}</DropdownItem>
		{/each}
	</Dropdown>
</div>
<div class="grid gap-4">
	{#each entries as entry, index}
		<!-- TODO: update link to entry -->
		<a href={`entry/${entry.title}`}>
			<Summary {...entry} />
		</a>
	{/each}
</div>

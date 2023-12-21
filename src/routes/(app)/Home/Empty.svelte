<script lang="ts">
	import Arrow from '$lib/icons/Arrow.svelte'
	import { Button } from 'flowbite-svelte';
	import { PlusSolid } from 'flowbite-svelte-icons';
	import dayjs from 'dayjs';

	$: noteLink = `/entry/${dayjs().format('YYYY-MM-DD')}`
</script>

<div class="flex flex-col justify-between relative h-full grow">
	<div class="pointer-events-none p-8">
		<img
			class="w-full"
			src="/icons/empty-books.png"
		 	alt="A hand writing in a journal."
		/>
	</div>
	<div class="pointer-events-none pr-20 pb-6 flex flex-col items-end">
		<div>Just start journaling and we do all other work.</div>
		<div class="w-24">
			<Arrow />
		</div>
	</div>
	<div class="absolute bottom-0 right-4">
		<Button pill class="!p-2" href={noteLink}>
			<PlusSolid class="h-8 w-8" />
		</Button>
	</div>
</div>

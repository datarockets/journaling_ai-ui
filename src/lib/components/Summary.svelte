<script lang="ts">
	import { Heading } from 'flowbite-svelte';

	export let type;
	export let description;
	export let title;
</script>

<div class="border border-4 rounded-lg flex p-4 gap-4">
	<div>
		<p class="text-sm uppercase">{type}</p>
		<Heading tag="h5">{title}</Heading>
		<p class="text-sm">{description}</p>
	</div>
	<div>
		<img src="/icons/3d-render-hand-with-pencil-put-marks-calendar.jpg"
				 alt=""
				 class="w-32"
		 />
	</div>
</div>

<script>
	import { Alert } from 'flowbite-svelte';
	import Filled from './Home/Filled.svelte'
	import Empty from './Home/Empty.svelte'

	export const data = {};

	$: isEmpty = !data.hasPosts
</script>

{#if isEmpty}
	<Empty />
{:else}
	<Filled />
{/if}

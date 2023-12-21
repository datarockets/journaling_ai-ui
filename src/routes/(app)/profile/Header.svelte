<script>
	import {UserCircleSolid} from 'flowbite-svelte-icons';

	export let username;
	export let dayStreak;
	export let entriesCount;
</script>

<div class="flex flex-col justify-center items-center gap-4">
	<div class="text-center">
		<UserCircleSolid class="w-12 h-12 inline-block text-gray-400" />
		<div class="font-bold mt-2">@{username}</div>
	</div>
	<div class="flex justify-center gap-12 text-center">
		<div>
			<div class="text-2xl font-bold">{entriesCount}</div>
			<div class="text-gray-500">entries</div>
		</div>
		<div>
			<div class="text-2xl font-bold">{dayStreak}</div>
			<div class="text-gray-500">day streak</div>
		</div>
	</div>
</div>

<script>
	import { Button, ButtonGroup, Dropdown, DropdownItem, Footer, Heading } from 'flowbite-svelte';
	import {
		HomeSolid,
		CalendarMonthSolid,
		UserSolid,
		ArrowLeftOutline,
		DotsVerticalOutline
	} from 'flowbite-svelte-icons';
	import '../../app.pcss';

	const backAvailable = true; // TODO: Get data from router, hide for Home
	const actions = [1]; // TODO: Change to get data depending on the page
</script>

<div class="flex min-h-screen flex-col">
	<header class="bg-secondary-900 flex items-center gap-4 p-4">
		{#if backAvailable}
			<Button outline pill class="!p-2">
				<ArrowLeftOutline class="h-4 w-4" />
			</Button>
		{/if}
		<Heading tag="h5">Hello, @username!</Heading>
		{#if actions.length > 0}
			<button class="dots-menu">
				<DotsVerticalOutline size="lg" class="h-4 w-4" />
			</button>
			<Dropdown triggeredBy=".dots-menu">
				<DropdownItem>Edit</DropdownItem>
				<DropdownItem>Remove</DropdownItem>
			</Dropdown>
		{/if}
	</header>
	<main class="flex grow flex-col px-4 py-5">
		<slot />
	</main>
	<Footer>
		<ButtonGroup class="flex justify-center py-5">
			<Button>
				<HomeSolid class="me-2 h-3 w-3" />
				Home
			</Button>
			<Button>
				<CalendarMonthSolid class="me-2 h-3 w-3" />
				Journal
			</Button>
			<Button>
				<UserSolid class="me-2 h-3 w-3" />
				Profile
			</Button>
		</ButtonGroup>
	</Footer>
</div>

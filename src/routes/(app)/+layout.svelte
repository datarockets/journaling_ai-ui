<script>
	import { Button, ButtonGroup, Dropdown, DropdownItem, Footer, Heading } from 'flowbite-svelte';
	import {
		HomeSolid,
		CalendarMonthSolid,
		UserSolid,
		ArrowLeftOutline,
		DotsVerticalOutline
	} from 'flowbite-svelte-icons';
	import { page } from '$app/stores';
	import { browser } from "$app/environment";

	import '../../app.pcss';

	$: pathname = $page.url.pathname
	$: backAvailable = pathname !== '/';
	$: actionsAvailable = pathname.includes('/entry')

	function goBack() {
		if (browser) window.history.back();
	}
</script>

<div class="flex min-h-screen flex-col">
	<header class="bg-secondary-900 flex items-center gap-4 p-4">
		{#if backAvailable}
			<Button outline pill class="!p-2" on:click={goBack}>
				<ArrowLeftOutline class="h-4 w-4" />
			</Button>
		{/if}
		<Heading tag="h5">Hello, @username!</Heading>
		{#if actionsAvailable}
			<button class="dots-menu">
				<DotsVerticalOutline size="lg" class="h-4 w-4" />
			</button>
			<Dropdown triggeredBy=".dots-menu">
				<DropdownItem href="{pathname}/edit">Edit</DropdownItem>
			</Dropdown>
		{/if}
	</header>
	<main class="flex grow flex-col px-4 py-5">
		<slot />
	</main>
	<Footer class="sticky bottom-0">
		<ButtonGroup class="flex justify-center py-5">
			<Button href="/">
				<HomeSolid class="me-2 h-3 w-3" />
				Home
			</Button>
			<Button href="/journal">
				<CalendarMonthSolid class="me-2 h-3 w-3" />
				Journal
			</Button>
			<Button href="/profile">
				<UserSolid class="me-2 h-3 w-3" />
				Profile
			</Button>
		</ButtonGroup>
	</Footer>
</div>

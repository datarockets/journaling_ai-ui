<script>
	import {
		Button,
		ButtonGroup,
		Dropdown,
		DropdownItem,
		Footer,
		Heading,
		Navbar
	} from 'flowbite-svelte';
	import {
		HomeSolid,
		CalendarMonthSolid,
		UserSolid,
		ArrowLeftOutline,
		DotsVerticalOutline
	} from 'flowbite-svelte-icons';
	import '../app.pcss';
</script>

<div class="flex min-h-screen flex-col p-5">
	<header class="flex items-center gap-8">
		<Button outline pill class="!p-2">
			<ArrowLeftOutline class="h-4 w-4" />
		</Button>
		<Heading tag="h2">Hello, @username!</Heading>
		<Button>
			<DotsVerticalOutline size="lg" class="h-4 w-4" />
		</Button>
		<Dropdown>
			<DropdownItem>Edit</DropdownItem>
			<DropdownItem>Remove</DropdownItem>
		</Dropdown>
	</header>
	<main class="grow p-16">
		<slot />
	</main>
	<Footer>
		<ButtonGroup class="flex justify-center">
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

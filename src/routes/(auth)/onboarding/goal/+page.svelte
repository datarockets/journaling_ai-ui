<script>
	import { Button, Heading, P, CheckboxButton } from 'flowbite-svelte';
</script>

<Heading tag="h1" class="mb-4">Your goal</Heading>
<P class="mb-8">Why do you want to journaling? You can select more than 1 option</P>

<div class="mb-16 grid gap-4">
	<CheckboxButton value={'yes'} outline>Improve mood and health</CheckboxButton>
	<CheckboxButton value={'not-sure'} outline>Notice more good things</CheckboxButton>
	<CheckboxButton value={'no'} outline>Just for fun</CheckboxButton>
</div>

<Button href="/">Continue</Button>

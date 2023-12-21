<script>
	import { Button, Heading, P, RadioButton } from 'flowbite-svelte';

	let radioGroup = 'experience';
</script>

<Heading tag="h1" class="mb-4">Your experience</Heading>
<P class="mb-8">Have you ever practiced the journaling tecnique?</P>

<div class="mb-16 grid gap-4">
	<RadioButton value={'yes'} bind:group={radioGroup} outline>Yes</RadioButton>
	<RadioButton value={'not-sure'} bind:group={radioGroup} outline>Not Sure</RadioButton>
	<RadioButton value={'no'} bind:group={radioGroup} outline>No</RadioButton>
</div>

<Button href="/onboarding/goal">Continue</Button>

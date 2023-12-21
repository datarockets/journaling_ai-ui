type Notification = {
	type: 'today' | 'weekly',
	title: string,
	description: string,
}

const notifications: ReadonlyArray<Notification> = [
	{
		type: "today",
		title: "Tip of the day",
		description: "Supporting or descriptive text for the card goes here."
	},
	{
		type: "today",
		title: "11-17 Dec Report",
		description: "Supporting or descriptive text for the card goes here."
	},
]

export function load() {
	return {
		hasPosts: false,
		notifications,
	}
}

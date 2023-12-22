import dayjs from "dayjs"

type MoodData = {
	date: string,
	mood: number,
}

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

function getMoodData(): MoodData[] {
	return [
		{date: dayjs().add(-7, 'days').toISOString(), mood: 40},
		{date: dayjs().add(-5, 'days').toISOString(), mood: 50},
		{date: dayjs().add(-3, 'days').toISOString(), mood: 70},
		{date: dayjs().add(-2, 'days').toISOString(), mood: 90},
		{date: dayjs().add(-1, 'days').toISOString(), mood: 80},
		{date: dayjs().add(0, 'days').toISOString(), mood: 75},
	]
}

export function load() {
	return {
		hasPosts: true,
		notifications,
		moodData: getMoodData(),
	}
}

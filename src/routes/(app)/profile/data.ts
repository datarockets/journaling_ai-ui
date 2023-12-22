import dayjs from "dayjs"

export type Entry = {
    moodName: string,
    mood: number,
    date: string,
}

function getMoodName(mood: number) {
    if (mood < 30) {
        return 'bad'
    } else if (mood < 70) {
        return 'fine'
    } else {
        return 'good'
    }
}

const moods = (length: number) => Array.from({length}).map(() => Math.ceil(Math.random() * 100))

export function getData(length: number) {
    return moods(length).map((mood, i) => ({mood, moodName: getMoodName(mood), date: dayjs().add(length - i - 1, 'days').toISOString()}))
}

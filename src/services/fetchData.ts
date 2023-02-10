import { Advice } from '../interface/Advice'

const BASE_URL = 'https://api.adviceslip.com/advice'

export async function fetchData() {
    try {
        const response = await fetch(BASE_URL)
        const json = await response.json()
        return json
    } catch (error) {
        throw new Error('Error get advice')
    }
}

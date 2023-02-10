import { useEffect, useState } from 'react'
import { Advice } from '../interface/Advice'
import { fetchData } from '../services/fetchData'

export const useAdvice = () => {
    const [data, setData] = useState<Advice>()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const getAdvice = async () => {
        try {
            setLoading(true)
            setError(null)
            const advice = await fetchData()
            console.log(advice)
            setData(advice)
        } catch (error: any) {
            setError(error)
        }
    }

    useEffect(() => {
        getAdvice()
    }, [])

    return { data, loading, getAdvice }
}

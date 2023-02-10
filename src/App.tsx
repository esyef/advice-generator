import { Advice } from './Components'
import { useAdvice } from './hooks/useAdvoice'

const App = () => {
    const { data, getAdvice } = useAdvice()

    return (
        <div className='bg-DarkBlue h-screen text-lightCyan grid place-items-center'>
            <Advice
                advice={{
                    slip: {
                        id: data?.slip.id!,
                        advice: data?.slip.advice!,
                    },
                }}
                onClick={getAdvice}
            />
        </div>
    )
}

export default App

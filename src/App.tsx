import { Advice } from './Components'
import advice from './mocks/advice.json'

const App = () => {
    const data = advice?.slip

    return (
        <div className='bg-DarkBlue h-screen text-lightCyan grid place-items-center'>
            <Advice advice={data} />
        </div>
    )
}

export default App

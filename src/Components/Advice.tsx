import { Advice } from '../interface/Advice'
import { iconDice } from '../assets/images'

interface Props {
    advice: Advice
}

const Advice = ({ advice }: Props) => {
    return (
        <section className='bg-DarkGrayishBlue flex flex-col justify-center items-center  px-12 pt-12 pb-20  relative w-[90%] max-w-[540px] shadow-card rounded-2xl'>
            <div className='flex flex-col gap-6 text-center'>
                <span className='uppercase text-neonGreen'>
                    advice #{advice.id}
                </span>
                <h1>{advice.advice}</h1>
            </div>

            <div className='divider p-[40px]  w-full' />
            <button className='bg-neonGreen p-5 rounded-full cursor-pointer hover:shadow-base hover:shadow-neonGreen absolute -bottom-[2rem] transition-shadow duration-200'>
                <img src={iconDice} alt='icon dice' />
            </button>
        </section>
    )
}

export default Advice

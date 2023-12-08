import React from 'react'
import { AiFillClockCircle } from 'react-icons/ai';
import { FiCornerDownLeft } from 'react-icons/fi';


type Props = {}

const UniqueInsight = (props: Props) => {
  return (
    <div className='w-1/2'>
        <div className='mb-8 text-black font-medium text-2xl'>Welcome to the RapidAI User Insights Form! Please share your unique insight into the solution. If you dont have one that is fine.</div>
        <div className='mb-8 text-black text-2xl flex justify-center	'>
                Description {"("}optional{")"}
        </div>
        <div className='flex flex-col items-center '>
            <div className='flex flex-row ml-2 mb-2'>
                <button className='btn bg-blue-700 text-white font-medium'>Start</button>
                <span className='text-black self-center ml-2 flex'>press Enter <FiCornerDownLeft className='self-center ml-2' /></span>
            </div>
            <div className='text-black flex flex-row text-sm'><AiFillClockCircle className='self-center mr-2' /> Takes X minutes</div>
        </div>
    </div>
  )
}

export default UniqueInsight
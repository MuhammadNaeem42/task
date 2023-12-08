import React from 'react'

type Props = {}

const ClarifyingEngine = (props: Props) => {
  return (
    <div className=''>
        <div className='h-auto'>
            <div className='mb-2 text-black font-medium text-2xl'>
               <span className=''>1 <span className='text-blue-600'> -&gt;</span></span> Hmm... that&apos;s interesting what do you mean by...
            </div>
            <div className='mb-6 text-black ml-12 text-2xl'>
                Description {"("}optional{")"}
            </div>
            <input type="text" placeholder="Type your answer here.." className="input rounded-sm text-black text-3xl  border-b w-full pl-12" />
        </div>
    </div>
  )
}

export default ClarifyingEngine
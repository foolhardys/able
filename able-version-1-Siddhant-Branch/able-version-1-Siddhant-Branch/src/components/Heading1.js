import React from 'react'
import dash from '../assets/dash.png'
import dash1 from '../assets/dash1.png'

const Heading1 = () => {
  return (
    <div className='font-[poppins]'>
     <h1 className='pt-28 font-semibold text-black md:text-7xl dark:text-white text-4xl text-center'>ABLING YOU TO <span className=''>ENDLESS</span> POSSIBILITIES</h1>
     <div className='flex justify-center'>
     <img src={dash} alt="" className='md:w-[20vw] block dark:hidden '/>
     <img src={dash1} alt="" className='md:w-72 hidden dark:block md:pt-4'/>
     </div>
    </div>
  )
}

export default Heading1

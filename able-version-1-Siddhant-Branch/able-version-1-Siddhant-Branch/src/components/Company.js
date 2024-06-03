import React from 'react'
import Marquee from 'react-fast-marquee'
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'
import c4 from '../assets/c4.png'
import c5 from '../assets/c5.png'

const Company = () => {
  const customStyles = {
    borderRadius: '50% 50% 0% 0% / 20% 20% 0% 0%'
  }
    
  return (
    <div className='snap-start md:h-[100vh] md:pt-0 pt-10 mt-10 md:mt-0 text-white bg-black font-[poppins]' style={customStyles}>
      <h1 className="text-center text-3xl sm:text-6xl font-semibold leading-tight md:pb-12 md:pt-44">COMPANIES WITH ABLE</h1>
    <div className='h-48 md:pb-24 md:pt-24 my-20 flex justify-center bg-black'>
      
    <div className='my-8 max-w-[80%] '>
        

      <Marquee  className=''>
       <div className='flex sm:gap-20 gap-12'>
        <img src={c1} alt="" className='md:p-4 w-48 h-20 md:ml-0 ml-20'/>
        <img src={c2} alt="" className='w-36 h-20'/>
        <img src={c3} alt="" className='w-36 h-28'/>
        <img src={c4} alt="" className='w-36 h-20'/>
        <img src={c5} alt="" className=' w-36 h-20'/>
        </div>
      </Marquee>
    </div></div>
    </div>
  )
}

export default Company

import React from 'react'
import Color1 from '../assets/color1.png'
import Color2 from '../assets/color2.png'
import Color3 from '../assets/color3.png'


const Slogan = () => {
    return (

        <div className='font-[poppins] snap-start flex flex-col items-center justify-evenly sm:h-[100vh] pb-20 md:pb-12 '>
            <h1 className="md:pb-16 pb-16 text-3xl sm:text-6xl font-semibold leading-tight dark:text-white  text-black">#InternshipZaruriHai</h1>
            <div className='dark:bg-white md:py-12 flex justify-center rounded-3xl md:w-[70vw]'>
            <div className='flex w-[90vw] md:gap-10 justify-center gap-6'  >
                <img src={Color1} alt="" className='grayscale hover:filter-none md:w-72 w-28  transition-all duration-300 ease-in transform' />
                <img src={Color2} alt="" className='grayscale hover:filter-none md:w-72  w-28  transition-all duration-300 ease-in transform' />
                <img src={Color3} alt="" className='grayscale hover:filter-none md:w-72 w-28   transition-all duration-300 ease-in transform' />
            </div>
            </div>
        </div>

    )
}

export default Slogan
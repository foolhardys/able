import React from 'react'
import getstarted from '../assets/Rectangle 6396.png'
import get from '../assets/Rectangle 6399.png'
import {Link} from 'react-router-dom'

const Able = () => {
    return (
        <div className=' snap-start'>
            <div className='font-[MuseoModerno] md:h-[100vh] py-44 bg-black dark:bg-gradient-to-r from-black to-[#212121] flex justify-center items-center  '>
                <h1 className='text-8xl md:text-[12rem] text-white transition transform hover:-translate-y-3 hover:scale-110 motion-reduce:transition-none motion-reduce:hover:transform-none' >able</h1>
            </div>
            <div className='font-[poppins] md:h-[100vh] px-10 pt-28 md:pt-24 bg-[#f9f9f9] dark:bg-black '>

                <div class="grid md:grid-cols-2  gap-10 max-w-6xl max-md:max-w-md mx-auto ">
                    <div class="flex justify-center md:h-[400px]">
                        <img src={getstarted} class="block dark:hidden md:w-[30vw]" alt=''/>
                        <img src={get} class="hidden dark:block md:w-[30vw]" alt=''/>
                    </div>
                    <div class="flex md:text-right text-center">
                        <h3 class="md:text-8xl text-4xl font-medium tracking-wide dark:text-white">A Step Towards Change</h3>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Link to="/hirePage"><button type="button" class="px-6 bg-black text-white hover:bg-white hover:text-black  py-2 mt-8  font-semibold rounded-lg text-md outline-none dark:bg-white dark:text-black mb-8">Hire Now</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Able
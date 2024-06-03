import React from 'react'
import Navbar_3 from './Navbar_4'
import {Link} from 'react-router-dom'

const HirePage = () => {
  return (
    <>
    <Navbar_3/>
    <div className="font-[poppins] snap-start flex flex-col justify-center font-[sans-serif] text-[#333] sm:h-[85vh] p-4 dark:bg-black">
        <div className="flex justify-center mb-12 md:mt-12 md:text-4xl text-2xl text-center dark:text-white">
          <h1>Post an Internship Opportunity with able</h1>
        </div>
      <div className="md:w-[35vw] mx-auto  rounded-3xl md:p-4">
        
        <form>
          <div className="space-y-8 ">
            <div className='md:w-[32vw] w-[70vw] rounded-3xl shadow-lg '>
              <label className="text-sm mb-2 block dark:text-white">Name of the Company</label>
              <input name="name" type="text" className="bg-white dark:bg-[#171717]  w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="" />
            </div>
            <div className='rounded-3xl shadow-lg md:w-[32vw]'>
              <label className="text-sm mb-2 block dark:text-white">Your Name</label>
              <input name="name" type="text" className="bg-white dark:bg-[#171717]  w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="" />
            </div>
            <div className='rounded-3xl shadow-lg md:w-[32vw]'>
              <label className="text-sm mb-2 block dark:text-white">Your Post of the Company</label>
              <input name="post" type="text" className="bg-white dark:bg-[#171717]  w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="" />
            </div>
            <div className='rounded-3xl shadow-lg md:w-[32vw]'>
              <label className="text-sm mb-2 block dark:text-white">Your Contact Number</label>
              <input name="number" type="number" className="bg-white dark:bg-[#171717]  w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="" />
            </div>
          </div>
          <div className="flex justify-end !mt-16">
          <Link to="/info"><button type="button"
                    className="px-4 py-2.5 rounded-2xl w-48  text-white text-sm  font-semibold border border-black outline-none bg-black dark:bg-white dark:text-black ">Continue</button></Link>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default HirePage

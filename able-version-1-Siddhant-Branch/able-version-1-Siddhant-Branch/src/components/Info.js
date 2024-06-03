import React from 'react'
import Navbar_4 from './Navbar_4'

const Info = () => {
  return (
    <>
    <Navbar_4/>
    <div class="font-[poppins] snap-start font-[sans-serif] text-[#333] p-6 dark:bg-black">
      <div class=" mb-16">
        <h4 class="text-4xl font-semibold mt-3 dark:text-white">Add Basic Information of Internship</h4>
      </div>
      <form>
        <div className='flex gap-x-16 md:px-12'>
          <div class="space-y-6">
            <div className='shadow-lg rounded-2xl md:w-[36vw]'>
              <label class="text-sm mb-2 dark:text-white">Company's Industry</label>
              <input name="name" type="text" class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500 dark:bg-[#171717]" />
            </div>
            <div className='shadow-lg rounded-2xl md:w-[36vw]'>
              <label class="text-sm mb-2 dark:text-white">Mode of Location</label>
              <input name="name" type="text" class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500 dark:bg-[#171717]" />
            </div>
            <div className='flex'>
              <div className='shadow-lg rounded-2xl'>
                <label class="text-sm mb-2 dark:text-white">City</label>
                <input name="name" type="text" class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500 dark:bg-[#171717]" />
              </div>
              <div className='shadow-lg rounded-2xl md:mx-16'>
                <label class="text-sm mb-2 dark:text-white">Pincode</label>
                <input name="number" type="number" class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500 dark:bg-[#171717]" />
              </div>
            </div>
            <div className='shadow-lg rounded-2xl md:w-[36vw]'>
              <label class="text-sm mb-2 dark:text-white">Address</label>
              <input name="name" type="text" class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500 dark:bg-[#171717]" />
            </div>
            <div className='shadow-lg rounded-2xl md:w-[36vw]'>
              <label class="text-sm mb-2 dark:text-white">Number of Internship Opportunities</label>
              <input name="number" type="number" class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500 dark:bg-[#171717]" />
            </div>
          </div>
          <div class="space-y-6 shadow-lg rounded-2xl md:p-12 dark:bg-[#0F0F0F]">
            <div className='text-3xl md:pb-12 dark:text-white'>
              <h1>Internship Number 1</h1>
            </div>
            <div className='shadow-lg rounded-2xl w-[35vw]'>
              <label class="text-sm mb-2 dark:text-white">Role of Internship</label>
              <input name="name" type="text" class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500 dark:bg-[#171717]" />
            </div>
            <div className='shadow-lg rounded-2xl'>
              <label class="text-sm mb-2 dark:text-white">No. of Openings for this Role</label>
              <input name="number" type="number" class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500 dark:bg-[#171717]" />
            </div>
            <div className='shadow-lg rounded-2xl'>
              <label class="text-sm mb-2 dark:text-white">Stipend</label>
              <input name="number" type="number" class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500 dark:bg-[#171717]" />
            </div>
            <div className='shadow-lg rounded-2xl'>
              <label class="text-sm mb-2 dark:text-white">Work Hours</label>
              <input name="number" type="number" class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500 dark:bg-[#171717]" />
            </div>
            <div className='shadow-lg rounded-2xl'>
              <label class="text-sm mb-2 dark:text-white">Skills Required</label>
              <input name="name" type="text" class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500 dark:bg-[#171717]" />
            </div>
            <div className='shadow-lg rounded-2xl'>
              <label class="text-sm mb-2 dark:text-white">Duration</label>
              <input name="number" type="number" class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500 dark:bg-[#171717]" />
            </div>
            <div className='shadow-lg rounded-2xl'>
              <label class="text-sm mb-2 dark:text-white">Start Date</label>
              <input name="date" type="date" class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500 dark:bg-[#171717]" />
            </div>
            <div className='shadow-lg rounded-2xl'>
              <label class="text-sm mb-2 dark:text-white">Eligibility Criteria</label>
              <input name="name" type="text" class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500 dark:bg-[#171717]" />
            </div>
            <div className='shadow-lg rounded-2xl'>
              <label class="text-sm mb-2 dark:text-white">Internship Description</label>
              <input name="name" type="text" class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500 dark:bg-[#171717]" />
            </div>
            <div className='flex justify-end'>
              <button type="button" className="px-4 py-2.5 rounded-2xl w-48  text-white text-sm  font-semibold  outline-none bg-black dark:bg-[#333333] dark:text-white ">
                Next Opportunity
              </button>
            </div>
          </div>
        </div>

        <div class="flex justify-end !mt-10 md:pr-24">
          <button type="button" className="px-4 py-2.5 rounded-2xl w-48  text-white text-sm  font-semibold outline-none bg-black dark:bg-white dark:text-black">
            Submit
          </button>
        </div>
      </form>
    </div></>
  )
}

export default Info

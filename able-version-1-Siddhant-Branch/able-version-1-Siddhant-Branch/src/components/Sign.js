import React from 'react'
import Cell from '../assets/cell.png'
import Navbar from './Navbar'
import cell2 from '../assets/cell2.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sign = () => {
  return (
    <>
    <Navbar/>
    <div className="font-[poppins] text-[#333] bg-[#f6f6f7] m-0 p-0 dark:bg-[#161616] ">
      <div className="min-h-screen flex flex-col items-center justify-center ">
        <div className="relative md:mb-48 h-[60vh] bg-white grid md:grid-cols-2 items-center gap-16 max-w-5xl w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl dark:bg-black">
          <div className="md:max-w-md w-full sm:px-6">
            <form>
            <div className="relative flex items-center ">
                  <input name="name" type="text" required className="text-center w-full text-xs rounded-xl dark:bg-[#242424] px-2 py-3 outline-1" placeholder="Enter your Name" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                      </clipPath>
                    </defs>
                    <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                      <path fill="none" stroke-miterlimit="10" stroke-width="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                      <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                    </g>
                  </svg>
                </div>
              <div className='mt-8'>
                <div className="relative flex items-center">
                  <input name="email" type="text" required className="text-center w-full text-xs rounded-xl dark:bg-[#242424] px-2 py-3 outline-1" placeholder="Enter your email and username" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                      </clipPath>
                    </defs>
                    <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                      <path fill="none" stroke-miterlimit="10" stroke-width="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                      <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="mt-8">
                <div className="relative flex items-center">
                  <input name="password" type="password" required className="text-center w-full text-xs rounded-xl dark:bg-[#242424] px-2 py-3 outline-1" placeholder="Password" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>
              <div className="mt-12 flex justify-center">
                <button type="button" className=" w-32 shadow-xl py-2.5 px-4 text-sm font-semibold rounded-2xl text-white bg-black hover:bg-black-700 dark:bg-white dark:text-black focus:outline-none ">
                  Sign up
                </button>
              </div>
            </form>
          </div>
          <div className="px-12 rounded-3xl">
            <img src={Cell} className="w-80 h-[50vh] block dark:hidden" alt="" />
            <img src={cell2} className="w-80 h-[50vh] hidden dark:block" alt="" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Sign

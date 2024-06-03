import React from 'react'
import Navbar_3 from './Navbar_3'

const ForgotPass = () => {
    return (
      <>
      <Navbar_3/>
        <div className='font-[poppins] snap-start bg-[#f7f7f7] md:h-[80vh] flex items-center just dark:bg-black '>
            <div class=" h-[60vh] text-center flex flex-col justify-evenly  bg-white dark:bg-[#0F0F0F] shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] py-6 px-10 w-full max-w-4xl rounded-2xl font-[sans-serif] overflow-hidden mx-auto ">
                <h3 class="md:text-4xl text-xl font-semibold dark:text-white">Forgot your Password?</h3>
                <p class=" md:text-lg text-gray-800 dark:text-white">Send a Reset Link on your email</p>
                <div class=" relative flex items-center  md:w-[30vw] w-full mx-auto px-2 border border-1 border-black rounded-2xl dark:bg-[#171717]">
                    <input type="email" placeholder="Enter your email"
                        class=" px-2 py-3 text-black  text-sm bg-transparent outline-none" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
                <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
              </svg>
                </div>
                <button type="button"
                    class="px-4 py-2.5 rounded-2xl w-48 mx-auto text-white text-sm  font-semibold border border-black outline-none bg-black dark:bg-white dark:text-black ">Send</button>
            </div>
        </div>
        </>
    )
}

export default ForgotPass
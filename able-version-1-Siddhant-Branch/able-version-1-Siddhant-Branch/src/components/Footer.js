
import React from 'react'
import facebook from '../assets/fb.png'
import insta from '../assets/insta.png'

const Footer = () => {
    return (
        <div className='font-[poppins]'>
            <footer className="bg-black py-12 px-6 font-sans tracking-wide dark:bg-[#0E0E0E] md:h-[40vh]">
                <div className="flex flex-col items-center gap-6">

                    <h6 className=" text-gray-200 text-base">Follow us for more Updates:</h6>
                    <ul className="flex flex-wrap justify-center gap-x-8 gap-4 mb-5">
                        <li><a href="https://www.facebook.com/share/yozUBvicDNb6C8Jr/?mibextid=qi2Omg" target='blank' className="">
                            <img src={facebook} className='w-8' alt='' />
                        </a></li>

                        <li><a href="https://www.instagram.com/.able?igsh=MTd5bjQwZ3pxNWljdw==" target='blank' className="">
                            <img src={insta} className='w-8' alt=''/>
                        </a></li>

                        <li><a href="https://x.com/Able_india?t=gSjDJ1rtAXP9RsWAAI4dXQ&s=08" target='blank'  className="">
                            <img src="https://images.freeimages.com/image/large-previews/9fe/x-twitter-light-grey-logo-5694251.png" target='blank'  className='w-8' alt=''/>
                        </a></li>

                        <li><a href="/linkedin" className="">
                            <img src="https://i.pinimg.com/564x/6b/ab/30/6bab3017350ca04c6fa05569672bd31e.jpg" target='blank' className='w-8' alt=''/>
                        </a></li>
                    </ul>

                    <hr className="border-gray-500 w-full" />
                   
                    <ul className="flex sm:flex-row sm:gap-x-28 flex-wrap flex-col text-center gap-y-2 ">
                        <li><a href="/hire" className="hover:underline text-gray-200 text-base transition-all">Hire Interns</a></li>
                        <li><a href="/" className="hover:underline text-gray-200 text-base transition-all">Find Internships</a></li>
                        <li><a href="/about" className="hover:underline text-gray-200 text-base transition-all">About</a></li>
                        <li><a href="/contact" className="hover:underline text-gray-200 text-base transition-all">Contact</a></li>
                        <li><a href="/policy" className="hover:underline text-gray-200 text-base transition-all">Privacy Policy</a></li>
                        <li><a href="/terms" className="hover:underline text-gray-200 text-base transition-all">Terms of Service</a></li>

                    </ul>
                </div>

            </footer>
        </div>
    )
}

export default Footer


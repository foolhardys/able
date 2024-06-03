import React from 'react';
import Navbar_2 from './Navbar_2';

import insta from '../assets/cf1.png';
import fb from '../assets/cf2.png';
import twitter from '../assets/cf3.png';
import linked from '../assets/cf4.png';

const ContactForm = () => {
    return (
        <>
            <Navbar_2 />
            <div className='pt-4 mb-2 font-[poppins] dark:bg-black md:h-[100vh]'>
                <div className="grid sm:grid-cols-2 gap-10 py-6 px-5 mx-auto max-w-5xl bg-white text-[#333] font-[sans-serif] dark:bg-black">
                    <div>
                        <h1 className="text-5xl font-bold dark:text-white">Contact Us</h1>
                        <p className="text-lg text-gray-400 mt-3 dark:text-white">Have any query? We are here for you.</p>
                        <div>
                            <form className="space-y-4 mt-6">
                                <input type='email' placeholder='Email'
                                    className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-[#007bff] dark:bg-[#1D1D1D]" />
                                <textarea placeholder='Message' rows="6"
                                    className="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 outline-[#007bff] dark:bg-[#1D1D1D]"></textarea>
                                <div className="flex justify-center mt-4">
                                    <button type='button'
                                        className="text-white bg-black hover:text-black hover:bg-gray mt-8 dark:bg-white dark:text-black dark:hover:bg-gray-300 dark:hover:text-black dark:active:bg-gray-500 font-semibold rounded-md text-sm px-8 py-3">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="mt-6 md:mt-2">
                        <h2 className="text-lg font-bold dark:text-white">Have any General query?</h2>
                        <a href="//" className="text-[#007bff] text-sm">
                            Check our FAQs
                        </a>
                        <div className="mt-6 md:mt-12">
                            <h2 className="text-lg font-bold dark:text-white">Mail Us</h2>
                            <ul className="mt-3">
                                <li className="flex">
                                    <div className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                            viewBox="0 0 479.058 479.058">
                                            <path
                                                d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                                data-original="#000000" />
                                        </svg>
                                    </div>
                                    <a href="/" className="text-[#007bff] text-sm ml-3">
                                        <small className="block">Mail</small>
                                        let.ableindia@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-6 md:mt-12">
                            <h2 className="text-lg font-bold dark:text-white">Check us on Social Media for Updates</h2>
                            <ul className="flex flex-col mt-3 space-y-3">
                                <li className="flex items-center">
                                    <div className="h-10 w-10 flex items-center justify-center shrink-0">
                                        <img src={insta} alt="" />
                                    </div>
                                    <a href="https://www.instagram.com/p/C6wPNH-PX95/?igsh=MTN4MHlvYjY1b3pkbg==" className="text-[#007bff] text-sm ml-3">
                                        .able
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <div className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <img src={fb} alt="" />
                                    </div>
                                    <a href="https://www.facebook.com/share/yozUBvicDNb6C8Jr/?mibextid=qi2Omg" className="text-[#007bff] text-sm ml-3">
                                        Able India
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <div className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <img src={twitter} alt="" />
                                    </div>
                                    <a href="/" className="text-[#007bff] text-sm ml-3">
                                        Able_india
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <div className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <img src={linked} alt="" />
                                    </div>
                                    <a href="/" className="text-[#007bff] text-sm ml-3">
                                        Able_india
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    );
};

export default ContactForm;
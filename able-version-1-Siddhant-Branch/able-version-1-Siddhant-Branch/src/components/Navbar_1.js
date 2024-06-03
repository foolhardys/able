import React from 'react'
import { Link } from 'react-router-dom'

const Navbar_1 = () => {
  return (
    <div className="snap-start navbar bg-[#000000] font-[poppins] dark:bg-gradient-to-r from-black to-[#212121]">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>For interns</Link></li>
        <li><Link to='/hire'>For companies</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact us</Link></li>
        </ul>
      </div>
    </div>
    <div className="navbar-center hidden lg:flex p-4 ">
      <ul className="menu menu-horizontal space-x-8  md:text-xl text-white">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>For interns</Link></li>
        <li><Link to='/hire'>For companies</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact us</Link></li>
      </ul>
    </div>
    <div className="navbar-end flex md:px-16">
      <Link to='/hirepage' className="btn bg-white text-black rounded-2xl w-40">Register</Link>
    </div>
  </div>
  )
}

export default Navbar_1

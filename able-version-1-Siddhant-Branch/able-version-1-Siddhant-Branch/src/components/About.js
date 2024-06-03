import React from 'react'
import Team from './Team'
import Footer from './Footer'
import Navbar from './Navbar'

const About = () => {
  return (
    <>
    <Navbar/>
    <div className='font-[poppins] dark:bg-black'>
      <h1 className="snap-start flex justify-center text-5xl text-bold pt-20 dark:text-white">WHO WE ARE?</h1>
      <div className="snap-start min-h-screen flex flex-col">
        <Team />
      </div>
      <div className='snap-start'>
      <Footer/>
      </div>
    </div>
    </>
  )
}

export default About

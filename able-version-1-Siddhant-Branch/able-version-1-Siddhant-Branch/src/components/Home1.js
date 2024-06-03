import React, {useState} from 'react'
import Home from './Home.js';
import Footer from "./Footer.js";
import Testi from "./Testi.js";
import Slogan from "./Slogan.js"
import Company from "./Company.js";
import Stats from "./Stats.js";


import Heading from "./Heading.js";
import Heading1 from './Heading1.js'
import Faq from "./Faq.js";
import Community from './Community.js';
import Hire from './Hire.js';
import Navbar from "./Navbar";

const Home_1 = () => {
  
  return (
    <>
    
    <Navbar />
    <div className='font-[poppins] bg-[#f7f7f7] dark:bg-black'>
      <Heading1 head="ABLING YOU TO ENDLESS POSSIBILITIES" />
        <Home /> 
        <Stats/>
        <Hire/>
        <Company />
        <Slogan/>
        <Community/>
        <Heading head="TESTIMONIALS" />
        <Testi />
        <Heading head="FAQ'S" />
        <Faq/>
        <Footer />         
    </div>
    </>
  )
}

export default Home_1

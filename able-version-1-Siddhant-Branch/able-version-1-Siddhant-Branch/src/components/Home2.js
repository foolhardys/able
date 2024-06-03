import React from 'react'
import Stories from "./Stories.js";
import Heading from "./Heading.js";
import CompStats from './CompStats.js';
import Whyus from './whyus.js';
import Footer from './Footer.js';
import Faq from './Faq.js';
import Able from './Able.js';
import Feedback from './Feedback.js';
import Navbar_1 from './Navbar_1.js';

const Home2 = () => {
  return (
    <>
    <Navbar_1/>
    <div className='bg-[#f7f7f7] dark:bg-black'>
       <Able/>
        <Whyus/>
        <CompStats/>
        <Feedback/>
        <Heading head="OUR USERS TELLING THEIR STORIES"/>
      <Stories/>
      <Heading head="FAQ'S" />
        <Faq/>
        <Footer /> 
    </div>
    </>
  )
}

export default Home2

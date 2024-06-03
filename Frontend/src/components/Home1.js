import React from "react";
import Home from "./Home.js";
import Testi from "./Testi.js";
import Slogan from "./Slogan.js";
import Company from "./Company.js";
import Stats from "./Stats.js";
import Heading from "./Heading.js";
import Heading1 from "./Heading1.js";
import Faq from "./Faq.js";
import Community from "./Community.js";
import Hire from "./Hire.js";
import Subscribe from "./Subscribe.js";

const Home_1 = () => {
  return (
    <div>
      <Heading1 head="ABLING YOU TO ENDLESS POSSIBILITIES" />
      <Home />
      <Stats />
      <Hire />
      <Company />
      <Slogan />
      <Heading head="JOIN THE COMMUNITY" />
      <Community />
      <Heading head="TESTIMONIALS" />
      <Testi />
      <Heading head="FAQ'S" />
      <Faq />
      <Heading head="SUBSCRIBE" />
      <Subscribe />
    </div>
  );
};

export default Home_1;

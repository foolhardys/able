import "./App.css";
import Home2 from "./components/Home2.js";
import Navbar from "./components/Navbar";
import Home1 from "./components/Home1.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from "./components/Sign.js";
import About from "./components/About.js";
import Interns from "./components/Interns.js";
import Contact from "./components/Contact.js";
import Signup from "./components/Signup.js";

function App() {
  return (
    <>
      <div className="">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home1 />} />
            <Route path="/hire" element={<Home2 />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Sign />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/interns" element={<Interns />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

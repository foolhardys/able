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
import PrivateRoutes from "./utils/PrivateRoutes.jsx";
import Admin from "./components/Admin.js";
import Footer from "./components/Footer.js";
import CreateInternship from "./components/AdminComponents/CreateInternship.jsx";
import UpdateInternship from "./components/AdminComponents/UpdateInternship.jsx";

function App() {
  return (
    <>
      <div className="">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home1 />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/admin" element={<Admin />} />
              <Route path="/create-internship" element={<CreateInternship />} />
              <Route path="/update-internship" element={<UpdateInternship />} />
            </Route>
            <Route path="/hire" element={<Home2 />} />
            <Route path="/about" element={<About />} />
            <Route path="/interns" element={<Interns />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Sign />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

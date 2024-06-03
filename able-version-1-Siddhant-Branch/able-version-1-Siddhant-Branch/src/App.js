import "./App.css";
import Home2 from "./components/Home2.js";
import Home1 from "./components/Home1.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from "./components/Sign.js";
import About from "./components/About.js";
import Interns from "./components/Interns.js";
import ContactForm from "./components/ContactForm.js";
import Signup from './components/Signup.js'
import ForgotPass from "./components/ForgotPass.js";
import HirePage from "./components/HirePage.js";
import  Info  from "./components/Info.js";
import ThemeContextProvider from "./components/ThemeContextProvider.js";


function App() {
  return (
    <>
    <ThemeContextProvider>
      <div className="snap-y snap-mandatory overflow-auto h-screen w-screen">
  
         <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home1/>}/>
      <Route path="/hire" element={<Home2 />}/>
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Sign/>}/>
        <Route path="/login" element={<Signup/>}/>
        <Route path="/interns" element={<Interns/>}/>
        <Route path="/contact" element={<ContactForm/>}/>
        <Route path="/forgot" element={<ForgotPass />}/>
        <Route path="/hirePage" element={<HirePage />}/>
        <Route path="/info" element={<Info />}/>
      </Routes>
    </BrowserRouter>
        
      </div>
      </ThemeContextProvider>
    </>
  );
}

export default App;

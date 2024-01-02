import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import "./App.css";
import Home from './components/home';
import Header from "./components/header";
import Footer from './components/footer';
import SignupForm from './components/Signupform';
import LoginForm from './components/login';
import ContactForm from './components/contact';
import LeasePage from './components/lease';
import FaqPage from './components/feedback';

// import AboutUs from './components/about';
import Services from './components/services';
// import KaolinPage from './components/kaolin';
// import Ballclay from './components/Ballclay';
function App() {
  return (
    <BrowserRouter>
     
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          
          <Route path="/home" element={<Home />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/Signupform" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/contact" element={<ContactForm />} />
          {/* <Route path="/about" element={<AboutUs />} /> */}
          <Route path="/services" element={<Services />} />
          <Route path="/lease" element={<LeasePage />} />
          <Route path="/feedback" element={<FaqPage />} />
          {/* <Route path="/kaolin" element={<KaolinPage />} /> */}
          {/* <Route path="/Ballclay" element={<Ballclay />} /> */}
        </Routes>
   
    </BrowserRouter>
  );
}

export default App;

// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import "./App.css";
// import "./sassStyles/base/_base.scss"
import { Route, Routes } from "react-router-dom";
import Testimonials from "./pages/Testimonials/Testimonials";
import Team from "./pages/Team/Team";
import Contact from "./pages/Contact/Contact";
import Models from "./pages/CarModels/Models";
import HomePage from "./pages/Home/HomePage";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/Login/LogIn";
import Footer from "./components/Footer/Footer";
import Profile from "./pages/Profile/Profile";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/models" element={<Models />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

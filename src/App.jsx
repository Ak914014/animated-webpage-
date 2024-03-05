import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import { About } from "./components/About";
import { Featured1 } from "./components/Featured1";
import { Cards } from "./components/Cards";
import { Ready } from "./components/Ready";
import { Footer } from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import  {Eyes1}  from "./components/Eyes1";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes1 />
      <Featured1 />
      <Cards />
      <Ready />
      <Footer />
    </div>
  );
}

export default App;

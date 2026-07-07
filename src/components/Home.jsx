import React from "react";
import HeroImg from "../assets/Hero.jpg";
function Home() {
  return (
    <div
      className=" w-full min-h-screen bg-cover bg-center flex justify-center flex-col gap-3 px-4 md:px-6"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div>
      <h1 className="text-slate-200 text-5xl font-black drop-shadow-md ">
        Wander<span className=" text-amber-500">U</span>
      </h1>
      <p className="text-slate-200 font-semibold mt-1">Where dreams meet reality</p>
      </div>
      <a href="#packages-section" className="w-fit font-bold text-amber-500  bg-slate-800/50 backdrop-blur-3xl hover:bg-amber-500 hover:text-black p-3 rounded-2xl ">Get Started →</a>
      <p className="text-slate-300 text-xs tracking-widest uppercase mt-2">
        Scroll down to explore ↓
      </p>
    </div>
  );
}

export default Home;

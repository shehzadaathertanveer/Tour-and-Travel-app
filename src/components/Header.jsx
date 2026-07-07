import React, { useState } from "react";

function Header() {
  return(
    <nav className=" w-full fixed top-0 left-0 py-3 px-4 md:px-12 bg-slate-900/40 backdrop-blur-xl flex  items-center justify-between z-50 ">

      <div className=" text-2xl md:text-4xl text-white font-bold shrink-0 ">
        <a href="#home-section">Wander<span className=" text-amber-500">U</span></a>
      </div>
      <div className="overflow-x-auto md:overflow-visible mx-2 scrollbar-none">
        <ul className=" text-white flex gap-4 p-3 md:gap-6 text-sm md:text-base whitespace-nowrap">
        <li><a href="#home-section" className=" hover:text-amber-500 duration-200" >Home</a></li>
        <li><a href="#packages-section" className=" hover:text-amber-500 duration-200">Packages</a></li>
        <li><a href="#reviews-section" className=" hover:text-amber-500 duration-200">Reviews</a></li>
        <li><a href="#about-section" className=" hover:text-amber-500 duration-200">About Us</a></li>
        </ul>
      </div>

      <div className="shrink-0">
        <a href=" #packages-section"  className="border-2 border-amber-500/80 text-amber-500  hover:bg-amber-500 hover:text-black rounded-full px-3 py-1.5 md:p-3 text-xs md:text-base font-bold 
         ">BOOK NOW</a>

      </div>
    </nav>
  )
}

export default Header;
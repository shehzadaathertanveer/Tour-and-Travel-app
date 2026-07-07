import React from "react";
import AboutImg from "../assets/aboutImg.jpg";

function About() {
  return (
   <div className="min-h-screen py-10 md:py-0 w-full bg-slate-900 text-white flex items-center justify-between flex-col md:flex-row p-20">
    
    <div className="text-white flex flex-col gap-3">
        <div>
            <h1 className="text-2xl md:text-4xl font-black">Wander<span className="text-amber-500">U</span></h1>
            <p className="italic text-sm text-amber-500/80">"A place where dreams meet reality"</p>
        </div>
        
        <div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                At Wander<span className="text-amber-500 font-semibold">U</span>, we believe that traveling shouldn't be stressful or break the bank. Our team creates premium destination packages, handpicks top-rated accommodations, and designs seamless roadmaps so you can focus entirely on making memories.
            </p>
            
            <hr className="border-t border-slate-700 my-6 w-full" />
            
            <div className="flex flex-col sm:flex-row gap-4 text-sm w-full text-slate-400 whitespace-nowrap">
                <p>✓ 24/7 customer service</p>
                <p>✓ No hidden fees</p>
                <p>✓ Best experience</p>
            </div>
        </div>
    </div>
    
    {/* Right Image Box */}
    <div className="shrink-0 mt-8 md:mt-0">
        <img src={AboutImg} alt="About Us" className="h-96 w-72 md:h-120 md:w-88 rounded-3xl object-cover shadow-2xl" />
    </div>
   </div>
  );
}

export default About;
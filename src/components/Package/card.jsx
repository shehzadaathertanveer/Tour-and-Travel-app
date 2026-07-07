import React from "react";

function Card({ bgImg, country, price, duration }) {
  return (
 
    <div
      className="w-58 h-64 bg-cover bg-center rounded-3xl flex flex-col justify-end overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      
      <div className="bg-slate-900/70 p-4 text-slate-200 backdrop-blur-xs">
        
        <h3 className="font-bold text-lg ">{country}</h3>
        <div className="flex justify-between items-center mt-1 text-xs font-semibold">
          <span className="text-amber-500 text-sm font-black">{price}</span>
          <span className="text-slate-400">{duration}</span>
        </div>

      </div>
    </div>
  );
}

export default Card;
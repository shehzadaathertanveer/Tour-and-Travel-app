import React from 'react';

import PlaneImg from "../../assets/Plane.png";
import faujji from "../../assets/MountFaujji.jpg";
import Paris from "../../assets/Paris.jpg";
import hawai from "../../assets/Hawai.jpg";
import Dubai from "../../assets/Dubai.jpg";
import Bankok from "../../assets/Bankok.jpg";
import Swizerland from "../../assets/swizerland.jpg";

import Card from './card';

function Packages() {
  return ( 
    <div 
      className="w-full min-h-screen bg-cover bg-center py-20 px-4 md:px-12 flex flex-col items-center gap-5"
      style={{ backgroundImage: `url(${PlaneImg})` }}
    >
      <div className="text-center bg-slate-950/40 backdrop-blur-md p-4 rounded-2xl">
        <h2 className="text-slate-200 text-3xl md:text-4xl font-black uppercase tracking-wide">
          Popular <span className="text-amber-500">Packages</span>
        </h2>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8 w-full max-w-6xl">

        <Card bgImg={faujji} country="Honshu, Japan" price="3499$" duration="2 weeks"/>
        <Card bgImg={Paris} country="Paris, France" price="2999$" duration="1 week"/>
        <Card bgImg={hawai} country="Maui, Hawaii" price="4200$" duration="10 days"/>
        <Card bgImg={Dubai} country="Dubai, UAE" price="2500$" duration="8 days"/>
        <Card bgImg={Bankok} country="Bangkok, Thailand" price="1800$" duration="3 days"/>
        <Card bgImg={Swizerland} country="Zermatt, Switzerland" price="3999$" duration="2 weeks"/>
        
      </div>

    </div>
  );
}

export default Packages;
import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Packages from "./components/Package/Packages"
import Reviews from "./components/Review/Reviews";
import About from "./components/About";

function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-100  text-slate-800">
      <div> <Header/> </div>
      <div id="home-section"> <Home/> </div>
      <div id="packages-section"> <Packages/> </div>
      <div id="reviews-section"> <Reviews/> </div>
      <div id="about-section"> <About/> </div>
    </div>
  );
}

export default App;

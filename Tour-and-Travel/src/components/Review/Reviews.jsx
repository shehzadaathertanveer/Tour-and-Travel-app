import React from 'react';
import reviewBg from "../../assets/ReviewBG.jpg"
import AddReview from './AddReview';
import Ali from "../../assets/Ali.jpg"
import Olivia from "../../assets/olivia.jpg"
import Alex from "../../assets/alex.jpg"


function Reviews() {
    return (
        <div
        className="w-full min-h-screen bg-cover bg-center py-20 px-4 md:px-12 flex flex-col items-center gap-10"
        style={{ backgroundImage: `url(${reviewBg})` }}
        >
            <div className="text-center bg-slate-950/40 backdrop-blur-md p-4 rounded-2xl">
                <h2 className="text-slate-200 text-3xl md:text-4xl font-black uppercase tracking-wide">
                Customer <span className="text-amber-500">Reviews</span>
                </h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 w-full max-w-6xl">

                <AddReview name="Emma" rating="4" review="One of the best vacations I ever had. Everything was perfect from the hotel to the roadmap. Looking forward to more vacations like this! :)"/>
                <AddReview profilePhoto={Alex} name="Alex" rating="5" review="WanderU made our honeymoon entirely stress-free. The booking process was incredibly simple and the eco-resort recommendations were 10/10."/>
                <AddReview name="Sophia" rating="5"  review="Unbelievable prices for the amount of luxury you get. Customer service helped me change my flight dates in less than 5 minutes. Highly recommend!" />
                <AddReview name="Liam" rating="4" review="Great experience overall. The local tour guides they partnered with were incredibly knowledgeable." />
                <AddReview profilePhoto={Olivia} name="Olivia" rating="5" review="Fast, reliable, and exactly as advertised. I saved almost $400 on my flight bundle." />
                <AddReview profilePhoto={Ali} name="Ali" rating="3" review="Great experience sir 👍"/>

            </div>
        </div>
      );
}

export default Reviews;
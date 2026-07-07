import React from 'react';
import Default from "../../assets/defaultUser.webp";

function AddReview({ profilePhoto, name, rating, review }) {

    if(!profilePhoto) {
        profilePhoto = Default;
    }

    const validRating = Math.floor(Number(rating)) || 5;

    return (  
        <div className="bg-slate-800 text-white w-full max-w-xs p-5 rounded-2xl flex flex-col gap-3 shadow-md">
            <div className='flex flex-row items-center gap-4'>
                <img src={profilePhoto} alt="user" className='h-12 w-12 rounded-full object-cover object-center shrink-0'/>
            
                <div className="flex flex-col">
                    <p className='font-bold text-slate-100'>{name}</p>
                    
                    <span className='text-amber-500 text-sm tracking-wide'>
                        {"★".repeat(validRating)}{"☆".repeat(5 - validRating)}
                    </span>
                </div>
            </div>
            <div className="text-slate-300 text-sm">
                "{review}"
            </div>
        </div>
    );
}

export default AddReview;
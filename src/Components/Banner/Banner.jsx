import React from 'react';
import BannerImg from "../../assets/banner-main.png"

const Banner = () => {
    return (
        <div className=' container mx-auto bg-gradient-to-r from-[#0A1A0A] to-[#1D1D1D] p-20 space-y-5 rounded-2xl mt-5'>

            <img className='mx-auto' src={BannerImg} alt="" />

            <h1 className='text-white text-center   text-2xl md:text-3xl lg:text-4xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>

            <h3 className=' md:text-2xl lg:text-3xl text-cyan-400 text-center'>Beyond Boundaries Beyond Limits</h3>

            <button className= ' btn  border-8 border-black rounded-[11px] text-black font-bold  outline-4 outline-amber-400 bg-amber-400 md:text-2xl p-5  flex  mx-auto '>Claim Free Credit</button>

        </div>
    );
};

export default Banner;
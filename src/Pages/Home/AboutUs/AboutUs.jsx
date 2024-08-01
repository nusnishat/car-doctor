import React from 'react';

const AboutUs = () => {
    return (
        <div className="hero text-black min-h-screen">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2">
                <div className=' relative'>
                    <img
                    src="/src/assets/images/about_us/person.jpg"
                    className="w-5/6 rounded-lg shadow-2xl" />
                     <img
                    src="/src/assets/images/about_us/parts.jpg"
                    className="w-1/2 rounded-lg shadow-2xl absolute top-1/2 right-5 border-white border-8" />
                </div>
                <div className='space-y-4'>
                    <h1 className="text-2xl text-orange-600 font-bold">About Us</h1>
                    <p className="font-bold text-3xl ">
                    We are qualified & of experience <br /> in this field
                    </p>
                    <p className='text-zinc-600'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='text-zinc-600'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn rounded-none bg-orange-600 border-none text-white font-semibold">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
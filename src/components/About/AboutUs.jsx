import React from 'react';
import LogoImg from "../../assets/images/TIANGLE.png";

const AboutSection = () => {
    return (
        <section className="relative bg-white overflow-hidden px-6 py-16 md:px-12 lg:px-24 flex items-center ">
            
          
            <div className="absolute inset-0 z-20 pointer-events-none select-none flex items-center justify-center">
                <div className="relative w-full h-full max-w-7xl mx-auto">
                    <img 
                        src={LogoImg} 
                        alt="Background Watermark"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                   w-[120%] max-w-none opacity-[0.03] lg:opacity-[0.07] 
                                   transform scale-150 lg:scale-110"
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

                {/* Left Content Column */}
                <div className="lg:col-span-5 space-y-8 z-30"> {/* Added higher Z-index */}
                    <div>
                        <span className="text-primary font-bold tracking-widest text-xs uppercase">About</span>
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mt-4 uppercase tracking-tight">
                            Ayfiz
                        </h1>
                        <div className="w-16 h-1 bg-primary mt-4"></div>
                    </div>

                    <div className="space-y-6 text-gray-500 leading-relaxed max-w-md">
                        <p>
                           The world doesn't need another company that does just one thing. It needs one that handles everything — and truly deliver on it,
                        </p>
                        <p className="font-medium text-gray-700 italic">
                            "There has to be a better way to work — so we built it."
                        </p>
                        <p>
                        Ayfiz Absolutes is a holding company designed for how business actually operates. Not in rigid categories. Not in perfectly defined departments. But in the dynamic, fast-moving reality 
                        where opportunities arise unexpectedly and challenges never arrive on schedule.
                        </p>
                        
                    </div>
                </div>

                {/* Right Content Column */}
                <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
                    {/* Dot Grid Background */}
                    <div className="absolute top-0 right-0 -mr-10 -mt-10 w-64 h-64 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:20px_20px] opacity-50 hidden md:block"></div>

                    {/* 2. The Card: Keep z-index lower than the logo if you want the logo ON TOP */}
                    {/* Or keep it higher if you want the logo BEHIND the card but over the dots */}
                    <div className="relative z-10 bg-white p-8 md:p-16 shadow-2xl rounded-sm border border-gray-50 max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
                            <span className="text-blue-800">Ready to be part of something bigger,</span>
                            <br />
                            <span className="text-gray-900">than a job title?</span>
                        </h2>

                        {/* Side Accent */}
                        <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 w-24 h-32 bg-white shadow-r-xl rounded-sm hidden xl:block border-l border-gray-50"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
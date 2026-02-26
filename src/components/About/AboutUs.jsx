import React from 'react';

const AboutSection = () => {
    return (
        <section className="relative  bg-white overflow-hidden px-6 py-16 md:px-12 lg:px-24 flex items-center">
            {/* Background Decor: Large "A" Watermark or Shape */}
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
                <span className="text-[60rem] font-serif font-bold text-gray-400 transform -translate-y-10">
                    A
                </span>
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

                {/* Left Content Column */}
                <div className="lg:col-span-5 space-y-8">
                    <div>
                        <span className="text-primary font-bold tracking-widest text-xs uppercase">About</span>
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mt-4 uppercase tracking-tight">
                            Ayfiz
                        </h1>
                        <div className="w-16 h-1 bg-primary mt-4"></div>
                    </div>

                    <div className="space-y-6 text-gray-500 leading-relaxed max-w-md">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect.
                        </p>
                        <p className="font-medium text-gray-700 italic">
                            "There has to be a better way to work - that's why we created."
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet
                            cszv, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipisci.
                        </p>
                    </div>
                </div>


                <div className="lg:col-span-7 relative flex justify-center lg:justify-end">

                    <div className="absolute top-0 right-0 -mr-10 -mt-10 w-64 h-64 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:20px_20px] opacity-50 hidden md:block"></div>


                    <div className="relative bg-white p-8 md:p-16 shadow-2xl rounded-sm border border-gray-50 max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
                            <span className="text-primary">Lorem ipsum dolor sit amet,</span>
                            <br />
                            <span className="text-gray-900">consectetur adipiscing elit</span>
                        </h2>

                        {/* Side Accent (The protruding white box) */}
                        <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 w-24 h-32 bg-white shadow-r-xl rounded-sm hidden xl:block border-l border-gray-50"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
import React from "react";

const JoinTeamSection = ({ scrollToJobs }) => {
  // Mock data for the floating elements to keep the JSX clean
  const floatingElements = [
    // {
    //   type: "img",
    //   src: "https://i.pravatar.cc/150?u=1",
    //   size: "h-8 w-8",
    //   pos: "top-0 -left-4",
    // },
    // {
    //   type: "dot",
    //   color: "bg-green-400",
    //   size: "h-2 w-2",
    //   pos: "top-2 right-20",
    // },
    // {
    //   type: "img",
    //   src: "https://i.pravatar.cc/150?u=2",
    //   size: "h-12 w-12",
    //   pos: "top-4 -right-10",
    // },
    // {
    //   type: "img",
    //   src: "https://i.pravatar.cc/150?u=3",
    //   size: "h-14 w-14",
    //   pos: "top-1/3 -right-20",
    // },
    // {
    //   type: "dot",
    //   color: "bg-blue-300",
    //   size: "h-1.5 w-1.5",
    //   pos: "top-1/2 -right-4",
    // },
      // {
      //   type: "dot",
      //   color: "bg-black",
      //   size: "h-1 w-1",
      //   pos: "bottom-1/3 right-24",
      // },
    // {
    //   type: "dot",
    //   color: "bg-indigo-500",
    //   size: "h-2 w-2",
    //   pos: "bottom-1/4 -right-8",
    // },
    // {
    //   type: "img",
    //   src: "https://i.pravatar.cc/150?u=4",
    //   size: "h-10 w-10",
    //   pos: "bottom-4 -left-2",
    // },
    // {
    //   type: "dot",
    //   color: "bg-blue-700",
    //   size: "h-3 w-3",
    //   pos: "bottom-2 right-16",
    // },
    // {
    //   type: "dot",
    //   color: "bg-gray-400",
    //   size: "h-6 w-6",
    //   pos: "bottom-0 -right-12",
    // },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-[#0A1889]">
            Join the team
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-md">
           You've been in jobs that almost fit. Teams that almost got it. Companies that almost had the culture. At Ayfiz, almost isn't in our vocabulary. We're building something real — across industries, across borders and we're looking for the people who've been waiting for a place that actually matches their ambition. This is it.
          </p>
          <button   onClick={scrollToJobs}
 className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 group">
            Open positions
            <svg
              className="w-4 h-4 transform group-hover:translate-y-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="relative flex justify-center items-center py-12">
          <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
              alt="Team member"
              className="w-full h-full object-cover brightness-75"
            />

            <button className="absolute inset-0 m-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-gray-800 border-b-[10px] border-b-transparent ml-1" />
            </button>
          </div>

          <div className="hidden md:block absolute inset-0">
            {floatingElements.map((el, index) =>
              el.type === "img" ? (
                <img
                  key={index}
                  src={el.src}
                  className={`absolute ${el.pos} ${el.size} rounded-full object-cover border-2 border-white shadow-sm`}
                  alt="Avatar"
                />
              ) : (
                <div
                  key={index}
                  className={`absolute ${el.pos} ${el.size} ${el.color} rounded-full opacity-60`}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTeamSection;

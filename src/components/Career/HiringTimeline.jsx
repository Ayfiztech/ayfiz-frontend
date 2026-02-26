import React from 'react';

const steps = [
  { id: '01', title: "Find a role that suits you", desc: "Discover open positions and find your desired one in the Visioncraft website, job listings or social media.", side: 'right' },
  { id: '02', title: "Send your application", desc: "Some simple questions should be answered and your contact information is required.", side: 'left' },
  { id: '03', title: "Receive your interview invite", desc: "We review all applications within 3 working days and send invitation to candidates.", side: 'right' },
  { id: '04', title: "Choose an interview slot", desc: "You will have a friendly discussion with the CEO and your supervisor to talk about the work, life and etc.", side: 'left' },
  { id: '05', title: "Preliminary interview", desc: "Sometimes, we ask candidates to participate in some technical challenge that is designated to demonstrate candidates' proficiency.", side: 'right' },
  { id: '06', title: "Meet the your teammates", desc: "To us is crucial to make sure all team members feel comfortable. It is why we do try to have diverse but culturally fitted team members.", side: 'left' },
  { id: '07', title: "Meet With Higher Officials", desc: "Your colleagues are waiting for you to say a warm welcome.", side: 'right' },
];

const Step = ({ id, title, desc, side }) => (
  <div className={`relative flex items-center justify-between mb-12 w-full ${side === 'left' ? 'flex-row-reverse' : ''}`}>
    {/* Text Content */}
    <div className={`w-[45%] ${side === 'left' ? 'text-right' : 'text-left'}`}>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>

    {/* Center Circle */}
    <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
      <div className={`w-10 h-10 rounded-full bg-white border-2 flex items-center justify-center text-sm font-bold shadow-sm ${id === '01' ? 'border-blue-600 text-blue-600 ring-4 ring-blue-50' : 'border-gray-200 text-gray-400'}`}>
        {id}
      </div>
    </div>

    {/* Empty spacer for the other side */}
    <div className="w-[45%]" />
  </div>
);

const HiringTimeline = () => {
  return (
    <section className="relative w-full min-h-screen py-24 px-6 overflow-hidden bg-white">
      {/* Decorative Background Gradient */}
      
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2D3154] mb-6">
          How to become a Ayfizian?
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Joining us couldn't be easier! Check out our application process down below. If you have the talent we need, then we'll be meeting you soon!
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* The Vertical Connecting Line */}
        <div className="absolute left-1/2 top-5 bottom-12 w-[2px] bg-gray-100 -translate-x-1/2" />

        <div className="flex flex-col items-center">
          {steps.map((step) => (
            <Step key={step.id} {...step} />
          ))}

          {/* Final Rocket/Journey Step */}
          <div className="relative flex flex-col items-center mt-4">
            <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center shadow-sm z-10">
              <span className="text-lg">🤝</span>
            </div>
            <p className="mt-4 font-bold text-gray-900">Start a new journey!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringTimeline;
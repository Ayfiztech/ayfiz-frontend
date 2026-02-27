import React from "react";
import job from "../../assets/images/jobbg.png"

const steps = [
  {
    id: "01",
    title: "Find a Role That Suits You",
    desc: "Browse our open positions below, on job boards, or follow us on social. Find the role that makes you think 'that's exactly what I should be doing'.",
    side: "right",
  },
  {
    id: "02",
    title: "Send Your Application",
    desc: "No 47-page forms. Answer a few honest questions, tell us who you are, and hit send. We promise a real human reads it.",
    side: "left",
  },
  {
    id: "03",
    title: "Receive Your Interview Invite",
    desc: "We review every application within 3 working days. If there's a fit, you'll hear from us fast. We respect your time.",
    side: "right",
  },
  {
    id: "04",
    title: "Choose Your Interview Slot",
    desc: "Pick a time that works for you. This is a conversation — not an interrogation. We want to talk about the work, the life, and everything in between.",
    side: "left",
  },
  {
    id: "05",
    title: "Preliminary Interview",
    desc: "A friendly, honest chat with the CEO and your future supervisor. No trick questions. No performance. Just two people figuring out if this is the right match.",
    side: "right",
  },
  {
    id: "06",
    title: "Meet Your Teammates",
    desc: "Sometimes we'll invite you to take on a small technical challenge — not to test you, but to give you a real taste of the kind of work you'd be doing. Consider it a preview.",
    side: "left",
  },
  {
    id: "07",
    title: "Start a New Journey",
    desc: "Welcome to the team, Ayfizian. Your colleagues are ready. Your desk is waiting. And the work that's been waiting for someone exactly like you — it's yours now",
    side: "right",
  },
];

const Step = ({ id, title, desc, side }) => (
  <div
    className={`relative flex items-center justify-between mb-12 w-full ${side === "left" ? "flex-row-reverse" : ""}`}
  >
    {/* Text Content */}
    <div className={`w-[45%] ${side === "left" ? "text-right" : "text-left"}`}>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>

    {/* Center Circle */}
    <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
      <div
        className={`w-10 h-10 rounded-full bg-white border-2 flex items-center justify-center text-sm font-bold shadow-sm ${id === "01" ? "border-blue-600 text-blue-600 ring-4 ring-blue-50" : "border-gray-200 text-gray-400"}`}
      >
        {id}
      </div>
    </div>

    {/* Empty spacer for the other side */}
    <div className="w-[45%]" />
  </div>
);

const HiringTimeline = () => {
  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-white">
     <img 
    src={job} 
    alt=""
    className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[150%] h-[700px] 
               object-cover   pointer-events-none " 
  />

      <div className="max-w-4xl mx-auto text-center mb-20 mt-12 relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2D3154] mb-6">
          How to Become a Ayfizian?
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Joining us couldn't be easier! Check out our application process down
          below.
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

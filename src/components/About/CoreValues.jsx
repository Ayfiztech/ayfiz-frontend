import React from 'react';
import ValueCard from '../Common/ValueCard';
import { 
  HiOutlineUserGroup, HiOutlineLightningBolt, HiOutlineTrendingUp, 
  HiOutlineSearch, HiOutlineShieldCheck, HiOutlineSparkles,
  HiOutlineFire, HiOutlineChatAlt2, HiOutlineEmojiHappy, HiOutlineBriefcase 
} from "react-icons/hi";
const valuesData = [
  // Column 1
  { 
    number: "01", 
    title: "Deliver the best customer experience", 
    subtitle: "(#BEATEXTS)", 
    color: "border-purple-400", 
    textColor: "text-purple-400", 
    Icon: HiOutlineUserGroup, // Added Icon
    col: 1 
  },
  { 
    number: "02", 
    title: "Embrace hard work", 
    subtitle: "(#HARDWORK)", 
    color: "border-blue-300", 
    textColor: "text-blue-300", 
    Icon: HiOutlineBriefcase,
    col: 1 
  },
  { 
    number: "03", 
    title: "Drive urgency", 
    subtitle: "(#URGENCY)", 
    color: "border-pink-300", 
    textColor: "text-pink-300", 
    Icon: HiOutlineLightningBolt,
    col: 1 
  },
  
  // Column 2
  { 
    number: "04", 
    title: "Grow 1% every day", 
    subtitle: "(#KEEPWRITINGBOOKS)", 
    color: "border-yellow-400", 
    textColor: "text-yellow-400", 
    Icon: HiOutlineTrendingUp,
    col: 2 
  },
  { 
    number: "05", 
    title: "Be in the details", 
    subtitle: "(#DETAILSMATTER)", 
    color: "border-green-300", 
    textColor: "text-green-300", 
    Icon: HiOutlineSearch,
    col: 2 
  },
  { 
    number: "06",  title: "Do hard things", subtitle: "(#RESILIENT)", color: "border-red-300", textColor: "text-red-300", Icon: HiOutlineShieldCheck, col: 2 },
  { 
    number: "07", title: "Be here to be exceptional", subtitle: "(#GREATNESS)", color: "border-indigo-400", textColor: "text-indigo-400", Icon: HiOutlineSparkles, col: 2 },
  
  // Column 3
  { 
    number: "08", title: "Be scrappy", subtitle: "(#SCRAPPY)", color: "border-blue-400", textColor: "text-blue-400", Icon: HiOutlineFire, col: 3 },
  { 
    number: "09", title: "Be direct", subtitle: "(#BEDIRECT)", color: "border-pink-400", textColor: "text-pink-400", Icon: HiOutlineChatAlt2, col: 3 },
  { 
    number: "10", title: "Be fun to work with", subtitle: "(#OPEN)", color: "border-yellow-500", textColor: "text-yellow-500", Icon: HiOutlineEmojiHappy, col: 3 },
];

const CoreValues = () => {
  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-end ">
          <h2 className="text-[#1e3a8a] text-4xl md:text-5xl font-serif font-bold italic">
            Core Values
          </h2>
        </div>

        {/* Staggered Grid Container */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Column 1 - Normal Position */}
          <div className="flex-1 flex flex-col gap-8 w-full">
            {valuesData.filter(v => v.col === 1).map((val) => (
              <ValueCard key={val.number} {...val} />
            ))}
          </div>

          {/* Column 2 - Pushed down by 3rem (mt-12) */}
          <div className="flex-1 flex flex-col gap-8 md:mt-12 w-full">
            {valuesData.filter(v => v.col === 2).map((val) => (
              <ValueCard key={val.number} {...val} />
            ))}
          </div>

          {/* Column 3 - Pushed down by 6rem (mt-24) */}
          <div className="flex-1 flex flex-col gap-8 md:mt-24 w-full">
            {valuesData.filter(v => v.col === 3).map((val) => (
              <ValueCard key={val.number} {...val} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreValues;
import React from 'react';
import { 
  MdOutlineAccessTime, 
  MdOutlineFitnessCenter, 
  MdOutlineSecurity, 
  MdOutlineCelebration,
  MdOutlineSchool,
  MdOutlineRedeem
} from 'react-icons/md';
import { 
  IoCalendarOutline, 
  IoWalletOutline, 
  IoGlassesOutline, 
  IoRocketOutline,
  IoHeartOutline,
  IoPeopleOutline,
  IoColorWandOutline
} from 'react-icons/io5';

// Reusable Benefit Card Component
const BenefitCard = ({ icon: Icon, title }) => (
  <div 
    className="flex items-center gap-4 p-5 rounded-md shadow-sm transition-transform hover:scale-[1.02]"
    style={{
      background: 'linear-gradient(90deg, #DEE1FF 0%, #F0F9FF 100%)'
    }}
  >
    <div className="text-gray-700 text-2xl shrink-0">
      <Icon />
    </div>
    <span className="text-[15px] font-medium text-gray-800 leading-tight">
      {title}
    </span>
  </div>
);

const BenefitsGrid = () => {
  const benefitsData = [
    { icon: MdOutlineAccessTime, title: "Flexible working hours" },
    { icon: MdOutlineFitnessCenter, title: "Sport compensation" },
    { icon: MdOutlineSecurity, title: "Health care Insurance" },
    { icon: IoHeartOutline, title: "Marriage bonus" },
    { icon: IoColorWandOutline, title: "Fun team events" },
    { icon: IoRocketOutline, title: "Professional grow budget" },
    { icon: IoCalendarOutline, title: "30 days paid vacation" },
    { icon: IoWalletOutline, title: "Competitive salary" },
    { icon: IoGlassesOutline, title: "Compensation for eyeglasses" },
    { icon: MdOutlineSchool, title: "Allowance for first-graders" },
    { icon: MdOutlineRedeem, title: "Childbirth allowance" },
    { icon: IoPeopleOutline, title: "Employee referral bonus" },
    { icon: MdOutlineCelebration, title: "Birthdays celebration" },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold font-playfair text-[#0A1889] mb-4 tracking-tight">
            What benefits are waiting for you?
          </h2>
          <p className="text-gray-400 text-lg">
            Visioncraft offers a variety of hand-picked benefits that you can take advantage of!
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {benefitsData.map((benefit, index) => (
            <BenefitCard 
              key={index} 
              icon={benefit.icon} 
              title={benefit.title} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;
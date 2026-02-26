import React from 'react';


const CultureCard = ({ image, title, description }) => (
  <div className="bg-white p-4 shadow-sm flex flex-col h-full transition-transform hover:-translate-y-1">
    <div className="aspect-[4/3] overflow-hidden mb-6">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex flex-col flex-grow px-2 pb-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const WhyWorkWithUs = () => {
  const cultureData = [
    {
      title: "Company Values",
      description: "Trust, learning, honesty, and co-operation are the pillars that sit at the core of what we do.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Friendly atmosphere",
      description: "We hold a positive attitude in order to foster respect and decency for our entire team.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Work-life balance",
      description: "For us, a healthy personal life is just as important as the time you spend in the office.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Everyday grow",
      description: "We provide the necessary support to ensure your skills never stop growing.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=500"
    }
  ];

  return (
    <section className="bg-[#F7F9FC] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair text-[#0A1889] max-w-2xl mx-auto leading-tight">
            What make Ayfiz a great place to work?
          </h2>
        </header>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cultureData.map((item, index) => (
            <CultureCard 
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
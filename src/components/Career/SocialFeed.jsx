import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';

const SocialFeed = () => {
  const socialLinks = [
    { name: 'Facebook', icon: FaFacebook, href: '#' },
    { name: 'Youtube', icon: FaYoutube, href: '#' },
    { name: 'Twitter', icon: FaTwitter, href: '#' },
    { name: 'Instagram', icon: FaInstagram, href: '#' },
    { name: 'LinkedIn', icon: FaLinkedin, href: '#' },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Left Text and Large Group Image */}
        <div className="lg:w-2/5 space-y-8">
          <h2 className="text-4xl md:text-5xl font-playfair text-primary leading-tight">
            Follow us on social to see what we're up to!
          </h2>
          <div className="overflow-hidden rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
              alt="Team at work" 
              className="w-full h-[350px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* Center/Right Bento Grid */}
        <div className="lg:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-4 h-full">
          
          {/* Column 1 */}
          <div className="space-y-4">
            <div className="h-[250px] overflow-hidden rounded-sm">
              <img src="https://images.unsplash.com/photo-1513519245088-0e12902e35ca" alt="Office deco" className="w-full h-full object-cover" />
            </div>
            {/* Branding Block */}
            <div className="bg-black aspect-square flex items-center justify-center p-8 rounded-sm">
               <div className="grid grid-cols-3 gap-2">
                 {[...Array(9)].map((_, i) => (
                   <div key={i} className={`w-3 h-3 rounded-full ${i % 3 === 0 ? 'bg-white' : i % 3 === 1 ? 'bg-green-500' : 'bg-red-500'}`} />
                 ))}
               </div>
            </div>
          </div>

          {/* Column 2 - Tall Image */}
          <div className="h-full">
            <div className="h-[520px] overflow-hidden rounded-sm">
              <img src="https://images.unsplash.com/photo-1544167658-eee51f84c511" alt="Ping Pong" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Column 3 - Branding and Socials */}
          <div className="col-span-2 md:col-span-1 space-y-8">
            <div className="bg-black aspect-square flex items-center justify-center rounded-sm">
              {/* SVG approximation of the Ayfiz logo mark */}
              <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                <path d="M20 50 C20 30, 80 30, 80 50" stroke="#E879F9" strokeWidth="8" strokeLinecap="round" />
                <circle cx="50" cy="50" r="10" fill="white" />
                <path d="M20 70 C20 90, 80 90, 80 70" stroke="#EF4444" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </div>

            <div className="space-y-4">
              <p className="text-gray-500 text-xs font-medium">
                We are eager to be in touch with you in the following channels:
              </p>
              <div className="grid grid-cols-2 gap-y-4">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="flex items-center gap-3 text-sm text-[#2D3154] font-semibold hover:text-blue-600 transition-colors"
                  >
                    <link.icon className="text-lg" />
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
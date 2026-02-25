import { useNavigate } from "react-router-dom";
import { FiCheck } from "react-icons/fi";

const OfferBlock = ({
  subtitle,
  title,
  image,
  paragraphs = [], 
  points = [],
}) => {
  const navigate = useNavigate();

  return (
    <section className="py-16 max-w-7xl mx-auto px-6 font-sans">
     
      <div className="grid lg:grid-cols-2 gap-16 items-start">
    
        <div>
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-1">
            {subtitle}
          </p>
          <h2 className="text-5xl font-serif font-semibold text-primary-dark mb-8">
            {title}
          </h2>
          <div className="rounded-2xl overflow-hidden ">
             <img src={image} alt={title} className="w-full h-auto object-cover" />
          </div>
        </div>

        
        <div className="pt-4">
          <p className="text-gray-700 leading-relaxed mb-4">{paragraphs[0]}</p>
          <p className="text-gray-700 leading-relaxed mb-8">{paragraphs[1]}</p>

          <div className="space-y-4 mb-10">
            {points.map((item, i) => (
              <div key={i} className="flex gap-3 items-start group">
              
                <div className="mt-1 flex-shrink-0 w-5 h-5 border-2 border-primary rounded-sm flex items-center justify-center">
                  <FiCheck className="text-primary text-xs stroke-[4]" />
                </div>
                <p className="text-gray-800 font-medium leading-tight">{item}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate("/contact")}
            className="bg-[#2b4594] hover:bg-blue-900 text-white px-10 py-4 rounded-sm flex items-center gap-4 transition-all duration-300 font-semibold"
          >
            Contact Us <span className="text-xl">→</span>
          </button>
        </div>
      </div>

      {/* Bottom Section: Two Wide Paragraphs */}
      <div className="grid lg:grid-cols-2 gap-16 mt-16">
        <p className="text-gray-700 leading-relaxed">
          {paragraphs[2]}
        </p>
        <p className="text-gray-700 leading-relaxed">
          {paragraphs[3]}
        </p>
      </div>
    </section>
  );
};

export default OfferBlock;
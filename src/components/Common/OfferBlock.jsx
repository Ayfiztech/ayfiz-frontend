import { useNavigate } from "react-router-dom";
import { FiCheck } from "react-icons/fi";

const OfferBlock = ({
  subtitle,
  title,
  image,
  paragraphs = [],
  points = [],
  reverse = false,
}) => {
  const navigate = useNavigate();

  return (
    <section className="py-16">
      <div
        className={`max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
       
        <div>
             <p className="text-primary text-sm font-medium uppercase tracking-wider font-playfair">
            {subtitle}
          </p>

          <h2 className="text-4xl font-semibold text-primary-dark mb-4 mt-2 font-playfair">{title}</h2>

         
          <img
            src={image}
            alt={title}
            className="w-full object-cover"
          />

          {paragraphs[0] && (
            <p className="mt-6 text-gray-600 leading-relaxed">
              {paragraphs[0]}
            </p>
          )}
        </div>

        {/* Content */}
        <div>
          {paragraphs[1] && (
            <p className="mt-4 text-gray-600 leading-relaxed">
              {paragraphs[1]}
            </p>
          )}

          {/* Points */}
          <div className="mt-6 space-y-3">
            {points.map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <FiCheck className="text-blue-600 mt-1" />
                <p className="text-gray-600">{item}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <button
            onClick={() => navigate("/contact")}
            className="mt-8 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded flex items-center gap-2 transition"
          >
            Contact Us →
          </button>

          {paragraphs[2] && (
            <p className="mt-6 text-gray-600 leading-relaxed">
              {paragraphs[2]}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default OfferBlock;
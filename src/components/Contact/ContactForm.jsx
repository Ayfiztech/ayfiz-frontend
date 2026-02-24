import { FiPhone, FiMail } from "react-icons/fi";
import { FaFax } from "react-icons/fa";
import bgImage from "../../assets/images/contactbg.png";

const ContactForm = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
  

      <div className="relative  max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div>
          <h2 className="text-4xl font-semibold text-gray-900 font-playfair">
            Get in <span className="text-primary">Touch</span>
          </h2>

          <p className="mt-3 text-gray-600 max-w-md">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>

         
          <div className="mt-8 max-w-xl">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Name *"
                className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-[#2f4fa3]"
                required
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-[#2f4fa3]"
              />

              <input
                type="text"
                placeholder="Phone number *"
                className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-[#2f4fa3]"
                required
              />

              <select className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-[#2f4fa3]">
                <option>How did you find us?</option>
                <option>Google</option>
                <option>Social Media</option>
                <option>Friend</option>
              </select>

              <button
                type="submit"
                className="w-full bg-[#2f4fa3] hover:bg-[#223a7a] text-white py-3 font-semibold transition"
              >
                SEND
              </button>
            </form>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <FiPhone className="mt-1 text-[#2f4fa3]" />
                <div>
                  <p className="font-semibold">PHONE</p>
                  <p>03 5432 1234</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <FaFax className="mt-1 text-[#2f4fa3]" />
                <div>
                  <p className="font-semibold">FAX</p>
                  <p>03 5432 1234</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <FiMail className="mt-1 text-[#2f4fa3]" />
                <div>
                  <p className="font-semibold">EMAIL</p>
                  <p>info@marcc.com.au</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT MAP */}
        <div className="relative w-full h-[500px] rounded overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Kochi,Kerala&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
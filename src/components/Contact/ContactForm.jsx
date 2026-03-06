import React, { useState } from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import bgImage from "../../assets/images/contactbg.png";

const ContactForm = ({ mapUrl }) => {
  console.log(' mapUrl', mapUrl);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [source, setSource] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {
      name: "",
      email: "",
      phone: "",
    };

    setSuccessMessage("");
    setErrorMessage("");
    if (!name) {
      newErrors.name = "Name is required";
    } else if (name.length > 20) {
      newErrors.name = "Name must be less than 20 characters";
    }

    const phoneRegex = /^[0-9]+$/;

    if (!phone) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(phone)) {
      newErrors.phone = "Phone number must contain only numbers";
    } else if (phone.length > 12) {
      newErrors.phone = "Phone number must be maximum 12 digits";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.phone) {
      return;
    }

    try {
      const response = await fetch(
        "https://demo.ayfiz.com/ayfiz/api/contact-us",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            where_did_you_find_us: source,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {

        setSuccessMessage(data.message);
        setTimeout(() => {
          setSuccessMessage('');
        }, 2000)

        setName("");
        setPhone("");
        setEmail("");
        setSource("");

        setErrors({
          name: "",
          email: "",
          phone: "",
        });
      } else {
        setErrorMessage(data.message || "Something went wrong");

        setTimeout(() => {
          setErrorMessage("");
        }, 2000);

      }
    } catch (err) {
      console.log(err);
      setErrorMessage("Failed to submit form");

      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  };

  return (
    <section
      className="relative w-full  
  bg-[linear-gradient(to_right,_white_75%,_#2f4fa3_25%)]
  lg:bg-[linear-gradient(to_right,_white_75%,_#2f4fa3_25%)]
  bg-white"
    >
      <div className="relative  max-w-7xl mx-auto p-6 grid lg:grid-cols-2 gap-12 items-center ">
        <div className="bg-white rounded-md">
          <h2 className="text-4xl font-semibold text-gray-900 font-playfair">
            Get in <span className="text-primary">Touch</span>
          </h2>

          <p className="mt-3 text-gray-600 max-w-md">
           Reach out to our team today and let’s discuss how we can support your business goals.  
          </p>

          <div className="mt-8 max-w-xl mr-2">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <input
                  type="text"
                  placeholder="Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#2F4B9A] bg-transparent"
                />
                {errors.name && (
                  <span className="text-red-500 text-xs">{errors.name}</span>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#2F4B9A] bg-transparent"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">{errors.email}</span>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Phone number *"
                  value={phone}
                  onChange={(e) => { if (/^[0-9]+$/.test(e.target.value)) { setPhone(e.target.value) } }}
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#2F4B9A] bg-transparent"
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs">{errors.phone}</span>
                )}
              </div>
              <select
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className="w-full border border-gray-300 px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-[#2F4B9A] bg-transparent"
              >
                <option value="">How did you find us?</option>
                <option value="google">Google</option>
                <option value="linkedin">Social Media</option>
                <option value="instagram">Friend</option>
              </select>
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#2F4B9A] text-white py-4 font-semibold tracking-wide hover:bg-[#253d7a] transition"
                >
                  SEND
                </button>
                {successMessage && (
                  <p className="text-green-600 text-xs mt-2 text-center">
                    {successMessage}
                  </p>
                )}

                {errorMessage && (
                  <p className="text-red-600 text-xs mt-2 text-center">
                    {errorMessage}
                  </p>
                )}
              </div>
            </form>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-sm ">
              <div className="flex items-start gap-2">
                <FiPhone size={20} className="mt-2 " />
                <div>
                  <p className="font-semibold">PHONE</p>
                  <p className="text-[#2f4fa3]">919895127233</p>
                </div>
              </div>

              <div className="flex items-start gap-2">  
                <FaWhatsapp size={20} className="mt-2 " />
                <div>
                  <p className="font-semibold">What's Up</p>
                  <p className="text-[#2f4fa3]">919895127233</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <FiMail size={20} className="mt-2 " />
                <div>
                  <p className="font-semibold">EMAIL</p>
                  <p className="text-[#2f4fa3]">info@ayfiz.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT MAP */}
        <div className="relative w-full h-[500px] rounded overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            src={mapUrl}
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

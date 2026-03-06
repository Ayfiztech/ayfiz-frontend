import React, { useState } from "react";
import ill from "../../assets/images/ill.png";
import { FaWhatsapp } from "react-icons/fa";
const IdeaForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    startup_name: "",
    idea: "",
    pitch_deck: null
  });

  const [errors, setErrors] = useState({});
  const [fileName, setFileName] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "pitch_deck") {
      const file = files[0];
      if (file) {
        setFileName(file.name);

        setFormData((prev) => ({
          ...prev,
          pitch_deck: file
        }));

        setErrors((prev) => ({ ...prev, pitch_deck: "" }));
      }
    }
    else if (name === "idea") {
      const words = value.trim().split(/\s+/);

      if (words.length <= 20) {
        setFormData((prev) => ({
          ...prev,
          idea: value
        }));

        setErrors((prev) => ({ ...prev, idea: "" }));
      }
    } else if (name === "phone") {
      // allow only numbers and limit to 10 digits
      const numericValue = value.replace(/\D/g, "").slice(0, 10);

      setFormData((prev) => ({
        ...prev,
        [name]: numericValue
      }));

      setErrors((prev) => ({
        ...prev,
        phone: "" 
      }));
    }
    else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));

      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter valid email";
    }

    if (!formData.startup_name.trim()) {
      newErrors.startup_name = "Startup name is required";
    }

    if (!formData.idea.trim()) {
      newErrors.idea = "Idea is required";
    }

    if (!formData.pitch_deck) {
      newErrors.pitch_deck = "Please upload pitch deck";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const data = new FormData();
    data.append("name", formData.name);
    data.append("phone", formData.phone);
    data.append("email", formData.email);
    data.append("startup_name", formData.startup_name);
    data.append("idea", formData.idea);
    data.append("pitch_deck", formData.pitch_deck);

    try {
      const response = await fetch("/api/ayfiz/api/ideas", {
        method: "POST",
        body: data
      });

      const result = await response.json();
      console.log("Server response:", result);
      if (response.ok) {
        setMessage(result.message);
      }

      // reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        startup_name: "",
        idea: "",
        pitch_deck: null
      });

      setFileName("");
      setErrors({});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="relative w-full flex flex-col lg:flex-row overflow-hidden bg-white">

      <div className="lg:hidden bg-[#2F4B9A] flex justify-center items-end pt-10">
        <img src={ill} alt="Illustration" className="w-[90%] object-contain" />
      </div>

      <div className="hidden lg:block absolute right-0 top-0 w-[32%] h-full bg-[#2F4B9A]" />

      {/* LEFT */}
      <div className="relative w-full lg:w-[58%] px-6 sm:px-12 lg:pl-28 lg:pr-16 py-16 flex items-center">
        <div className="max-w-xl w-full">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-semibold text-black leading-tight">
            Have an <span className="text-[#2F4B9A]">Idea?</span>
          </h1>

          <p className="text-gray-800 mt-6 mb-10 leading-relaxed text-sm sm:text-base">
            Let's build it. We turn your vision into powerful digital solutions that drive real results.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>

            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Name *"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#2F4B9A]"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Phone + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Phone number *"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#2F4B9A]"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#2F4B9A]"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Startup */}
            <div>
              <input
                type="text"
                placeholder="Start up name"
                name="startup_name"
                value={formData.startup_name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#2F4B9A]"
              />
              {errors.startup_name && <p className="text-red-500 text-xs mt-1">{errors.startup_name}</p>}
            </div>

            {/* Idea */}
            <div>
              <textarea
                name="idea"
                value={formData.idea}
                onChange={handleChange}
                placeholder="Share your idea (max 20 words)"
                rows="5"
                className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#2F4B9A]"
              />
              {errors.idea && <p className="text-red-500 text-xs mt-1">{errors.idea}</p>}
            </div>

            {/* File Upload */}
            <div>
              <label className="border border-gray-300 px-4 py-3 flex justify-between items-center text-gray-500 cursor-pointer">
                <span>Upload your pitch deck</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
                <input
                  type="file"
                  name="pitch_deck"
                  className="hidden"
                  onChange={handleChange}
                />
              </label>

              {fileName && (
                <p className="text-green-600 text-xs mt-2">
                  File selected: {fileName}
                </p>
              )}

              {errors.pitch_deck && (
                <p className="text-red-500 text-xs mt-1">{errors.pitch_deck}</p>
              )}
            </div>

            <button className="w-full bg-[#2F4B9A] text-white py-4 font-semibold hover:bg-[#253d7a] transition">
              SEND
            </button>
          </form>
          {message && (
            <p className="text-green-600 mt-3 text-xs">
              {message}
            </p>
          )}
            {/* CONTACT INFO */}
          <div className="flex flex-wrap gap-10 mt-14 text-xs text-gray-600">
            <div className="flex items-start gap-3">
              <span className="text-lg">📞</span>
              <div>
                <p className="font-bold text-black">PHONE</p>
                <p>+919895127233</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-lg"><FaWhatsapp/></span>
              <div>
                <p className="font-bold text-black">Whatsapp</p>
                <p>+919895127233</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-lg">✉️</span>
              <div>
                <p className="font-bold text-black">EMAIL</p>
                <p>info@ayfiz.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative hidden lg:flex w-[52%] items-end justify-center">
        <img
          src={ill}
          alt="Illustration"
          className="absolute bottom-0 w-[115%] max-w-none object-contain"
        />
      </div>
      <p></p>
    </section>
  );
};

export default IdeaForm;
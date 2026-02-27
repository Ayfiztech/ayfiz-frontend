import { useState, useEffect } from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaFax } from "react-icons/fa";
import bgImage from "../../assets/images/contactbg.png";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost/ayfiz";

const DEFAULT_MAP_SRC = "https://www.google.com/maps?q=Kochi,Kerala&output=embed";

const getMapEmbedUrl = (location) => {
  if (!location) return DEFAULT_MAP_SRC;
  if (location.map_url) {
    const url = location.map_url.trim();
    return url.includes("output=embed") ? url : `${url}${url.includes("?") ? "&" : "?"}output=embed`;
  }
  const parts = [location.address, location.city, location.state_region, location.country].filter(Boolean);
  const query = parts.length ? parts.join(", ") : location.name;
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
};

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    where_did_you_find_us: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const [locations, setLocations] = useState([]);
  const [locationsLoading, setLocationsLoading] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/locations`);
        if (!res.ok) return;
        const data = await res.json();
        const list = data.locations || [];
        setLocations(list);
        if (list.length > 0) setSelectedLocation(list[0]);
      } catch {
        setLocations([]);
      } finally {
        setLocationsLoading(false);
      }
    };
    fetchLocations();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError(null);
    setSuccess(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/contact-us`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          where_did_you_find_us: form.where_did_you_find_us || null,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const message = data.message || data.errors ? Object.values(data.errors).flat().join(" ") : "Something went wrong.";
        throw new Error(message);
      }
      const successMessage = data.message || "Thank you for your message. We will get back to you soon.";
      setSuccess(successMessage);
      setForm({ name: "", email: "", phone: "", where_did_you_find_us: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="relative  max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center ">
        <div>
          <h2 className="text-4xl font-semibold text-gray-900 font-playfair">
            Get in <span className="text-primary">Touch</span>
          </h2>

          <p className="mt-3 text-gray-600 max-w-md">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>

          <div className="mt-8 max-w-xl">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-[#2f4fa3]"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-[#2f4fa3]"
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone number *"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-[#2f4fa3]"
                required
              />

              <select
                name="where_did_you_find_us"
                value={form.where_did_you_find_us}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-[#2f4fa3]"
              >
                <option value="">How did you find us?</option>
                <option value="Google">Google</option>
                <option value="Social Media">Social Media</option>
                <option value="Friend">Friend</option>
              </select>

              {error && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}
              {success && (
                <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                  <p className="text-green-700 text-sm font-medium">{success}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2f4fa3] hover:bg-[#223a7a] disabled:opacity-70 text-white py-3 font-semibold transition"
              >
                {loading ? "Sending..." : "SEND"}
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

        {/* RIGHT MAP + LOCATIONS */}
        <div className="space-y-3">         
          <div className="relative w-full h-[500px] rounded overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src={getMapEmbedUrl(selectedLocation)}
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

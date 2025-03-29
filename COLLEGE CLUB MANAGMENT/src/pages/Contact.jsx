import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    email: "",
    companyName: "",
    interest: "",
    message: "",
    receiveUpdates: false,
    consentData: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="relative flex h-screen max-w-5xl ml-60 justify-center py-12 px-6 space-y-8 md:space-y-0 md:space-x-12 items-center">
    <div className="absolute inset-y-0 right-[-25%] h-full w-full bg-[radial-gradient(closest-side,rgba(255,0,182,.35),rgba(255,255,255,0))] rounded-lg -z-10"></div>
      
      <div className="flex flex-col md:flex-row w-full items-start md:space-x-12">
        <div className="md:w-1/3">
          <h2 className="text-3xl font-bold text-indigo-900">Contact Us</h2>
          <p className="mt-2 text-gray-600">
            We work with many colleges as well as non-institutional organisations.
          </p>

          <h3 className="mt-6 text-indigo-700 font-semibold">OUR EMAIL ADDRESS</h3>
          <p className="text-lg font-bold text-indigo-900">info@club.com</p>

          <button className="mt-4 border-2 border-indigo-600 text-indigo-600 rounded-full px-4 py-2 hover:bg-indigo-600 hover:text-white transition">
            Book a Calendly Call
          </button>
        </div>

        <form onSubmit={handleSubmit} className="relative md:w-2/3 space-y-6 bg-white p-8 rounded-lg shadow-md w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name..."
              value={formData.firstName}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md w-full"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name..."
              value={formData.lastName}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md w-full"
              required
            />
            
            <input
              type="email"
              name="email"
              placeholder="Enter your email address..."
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md w-full"
              required
            />
            
            <input
              type="text"
              name="interest"
              placeholder="Enter your interest..."
              value={formData.interest}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md w-full"
            />
          </div>

          <textarea
            name="message"
            placeholder="Enter your main message..."
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md w-full h-28"
            required
          />

          {/* Privacy Consent */}
          <p className="text-xs text-gray-600">
            www.clubbeat.com is committed to protecting and respecting your privacy. If you consent to us contacting you,
            please tick below:
          </p>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="receiveUpdates"
              checked={formData.receiveUpdates}
              onChange={handleChange}
              className="h-5 w-5 text-indigo-600"
            />
            <label className="text-gray-700">I agree to receive other communications from clubbeat</label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="consentData"
              checked={formData.consentData}
              onChange={handleChange}
              className="h-5 w-5 text-indigo-600"
            />
            <label className="text-gray-700">I agree to allow www.clubbeat.com to store and process my personal data.</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
}

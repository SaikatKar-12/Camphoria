import React from "react";
// import { cn } from "@/lib/utils";
import { Spotlight } from "@/Components/ui/Spotlight";
import bgImage from '@/assets/party.jpeg';
export default function SpotlightPreview() {
  return (
    <div
      className="relative flex h-screen w-full overflow-hidden antialiased md:items-center md:justify-center">
     
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
      <div className="min-h-screen w-full flex flex-row items-center justify-center bg-black text-white">
      <div className="w-[90%] md:w-[70%] lg:w-[60%] xl:w-[60%] flex flex-row gap-6 shadow-lg rounded-lg overflow-hidden bg-[#111] p-6">
        {/* Login Form */}
        <div className="w-[70%]">
          <h1 className="text-3xl font-bold mb-4 text-center">LOGO<span className="text-green-500">X</span></h1>
          <p className="text-gray-400 text-left mb-6">Login to your account</p>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm mb-2">Your Email</label>
            <div className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-500"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-sm mb-2">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-500"
              />
            </div>
          </div>

          {/* Keep Me Signed In & Forgot Password */}
          <div className="flex justify-between text-gray-400 text-sm mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Keep me signed in
            </label>
            <a href="#" className="text-green-400 hover:underline">Forgot password?</a>
          </div>

          {/* Login Button */}
          <button className="w-full py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition">
            Login
          </button>

          {/* Social Login */}
          <p className="text-center text-gray-400 mt-6">Choose your preferred method to continue</p>
          <div className="flex justify-center mt-4 gap-4">
            <button className="bg-gray-800 p-2 rounded-lg w-20 hover:bg-gray-700">
              <img src="https://img.icons8.com/color/48/google-logo.png" className="h-6 mx-auto" alt="Google" />
            </button>
            <button className="bg-gray-800 p-2 rounded-lg w-20 hover:bg-gray-700">
              <img src="https://img.icons8.com/color/48/facebook-new.png" className="h-6 mx-auto" alt="Facebook" />
            </button>
            <button className="bg-gray-800 p-2 rounded-lg w-20 hover:bg-gray-700">
              <img src="https://img.icons8.com/color/48/microsoft.png" className="h-6 mx-auto" alt="Microsoft" />
            </button>
          </div>

          {/* Sign Up Redirect */}
          <p className="text-center text-gray-400 mt-6">
            Not registered yet? <a href="#" className="text-green-400 hover:underline">Try Sign Up</a>
          </p>
        </div>

        {/* Right Side - Image Wrapped Inside the Left Section */}
        <div className="w-full mt-1 bg-cover bg-center rounded-lg overflow-hidden" style={{ backgroundImage: `url(${bgImage})`, height: '525px' }}></div>
      </div>
    </div>
    </div>
  );
}

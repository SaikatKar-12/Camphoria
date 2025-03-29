import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Magnet from "./magicui/Magnet";

export const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_4px_10px_rgba(255,255,255,0.2)]">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-2">
        {/* Left Side - Logo */}
        <div className="text-2xl font-bold text-cyan-700">LOGO</div>

        {/* Center - Navigation */}
        <SlideTabs />

        {/* Right Side - Login & Signup */}
        <div className="flex gap-4">
          <Link to="/login">
            <Magnet Btn_type="Login" />
          </Link>
          <Link to="/signup">
            <Magnet Btn_type="Signup" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      className="relative flex rounded-full bg-white/20 backdrop-blur-sm shadow-lg border border-white/20 p-1"
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Features</Tab>
      <Tab setPosition={setPosition}>Events</Tab>
      <Tab setPosition={setPosition}>FAQ</Tab>
      <Tab setPosition={setPosition}>Contact Us</Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  const handleScroll = () => {
    const sectionId = children.toLowerCase().replace(/\s/g, "-"); // Converts "Contact Us" to "contact-us"
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <li
      ref={ref}
      onClick={handleScroll} // Scroll to section
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-gray-400 mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{ ...position }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

export default NavBar;

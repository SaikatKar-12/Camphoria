import React from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import Hero from "./pages/Hero";
import Features from "./pages/Features";
import Events from "./pages/Events";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Faq from "./pages/FAQ";
import Contact from "./pages/Contact";
import Testimonial from "./pages/Testimonial";
import Footer from "./pages/Footer";
import NavBar from "./Components/NavBar";
import Dashboard from "./pages/Student_Login/Dashboard";
import Upcomingevent from "./pages/Student_Login/Upcomingevents";
import Ticket from "./pages/Student_Login/ticket";
function App() {
  const location = useLocation();
  
  // Hide Navbar for Login & Signup pages
  const hideNavbar = location.pathname === "/login" || location.pathname === "/signup";

  console.log("Navbar hidden:", hideNavbar, "Current path:", location.pathname);

  return (
    // <div className="relative">
    //   {/* Conditional rendering to hide the Navbar */}
    //   {!hideNavbar && <NavBar />}

    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         <>
    //           <section id="home">
    //             <Hero />
    //           </section>
    //           <section id="features">
    //             <Features />
    //           </section>
    //           <section id="events">
    //             <Events />
    //           </section>
    //           <Testimonial />
    //           <section id="faq">
    //             <Faq />
    //           </section>
    //           <section id="contact-us">
    //             <Contact />
    //           </section>
    //           <Footer />
    //         </>
    //       }
    //     />

    //     {/* Login and Signup Pages */}
    //     <Route path="/login" element={<AuthPage component={<Login />} />} />
    //     <Route path="/signup" element={<AuthPage component={<Signup />} />} />
    //   </Routes>
    // </div>
    <Dashboard/>
    // <Upcomingevent/>
    // <Ticket/>
  );
}

// Wrapped Login & Signup to show 'Back to Home' button at the top right
const AuthPage = ({ component }) => (
  <div className="flex flex-col items-center justify-center min-h-screen relative">
    <Link
      to="/"
      className="absolute top-4 right-4 bg-blue-600 z-10 text-white px-4 py-2 rounded-lg"
    >
      Back to Home
    </Link>
    {component}
  </div>
);

export default App;

// import { LampDemo } from "@/Components/Lamp_demo";
import { LampDemo } from "@/Components/Lamp_demo";
import "../index.css";

function FAQ() {
  return (
    <div className="app">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          {/* FAQ Header */}
          <LampDemo />
          

          {/* Contact Info Card */}
          <div className="contact-card">
            <h3 className="contact-title">Contact us</h3>
            <div className="contact-list">
              {/* Email */}
              <div className="contact-item">
                <div className="contact-icon email-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"></path>
                  </svg>
                </div>
                <div className="contact-details">
                  <p className="contact-label">Email</p>
                  <p className="contact-value">hello@mantine.dev</p>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-item">
                <div className="contact-icon phone-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-details">
                  <p className="contact-label">Phone</p>
                  <p className="contact-value">+49 (800) 335 35 35</p>
                </div>
              </div>

              {/* Address */}
              <div className="contact-item">
                <div className="contact-icon address-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-details">
                  <p className="contact-label">Address</p>
                  <p className="contact-value">844 Morris Park avenue</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="contact-item">
                <div className="contact-icon hours-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="contact-details">
                  <p className="contact-label">Working hours</p>
                  <p className="contact-value">8 a.m. – 11 p.m.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Cards */}
      <div className="category-cards">
  {[
    {
      title: "Customer Support",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "User Guides",
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Managment Queries",
      image:
        "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=1000&auto=format&fit=crop",
    },
  ].map((item, index) => (
    <div className="category-card" key={index}>
      <div
        className="category-card-image"
        style={{ backgroundImage: `url('${item.image}')` }}
      ></div>
      <div className="category-card-overlay">
        <h3 className="category-title">{item.title}</h3>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

export default FAQ;

import React from "react";
import { Link } from "react-router-dom";
import supportImage1 from "../assets/support1.jpg";
import supportImage2 from "../assets/support2.jpg";
import supportImage3 from "../assets/support3.jpg";

const SupportPage = () => {
  return (
    <div className="support-page bg-i3m-dark text-white min-h-screen">
      {/* Hero Section */}
      <section className="hero-section text-center py-20 bg-gradient-to-b from-i3m-purple via-i3m-dark to-i3m-pink relative">
        <h1 className="text-5xl font-bold mb-6">I3M Support Services</h1>
        <p className="text-lg mb-10 max-w-3xl mx-auto">
          At I3M, we are dedicated to helping you succeed. Explore our support services designed to assist you every step of the way.
        </p>
        <div className="inline-block bg-i3m-dark rounded-lg p-4 shadow-lg">
          <h2 className="text-2xl font-bold">Discover Our Support</h2>
          <p className="mt-2">Guides, Forums, 24/7 Support & More</p>
          <Link to="/documentation" className="mt-4 inline-block bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-6 rounded-lg transition-colors">
            Explore Documentation
          </Link>
        </div>
      </section>

      {/* Support Overview */}
      <section className="support-overview py-20">
        <h2 className="text-4xl font-bold text-center mb-10">Comprehensive Support at Your Fingertips</h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-20">
          We offer a range of support options to ensure your success, from in-depth documentation to community-driven discussions and premium services.
        </p>
      </section>

      {/* Documentation Section */}
      <section className="documentation my-20 text-center py-20 bg-gradient-to-r from-i3m-purple to-i3m-dark rounded-xl mx-10 shadow-lg">
        <h3 className="text-3xl font-bold mb-6">Documentation</h3>
        <p className="text-lg mb-6 max-w-4xl mx-auto">
          Access technical guides, FAQs, and detailed documentation to help you navigate the I3M platform.
        </p>
        <Link to="/documentation" className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-6 rounded-lg transition-colors">
          Explore Documentation →
        </Link>
      </section>

      {/* Community Support Section */}
      <section className="community-support my-20 bg-gradient-to-l from-i3m-pink via-i3m-dark to-i3m-purple py-20 text-center rounded-xl mx-10 shadow-lg">
        <h3 className="text-3xl font-bold mb-6">Community Support</h3>
        <p className="text-lg mb-6 max-w-4xl mx-auto">
          Join our vibrant community to connect with other developers, share knowledge, and get peer-to-peer support.
        </p>
        <Link to="/i3m-engine/community" className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-6 rounded-lg transition-colors">
          Join the Community →
        </Link>
      </section>

      {/* Customer Service Section */}
      <section className="customer-service my-20 text-center py-20 bg-gradient-to-b from-i3m-purple to-i3m-dark rounded-xl mx-10 shadow-lg">
        <h3 className="text-3xl font-bold mb-10">Customer Service</h3>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="service-option p-6 shadow-lg rounded-lg bg-transparent border border-gray-600">
            <img src={supportImage1} alt="Email Support" className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h4 className="text-2xl font-bold text-white">Email Support</h4>
            <p className="text-lg my-4 text-white">
              Reach out to our support team via email for any questions or assistance.
            </p>
            <a href="mailto:support@i3m.com" className="text-i3m-pink font-bold">
              Contact via Email →
            </a>
          </div>

          <div className="service-option p-6 shadow-lg rounded-lg bg-transparent border border-gray-600">
            <img src={supportImage2} alt="Live Chat" className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h4 className="text-2xl font-bold text-white">Live Chat</h4>
            <p className="text-lg my-4 text-white">
              Need immediate help? Our live chat support is available to answer your questions in real-time.
            </p>
            <Link to="/live-chat" className="text-i3m-pink font-bold">
              Start a Live Chat →
            </Link>
          </div>

          <div className="service-option p-6 shadow-lg rounded-lg bg-transparent border border-gray-600">
            <img src={supportImage3} alt="Phone Support" className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h4 className="text-2xl font-bold text-white">Phone Support</h4>
            <p className="text-lg my-4 text-white">
              Speak directly with our support team by calling our customer service line.
            </p>
            <a href="tel:+1234567890" className="text-i3m-pink font-bold">
              Call Us →
            </a>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="training my-20 bg-gradient-to-r from-i3m-pink to-i3m-purple py-20 text-center rounded-xl mx-10 shadow-lg">
        <h3 className="text-3xl font-bold mb-6">Training & Resources</h3>
        <p className="text-lg mb-6 max-w-4xl mx-auto">
          Enhance your skills with our I3M training programs and resources. We offer training to suit your needs.
        </p>
        <Link to="/i3m-engine/learn" className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-6 rounded-lg transition-colors">
          View Training Options →
        </Link>
      </section>

      {/* Premium Support Section */}
      <section className="premium-support my-20 bg-gradient-to-l from-i3m-purple to-i3m-dark py-20 text-center rounded-xl mx-10 shadow-lg">
        <h3 className="text-3xl font-bold mb-6">Premium Support</h3>
        <p className="text-lg mb-6 max-w-4xl mx-auto">
          For businesses and advanced users, our Premium Support packages offer 24/7 assistance and more.
        </p>
        <Link to="/premium-support" className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-6 rounded-lg transition-colors">
          Learn More About Premium Support →
        </Link>
      </section>
    </div>
  );
};

export default SupportPage;

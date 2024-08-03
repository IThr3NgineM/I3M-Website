import React from "react";
import { Link } from "react-router-dom";
import supportImage1 from "../assets/support1.jpg";
import supportImage2 from "../assets/support2.jpg";
import supportImage3 from "../assets/support3.jpg";

const SupportPage = () => {
  return (
    <div className="support-page">
      {/* Support Overview */}
      <section className="support-overview py-20">
        <h2 className="text-4xl font-bold text-center mb-10">I3M Support Services</h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-20">
          At I3M, we are dedicated to helping you succeed. Explore our support services designed to assist you every step of the way, from documentation and community forums to customer service and premium support packages.
        </p>
      </section>

      {/* Documentation */}
      <section className="documentation my-20">
        <h3 className="text-3xl font-bold text-center mb-10">Documentation</h3>
        <p className="text-center text-lg max-w-4xl mx-auto mb-10">
          Access a wide range of technical guides, FAQs, and detailed documentation to help you navigate the I3M platform. Whether you’re a beginner or an advanced user, our resources are here to assist you.
        </p>
        <div className="text-center">
          <Link to="/documentation" className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Explore Documentation →
          </Link>
        </div>
      </section>

      {/* Community Support */}
      <section className="community-support my-20 bg-gray-100 py-20">
        <h3 className="text-3xl font-bold text-center mb-10">Community Support</h3>
        <p className="text-center text-lg max-w-4xl mx-auto mb-10">
          Join our vibrant I3M community where you can connect with other developers, share knowledge, and get peer-to-peer support. Our forums and social media channels are the perfect place to find answers and collaborate on projects.
        </p>
        <div className="text-center">
          <Link to="/community" className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Join the Community →
          </Link>
        </div>
      </section>

      {/* Customer Service */}
      <section className="customer-service my-20">
        <h3 className="text-3xl font-bold text-center mb-10">Customer Service</h3>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="service-option p-6 shadow-lg rounded-lg bg-white">
            <img src={supportImage1} alt="Email Support" className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h4 className="text-2xl font-bold">Email Support</h4>
            <p className="text-lg my-4">
              Reach out to our support team via email for any questions or assistance you need with I3M. Our team is here to help.
            </p>
            <a href="mailto:support@i3m.com" className="text-i3m-pink font-bold">
              Contact via Email →
            </a>
          </div>

          <div className="service-option p-6 shadow-lg rounded-lg bg-white">
            <img src={supportImage2} alt="Live Chat" className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h4 className="text-2xl font-bold">Live Chat</h4>
            <p className="text-lg my-4">
              Need immediate help? Our live chat support is available to answer your questions in real-time. Start a chat now.
            </p>
            <Link to="/live-chat" className="text-i3m-pink font-bold">
              Start a Live Chat →
            </Link>
          </div>

          <div className="service-option p-6 shadow-lg rounded-lg bg-white">
            <img src={supportImage3} alt="Phone Support" className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h4 className="text-2xl font-bold">Phone Support</h4>
            <p className="text-lg my-4">
              Speak directly with our support team by calling our customer service line. We are here to assist you with any issues.
            </p>
            <a href="tel:+1234567890" className="text-i3m-pink font-bold">
              Call Us →
            </a>
          </div>
        </div>
      </section>

      {/* Training */}
      <section className="training my-20 bg-gray-100 py-20">
        <h3 className="text-3xl font-bold text-center mb-10">Training & Resources</h3>
        <p className="text-center text-lg max-w-4xl mx-auto mb-10">
          Enhance your skills with our I3M training programs and resources. Whether you’re looking to get started or advance your expertise, we offer training to suit your needs.
        </p>
        <div className="text-center">
          <Link to="/training" className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-3 px-8 rounded-lg transition-colors">
            View Training Options →
          </Link>
        </div>
      </section>

      {/* Premium Support */}
      <section className="premium-support my-20">
        <h3 className="text-3xl font-bold text-center mb-10">Premium Support</h3>
        <p className="text-center text-lg max-w-4xl mx-auto mb-10">
          For businesses and advanced users requiring additional support, our Premium Support packages offer 24/7 assistance, dedicated account managers, and more. Ensure your success with tailored support options.
        </p>
        <div className="text-center">
          <Link to="/premium-support" className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Learn More About Premium Support →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;

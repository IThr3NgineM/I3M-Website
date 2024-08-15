"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-i3m-dark text-white">
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-white"
        >
          Contact <span className="text-i3m-pink font-extrabold">Us</span>
        </motion.h2>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-transparent border border-gray-700 rounded-md shadow-sm py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-i3m-pink focus:border-i3m-pink"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-transparent border border-gray-700 rounded-md shadow-sm py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-i3m-pink focus:border-i3m-pink"
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full bg-transparent border border-gray-700 rounded-md shadow-sm py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-i3m-pink focus:border-i3m-pink"
                  placeholder="Your message"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-4 rounded shadow"
              >
                Send Message
              </motion.button>
            </form>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-i3m-pink">Our Address</h3>
              <p className="mt-2 text-lg text-gray-300">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                Nakuru, Kenya
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-i3m-pink">Contact</h3>
              <p className="mt-2 text-lg text-gray-300">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Email: ithreem@gmail.com <br />
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                Phone: +254712345566
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-i3m-pink">Social Media</h3>
              <div className="flex space-x-4 mt-2">
                <FontAwesomeIcon icon={faDiscord} className="text-2xl text-white hover:text-i3m-pink cursor-pointer" />
                <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-white hover:text-i3m-pink cursor-pointer" />
                <FontAwesomeIcon icon={faTwitter} className="text-2xl text-white hover:text-i3m-pink cursor-pointer" />
                <FontAwesomeIcon icon={faYoutube} className="text-2xl text-white hover:text-i3m-pink cursor-pointer" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-r from-i3m-purple to-i3m-pink p-6 text-center">
            <h3 className="text-3xl font-bold text-white">
              Get the latest updates with <span className="text-i3m-dark">I3M Newsletter</span>
            </h3>
            <form className="mt-4">
              <div className="flex justify-center space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full max-w-md bg-transparent border border-gray-700 rounded-md shadow-sm py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-i3m-pink focus:border-i3m-pink"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-4 rounded shadow"
                >
                  Subscribe Now
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-xl font-bold text-white mb-6">Connect Everywhere</h3>
          <div className="flex justify-center space-x-4">
            <FontAwesomeIcon icon={faDiscord} className="text-3xl text-white hover:text-i3m-pink cursor-pointer" />
            <FontAwesomeIcon icon={faLinkedin} className="text-3xl text-white hover:text-i3m-pink cursor-pointer" />
            <FontAwesomeIcon icon={faTwitter} className="text-3xl text-white hover:text-i3m-pink cursor-pointer" />
            <FontAwesomeIcon icon={faYoutube} className="text-3xl text-white hover:text-i3m-pink cursor-pointer" />
            {/* Add more social media icons as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

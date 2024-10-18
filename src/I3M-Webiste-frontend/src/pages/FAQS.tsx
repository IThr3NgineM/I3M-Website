"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholder-and-varnish";

const faqs = [
  {
    question: "What is I3M?",
    answer:
      "I3M is a platform that democratizes the creation of 3D virtual worlds. It integrates advanced 3D rendering, blockchain technology, and game development tools.",
  },
  {
    question: "How does I3M use blockchain technology?",
    answer:
      "I3M leverages the Internet Computer Protocol (ICP) for secure, scalable, and decentralized transactions and interactions within the virtual worlds created on the platform.",
  },
  {
    question: "Can I monetize my virtual creations on I3M?",
    answer:
      "Yes, I3M provides tools for developers to build, share, and monetize their 3D virtual worlds in a decentralized ecosystem.",
  },
  {
    question: "What tools does I3M offer for game development?",
    answer: "I3M offers a comprehensive toolkit including advanced rendering, physics integration, input systems, and a native editor for streamlined game development.",
  },
  {
    question: "How can I get started with I3M?",
    answer: "You can get started with I3M by accessing our documentation and tutorials, which provide guides and resources for developers and early adopters.",
  },
];

const FAQS = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFAQs, setFilteredFAQs] = useState(faqs);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    setSearchTerm(search);
    if (search) {
      const filtered = faqs.filter((faq) =>
        faq.question.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredFAQs(filtered);
    } else {
      setFilteredFAQs(faqs);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Optionally, handle the form submission
  };

  return (
    <div className="bg-i3m-dark text-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-i3m-pink mb-10">Frequently Asked Questions</h2>
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/3 p-4 bg-i3m-light-dark rounded-lg shadow-lg mb-6 md:mb-0">
          <h3 className="text-2xl font-bold text-white mb-4">FAQ Category</h3>
          <ul>
            <li className="mb-2">
              <a href="/features" className="text-i3m-pink">Service related</a>
            </li>
            <li className="mb-2">
              <a href="/product" className="text-i3m-pink">Pricing</a>
            </li>
            
            <li>
              <a href="/product" className="text-i3m-pink">Documentation</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-2/3 p-4">
          <PlaceholdersAndVanishInput
            placeholders={["Search I3M..."]}
            onChange={handleSearch}
            onSubmit={handleSubmit}
          />
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-i3m-light-dark p-6 rounded-lg shadow-lg mb-4"
            >
              <h4 className="text-xl font-bold text-i3m-pink mb-2">{faq.question}</h4>
              <p className="text-gray-300">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="bg-i3m-light-dark p-6 rounded-lg shadow-lg mt-10 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Let's discuss and make something cool together</h3>
        <a href="/contact" className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-2 px-4 rounded-lg transition-colors">
          Apply for Meeting
        </a>
      </div>
    </div>
  );
};

export default FAQS;

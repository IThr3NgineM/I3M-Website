import React from "react";
import { Link } from "react-router-dom";
import learnImage1 from "../assets/IThreeM.png";
import learnImage2 from "../assets/avatar2.png";
import learnImage3 from "../assets/learn1.jpg";

const LearnPage = () => {
  return (
    <div className="learn-page min-h-screen">
      {/* Hero Section */}
      <section className="hero-section bg-i3m-dark text-white text-center py-20">
        <h1 className="text-5xl font-bold">Welcome to I3M Learn</h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Master the tools, technologies, and best practices of I3M. Explore our
          comprehensive learning resources tailored for developers at every
          level.
        </p>
        <a
          href="https://5szzp-oiaaa-aaaak-ao36a-cai.icp0.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-3 px-8 rounded-lg transition-colors mt-8 inline-block"
        >
          Start Learning →
        </a>
      </section>

      {/* Featured Tutorials */}
      <section className="featured-tutorials  bg-i3m-dark">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">
          Featured Tutorials
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="tutorial-card p-4 shadow-lg rounded-lg bg-transparent border border-gray-600">
            <img
              src={learnImage1}
              alt="Getting Started with I3M"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold text-white">
              Getting Started with I3M
            </h3>
            <p className="text-lg my-4 text-white">
              Learn the basics of I3M and how to build your first 3D project.
            </p>
            <a
              href="https://5szzp-oiaaa-aaaak-ao36a-cai.icp0.io/tutorials/tutorials.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-i3m-pink font-bold"
            >
              Watch Tutorial →
            </a>
          </div>

          <div className="tutorial-card p-4 shadow-lg rounded-lg bg-transparent border border-gray-600">
            <img
              src={learnImage2}
              alt="Advanced Scripting with I3M"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold text-white">
              Advanced Scripting with I3M
            </h3>
            <p className="text-lg my-4 text-white">
              Dive into advanced scripting techniques to enhance your I3M
              projects.
            </p>
            <a
              href="https://5szzp-oiaaa-aaaak-ao36a-cai.icp0.io/scripting/scripting.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-i3m-pink font-bold"
            >
              Explore More →
            </a>
          </div>

          <div className="tutorial-card p-4 shadow-lg rounded-lg bg-transparent border border-gray-600">
            <img
              src={learnImage3}
              alt="Optimizing Performance in I3M"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold text-white">
              Optimizing Performance in I3M
            </h3>
            <p className="text-lg my-4 text-white">
              Learn how to optimize your I3M applications for better performance
              and efficiency.
            </p>
            <a
              href="https://5szzp-oiaaa-aaaak-ao36a-cai.icp0.io/performance/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-i3m-pink font-bold"
            >
              Explore →
            </a>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="courses-section  bg-i3m-dark py-20">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">
          I3M Courses
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="course-card p-6 shadow-lg rounded-lg bg-transparent border border-gray-600">
            <h3 className="text-2xl font-bold text-white">I3M for Beginners</h3>
            <p className="text-lg my-4 text-white">
              A comprehensive introduction to I3M, perfect for new developers
              looking to get started.
            </p>
            {/* TO-DO UPDATE THE LINKS OF THE FORMS */}
            <a
              href="https://forms.gle/T1hU6CX1vNquwc589"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Enroll Now →
            </a>
          </div>

          <div className="course-card p-6 shadow-lg rounded-lg bg-transparent border border-gray-600">
            <h3 className="text-2xl font-bold text-white">
              Intermediate I3M Development
            </h3>
            <p className="text-lg my-4 text-white">
              Take your I3M skills to the next level with intermediate topics
              and project-based learning.
            </p>
            {/* TO-DO UPDATE THE LINKS OF THE FORMS */}
            <a
              href="https://forms.gle/T1hU6CX1vNquwc589"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Enroll Now →
            </a>
          </div>

          <div className="course-card p-6 shadow-lg rounded-lg bg-transparent border border-gray-600">
            <h3 className="text-2xl font-bold text-white">
              Mastering I3M Development
            </h3>
            <p className="text-lg my-4 text-white">
              Advanced course for experienced developers looking to master I3M.
            </p>
            <a
              href="https://5szzp-oiaaa-aaaak-ao36a-cai.icp0.io/scene/scene.html"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Master The Scene →
            </a>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="documentation-section bg-i3m-dark py-20">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">
          Documentation
        </h2>
        <p className="text-center text-lg text-white max-w-4xl mx-auto mb-20">
          Access in-depth documentation and guides for all I3M products and
          tools. Whether you're looking for API references, technical guides, or
          integration tutorials, our documentation has you covered.
        </p>
        <div className="text-center">
          <a
            href="https://5szzp-oiaaa-aaaak-ao36a-cai.icp0.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            View Documentation →
          </a>
        </div>
      </section>

      {/* Community Discussions */}
      <section className="community-discussions  bg-i3m-dark py-20">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">
          Community Discussions
        </h2>
        <p className="text-center text-lg text-white max-w-4xl mx-auto mb-20">
          Join the conversation with other developers in the I3M community.
          Share your knowledge, ask questions, and collaborate on projects.
        </p>
        <div className="text-center">
          <a
            href="https://discord.gg/rppWKwGrhf"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card p-4 shadow-lg rounded-lg text-center bg-i3m-dark text-i3m-pink"
          >
            Join Our Discussion →
          </a>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="upcoming-events bg-i3m-dark py-20">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">
          Upcoming Events
        </h2>
        <p className="text-center text-lg text-white max-w-4xl mx-auto mb-20">
          Stay updated on the latest I3M webinars, workshops, and live sessions.
          Don't miss out on the opportunity to learn from industry experts and
          connect with fellow developers.
        </p>
        <div className="text-center">
          <a
            href="https://x.com/IThr3M"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-i3m-pink hover:bg-i3m-purple text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            View Events →
          </a>
        </div>
      </section>

      {/* Call to Action */}
      <section className="call-to-action bg-i3m-dark text-white text-center py-20">
        <h2 className="text-4xl font-bold mb-4">
          Start Learning with I3M Today!
        </h2>
        <p className="text-lg mb-10">
          Explore our tutorials, courses, and resources to master I3M
          development. Join our community of developers and be part of the
          future of gaming and blockchain technology.
        </p>
        <a
          href="https://5szzp-oiaaa-aaaak-ao36a-cai.icp0.io/beginning/getting_started.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-i3m-pink font-bold"
        >
          Get Started →
        </a>
      </section>
    </div>
  );
};

export default LearnPage;

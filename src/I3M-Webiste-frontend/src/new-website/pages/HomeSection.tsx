import React from "react";
import { ImagesSlider } from "../../new-website/components/ui/images-slider";
import { BentoGrid, BentoGridItem } from "../../new-website/components/ui/bento-grid";
import heroImage1 from "../../new-website/assets/Game1.jpg";
import heroImage2 from "../../new-website/assets/Game2.jpg";
import cardImage1 from "../../new-website/assets/Game3.jpg";
import cardImage2 from "../../new-website/assets/Game4.jpg";
import cardVideo1 from "../../new-website/assets/CardVideo4.mp4";
import cardVideo2 from "../../new-website/assets/CardVideo2.mp4";
import editorImage from "../../new-website/assets/EditorImage.jpg"; // Example image for editor section

const HomeSection = () => {
  const heroImages = [heroImage1, heroImage2]; // Add more images as needed

  const cardItems = [
    {
      src: cardImage1,
      title: "Exciting Game",
      category: "Adventure",
      content: (
        <div>
          <p>A thrilling game that takes you on an adventure across various lands.</p>
          <video controls className="w-full mt-4 rounded-lg">
            <source src={cardVideo1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ),
    },
    {
      src: cardImage2,
      title: "Intensity Game",
      category: "Mystery",
      content: (
        <div>
          <p>Uncover the mysteries hidden in this intricate puzzle game.</p>
          <video controls className="w-full mt-4 rounded-lg">
            <source src={cardVideo2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ),
    },
    {
      src: cardImage2,
      title: "Mystery Game",
      category: "Mystery",
      content: (
        <div>
          <p>Uncover the mysteries hidden in this intricate puzzle game.</p>
          <video controls className="w-full mt-4 rounded-lg">
            <source src={cardVideo2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ),
    },
    // Add more cards as needed
  ];

  return (
    <div className="home-section space-y-20">
      {/* Hero Section */}
      <div className="hero-section h-screen relative">
        <ImagesSlider images={heroImages} autoplay>
          <div className="absolute z-50 text-center text-white p-8">
            <h1 className="text-5xl font-bold">Welcome to I3M</h1>
            <p className="mt-4 text-lg">
              Explore the Future of Gaming and Virtual Worlds
            </p>
          </div>
        </ImagesSlider>
      </div>

      {/* Card Section */}
      <div className="card-section my-20">
        <h2 className="text-3xl font-bold text-center text-i3m-pink mb-10">
          Featured Games
        </h2>
        <BentoGrid className="gap-8">
          {cardItems.map((item, index) => (
            <BentoGridItem
              key={index}
              title={item.title}
              description={item.content}
              className="overflow-hidden"
            />
          ))}
        </BentoGrid>
      </div>

      {/* Editor Section */}
      <div className="editor-section my-20">
        <h2 className="text-3xl font-bold text-center text-i3m-pink mb-10">
          Explore the I3M Editor
        </h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          <img
            src={editorImage}
            alt="I3M Editor Glimpse"
            className="rounded-lg shadow-lg w-full md:w-1/2"
          />
          <div className="md:w-1/2 text-lg text-black space-y-4">
            <p>
              The I3M Editor is an innovative, robust, and user-friendly platform designed to empower creators, developers, and enthusiasts in the virtual world space. With the I3M Editor, you are not just limited to using predefined templates or tools; instead, you have the full freedom to design and customize every aspect of your virtual environment, whether it's for gaming, simulations, educational purposes, or social interactions.
            </p>
            <p>
              The editor’s intuitive interface makes it accessible to users of all skill levels, from beginners to seasoned professionals. Whether you're a novice looking to bring your first virtual project to life or an experienced developer seeking a powerful tool to streamline your workflow, the I3M Editor offers the flexibility and depth you need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;

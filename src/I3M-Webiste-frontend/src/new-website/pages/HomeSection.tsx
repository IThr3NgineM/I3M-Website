import React from "react";
import { ImagesSlider } from "../../new-website/components/ui/images-slider";
import { Carousel, Card } from "../../new-website/components/ui/apple-cards-carousel";
import heroImage1 from "../../new-website/assets/heroImage1.jpg";
import heroImage2 from "../../new-website/assets/heroImage2.jpg";
import cardImage1 from "../../new-website/assets/cardImage1.jpg";
import cardImage2 from "../../new-website/assets/cardImage2.jpg";
import cardVideo1 from "../../new-website/assets/cardVideo1.mp4";
import cardVideo2 from "../../new-website/assets/components.mp4";
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
            <video controls>
              <source src={cardVideo1} type="video/mp4" />
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
            <video controls>
              <source src={cardVideo2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ),
      },
      // Add more cards as needed
    ];
  
    return (
      <div className="home-section">
        {/* Hero Section */}
        <div className="hero-section h-screen">
          <ImagesSlider images={heroImages} autoplay>
            <div className="absolute z-50 text-center text-white p-8">
              <h1 className="text-5xl font-bold">Welcome to I3M</h1>
              <p className="mt-4 text-lg">Explore the Future of Gaming and Virtual Worlds</p>
            </div>
          </ImagesSlider>
        </div>
  
        {/* Card Section */}
        <div className="card-section my-20">
          <h2 className="text-3xl font-bold text-center text-i3m-pink mb-10">
            Featured Games
          </h2>
          <Carousel items={cardItems.map((item, index) => (
            <Card key={index} card={item} index={index} />
          ))} />
        </div>
  
        {/* Editor Section */}
        <div className="editor-section my-20">
          <h2 className="text-3xl font-bold text-center text-i3m-pink mb-10">
            Explore the I3M Editor
          </h2>
          <div className="max-w-6xl mx-auto">
            <img src={editorImage} alt="I3M Editor Glimpse" className="rounded-lg shadow-lg" />
            <p className="mt-4 text-center text-lg text-gray-300">
              Get a sneak peek into the powerful I3M Editor that allows you to create, customize, and share your own virtual worlds. Experience the next level of creativity and control.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default HomeSection;
  
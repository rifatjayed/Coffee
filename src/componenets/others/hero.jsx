import React, { useState, useEffect } from "react";
import img1 from "../../assets/img/bg_1.jpg";
import img2 from "../../assets/img/bg_2.jpg";
import img3 from "../../assets/img/bg_3.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

const images = [img1, img2, img3];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // ৪ সেকেন্ড পর পরিবর্তন হবে
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-6">
        <span
          className="text-[50px] text-[#c49b63] font-display leading-none
"
        >
          Discover
        </span>
        <h1 className="text-xl md:text-3xl font-bold mb-4">
          The Best Coffee Testing Experience
        </h1>
        <p className="text-lg md:text-xl mb-6">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>

        {/* Buttons */}
        <div className="space-x-4">
          <Link>
            <button className=" w-[150px] bg-[#c49b63] p-4 text-white mt-[30px] hover:bg-[#c49b63] hover:text-white transition duration-300">
              Order Now{" "}
            </button>
          </Link>
          <Link>
            <button className="w-[150px] border border-[#c49b63] p-4 text-[#c49b63] mt-[30px] hover:bg-[#c49b63] hover:text-white transition duration-300">
              View Full Menu
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

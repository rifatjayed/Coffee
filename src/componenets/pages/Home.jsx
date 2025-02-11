import React from "react";
import Hero from "../others/hero";
import aboutImg from "../../assets/img/about.jpg";
import bgImg from "../../assets/img/bg_2.jpg";
import aboutImg4 from "../../assets/img/bg_4.jpg";
import menu1 from "../../assets/img/menu-1.jpg";
import menu2 from "../../assets/img/menu-2.jpg";
import menu3 from "../../assets/img/menu-3.jpg";
import menu4 from "../../assets/img/menu-4.jpg";

import coffee from "../../assets/img/coffee-beans.png";
import truck from "../../assets/img/delivery-truck.png";
import choice from "../../assets/img/choices.png";

import { motion } from "framer-motion";
import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Hero></Hero>

      {/* About Section */}
      <section className="">
        <div className="flex">
          <div className="w-1/2">
            <img src={aboutImg} alt="" className="min-h-screen" srcset="" />
          </div>
          <div className="w-1/2 relative">
            <img src={aboutImg4} alt="" className="min-h-screen" srcset="" />
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-0 flex flex-col justify-center  bg-black/50 bg-opacity-50 text-white text-left p-[40px] ml-[-150px] h-[475px] w-[535px]">
              <span
                className="text-[50px] text-[#c49b63] font-display leading-none
"
              >
                Discover
              </span>
              <h2 className="text-4xl font-bold  text-left mb-4 uppercase text-white">
                Our Story
              </h2>
              <p className="text-gray-500 text-[15px] font-light font-poppins">
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country. But nothing the copy
                said could convince her and so it didn’t take long until a few
                insidious Copy Writers ambushed her, made her drunk with Longe
                and Parole and dragged her into their agency, where they abused
                her for their.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* new section */}

      <section className="bg-[#c49b63] h-[500px]">
        <div className="flex justify-around items-center h-full px-[100px] gap-10">
          <div>
            <img src={choice} className="w-[60px] " alt="" srcset="" />
            <h1
              className="mb-[20px] uppercase text-[18px] font-normal
"
            >
              Easy to Order
            </h1>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
          <div>
            <img src={truck} className="w-[60px]" alt="" srcset="" />
            <h1
              className="mb-[20px] uppercase text-[18px] font-normal
"
            >
              Fastest Delivery
            </h1>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
          <div>
            <img src={coffee} className="w-[60px]" alt="" srcset="" />
            <h1
              className="mb-[20px] uppercase text-[18px] font-normal
"
            >
              Quality Coffee
            </h1>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
        </div>
      </section>

      {/* menu section */}
      <section
        className="h-[500px] bg-cover bg-center bg-fixed flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutImg4})` }}
      >
        <div className="px-[100px]">
          {/* <h1 className="text-white text-4xl font-bold bg-black/50 px-6 py-3 rounded-lg">
            Tailwind CSS Parallax
          </h1> */}
          <div className="flex">
            <div className="w-1/2 text-right mr-[50px]">
              <span
                className="text-[50px] text-[#c49b63] font-display leading-none
"
              >
                Discover
              </span>
              <h1 className="text-4xl font-bold  text-white mb-4 uppercase">
                Our Menu
              </h1>
              <p className="text-gray-500 text-[15px] font-light font-poppins">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <Link>
                <button className="border border-[#c49b63] p-4 text-[#c49b63] mt-[30px] hover:bg-[#c49b63] hover:text-white transition duration-300">
                  View Full Menu
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 w-1/2">
              <img
                src={menu1}
                className="w-[255px] h-[200px]"
                alt=""
                srcset=""
              />
              <img
                src={menu2}
                className="w-[255px] h-[200px]"
                alt=""
                srcset=""
              />
              <img
                src={menu3}
                className="w-[255px] h-[200px]"
                alt=""
                srcset=""
              />

              <img
                src={menu4}
                className="w-[255px] h-[200px]"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          className="h-[400px] bg-cover bg-center bg-fixed bg-black bg-opacity-50 flex items-center justify-center"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <h1 className="text-white text-4xl font-bold bg-black/50 px-6 py-3 rounded-lg">
            Tailwind CSS Parallax
          </h1>
        </div>
      </section>
      <section className="h-[500px]">
        <h1>heeeeeeeeeeeeeeee</h1>
      </section>
    </div>
  );
};

export default Home;

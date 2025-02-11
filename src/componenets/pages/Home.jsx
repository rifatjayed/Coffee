import React from "react";
import Hero from "../others/hero";
import aboutImg from "../../assets/img/about.jpg";
import aboutImg4 from "../../assets/img/bg_4.jpg";
import coffee from "../../assets/img/coffee-beans.png";
import truck from "../../assets/img/delivery-truck.png";
import choice from "../../assets/img/choices.png";

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
              <h2 className="text-4xl font-bold  text-left mb-4">Our Story</h2>
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
    </div>
  );
};

export default Home;

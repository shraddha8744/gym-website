import { Check } from "lucide-react";
import React from "react";
import { pricing } from "../utils/images";

const Pricing = () => {
  return (
    <section className="flex flex-col gap-8 py-16">
      <h1 className="text-2xl text-center tracking-wide font-bold text-blue-500">
        ELITE EDGE FITNESS PLANS
      </h1>
      <div className="flex gap-8 max-w-[1500px] mx-auto">
        {pricing.map((item) => {
          return (
            <div
              className="relative flex-1 h-[700px] shadow-xl bg-white w-[400px]"
              key={item.title}
            >
              <img
                src={item.imgUrl}
                alt={item.title}
                className="absolute w-full h-full object-cover top-0 left-0"
              />
              <div className="relative h-[250px] text-white p-8 bg-black/60">
                <h1 className="text-3xl text-blue-500">{item.title}</h1>
                <h1 className="text-3xl">PACKAGE</h1>
                <h3 className="text-2xl">Rs {item.price}</h3>
                <p className="text-lg mt-1">For {item.length} Months</p>
              </div>
              <div className="relative bg-gray-100 p-8 flex flex-col justify-center gap-4 h-[450px]">
                <p className="flex items-center gap-4">
                  <Check className="text-blue-500" /> Equipment
                </p>
                <p className="flex items-center gap-4">
                  <Check className="text-blue-500" /> All Day Free Training
                </p>
                <p className="flex items-center gap-4">
                  <Check className="text-blue-500" /> Free Restroom
                </p>
                <p className="flex items-center gap-4">
                  <Check className="text-blue-500" /> 24/7 Skilled Support
                </p>
                <p className="flex items-center gap-4">
                  <Check className="text-blue-500" /> 20 Days Freezing Option
                </p>
                <button className="text-white font-semibold bg-blue-500 px-10 py-3 rounded-md w-fit transition-colors hover:bg-blue-700 ml-16">
                  Join Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;

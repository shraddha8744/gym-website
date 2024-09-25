import React from "react";
import { photos } from "../utils/images";

const Gallery = () => {
  return (
    <div className="bg-zinc-900">
      <h1 className="text-3xl text-blue-500 py-6 font-bold tracking-wider text-center">
        BETTER BEATS BEST
      </h1>

      <div className="grid grid-cols-4 pb-10">
        {photos.map((item) => {
          return (
            <div className="h-[400px] w-[400px] px-10 mt-5" key={item.id}>
              <img
                src={item.name}
                alt="gallery item"
                className="h-full w-full object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-white duration-300 hover:scale-105"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;

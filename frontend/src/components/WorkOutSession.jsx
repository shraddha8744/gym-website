import React, { useContext, useEffect, useState } from "react";
import image from "../assets/img5.jpg"; // Ensure the correct path
import {
  bootcamp,
  bootcampDes,
  bootcamps,
  bootcampsHindi,
  bootcampsMarathi,
  description,
  session,
} from "../utils/constant";
import { MyContext } from "../context/authContext";

const WorkOutSession = () => {
  const [language, setLanguage] = useState(bootcamps);
  const { selectLanguage } = useContext(MyContext);
  const [sessions, setSession] = useState(session.English);
  const [camp, setCamp] = useState(bootcamp.English);
  const [desc, setDesc] = useState(description.English);
  const [bootDesc, setBootDesc] = useState(bootcampDes.English);

  useEffect(() => {
    if (selectLanguage === "English") {
      setLanguage(bootcamps);
      setSession(session[selectLanguage]);
      setDesc(description[selectLanguage]);
      setCamp(bootcamp[selectLanguage]);
      setBootDesc(bootcampDes[selectLanguage]);
    } else if (selectLanguage === "Marathi") {
      setLanguage(bootcampsMarathi);
      setSession(session[selectLanguage]);
      setDesc(description[selectLanguage]);
      setCamp(bootcamp[selectLanguage]);
      setBootDesc(bootcampDes[selectLanguage]);
    } else if (selectLanguage === "Hindi") {
      setLanguage(bootcampsHindi);
      setSession(session[selectLanguage]);
      setDesc(description[selectLanguage]);
      setCamp(bootcamp[selectLanguage]);
      setBootDesc(bootcampDes[selectLanguage]);
    }
  }, [selectLanguage]);

  return (
    <div className="mt-20 px-4 flex gap-5">
      {/* TOP WORKOUT SESSION */}
      <div className="w-1/2 p-5 flex flex-col justify-between h-[1050px]">
        <div>
          <h1 className="text-4xl font-bold tracking-wider">
            {/* TOP WORKOUT SESSION */}
            {sessions}
          </h1>
          <p className="text-xl text-gray-500 my-4 font-semibold">
            {/* Get ready to take your fitness to the next level with our top-rated
            workout sessions. Designed by professionals, these sessions focus on
            strength, endurance, and overall body fitness. */}
            {desc}
          </p>
        </div>
        <img
          src={image}
          alt="workout"
          className="w-full h-[850px] object-cover rounded-lg mb-28"
        />
      </div>

      {/* FEATURED BOOTCAMPS */}
      <div className="w-1/2 p-5 flex flex-col justify-between h-[1050px] ">
        <div>
          <h1 className="text-4xl font-bold tracking-wider">
            {/* FEATURED BOOTCAMPS */}
            {camp}
          </h1>
          <p className="text-xl text-gray-500 my-4 font-semibold">
            {/* Discover our featured bootcamps, crafted for all fitness levels.
            Whether you're a beginner or an experienced athlete, you'll find the
            perfect session. */}
            {bootDesc}
          </p>
        </div>

        {language.map((item) => {
          return (
            <div
              className="w-full shadow-xl px-4 py-3 rounded-lg my-3 hover:bg-gray-200 duration-300"
              key={item.id}
            >
              <h4 className="text-2xl font-bold tracking-wider text-blue-800">
                {item.name}
              </h4>
              <p className="text-lg text-gray-500 my-2 hover:text-gray-700 ">
                {item.details}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkOutSession;

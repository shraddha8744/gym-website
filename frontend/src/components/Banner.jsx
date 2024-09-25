import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/authContext";
import {
  button1,
  button2,
  journeyLanguage,
  potensionalLanguage,
  titleLanguage,
} from "../utils/constant";

const Banner = () => {
  const { logout, setSelectlanguage } = useContext(MyContext);
  const [language, setLanguage] = useState(titleLanguage.English);
  const [journey, setJourney] = useState(journeyLanguage.English);
  const [potensional, setPotensional] = useState(potensionalLanguage.English);
  const [button, setButton] = useState(button1.English);
  const [buttons, setButtons] = useState(button2.English);

  const handleLogout = () => {
    logout();
  };

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setSelectlanguage(selectedLanguage); // Update the selected language
    setLanguage(titleLanguage[selectedLanguage]); // Update the title based on selected language
    setJourney(journeyLanguage[selectedLanguage]);
    setPotensional(potensionalLanguage[selectedLanguage]);
    setButton(button1[selectedLanguage]);
    setButtons(button2[selectedLanguage]);
  };

  return (
    <div className="min-h-screen relative bg-[url('/src/assets/img3.jpg')] bg-cover bg-no-repeat bg-blend-darken bg-black bg-opacity-75 ">
      <div className="text-white pt-14 ml-[100px] ">
        <div className="flex justify-between mr-[50px]">
          <div className="border border-white p-1 w-[330px] text-3xl tracking-[2px] text-center">
            ELITE EDGE FITNESS
          </div>
          <div className="flex text-black gap-5 items-center">
            <div>
              <select
                className="py-3 px-6 rounded-xl"
                onChange={handleLanguageChange}
              >
                <option value="English">English</option>
                <option value="Marathi">Marathi</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>
            <button
              className="bg-white text-zinc-900 py-2 px-4 font-semibold rounded-lg text-xl hover:bg-black hover:text-white duration-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
        <div className="my-14">
          <h1 className="text-8xl font-bold w-16 tracking-wide leading-2">
            {language}
          </h1>
        </div>
        <h2 className="mt-5 text-[30px] tracking-wide">
          {/* Your Journey to Fitness Starts Here */}
          {journey}
        </h2>
        <h2 className="mb-5 mt-1 text-[30px] tracking-wide text-blue-500 font-medium">
          {potensional}
        </h2>

        <div className="flex gap-6">
          <button className="px-8 py-3 border border-blue-500 text-[20px] text-center text-blue-500 font-semibold hover:bg-blue-400 hover:text-white hover:border-blue-400 duration-300 rounded-lg">
            {/* Start Your Journey */}
            {button}
          </button>
          <button className="px-8 py-3 border border-blue-500 text-[20px] text-center text-blue-500 font-semibold hover:bg-blue-400 hover:text-white hover:border-blue-400 duration-300 rounded-lg">
            {/* Discover Your Plan */}
            {buttons}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

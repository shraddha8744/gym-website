import React, { useState } from "react";
import bmi from "../assets/bmi.jpg";
import { toast, Toaster } from "react-hot-toast";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submitted");

    // Check if all fields are filled
    if (!height || !weight || !gender) {
      toast.error("Please enter valid height, weight, and gender.");
      return;
    }
    //

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    if (bmiValue < 18.5) {
      toast.error(
        "You are underweight. Consider seeking advice from a healthcare provider."
      );
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success(
        "You have a normal weight. Keep maintaining a healthy lifestyle."
      );
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.error(
        "You are overweight. Consider seeking advice from a healthcare provider."
      );
    } else {
      toast.error(
        "You are in the obese range. It is recommended to seek advice from a healthcare specialist."
      );
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#0a2b42] to-[#60698b]">
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className="text-center py-5 text-3xl font-bold text-white tracking-wider">
        BMI CALCULATOR
      </h1>
      <div className="flex">
        <div className="w-1/2 px-10 py-20">
          <form onSubmit={handleSubmit}>
            <label className="text-2xl font-semibold text-white py-5 tracking-widest">
              Height (cm)
            </label>
            <br />
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full border-b border-b-white bg-transparent focus:outline-none focus:text-white my-6 text-white"
              required
            />
            <label className="text-2xl font-semibold text-white py-5 tracking-widest">
              Weight (kg)
            </label>
            <br />
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full border-b border-b-white bg-transparent focus:outline-none focus:text-white my-6 text-white"
              required
            />
            <label className="text-2xl font-semibold text-white py-5 tracking-widest">
              Gender
            </label>
            <br />
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full py-2 font-medium text-xl text-white bg-transparent border-b border-b-white focus:outline-none my-3"
              required
            >
              <option value="" className="bg-[#0a2b42] text-white">
                Select Gender
              </option>
              <option value="male" className="bg-[#0a2b42] text-white">
                Male
              </option>
              <option value="female" className="bg-[#0a2b42] text-white">
                Female
              </option>
            </select>

            <button className="text-xl text-blue-500 py-3 w-full font-semibold rounded bg-slate-100 mt-14">
              Calculate BMI
            </button>
          </form>
        </div>
        <div className="w-1/2 px-10 h-[700px] py-10">
          <img src={bmi} alt="BMI" className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;

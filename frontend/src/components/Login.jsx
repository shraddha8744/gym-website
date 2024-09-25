import axios from "axios";
import React, { useContext, useState } from "react";
// import { Base_URL } from "../utils/config";
import { toast, Toaster } from "react-hot-toast";
// import { authcontext } from "../context/authcontext";
// import HashLoader from "react-spinners/HashLoader";

import { useNavigate } from "react-router-dom";
import { Base_URL } from "../utils/constant";
import { MyContext } from "../context/authContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate("");
  const { setState, login } = useContext(MyContext);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post(`${Base_URL}/login`, formData);
      console.log(response.data);
      //   console.log(response.data.token);
      //   console.log(response.data.role);

      if (response.data.success) {
        login();
        setState(true);
        toast.success(response.data.message);
        navigate("/home");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(
        "Failed to log in. Please check your credentials and try again."
      );
    }
  };
  return (
    <section className="px-5  pt-24 lg:px-0 min-h-screen relative bg-[url('/src/assets/img3.jpg')] bg-cover bg-no-repeat bg-blend-darken bg-black bg-opacity-75 ">
      <Toaster />
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10 bg-white">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello <span className="text-primaryColor">Welcome</span> Back 🎉
        </h3>
        <form className="py-4 md:py-6" onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
            />
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
            >
              Login
            </button>
          </div>
          <p className="mt-5 text-textColor text-center">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-blue-700 font-medium ml-1 mt-2"
            >
              Signup
            </button>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;

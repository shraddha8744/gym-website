import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen relative bg-[url('/src/assets/contact.jpg')] bg-cover bg-no-repeat bg-blend-darken bg-black bg-opacity-75">
      <div className="bg-white absolute right-20 top-20 h-[500px] w-[600px]">
        <form action="" className="px-10 pt-10 pb-5">
          <h1 className="text-4xl font-bold">Contact us</h1>
          <label htmlFor="name" className="block mb-2 text-xl font-bold my-10">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border-b border-black w-full focus:outline-none  transition-colors"
          />
          <label htmlFor="email" className="block mb-2 text-xl font-bold my-10">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border-b border-black w-full focus:outline-none  transition-colors"
          />
          <label
            htmlFor="message"
            className="block mb-2 text-xl font-bold my-10"
          >
            Message
          </label>
          <input
            type="text"
            id="text"
            className="border-b border-black w-full focus:outline-none  transition-colors"
          />
          <button className="w-full py-3 font-semibold bg-blue-500 text-white mt-8 rounded-lg shadow-lg cursor-pointer text-xl hover:bg-blue-600 duration-300 ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

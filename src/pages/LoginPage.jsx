import React from "react";

import { Register, Login } from "../components";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center flex-col lg:flex-row bg-cover bg-black w-full h-screen">
      <img
        src="/cart_light.png"
        alt="bg"
        className="w-40 h-40 sm:w-52 sm:h-52 sm:mr-24 lg:ml-52 "
      />
      <div className="flex flex-col items-center mb-14 lg:ml-[200px] h-max sm:mr-24 lg:mt-60 w-max">
        <div className="flex flex-col justify-between sm:h-[300px] mt-20 w-min">
          <p className="font-bold text-center sm:text-left text-xl sm:text-3xl text-white flex flex-col">
            Start Your Journey Now
          </p>
          <p className="font-light text-xs sm:text-sm text-gray-400 flex flex-col tracking-tighter sm:tracking-tight">
            The best E-commerce website for you to shop from the comfort of your
            home and get your products delivered to your doorstep in no time.
          </p>

          <Login />
          <div className="h-1 w-1"></div>
          <Register />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

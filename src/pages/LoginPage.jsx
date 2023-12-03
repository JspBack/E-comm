import React from "react";

import { Register, Login } from "../components";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center flex-col lg:flex-row bg-cover bg-black w-full h-screen">
      <img
        src="/cart_light.png"
        alt="bg"
        className="w-52 h-52 sm:mr-24 lg:ml-52 "
      />
      <div className="flex flex-col items-center mb-14 lg:ml-[200px] h-max sm:mr-24 lg:mt-60 w-max">
        <div className="flex flex-col justify-between sm:h-[300px] mt-20 w-min">
          <p className="font-bold text-3xl text-white flex flex-col">
            Start Your Shopping Journey Now
          </p>
          <p className="font-light text-sm text-gray-400 flex flex-col tracking-tight">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            error neque.
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

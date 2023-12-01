import React, { useState } from "react";

const Process = () => {
  const currentColor = localStorage.getItem("colorMode");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };
  return (
    <div className="flex flex-col justify-center items-center absolute bg-gray-300 p-3 right-[43%] top-[40%] rounded-md ">
      <form
        className="w-max h-max flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <label className="text-2xl font-bold " htmlFor="email">
          Email:
        </label>
        <input
          className="text-black sm:w-96 w-48 text-lg p-3 hover:drop-shadow-xl"
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="text-2xl font-bold" htmlFor="password">
          Password:
        </label>
        <input
          className="text-black sm:w-96 w-48 text-lg p-3 hover:drop-shadow-xl"
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          className="sm:w-96 w-48 text-lg p-3 hover:drop-shadow-xl mt-3"
          type="submit"
          style={{
            backgroundColor: currentColor ? currentColor : "blue",
            color: "white",
            borderRadius: "10px",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Process;

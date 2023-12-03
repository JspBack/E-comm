import React, { useState } from "react";

const Process = ({ PswdType, text, isReg }) => {
  const currentColor = localStorage.getItem("colorMode");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [alerted, setAlerted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confPassword) {
      alert("Passwords do not match!");
      setAlerted(true);
      return;
    } else {
      alert("Passwords match!");
    }
    setEmail("");
    setPassword("");
    setConfPassword("");
    console.log("Email:", email, "Password:", password);
  };
  return (
    <div className=" md:right-[52%] md:top-[33%] flex flex-col justify-center items-center absolute bg-gray-300 p-3 lg:top-[35%] lg:right-[30%] right-[35%] sm:right-[43%] top-[40%] sm:top-[35%] rounded-md ">
      <form
        className=" w-max h-max flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <label
          className=" text-white flex text-sm sm:text-2xl font-semibold "
          htmlFor="email"
        >
          Email:
        </label>
        <input
          className=" tracking-tighter rounded text-black sm:w-96 w-48 text-lg p-3 hover:drop-shadow-xl"
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label
          className="text-white flex flex-col text-left text-sm sm:text-2xl font-semibold"
          htmlFor="password"
        >
          Password:
        </label>
        <input
          className={` ${
            alerted
              ? "border-red-500 border bg-red-300 placeholder:text-black placeholder:opacity-[0.5]"
              : ""
          } tracking-tighter rounded text-black sm:w-96 w-48 text-lg p-3 hover:drop-shadow-xl`}
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minlength="8"
          autoComplete={PswdType}
        />
        {isReg ? (
          <input
            className={` ${
              alerted
                ? "border-red-500 border bg-red-300 placeholder:text-black placeholder:opacity-[0.5]"
                : ""
            }  tracking-tighter mt-3 rounded text-black sm:w-96 w-48 text-lg p-3 hover:drop-shadow-xl
            `}
            type="password"
            id="password"
            placeholder="Confirm your password"
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
            required
            minlength="8"
          />
        ) : (
          ""
        )}
        <button
          className=" sm:w-96 w-48 text-lg p-3 hover:drop-shadow-xl mt-3 text-white transition-all hover:brightness-150"
          type="submit"
          style={{
            backgroundColor: currentColor ? currentColor : "blue",
            borderRadius: "10px",
          }}
        >
          {text}
        </button>
      </form>
    </div>
  );
};

export default Process;

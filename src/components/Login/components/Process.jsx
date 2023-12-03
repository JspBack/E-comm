import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../../../contexts/ContextProvider";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebase";

const Process = ({ PswdType, text, isReg }) => {
  const { handleClose } = useStateContext();
  const currentColor = localStorage.getItem("colorMode");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [alerted, setAlerted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlerted(false);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        alert("Successfully logged in!");
        setEmail("");
        setPassword("");
        setConfPassword("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorMessage} (${errorCode})`);
        return;
      });
  };

  const handleCheck = (e) => {
    e.preventDefault();
    if (password !== confPassword) {
      alert("Passwords do not match!");
      setAlerted(true);
      return;
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert("Account created successfully");
          localStorage.setItem("user", JSON.stringify(user));
          setEmail("");
          setPassword("");
          setConfPassword("");
          setAlerted(false);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(`${errorMessage} (${errorCode})`);
          return;
        });
    }
  };
  return (
    <div className=" md:right-[52%] md:top-[33%] flex flex-col justify-center items-center absolute bg-gray-300 p-3 lg:top-[35%] lg:right-[30%] right-[35%] sm:right-[43%] top-[40%] sm:top-[35%] rounded-md ">
      <div className="flex flex-row items-start">
        {isReg ? (
          <form
            className=" w-max h-max flex flex-col justify-center items-center"
            onSubmit={handleCheck}
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
        ) : (
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
        )}
        <button
          onClick={() => handleClose("login")}
          className="hover:brightness-150  drop-shadow-lg transition-all rounded-full bg-gray-400"
        >
          <MdOutlineCancel />
        </button>
      </div>
    </div>
  );
};

export default Process;

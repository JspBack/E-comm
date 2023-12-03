import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../../../contexts/ContextProvider";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebase";
import Loader from "./Loader";

const Process = ({ PswdType, text, isReg }) => {
  const { handleClose } = useStateContext();
  const currentColor = localStorage.getItem("colorMode");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [alerted, setAlerted] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleLogin = (e) => {
    setLoader(true);
    e.preventDefault();
    setAlerted(false);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: user.displayName,
            access_token: user.accessToken,
          })
        );
        alert("Successfully logged in!");
        setEmail("");
        setPassword("");
        setConfPassword("");
        window.location.reload();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorMessage} (${errorCode})`);
        setLoader(false);
        return;
      });
  };

  const handleRegister = (e) => {
    setLoader(true);
    e.preventDefault();
    if (password !== confPassword) {
      alert("Passwords do not match!");
      setAlerted(true);
      setLoader(false);
      return;
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert("Account created successfully");
          localStorage.setItem(
            "user",
            JSON.stringify({
              name: user.displayName,
              access_token: user.accessToken,
            })
          );
          setEmail("");
          setPassword("");
          setConfPassword("");
          setAlerted(false);
          window.location.reload();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(`${errorMessage} (${errorCode})`);
          setLoader(false);
          return;
        });
    }
  };
  return (
    <div className="z-10 md:right-[52%] md:top-[33%] flex flex-col justify-center items-center absolute bg-gray-300 p-3 lg:top-[35%] lg:right-[30%] right-[35%] sm:right-[43%] top-[40%] sm:top-[35%] rounded-md ">
      <div className="flex flex-row items-start">
        {isReg ? (
          <form
            className=" w-max h-max flex flex-col justify-center items-center"
            onSubmit={handleRegister}
          >
            <label
              className=" text-white flex text-sm sm:text-2xl font-semibold "
              htmlFor="email"
            >
              Email:
            </label>
            <input
              autoComplete="email"
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
              disabled={loader ? true : false}
              className={`flex justify-center items-center sm:w-96 w-48 text-lg ${
                loader ? "p-1 sm:p-0" : "p-3"
              } hover:drop-shadow-xl mt-3 text-white transition-all hover:brightness-150 disabled:opacity-50 disabled:cursor-not-allowed`}
              type="submit"
              style={{
                backgroundColor: currentColor ? currentColor : "blue",
                borderRadius: "10px",
              }}
            >
              {loader ? <Loader /> : text}
            </button>
          </form>
        ) : (
          <form
            className=" w-max h-max flex flex-col justify-center items-center"
            onSubmit={handleLogin}
          >
            <label
              className=" text-white flex text-sm sm:text-2xl font-semibold "
              htmlFor="email"
            >
              Email:
            </label>
            <input
              autoComplete="email"
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
              disabled={loader ? true : false}
              className={`flex justify-center items-center sm:w-96 w-48 text-lg ${
                loader ? "p-1 sm:p-0" : "p-3"
              } hover:drop-shadow-xl mt-3 text-white transition-all hover:brightness-150 disabled:opacity-50 disabled:cursor-not-allowed`}
              type="submit"
              style={{
                backgroundColor: currentColor ? currentColor : "blue",
                borderRadius: "10px",
              }}
            >
              {loader ? <Loader /> : text}
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

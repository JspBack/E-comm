import React, { useState, useEffect } from "react";
import Loader from "../components/Login/components/Loader";
import { MdOutlineCancel } from "react-icons/md";
import { auth } from "../firebase";
import { sendEmailVerification } from "firebase/auth";

const VerifyPage = () => {
  const currentColor = localStorage.getItem("colorMode");
  const [loader, setLoader] = useState(false);
  const [codeLoader, setCodeLoader] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (isButtonDisabled && countdown > 0) {
      const timerId = setTimeout(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => clearTimeout(timerId);
    } else if (countdown === 0) {
      setIsButtonDisabled(false);
      setCountdown(15);
    }
  }, [isButtonDisabled, countdown]);

  const handleCode = async (e) => {
    e.preventDefault();
    sendEmailVerification(auth.currentUser)
      .then(() => {
        alert("Email Verification Sent!");
      })
      .catch((error) => {
        alert(error.message);
      });
    setTimeout(() => {
      setCodeLoader(false);
      setIsButtonDisabled(true);
    }, 2000);
    setCodeLoader(true);
  };

  const closeReg = () => {
    window.location.href = "/login";
  };

  const handlVerify = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      await auth.currentUser.reload();
      if (auth.currentUser.emailVerified) {
        alert("Email verified!");
        window.location.href = "/";
      } else {
        alert("Email not verified!");
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="flex justify-center items-center flex-col lg:flex-row bg-cover bg-black w-full h-screen">
        <img
          src="/cart_light.png"
          alt="bg"
          className="w-40 h-40 sm:w-52 sm:h-52 sm:mr-24 lg:ml-52"
        />
        <div className="flex flex-col items-center mb-14 lg:ml-[200px] h-max sm:mr-24 lg:mt-60 w-max">
          <div className="flex flex-col items-center sm:h-[300px] mt-14 sm:mt-0 w-[%10]">
            <div className="flex flex-row justify-between items-center">
              <button
                onClick={closeReg}
                className="mr-6 sm:mr-20 hover:brightness-150 drop-shadow-lg transition-all rounded-full bg-gray-400"
              >
                <MdOutlineCancel />
              </button>
              <p className="mr-3 sm:mr-16 font-bold text-center sm:text-left text-xl sm:text-3xl text-white flex flex-col">
                Account Verify
              </p>
            </div>
            <form
              className="mt-3 sm:mt-10 flex flex-col justify-center items-center w-min h-min"
              onSubmit={handlVerify}
            >
              <input
                disabled
                className="tracking-tighter mb-3 rounded text-black sm:w-96 w-48 text-lg p-3 hover:drop-shadow-xl"
                placeholder="Disabled rn :("
              />
              <button
                style={{
                  backgroundColor: currentColor ? currentColor : "blue",
                  borderRadius: "10px",
                }}
                disabled={loader ? true : false}
                className={`flex justify-center items-center sm:w-96 w-48 text-lg ${
                  loader ? "p-3 sm:p-0" : "p-3"
                } hover:drop-shadow-xl mt-3 text-white transition-all hover:brightness-150 disabled:opacity-50 disabled:cursor-not-allowed`}
                type="submit"
              >
                {loader ? <Loader /> : "Verify"}
              </button>
            </form>
            <button
              style={{
                backgroundColor: currentColor ? currentColor : "blue",
                borderRadius: "10px",
              }}
              disabled={isButtonDisabled || codeLoader}
              className={`flex justify-center items-center sm:w-96 w-48 text-lg ${
                codeLoader ? "p-1 sm:p-0" : "p-3"
              } hover:drop-shadow-xl mt-3 text-white transition-all hover:brightness-150 disabled:opacity-50 disabled:cursor-not-allowed`}
              onClick={handleCode}
            >
              {codeLoader ? (
                <Loader />
              ) : isButtonDisabled ? (
                `Resend in ${countdown}s`
              ) : (
                "Send Code"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;

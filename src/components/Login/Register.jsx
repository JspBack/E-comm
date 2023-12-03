import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import Process from "./components/Process";

const Register = () => {
  const { handleClick, isClicked } = useStateContext();
  return (
    <div>
      {isClicked.register && (
        <Process PswdType={"current-password"} text={"Register"} isReg={true} />
      )}
      <button
        onClick={() => handleClick("register")}
        className="sm:w-96 w-48 border-white border-2 text-lg p-3 hover:drop-shadow-xl text-white bg-transparent hover:text-gray-800 transition-all hover:bg-white"
        style={{
          borderRadius: "10px",
        }}
      >
        Register
      </button>
    </div>
  );
};

export default Register;

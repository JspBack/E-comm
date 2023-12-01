import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import Process from "./components/Process";

const Register = () => {
  const { handleClick, isClicked } = useStateContext();
  return (
    <div>
      {isClicked.register && <Process />}
      <button
        onClick={() => handleClick("register")}
        className="sm:w-96 w-48 border-white border-2 text-lg p-3 hover:drop-shadow-xl"
        style={{
          backgroundColor: "transparent",
          color: "white",
          borderRadius: "10px",
        }}
      >
        Register
      </button>
    </div>
  );
};

export default Register;

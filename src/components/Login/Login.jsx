import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import Process from "./components/Process";

const Login = () => {
  const currentColor = localStorage.getItem("colorMode");
  const { handleClick, isClicked } = useStateContext();
  return (
    <div>
      <button
        onClick={() => handleClick("login")}
        className="sm:w-96 w-48 text-lg p-3 hover:drop-shadow-xl text-white transition-all hover:brightness-150"
        style={{
          backgroundColor: currentColor ? currentColor : "blue",
          borderRadius: "10px",
        }}
      >
        Login
      </button>
      {isClicked.login && <Process PswdType={"new-password"} text={"Login"} />}
    </div>
  );
};

export default Login;

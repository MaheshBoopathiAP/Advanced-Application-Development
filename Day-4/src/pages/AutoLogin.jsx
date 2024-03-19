import { useState,useEffect } from "react";
import Login from "./auth/Login";
import classNames from "classnames";
import Hero from "../others/Hero";

function AutoLogin() {
  const [showLogin, setShowLogin] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  const handleHideLogin = () => {
    setShowLogin(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleShowLogin();
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="">
      <div className={classNames("text-center","absolute", showLogin && "blur")}>
      <Hero/>
      </div>
     
      {showLogin && (
        
        <Login
          className="absolute top-0 left-0 w-full z-50  shadow-md rounded-lg p-4"
          onClose={handleHideLogin}
        />
      )}
    </div>
  );
}

export default AutoLogin;
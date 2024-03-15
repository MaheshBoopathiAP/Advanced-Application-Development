import { useState,useEffect } from "react";
import Login from "./Login";
import classNames from "classnames";

function Home() {
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
    <div className="bg-home-pic h-screen bg-cover bg-center">
      <div className={classNames("text-center","absolute", showLogin && "blur")}>
        <h1 className=" text-4xl font-bold text-center mt-5">Welcome to Landing Page!</h1>
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

export default Home;
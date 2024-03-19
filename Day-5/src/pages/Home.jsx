import { useState, useEffect } from 'react'
import classNames from 'classnames'
import Login from './auth/Login'
import Hero from '../others/Hero'
import AutoLogin from './AutoLogin'
import Packages from './Packages'
import FancyTestimonialsSlider from '../others/TestimonialSlider'
import Contact from './Contact'
import About from './About'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Hpackages from '../home/Hpackages'
import Hcontact from '../home/Hcontact'
import Habout from '../home/Habout'

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
    <div className="">
    <div className={classNames("text-center","absolute", showLogin && "blur")}>
    <Navbar/>       
        <Hero/>
        <Hpackages/>
        <FancyTestimonialsSlider/>
        <Hcontact/>
        <Habout/>
    <Footer/>
    </div>
   
    {showLogin && (
      
      <Login
        className="absolute top-0 left-0 w-full z-50  shadow-md rounded-lg p-4"
        onClose={handleHideLogin}
      />
    )}
  </div>
   
  )
}

export default Home
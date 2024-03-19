import React from "react";
import AnimatedWave from "../others/AnimatedWave";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillMail,
  AiFillCaretRight,
} from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
const ElectricBoltIcon = React.lazy(() =>
  import("@mui/icons-material/ElectricBolt")
);

const Footer = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="relative bg-transparent">
      <div
        style={{ minHeight: "30vh", display: "flex", flexDirection: "column" }}
      />
      <div style={{ position: "relative" }}>
        <AnimatedWave color={"#ff0e2c"} animationDuration="4s" opacity={"0.5"} />
        <AnimatedWave
          color={"#ff0e2c"}
          animationDuration="12s"
          opacity={"0.5"}
        />
        <AnimatedWave
          color={"#ff0e2c"}
          animationDirection="reverse"
          animationDuration="10s"
          opacity={"0.5"}
        />
      </div>
      <footer className="bg-zinc-950/50 flex flex-wrap gap-3 justify-around py-5 px-[4%]">
        <div className="w-[90%] md:w-[25%] flex flex-col items-center md:text-start md:items-start gap-5 text-white ">
          <h1 className="text-2xl font-bold relative inline">
            <span className="text-black">Royal</span>-Caribbean
            <div className="absolute top-[-8%] left-[41%]">
              {/* <ElectricBoltIcon sx={{ fontSize: 20, color: "#FEFB14" }} /> */}
            </div>
          </h1>
          <p className="text-justify">
           
            Royal Caribbean : your gateway to seamless booking experiences for unforgettable waterfront getaways. 
            Browse a diverse range of boathouse listings, check real-time availability, and secure your reservation hassle-free.
             Enjoy peace of mind with secure payment processing and access dedicated customer support.
              Gain insights from user reviews and ratings to make informed decisions.
          </p>
          <div className="flex gap-5 ">
            <button className="bg-transparent hover:border-none">
              <AiFillFacebook
                size={40}
                className="text-[#ff0e2c] bg-white hover:bg-[#ff0e2c] hover:text-white rounded-full px-2 "
              />
            </button>
            <button className="bg-transparent hover:border-none">
              <AiFillInstagram
                size={40}
                className="text-[#ff0e2c] bg-white hover:bg-[#ff0e2c] hover:text-white rounded-full px-2"
              />
            </button>
            <button className="bg-transparent hover:border-none">
              <AiOutlineTwitter
                size={40}
                className="text-[#ff0e2c] bg-white hover:bg-[#ff0e2c] hover:text-white rounded-full px-2"
              />
            </button>
          </div>
        </div>
        <div className="w-full sm:w-[85%] md:w-[20%] lg:w-[15%] flex md:flex-col md:px-5 gap-5 max-md:justify-around flex-wrap max-sm:justify-start">
          <div className="flex flex-col gap-3 ">
            <h3 className="text-white text-xl font-semibold ">Useful Links</h3>
            <LinkComp label="Home" to="/" />
            <LinkComp label="About" to="/about" />
            <LinkComp label="Packages" to="/products" />
            <LinkComp label="Contact" to="/contact" />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-white text-xl font-semibold">Services</h3>
            <LinkComp label="Manufacturing" to="/" />
            <LinkComp label="White Labeling" to="/" />
            <LinkComp label="Maintenance" to="/" />
          </div>
        </div>
        <div className="w-full sm:w-[90%] md:w-[45%] flex max-sm:flex-col max-sm:text-start max-md:text-center justify-around">
          {/* <div className="w-full sm:w-[50%] md:w-[45%] flex flex-col gap-5 items-start  ">
            <h3 className="text-white text-xl font-semibold">
              Find Your Battery
            </h3>
            <LinkComp label="Car / SUV / MUV Batteries" to="/" />
            <LinkComp label="Three Wheeler - Batteries" to="/" />
            <LinkComp label="LCV / HCV Batteries" to="/" />
            <LinkComp label="Tractor Batteries" to="/" />
            <LinkComp label="Inverter Batteries" to="/" />
            <LinkComp label="Inverter / HUPS - Genset Batteries" to="/" />
          </div> */}
          <div className="w-full sm:w-[50%] md:w-[55%] flex flex-col gap-5 text-white">
            <h3 className="text-white text-xl font-semibold">Contact Us</h3>
            <h4 className="flex gap-2 ">
              <BiCurrentLocation className="w-10 mt-1" size={20} /> Royal carribean Boathouse Pvt. Ltd.,
              <br /> 1st Cross, 1st Main, 1st Sector,
              <br /> Los Angeles, California, USA 

              <br /> PIN: 90001
            </h4>
            <h4 className="flex items-center gap-2 break-all">
              <AiFillMail className="w-10" size={20} />{" "}
              royalcaribbean@gmail.com
            </h4>
            <div className="flex items-centerg ">
              <div className="flex ">
              <BsFillTelephoneFill className="w-10" size={20} />
              </div>
              <div>
            <h4 className="flex items-center gap-2">
              
              +91 9423948490
            </h4>
            <h4 className="flex items-center gap-2">
              +91 8865784932
            </h4>
            <h4 className="flex items-center gap-2">
             
              +91 9116597654
            </h4>
            </div>
            </div>
          </div>

          <div className='flex flex-col gap-3 '>
            <h3 className="text-white text-xl font-semibold">Policies</h3>
            <Link to="/" className="text-white hover:underline flex w-full" onClick={handleClick}>
              <AiFillCaretRight className="mt-1 w-10" size={15} />
              Terms and Conditions
            </Link>
            <Link to="/" className="text-white hover:underline flex w-full" onClick={handleClick}>
              <AiFillCaretRight className="mt-1 w-10" size={15} />
              Refund Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

const LinkComp = ({ label, to }) => {
  return (
    <a href={to} className="text-white hover:underline flex w-full">
      <AiFillCaretRight className="mt-1 w-10" size={15} />
      {label}
    </a>
  );
};

export default Footer;

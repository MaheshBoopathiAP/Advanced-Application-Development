import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../layout/Navbar";


const ProfilePage = () => {

  return (
    <>
    <Navbar/>
      <div className="absolute bg-blue-900 h-[50%] sm:w-screen"></div>
      <div className="ecomm-popup bg-white top-0 z-20 w-screen h-auto flex flex-col overflow-y p-4 justify-center items-center text-black">
        <div className="w-[60%] md:mt-4 relative flex flex-row gap-4 md:gap-16">
          <div className="w-[60%] mt-4 relative">
              <Link
                to={""}
                //className="bg-[#ff0e2c] py-2 mx-5 text-center px-[30%] md:mx-[15%] w-[10%] text-white font-Poppins tracking-wider rounded-s-full rounded-e-full">
                className="w-auto bg-blue-500 duration-300 ease-in relative flex flex-col text-center text-white  md:p-5 py-2 rounded-lg shadow-lg md:mb-[3%] mt-10"
              >
                My Packages
              </Link>
          </div>
          <div className="w-[60%] mt-4 relative ">
              <Link
                to={""}
                //className="bg-[#ff0e2c] py-2 mx-5 text-center px-[30%] md:mx-[15%] w-[10%] text-white font-Poppins tracking-wider rounded-s-full rounded-e-full">
                className="w-auto bg-blue-500 duration-300 ease-in relative flex flex-col text-center text-white  md:p-5 py-2 rounded-lg shadow-lg md:mb-[3%] mt-10 p-1"
              >
                UpdateProfile
              </Link>
          
          </div>
        </div>
        <div className="w-auto bg-white duration-300 ease-in relative flex flex-col md:p-5 py-2 rounded-lg shadow-lg md:mb-[3%] mt-10">
          <div className="w-full h-[50px] text-center">
            <h1 className="text-3xl font-bold text-black">User Profile</h1>
          </div>
          <div className="flex md:flex-row flex-col px-4 md:px-10 rounded-lg">
            <div className="w-full md:w-[300px] h-[300px] bg-red-500 rounded-full mx-0 md:mx-5">
              <img
                className="w-full h-full rounded-full"
                src={"https://tse1.mm.bing.net/th?id=OIP.R87PbOkdc695AAZ-_qrLYwHaHk&pid=Api&rs=1&c=1&qlt=95&h=180"}
                alt={""}
              />
            </div>

            <div className="p-4 md:mx-5 m-0">
              <div className="my-3 bg-cyan-50 px-5 py-1 rounded-md">
                <span className="font-semibold text-lg pr-2 md:pr-20">
                  Name
                </span>
               Mahesh
              </div>
              <div className="my-3 py-1 px-5 bg-slate-100 rounded-md">
                <span className="font-semibold text-lg pr-2 md:pr-20">
                  Email
                </span>
                 maheoffi@gmail.com
              </div>
              <div className="my-3 py-1 px-5 bg-slate-100 rounded-md">
                <span className="font-semibold text-lg pr-2 md:pr-20">
                  PhoneNo
                </span>{""}
                1234567890
              </div>
              <div className="mt-3 py-1 px-5 bg-slate-100 rounded-md">
                <span className="font-semibold text-lg pr-2 md:pr-20">
                  Address
                </span>{" "}
                64,1st street,coimbatore
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
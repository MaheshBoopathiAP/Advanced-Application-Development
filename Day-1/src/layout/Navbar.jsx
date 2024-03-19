import React, { useState,useEffect } from "react";
import { MoreVertical, ChevronLast, ChevronFirst, Pointer } from "lucide-react";
import logo from "../assets/images/logo.svg";
import ImageGenerator from "../others/ImageGenerator";
import { Link } from "react-router-dom";

const SidebarContext = React.createContext();

function Navbar() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
 
  const toggleSidebar = () => {
    setSidebarExpanded((prevState) => !prevState);
  };
  useEffect(() => {
    const body = document.body;
    const scrollLock = () => {
      if (sidebarExpanded) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    };

    scrollLock();

    return () => {
      body.style.overflow = "auto"; // Reset overflow on unmount
    };
  }, [sidebarExpanded]);


  return (
    <SidebarContext.Provider value={{ sidebarExpanded, toggleSidebar }}>
      <div className="flex justify-between px-5 pt-3 pb-1 bg-blue-950/80">
        <div className="flex">
          <div className="w-[5rem]">
            {/* menu icon */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-slate-50 hover:cursor-pointer"
              onClick={toggleSidebar}
            >
              <path
                fillRule="evenodd"
                d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg> */}
          </div>
         <img src={logo} className="w-[10rem] h-10" alt="logo" />
        </div>

          <div className="flex">
        <div className="text-lg uppercase text-slate-200 px-5 py-2 z-50">
          <Link to="/packages">
          Find Packages
          </Link>
        </div>
        <div className="text-lg uppercase text-slate-200 px-5 py-2">
        <Link to="/about">
          About
          </Link>
        </div>
        <div className="text-lg uppercase text-slate-200 px-5 py-2">
        <Link to="/contact">
          Contact
          </Link>
        </div>
        <div className="text-lg uppercase text-slate-200 px-5 py-2">
          Manage My Bookings
        </div>
        </div>
            
            <div className="flex">
        <div className="px-5 py-2">
        <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-8 h-8 text-white"
     
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
      />
    </svg>
        </div>

        <div className="text-lg uppercase text-slate-200 px-5 py-2">
         <Link to="/login"> Sign In</Link>
        </div>
        <div className="text-lg uppercase text-slate-200 px-5 py-2 ">
         <Link to="/profile"> 
         <ImageGenerator name1="Hakthi" name2="Kelan"/>
         </Link>
        </div>
        </div>
      </div>

      {sidebarExpanded && <Sidebar />}
    </SidebarContext.Provider>
  );
}

function Sidebar() {
  const { sidebarExpanded, toggleSidebar } = React.useContext(SidebarContext);

  return (
    <aside
    className={`absolute h-[39.3rem] w-[300px] z-50 transition duration-200 ease-in-out ${
      sidebarExpanded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
    }`}
  >      <nav className="h-full inline-flex flex-col bg-sky-0950 shadow-sm border border-gray-400 bg-zinc-900/80">
        <div className="p-4 pb-2 flex justify-between items-center">
            {/* cross icon */}
          <button className="top-0 ml-52 right-0 hover:bg-slate-500"  >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mx-2 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={toggleSidebar} 
             
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div>

        </div>

        <ul className="flex-1 text-xl">
          <li className="py-4 text-slate-100 hover:bg-slate-500/50 p-5 rounded">Find a Boat House</li>
          <li className="py-4 text-slate-100 hover:bg-slate-500/50 p-5 rounded">Profile</li>
          <li className="py-4 text-slate-100 hover:bg-slate-500/50 p-5 rounded">Favorites</li>
          <li className="py-4 text-slate-100 hover:bg-slate-500/50 p-5 rounded">FAQ</li>
          <li className="py-4 text-slate-100 hover:bg-slate-500/50 p-5 rounded">Gift cards</li>
          <li className="py-4 text-slate-100 hover:bg-slate-500/50 p-5 rounded">Contact Us</li>
        </ul>

        <div className="border-t flex p-3">
                  <ImageGenerator name1="Hakthi" name2="Kelan"/>
         <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              sidebarExpanded ? "w-52 ml-3 z-10" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold text-white">Mahesh Boopathi</h4>
              <span className="text-xs text-gray-400">maheoffi@gmail.com</span>
            </div>
            <MoreVertical size={20} className="text-white"/>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default Navbar;

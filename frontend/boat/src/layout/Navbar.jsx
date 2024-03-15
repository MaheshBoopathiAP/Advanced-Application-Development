import React, { useState } from "react";
import { MoreVertical, ChevronLast, ChevronFirst, Pointer } from "lucide-react";
import logo from "../assets/images/logo.svg";

const SidebarContext = React.createContext();

function Navbar() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded((prevState) => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ sidebarExpanded, toggleSidebar }}>
      <div className="flex justify-between px-5 pt-5 pb-3 bg-blue-950/40">
        <div className="flex">
          <div className="w-[5rem]">
            {/* menu icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-slate-50"
              onClick={toggleSidebar}
              onMouseEnter={() => document.body.style.cursor = 'pointer'}
            >
              <path
                fillRule="evenodd"
                d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
         <img src={logo} className="w-[10rem] h-10" alt="logo" />
        </div>

        <div className="text-xl uppercase text-slate-200 px-5 py-2">
          Find a Boat
        </div>
        <div className="text-xl uppercase text-slate-200 px-5 py-2">
          Deals
        </div>
        <div className="text-xl uppercase text-slate-200 px-5 py-2">
          Boats
        </div>
            
        <div className="px-5 py-2">
        <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
      />
    </svg>
        </div>
      </div>

      {sidebarExpanded && <Sidebar />}
    </SidebarContext.Provider>
  );
}

function Sidebar() {
  const { sidebarExpanded, toggleSidebar } = React.useContext(SidebarContext);

  return (
    <aside className="absolute h-[40.5rem] w-[300px]">
      <nav className="h-full inline-flex flex-col bg-sky-0950 shadow-sm border border-gray-400">
        <div className="p-4 pb-2 flex justify-between items-center">
          {/* <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              sidebarExpanded ? "w-32" : "w-0"
            }`}
            alt=""
          /> */}
        
            {/* cross icon */}
          <button className="top-0 ml-52 right-0 hover:bg-slate-500"  onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mx-2 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
             
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
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              sidebarExpanded ? "w-52 ml-3" : "w-0"
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

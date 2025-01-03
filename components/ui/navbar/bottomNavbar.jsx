"use client";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { LuMessagesSquare } from "react-icons/lu";
import { useState } from "react";
import { Chatpopup } from "../chat/chatpopup";
export default function BottomNavbar() {
  const [popChat, setPopChat] = useState(false);

  const handleChatClick = () => {
    setPopChat((prev) => !prev);
  };
  return (
    <div className="fixed bottom-0 flex items-center justify-between w-full px-2 sm:px-6 py-3 sm:py-1 text-white bg-black border-t  border-bordercolor">
      {/* Left Section: Live Data Indicator */}
      <div className="flex items-center gap-x-6 sm:gap-x-10">
        <div className="flex items-center h-full gap-2 pr-4 border-r border-bordercolor">
          <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
          <p className="text-xs md:text-sm lg:text-base  font-bold text-primaryText">LIVE DATA ACTIVE</p>
        </div>

        {/* Center Section: Follow Us */}
        <div className="flex items-center h-full pr-1 sm:pr-4  sm:border-r gap-x-3 border-bordercolor">
          <p className="text-sm font-bold text-primaryText hidden sm:block ">FOLLOW US</p>
          <FaTelegramPlane
            size={20}
            className="cursor-pointer text-primaryText "
          />
          <AiOutlineClose size={20} className="text-white cursor-pointer" />
        </div>
        <div className="hidden lg:flex items-center gap-x-2 ">
          <p className="h-full pr-6 text-sm font-bold border-r text-primaryText border-bordercolor hidden md:block">
            $CTO GOVERNANCE
          </p>
          <p className="h-full px-3 md:px-16 text-sm font-bold border-r text-primaryText border-bordercolor">
            $0.55
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6" onClick={handleChatClick}>
        <div className="flex items-center h-full min-w-fit gap-2 px-3 md:px-18 cursor-pointer border-x border-bordercolor">
          <p className="font-bold text-secondaryText text-xs md:text-sm lg:text-base ">GLOBAL CHAT</p>
          <LuMessagesSquare size={20} className="text-secondaryText" />
        </div>
      </div>

      {/* Right Section: Governance and Global Chat */}
      {popChat && (
        <Chatpopup handleChatClick={handleChatClick} />
      )}
    </div>
  );
}

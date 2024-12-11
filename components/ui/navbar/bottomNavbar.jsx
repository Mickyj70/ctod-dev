"use client";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { LuMessagesSquare } from "react-icons/lu";
import { useState } from "react";

export default function BottomNavbar() {
  const [popChat, setPopChat] = useState(false);

  const handleChatClick = () => {
    setPopChat((prev) => !prev);
  };
  return (
    <div className="fixed bottom-0 flex items-center justify-between w-full px-6 py-1 text-white bg-black border-t  border-bordercolor">
      {/* Left Section: Live Data Indicator */}
      <div className="flex items-center gap-x-10">
        <div className="flex items-center h-full gap-2 pr-4 border-r border-bordercolor">
          <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
          <p className="text-sm font-bold text-primaryText">LIVE DATA ACTIVE</p>
        </div>

        {/* Center Section: Follow Us */}
        <div className="flex items-center h-full pr-4 border-r gap-x-3 border-bordercolor">
          <p className="text-sm font-bold text-primaryText">FOLLOW US</p>
          <FaTelegramPlane
            size={20}
            className="cursor-pointer text-primaryText "
          />
          <AiOutlineClose size={20} className="text-white cursor-pointer" />
        </div>
        <div className="flex items-center gap-x-2 ">
          <p className="h-full pr-6 text-sm font-bold border-r text-primaryText border-bordercolor">
            $CTO GOVERNANCE
          </p>
          <p className="h-full px-16 text-sm font-bold border-r text-primaryText border-bordercolor">
            $0.55
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6" onClick={handleChatClick}>
        <div className="flex items-center h-full gap-2 px-24 cursor-pointer border-x border-bordercolor">
          <p className="font-bold text-secondaryText">GLOBAL CHAT</p>
          <LuMessagesSquare size={20} className="text-secondaryText" />
        </div>
      </div>

      {/* Right Section: Governance and Global Chat */}
      {popChat && (
        <div className="fixed bottom-10 right-6 w-96 h-[500px] bg-background border border-bordercolor rounded-t-lg shadow-lg">
          <div className="flex items-center justify-between p-4 border-b border-bordercolor">
            <h2 className="font-bold text-primaryText">GLOBAL CHAT</h2>
            <AiOutlineClose
              size={20}
              className="transition-colors cursor-pointer text-primaryText hover:text-white"
              onClick={handleChatClick}
            />
          </div>
          <div className="h-[calc(100%-116px)] overflow-y-auto p-4">
            {/* Chat messages will go here */}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-bordercolor">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 w-4/6 p-2 bg-transparent border-l rounded-l border-y border-bordercolor focus:outline-none focus:border-primaryText text-primaryText"
            />
            <button className="w-4/12 px-4 py-2 font-bold text-white uppercase border rounded rounded-r border-bordercolor bg-secondaryText">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

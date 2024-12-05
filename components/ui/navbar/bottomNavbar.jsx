"use client";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { LuMessagesSquare } from "react-icons/lu";

export default function BottomNavbar() {
    return (
        <div className="w-full text-white flex justify-between items-center py-1 px-6 border-t border-bordercolor">
            {/* Left Section: Live Data Indicator */}
            <div className="flex items-center gap-x-10">
                <div className="flex items-center gap-2 border-r border-bordercolor pr-4 h-full">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    <p className="text-sm font-bold text-primaryText">LIVE DATA ACTIVE</p>
                </div>

                {/* Center Section: Follow Us */}
                <div className="flex items-center gap-x-3 border-r border-bordercolor pr-4 h-full">
                    <p className="text-sm font-bold text-primaryText">FOLLOW US</p>
                    <FaTelegramPlane size={20} className="text-primaryText cursor-pointer " />
                    <AiOutlineClose size={20} className="text-white cursor-pointer" />

                </div>
                <div className="flex items-center gap-x-2 ">
                    <p className="text-sm font-bold text-primaryText border-r border-bordercolor pr-6 h-full">$CTO GOVERNANCE</p>
                    <p className="text-sm font-bold text-primaryText border-r border-bordercolor px-16 h-full">$0.55</p>
                </div>
            </div>

            {/* Right Section: Governance and Global Chat */}
            <div className="flex items-center gap-6">

                <div className="flex items-center gap-2 cursor-pointer px-24 border-x border-bordercolor h-full">
                    <p className="text-secondaryText font-bold ">GLOBAL CHAT</p>
                    <LuMessagesSquare size={20} className="text-secondaryText" />
                </div>
            </div>
        </div>
    )
}

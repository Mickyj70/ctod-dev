import React from "react";

function ChartToolbar() {
    return (
        <div className="flex items-center justify-between bg-[#0F0F10] text-gray-300">
            <div className="flex items-center gap-x-10 px-4 py-2">
                {/* Time Selection */}
                <div className="flex items-center ">
                    <span className="text-sm text-[#646470] font-sans font-medium">Time</span>
                </div>


                <div className="flex items-center ">
                    <button className="px-3 py-1 text-sm hover:bg-gray-700 text-[#646470] font-sans rounded-md">15m</button>
                    <button className="px-3 py-1 text-sm hover:bg-gray-700 text-[#646470] font-sans rounded-md">1h</button>
                    <button className="px-3 py-1 text-sm hover:bg-gray-700 text-[#646470] font-sans rounded-md">8h</button>
                    <button className="px-3 py-1 text-sm hover:bg-gray-700 text-[#646470] font-sans rounded-md">1d</button>
                </div>

                {/* Indicators */}
                <span className="font-medium font-sans text-[#646470] text-sm">Indicator</span>


                <div className="flex items-center">
                    <button className="p-2 hover:bg-gray-700 rounded-md">
                        <img src="/candlestick.svg" alt="" />
                    </button>

                    <button className="p-2 hover:bg-gray-700 rounded-md">
                        <img src="/graph.svg" alt="" />
                    </button>

                    <button className="p-2 hover:bg-gray-700 rounded-md">
                        <img src="/graph.svg" alt="" />
                    </button>
                </div>

                {/* Settings and Fullscreen */}
                <div className="flex items-center space-x-4">
                    <button className="p-2 hover:bg-gray-700 rounded-md">
                        <img src="/Camera.svg" alt="" />
                    </button>

                    <button className="p-2 hover:bg-gray-700 rounded-md">
                        <img src="/settings.svg" alt="" />
                    </button>
                </div>
            </div>


            <button className="p-2 hover:bg-gray-700 rounded-md">
                <img src="/fullscreen.svg" alt="" />
            </button>
        </div>
    );
}

export default ChartToolbar;
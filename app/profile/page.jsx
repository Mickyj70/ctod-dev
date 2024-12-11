"use client"
import { Copy, FilePenLine, RefreshCcw, RotateCw, SquareArrowOutUpRight } from "lucide-react";
import { useState } from "react";
export default function Page() {
    const [activeTab, setActiveTab] = useState('coins-held');

    const renderContent = () => {
        switch (activeTab) {
            case 'coins-held':
                return <CoinsHeldTable />;
            case 'coins-created':
                return <CoinsCreatedTable />;
            case 'followers':
                return <FollowersList />;
            case 'following':
                return <FollowingList />;
            default:
                return <CoinsHeldTable />;
        }
    };
    return (
        <div className="Container">
            <div className="innerContainer mx-8 ">
                <div className="flex justify-between items-center gap-x-4 w-full">
                    <div className="flex justify-between items-center w-full  bg-sidebar rounded-md min-h-24 px-6 py-4 ">
                        <div className="flex items-center  ">
                            <div className="flex items-center gap-x-3">
                                <div className="h-16 w-16 rounded-full bg-white"></div>
                                <div className="">
                                    <p className="flex items-center gap-x-2 text-xl font-semibold">@wgm  <span className="cursor-pointer"><FilePenLine size={16} /></span></p>
                                    <div className="text-placeholderText font-semibold">0x000000000000</div>
                                    <p className="flex items-center gap-x-2 text-md text-placeholderText font-semibold">View on sonscan <span className="cursor-pointer"><SquareArrowOutUpRight size={16} /></span></p>
                                </div>
                            </div>
                        </div>


                        <button className="bg-secondaryText px-5 py-2 rounded-md font-medium">Follow</button>
                    </div>


                    <div className="flex items-center gap-x-3">
                        <div className="border border-bordercolor w-64 flex flex-col justify-center min-h-24 items-center py-7 rounded-md uppercase font-bold">
                            <p >followers</p>
                            <p>10</p>
                        </div>
                        <div className="border border-bordercolor w-64 flex flex-col justify-center min-h-24 items-center py-7 rounded-md uppercase font-bold">
                            <p >followering</p>
                            <p>10</p>
                        </div>
                    </div>
                </div>

                <div className="flex  items-center gap-x-4 w-full mt-3">
                    <button
                        onClick={() => setActiveTab('coins-held')}
                        className={`border border-bordercolor py-2 px-3 rounded-md primarybutton ${activeTab === 'coins-held' ? 'bg-secondaryText' : ''}`}
                    >
                        <p className="text-[#F5F5F5] font-semibold uppercase">coins held</p>
                    </button>
                    <button
                        onClick={() => setActiveTab('coins-created')}
                        className={`border border-bordercolor py-2 px-3 rounded-md primarybutton ${activeTab === 'coins-created' ? 'bg-secondaryText' : ''}`}
                    >
                        <p className="text-[#F5F5F5] font-semibold uppercase">coins created</p>
                    </button>
                    <button
                        onClick={() => setActiveTab('followers')}
                        className={`border border-bordercolor py-2 px-3 rounded-md primarybutton ${activeTab === 'followers' ? 'bg-secondaryText' : ''}`}
                    >
                        <p className="text-[#F5F5F5] font-semibold uppercase">Followers</p>
                    </button>
                    <button
                        onClick={() => setActiveTab('following')}
                        className={`border border-bordercolor py-2 px-3 rounded-md primarybutton ${activeTab === 'following' ? 'bg-secondaryText' : ''}`}
                    >
                        <p className="text-[#F5F5F5] font-semibold uppercase">Following</p>
                    </button>
                </div>



                <div className="mt-6 ">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

function CoinsHeldTable() {
    return (
        <div className="w-full border border-bordercolor rounded-md py-6 px-4">

            <h2 className="text-md uppercase font-bold">Coins Held</h2>

            <div className=" text-white p-4 rounded-md shadow-lg mt-3">
                {/* Table Header */}
                <div className="flex justify-between items-center bg-transparent py-3 mb-3 px-3 text-sm font-semibold uppercase text-placeholderText">
                    <div className="w-1/3">Token</div>
                    <div className="w-1/3 text-center">Holdings</div>
                    <div className="w-1/3 text-right">Actions</div>
                </div>

                {/* Table Row */}
                <div className="flex justify-between items-center bg-[#1D1D1E4D] py-3 text-sm px-3">
                    {/* Token Information */}
                    <div className="flex items-center w-1/3">
                        <div className="h-14 w-14 rounded-full bg-white"></div>
                        <div className="ml-2">
                            <div className="font-semibold text-base">SNOOGE</div>
                            <div className="text-gray-400 text-xs flex items-center gap-x-2">0x0000...0000 <span><Copy size={12} /></span></div>
                        </div>
                    </div>

                    {/* Holdings */}
                    <div className="w-1/3 text-center">
                        <div className="font-semibold text-base">0 $SNO</div>
                        <div className="text-orange-500 text-md font-semibold text-base">0.000 SNO</div>
                    </div>

                    {/* Actions */}
                    <div className="w-1/3 text-right flex justify-end  ">
                        <div className=" w-fit flex items-center gap-x-4">
                            <button className="flex items-center gap-x-2 text-placeholderText uppercase font-semibold">
                                <RotateCw size={14} />
                                <p>Refresh</p>
                            </button>
                            <button className=" bg-secondaryText hover:bg-secondaryText/85 text-white font-medium px-4 py-2 rounded-md">
                                View Coin
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CoinsCreatedTable() {
    return (
        <div className="w-full border border-bordercolor rounded-md py-10 px-8">

            <h2 className="text-md uppercase font-bold">Coins created</h2>

            <div className="border w-full border-bordercolor rounded-md py-2 px-3 flex items-center gap-x-2 mt-3">
                <div className="h-12 w-12 rounded-full border border-secondaryText bg-slate-500"></div>

                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <p className="font-semibold uppercase flex items-center gap-x-4">TOKEN NAME  <span className="text-placeholderText text-sm">$TOKEN</span></p>
                        <p className="text-sm text-placeholderText font-semibold">3d ago</p>
                    </div>

                    <p className="uppercase text-placeholderText font-bold text-sm mt-1">CREATED BY : @ <span>WGM</span> </p>
                    <p className="uppercase text-positive font-bold text-sm">MARKET CAP :$3.3k </p>
                    <p className="text-sm text-placeholderText">Join  us as we embark on a journey into a new era. The future is now, poised  for discovery. Unveil the mysteries with us and become part of something  extraordinary. Together, let's push the boundaries of what is  possible.</p>
                </div>
            </div>
        </div>
    );
}

function FollowersList() {
    return (
        <div className="w-full border border-bordercolor rounded-md py-10 px-8">

            <h2 className="text-md uppercase font-bold">Followers</h2>

            <div className="border w-full border-bordercolor rounded-md py-2 px-3 flex items-center justify-between gap-x-2 mt-3">
                <div className="flex items-center gap-x-2">
                    <div className="h-12 w-12 rounded-full border border-secondaryText bg-slate-500"></div>

                    <div className="">
                        <p className="font-semibold text-base flex items-center gap-x-4"> @anonon </p>
                        <p className="text-sm text-placeholderText font-semibold flex items-center gap-x-1">0x000000000000 <span><Copy size={14} /></span></p>
                        <p className="text-sm text-placeholderText font-semibold"> 3 Followers </p>
                    </div>
                </div>

                <button className="py-2 px-3 bg-secondaryText rounded-md text-sm font- font-medium">View profile</button>
            </div>
        </div>
    );
}

function FollowingList() {
    return (
        <div className="w-full border border-bordercolor rounded-md py-10 px-8">

            <h2 className="text-md uppercase font-bold">Following</h2>

            <div className="border w-full border-bordercolor rounded-md py-2 px-3 flex items-center justify-between gap-x-2 mt-3">
                <div className="flex items-center gap-x-2">
                    <div className="h-12 w-12 rounded-full border border-secondaryText bg-slate-500"></div>

                    <div className="">
                        <p className="font-semibold text-base flex items-center gap-x-4"> @anonon </p>
                        <p className="text-sm text-placeholderText font-semibold flex items-center gap-x-1">0x000000000000 <span><Copy size={14} /></span></p>
                        <p className="text-sm text-placeholderText font-semibold"> 3 Followers </p>
                    </div>
                </div>

                <button className="py-2 px-3 bg-secondaryText rounded-md text-sm font- font-medium">View profile</button>
            </div>
        </div>
    );
}
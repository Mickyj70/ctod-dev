"use client";
import { useState } from "react";
import Link from "next/link";
import { IoChevronDownOutline } from "react-icons/io5";
import { TiStarOutline } from "react-icons/ti";

export const Navbar = ({ amount = 120000 }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const data = [
        { name: "New Pairs", path: "/new-pairs" },
        { name: "Trending", path: "/trending" },
        { name: "Advance Mode", path: "/advance-mode" },
        { name: "Holdings", path: "/holdings" },
        { name: "Create Token", path: "/create-token" },
    ];

    const formatPrice = (price) => {
        if (price >= 1000000) {
            return (price / 1000000) + 'M';
        } else if (price >= 1000) {
            return (price / 1000) + 'k';
        }
        return price.toString();
    };

    const coinData = [
        { name: "BTC", price: formatPrice(100000) },
        { name: "ETH", price: formatPrice(100000) },
        { name: "SOL", price: formatPrice(100000) },
        { name: "BNB", price: formatPrice(100000) },
    ];



    return (
        <div className="h-[130px]  border-b border-bordercolor">
            <div className="flex h-[95px] gap-x-4 border-b border-bordercolor items-center w-full">
                <div className="px-12">
                    <p className="font-extrabold text-4xl">CTO'D</p>
                </div>
                <div className="flex items-center gap-x-16 px-8 border-x h-full border-bordercolor">
                    {data.map((item, index) => (
                        <Link href={item.path} key={index}>
                            <p className="uppercase font-bold text-white cursor-pointer hover:text-white/40">
                                {item.name}
                            </p>
                        </Link>
                    ))}
                </div>
                <div className="flex-1 flex h-full items-center justify-between">
                    <div className="flex-1 flex items-center justify-center w-full h-full py-2 px-3">
                        <div className="w-full h-12 bg-sidebar rounded-md py-2 px-3 flex items-center gap-x-3">
                            <p>icon</p>
                            <input
                                type="text"
                                placeholder="SEARCH BY TOKEN OR LP CONTRACT"
                                className="bg-sidebar w-full h-full outline-none font-bold placeholder:text-placeholderText uppercase"
                            />
                        </div>
                    </div>
                    <div className="flex-1 flex relative items-center gap-x-3 justify-between px-6 w-full h-full bg-sidebar">
                        <div className="flex items-center gap-x-4">
                            <div className="w-12 h-12 bg-white rounded-full"></div>
                            <div>
                                <p className="font-bold text-xl">0x00000000</p>
                                <p className="font-bold text-fadedText">
                                    BALANCE <span>icon</span> <span>{formatPrice(amount)}</span>
                                </p>
                            </div>
                        </div>
                        <div onClick={toggleDropdown} className="cursor-pointer">
                            <IoChevronDownOutline size={35} />
                        </div>


                        {/* Dropdown */}

                        {isDropdownOpen && (
                            <div className="absolute top-[80px] right-0 w-full bg-sidebar h-screen  rounded-md shadow-md p-4">
                                <p className="font-bold text-white">My Account</p>
                                <ul className="mt-2">
                                    <li className="py-2 border-b border-bordercolor">
                                        <Link href="/settings">Settings</Link>
                                    </li>
                                    <li className="py-2 border-b border-bordercolor">
                                        <Link href="/governance">Governance</Link>
                                    </li>
                                    <li className="py-2 border-b border-bordercolor">
                                        <p>Referral Program (Soon)</p>
                                    </li>
                                    <li className="py-2 text-red-500">
                                        <Link href="/logout">Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-x-4 py-1 px-7 w-full h-[35px]">
                <p className="flex items-center gap-x-2 text-primaryText font-bold uppercase border-r border-bordercolor px-3 h-full"> <span><TiStarOutline size={20} /></span> Watching</p>
                <div className="flex gap-x-4 items-center ">
                    {coinData.map((item, index) => (
                        <div key={index} className="flex items-center gap-x-2 border-r border-bordercolor  h-full px-6">
                            <p key={index} className="font-bold text-secondaryText text-base">{item.name} <span className="text-primaryText">${item.price}</span></p>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};
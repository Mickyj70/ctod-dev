"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IoChevronDownOutline } from "react-icons/io5";
import { TiStarOutline } from "react-icons/ti";
import { ChevronRight } from "lucide-react";
import { CreateTokenModal } from "../modals/createtoken";

export const Navbar = ({ amount = 120000 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);

  const searchDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchDropdownRef.current &&
        !searchDropdownRef.current.contains(event.target)
      ) {
        setIsSearchDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const toggleSearchDropdown = () => {
    setIsSearchDropdownOpen((prev) => !prev);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const data = [
    { name: "New Pairs", path: "/new-pairs" },
    { name: "Trending", path: "/trending" },
    { name: "Advance Mode", path: "/advance-mode" },
    { name: "Holdings", path: "/holdings" },
    {
      name: "Create Token",
      isButton: true,
      onClick: () => setIsModalOpen(true),
    },
  ];

  const formatPrice = (price) => {
    if (price >= 1000000) {
      return price / 1000000 + "M";
    } else if (price >= 1000) {
      return price / 1000 + "k";
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
    <>
      <div className="h-[130px] border-b border-bordercolor">
        <div className="flex h-[95px] gap-x-4 border-b border-bordercolor items-center w-full">
          <div className="px-12">
            <p className="text-4xl font-extrabold">CTO&apos;D</p>
          </div>
          <div className="flex items-center h-full px-8 gap-x-16 border-x border-bordercolor">
            {data.map((item, index) =>
              !item.isButton ? (
                <Link href={item.path} key={index}>
                  <p className="text-xs font-bold text-white uppercase cursor-pointer hover:text-white/40">
                    {item.name}
                  </p>
                </Link>
              ) : (
                <p
                  key={index}
                  onClick={item.onClick}
                  className="text-xs font-bold text-white uppercase cursor-pointer hover:text-white/40"
                >
                  {item.name}
                </p>
              )
            )}
          </div>
          <div className="flex items-center justify-between flex-1 h-full">
            <div
              className="relative flex items-center justify-center flex-1 w-full h-full px-3 py-2"
              ref={searchDropdownRef}
            >
              <div
                onClick={toggleSearchDropdown}
                className="flex items-center w-full h-10 px-3 py-2 rounded-md cursor-pointer bg-sidebar gap-x-3"
              >
                <p>icon</p>
                <input
                  type="text"
                  placeholder="SEARCH BY TOKEN OR LP CONTRACT"
                  className="w-full h-full font-bold uppercase outline-none bg-sidebar placeholder:text-placeholderText"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              {isSearchDropdownOpen && (
                <div className="absolute h-[332px] w-[225px] left-0 z-50  mt-1 rounded-md shadow-lg top-full bg-sidebar">
                  {/* Dropdown content here */}
                  no messages
                </div>
              )}
            </div>
            <div className="relative flex items-center justify-between flex-1 w-full h-full px-6 gap-x-3 bg-sidebar">
              <div className="flex items-center gap-x-4">
                <div className="w-12 h-12 bg-white rounded-full"></div>
                <div>
                  <p className="text-xl font-bold">0x00000000</p>
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
                <div className="absolute top-[80px] right-0 w-full z-20 bg-sidebar h-screen  rounded-md shadow-md p-4">
                  <div className="flex items-center justify-between w-full py-12">
                    <p className="text-2xl font-bold text-white">My Account</p>
                    <p className="text-xl text-primaryText">x</p>
                  </div>
                  <ul className="mt-2">
                    <li className="flex items-center justify-between py-6 text-lg font-bold uppercase border-b border-bordercolor">
                      <Link href="/settings">Settings</Link>
                      <ChevronRight size={30} />
                    </li>
                    <li className="flex items-center justify-between py-6 text-lg font-bold uppercase border-b border-bordercolor">
                      <Link href="/goverance">Governance</Link>
                      <ChevronRight size={30} />
                    </li>
                    <li className="py-6 border-b border-bordercolor text-[#646470] text-lg font-bold  flex items-center justify-between uppercase">
                      <p className="relative">
                        Referral Program{" "}
                        <span className="absolute ml-2 -top-3 text-[10px] border border-[#646470] rounded-md px-1">
                          Soon
                        </span>
                      </p>
                      <ChevronRight size={30} />
                    </li>
                    <li className="flex items-center justify-between py-6 text-lg font-bold uppercase border-b border-bordercolor text-negative">
                      <Link href="/logout">Logout</Link>
                      <ChevronRight color="white" size={30} />
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-4 py-1 px-7 w-full h-[35px]">
          <p className="flex items-center h-full px-3 font-bold uppercase border-r gap-x-2 text-primaryText border-bordercolor">
            <span>
              <TiStarOutline size={20} />
            </span>
            Watching
          </p>
          <div className="flex items-center gap-x-4 ">
            {coinData.map((item, index) => (
              <div
                key={index}
                className="flex items-center h-full px-6 border-r gap-x-2 border-bordercolor"
              >
                <p
                  key={index}
                  className="text-base font-bold text-secondaryText"
                >
                  {item.name}{" "}
                  <span className="text-primaryText">${item.price}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CreateTokenModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

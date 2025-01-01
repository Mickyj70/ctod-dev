"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IoChevronDownOutline } from "react-icons/io5";
import { TiStarOutline } from "react-icons/ti";
import { ChevronRight } from "lucide-react";
import { CiSearch } from "react-icons/ci";
import { CreateTokenModal } from "../modals/createtoken";
import { useRouter } from "next/navigation";
import { IoIosClose } from "react-icons/io";
import { motion } from "motion/react"

export const Navbar = ({ amount = 120000 }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
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
    { name: "create token", path: "/create-token" },

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

  ];

  const router = useRouter();

  const handleProfile = () => {
    router.push("/profile");
  };

  return (
    <>
      <div className="h-[130px] border-b border-bordercolor">
        <div className="flex h-[95px] gap-x-4 border-b border-bordercolor items-center w-full">
          <div className="px-4 md:px-9">
            <p className="text-xl md:text-3xl font-extrabold">stimmy</p>
          </div>
          {/* nav links */}
          <div className="hidden lg:flex items-center h-full px-4 xl:px-6 gap-x-3 xl:gap-x-6 border-x border-bordercolor">
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
            {/* search component */}
            <div
              className="relative hidden md:flex items-center justify-center flex-1 w-full h-full px-3 py-2"
              ref={searchDropdownRef}
            >
              <div
                onClick={toggleSearchDropdown}
                className="flex items-center w-full h-12 px-3 py-2 rounded-md cursor-pointer bg-sidebar gap-x-3"
              >
                <img src="/search_icon.svg" alt="" className="h-5 w-5" />
                <input
                  type="text"
                  placeholder="search by token or lp contract "
                  className="w-full h-full text-sm font-bold uppercase outline-none bg-sidebar placeholder:text-placeholderText"
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
            {/* user profile */}
            <div className="relative flex items-center justify-between flex-1 w-full h-full px-4 sm:px-6 gap-x-3 bg-sidebar">
              <div className="flex items-center gap-x-4">
                <div
                  onClick={handleProfile}
                  className="w-9 sm:w-12 h-9 sm:h-12 bg-white rounded-full cursor-pointer"
                ></div>
                <div className="flex flex-col">
                  <p className="text-lg sm:text-xl font-bold">0x00000000</p>
                  <div className="flex flex-row w-full ">
                    <p className="flex items-center gap-x-2 text-sm font-bold text-fadedText">
                      BALANCE
                      <span>
                        <img src="/Icon.svg" alt="" className="h-4 w-4" />
                      </span>
                      <span>{formatPrice(amount)}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div onClick={toggleDropdown} className="cursor-pointer">
                <IoChevronDownOutline className="text-2xl md:text-4xl " />
              </div>

              {/* Dropdown */}

              {isDropdownOpen && (
                <div className="absolute top-[80px] right-0 w-full z-20 bg-sidebar h-screen  rounded-md shadow-md p-4">

                  <div className="w-full">
                    <div
                      className="relative flex md:hidden items-center justify-center flex-1 w-full h-full border border-bordercolor py-2"
                      ref={searchDropdownRef}
                    >
                      <div
                        onClick={toggleSearchDropdown}
                        className="flex items-center w-full h-8 px-3 py-2 rounded-lg cursor-pointer bg-sidebar gap-x-3"
                      >
                        <img src="/search_icon.svg" alt="" className="h-5 w-5" />
                        <input
                          type="text"
                          placeholder="search by token or lp contract "
                          className="w-full h-full text-sm font-bold uppercase outline-none bg-sidebar placeholder:text-placeholderText"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                      {isSearchDropdownOpen && (
                        <div className="absolute min-h-[200px] w-full left-0 z-5 text-center mt-1 rounded-md shadow-lg top-full bg-sidebar">
                          {/* Dropdown content here */}
                          no messages
                        </div>
                      )}
                    </div>

                    {data.map((item, index) =>
                      !item.isButton && <li key={index} className="flex items-center justify-between py-4 text-lg font-bold uppercase border-b border-bordercolor lg:hidden">
                        <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                          <Link href={item.path} onClick={toggleDropdown}>
                            {item.name}
                          </Link>
                        </motion.div>
                        <ChevronRight size={30} />
                      </li>
                    )
                    }

                  </div>

                  <ul className="mt-0 sm:mt-2">
                    <li className="flex items-center justify-between py-6 text-lg font-bold uppercase border-b border-bordercolor">
                      <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        <Link href="/profile" onClick={toggleDropdown}>
                          MY ACCOUNT
                        </Link>
                      </motion.div>
                      <ChevronRight size={30} />
                    </li>
                    <li className="flex items-center justify-between py-6 text-lg font-bold uppercase border-b border-bordercolor">
                      <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        <Link href="/settings" onClick={toggleDropdown}>
                          Settings
                        </Link>
                      </motion.div>
                      <ChevronRight size={30} />
                    </li>
                    <li className="flex items-center justify-between py-6 text-lg font-bold uppercase border-b border-bordercolor">
                      <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        <Link href="/goverance" onClick={toggleDropdown}>
                          Governance
                        </Link>
                      </motion.div>
                      <ChevronRight size={30} />
                    </li>
                    <li className="py-6 border-b border-bordercolor text-[#646470] text-lg font-bold  flex items-center justify-between uppercase">
                      <p className="relative " >
                        Referral Program
                        <span className="absolute ml-2 -top-3 text-[10px] border border-[#646470] rounded-md px-1">
                          Soon
                        </span>
                      </p>
                      <ChevronRight size={30} />
                    </li>
                    <li className="flex items-center justify-between py-6 text-lg font-bold uppercase border-b border-bordercolor text-negative">
                      <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        <Link href="/logout" onClick={toggleDropdown}>
                          Logout
                        </Link>
                      </motion.div>
                      <ChevronRight color="white" size={30} />
                    </li>
                  </ul>                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-4 py-1 px-4 w-full h-[35px]">
          <div className="flex items-center h-full px-3 font-bold uppercase border-r gap-x-2 text-primaryText border-bordercolor">
            <span>
              <TiStarOutline size={20} />
            </span>
            <span> Watching</span>
          </div>
          <div className="sm:flex items-center gap-x-3 hidden">
            {coinData.map((item, index) => (
              <div
                key={index}
                className="flex items-center h-full px-3 py-2 border-r gap-x-2 border-bordercolor"
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
      {/* <CreateTokenModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      /> */}
    </>
  );
};

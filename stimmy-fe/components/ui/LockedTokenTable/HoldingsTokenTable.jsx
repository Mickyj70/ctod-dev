"use client";
import { LinearProgress } from "@mui/material";
import {
  Clock,
  Copy,
  Eye,
  EyeClosed,

  SquareArrowOutUpRight,
  Star,
} from "lucide-react";
import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { SellTokenModal } from "../modals/selltoken";
import Link from "next/link";

const HoldingTokenTable = ({
  tokens,
  isQuickBuy,
  onFavoriteToggle,
  isFavorite,
}) => {
  const [favorites, setFavorites] = useState(new Set());
  const [eye, setEye] = useState(false);
  const [sold, setSold] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFavoriteToggle = (index) => {
    const newFavorites = new Set(favorites);
    newFavorites.has(index)
      ? newFavorites.delete(index)
      : newFavorites.add(index);
    setFavorites(newFavorites);
    onFavoriteToggle?.(index, !favorites.has(index));
  };
  const handleEyeToggle = (index) => {
    setEye(!eye);
  };

  const handleSoldToggle = (index) => {
    setSold(true);
  };
  return (
    <div className="p-6 overflow-x-auto text-white rounded-lg shadow-md ">
      <table className="w-full table-auto text-left min-w-[800px]">
        <thead>
          <tr className="uppercase text-xs md:text-sm lg:text-base text-placeholderText">
            <th className="p-3 font-bold">Token Info</th>
            <th className="p-3 font-bold">Invested</th>
            <th className="p-3 font-bold">Remaining</th>
            <th className="p-3 font-bold">Sold</th>
            <th className="p-3 font-bold">Change in p&l</th>
            <th className="p-3 font-bold">action</th>
          </tr>
        </thead>
        <tbody className="font-semibold">
          {tokens.map((token, index) => (
            <tr
              key={index}
              className="border-b border-bordercolor hover:bg-bordercolor/20 transition-colors bg-[#1D1D1E4D] w-full"
            >
              {/* token info */}
              <td className="p-3">
                <Link href={`/token/${token.id}`} className="flex items-center gap-4">
                  <button
                    onClick={onFavoriteToggle}
                    className="flex items-center justify-center w-6 h-6"
                  >
                    <Star
                      className={`h-4 w-4 ${isFavorite
                        ? "fill-yellow-500 text-yellow-500"
                        : "text-gray-500"
                        }`}
                    />
                  </button>

                  <div className="flex items-center gap-x-3">
                    <div className="rounded-full h-8 w-8 lg:h-14 lg:w-14 bg-neutral-100">
                      <img
                        src={token.image}
                        alt="img"
                        className="object-cover w-full h-full rounded-full"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="font-bold text-xs md:text-sm lg:text-base uppercase ">{token.name}</div>

                      <div className="flex items-center text-xs text-gray-500 gap-x-2">
                        {token.address}{" "}
                        <span>
                          <Copy size={14} />
                        </span>
                      </div>

                      <div className="flex items-center text-xs gap-x-2">
                        <span>
                          <CiGlobe />
                        </span>
                        <span>
                          <FaXTwitter />
                        </span>
                        <span>
                          <FaTelegramPlane />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </td>

              {/* invested */}
              <td className="p-3">
                <div className="flex items-center space-x-2">
                  <div className="flex min-w-fit items-center gap-x-2 text-xs md:text-sm lg:text-base">
                    <img src="/Icon.svg" alt="" className=" h-3 w-2 lg:h-4 lg:w-4" /> {token?.invested}{" "}
                    <span className="text-placeholderText">
                      / {token.invested}
                    </span>
                  </div>
                </div>
              </td>
              {/* remaining */}
              <td className="p-3 font-mono ">
                <div className="text-xs md:text-sm lg:text-base flex flex-col items-center md:block">
                  <span className="flex gap-1">
                    <img src="/Icon.svg" alt="i" /> {token.remaining}
                  </span>
                  <p className="font-light text-placeholderText">
                    {token.remaining}
                  </p>
                </div>
              </td>
              <td className="p-3 font-mono ">
                <div className="text-xs md:text-sm lg:text-base flex flex-col items-center md:block">
                  <span className="flex gap-1">
                    <img src="/Icon.svg" alt="i" /> {token.sold}
                  </span>
                  <p className="font-light text-placeholderText">
                    {token.sold}
                  </p>
                </div>
              </td>

              <td className="p-3 font-mono ">
                <div className="text-xs md:text-sm lg:text-base flex flex-col items-center md:block">
                  <span className="text-positive">{token.changeInPL}</span>
                  {/* <span className="text-positive">
                    {" "}
                    {token.changeInPL}
                  </span> */}
                  <p className="font-light text-placeholderText">
                    + {token.changeInPL}
                  </p>
                </div>
              </td>

              <td className="p-3">
                <div className="flex items-center gap-x-6">
                  <button className="flex items-center font-bold uppercase gap-x-1 text-placeholderText text-xs md:text-sm lg:text-base ">
                    {" "}
                    <span>
                      <SquareArrowOutUpRight size={14} />
                    </span>{" "}
                    share
                  </button>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className={`px-8 py-2 rounded-md ${sold ? "text-secondaryText" : "bg-secondaryText"
                      }  text-xs md:text-sm lg:text-base  capitalize font-medium hover:scale-90 hover:duration-150 duration-150`}
                  >
                    {sold ? "sold" : "sell"}
                  </button>
                  <button
                    onClick={handleEyeToggle}
                    className="text-placeholderText"
                  >
                    {eye ? <EyeClosed size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <SellTokenModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default HoldingTokenTable;

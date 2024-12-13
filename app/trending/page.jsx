"use client";
import React, { useState } from "react";
import { RxMixerHorizontal } from "react-icons/rx";
import { Table } from "../../components/ui/table/table";
import { GoPerson } from "react-icons/go";
import { BiTargetLock } from "react-icons/bi";
import { Clock } from "lucide-react";
import { SiAeromexico } from "react-icons/si";
import TrendingTokenTable from "../../components/ui/LockedTokenTable/TrendingTokenTable";
export default function Page() {
  const [isQuickBuy, setIsQuickBuy] = useState(false);
  const [mavProtection, setMavProtection] = useState(false);

  const formatPrice = (price) => {
    if (price >= 1000000) {
      return price / 1000000 + "M";
    } else if (price >= 1000) {
      return price / 1000 + "k";
    }
    return price.toString();
  };

  const token = [
    {
      name: "Ethereum",
      address: "0x123...",
      price: formatPrice(1800),
      image: "/eth.png",
      progress: "Loading...",
      created: "10s",
      liquidity: formatPrice(10000),
      againstLiquuidity: formatPrice(50000),
      mtk_cap: formatPrice(10000),
      txns: 100,
      againstTxns: 200,
      volume: formatPrice(10000),
      additional_info: [
        {
          t10: "4%",
          dh: "10%",
          person: 100,
          target: 200,
        },
      ].map((info) => (
        <div className="flex items-center gap-x-2" key={info.t10}>
          <div className="flex w-full">
            <p className="text-xs font-bold text-positive">T10:{info.t10}</p>
          </div>
          <div className="flex w-full">
            <p className="text-xs font-bold text-negative">DH:{info.dh}</p>
          </div>
          <p className="flex items-center font-bold gap-x-1 text-primaryText">
            <span>
              <GoPerson size={12} />
            </span>
            {info.person}
          </p>
          <p className="flex items-center font-bold gap-x-1 text-primaryText">
            <span>
              <BiTargetLock size={12} />
            </span>
            {info.target}
          </p>
        </div>
      )),
      m1: "-1.05%",
      m5: "-1.05%",
      m30: "-1.05%",
      m1h: "-1.05%",
      quickbuy: [
        {
          label: "100",
          type: "primary",
          onClick: () => alert("quick buy clicked"),
        },
      ],
    },
  ];

  const handleQuickBuy = (token) => {
    console.log(`Quick buy ${token.name}`);
    setIsQuickBuy(!isQuickBuy);
  };

  return (
    <div className="Container">
      <div className="flex flex-col w-[97%] h-full pt-12 gap-y-5">
        {/* header */}
        <div className="">
          <p className="header">TRENDING</p>
          <p>
            Top 100 trending token pairs by transactions within selected
            timeframe.
          </p>
        </div>

        <div className="flex items-center justify-between w-full ">
          <div className="flex items-center gap-x-3">
            <div className="primarybutton">
              <Clock size={20} />
              <p>1m</p>
            </div>
            <div className="primarybutton">
              <Clock size={20} />
              <p>5m</p>
            </div>
            <div className="primarybutton">
              <Clock size={20} />
              <p>30m</p>
            </div>
            <div className="primarybutton">
              <Clock size={20} />
              <p>1h</p>
            </div>
            <div className="primarybutton">
              <RxMixerHorizontal size={20} />
              <p>filters</p>
            </div>
          </div>
          <div onClick={handleQuickBuy} className="primarybutton">
            <button
              onClick={() => setMavProtection(!mavProtection)}
              className={`w-12 h-6 rounded-full p-1 transition-colors ${
                mavProtection ? "bg-secondaryText" : "bg-gray-600"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  mavProtection ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <p>quick buy</p>
            <p className="flex items-center font-medium">
              <span className="pr-2 text-sm">
                <img src="/Icon.svg" alt="i" />
              </span>
              100
            </p>
          </div>
        </div>

        <div className="w-full h-[calc(85vh-200px)] hide-scrollbar">
          {/* table */}
          <TrendingTokenTable isQuickBuy={isQuickBuy} tokens={token} />
        </div>
      </div>
    </div>
  );
}

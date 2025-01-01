"use client";
import React, { useState } from "react";
import { RxMixerHorizontal } from "react-icons/rx";
import { RefreshCw } from "lucide-react";
import { Table } from "../../components/ui/table/table";
import HoldingTokenTable from "../../components/ui/LockedTokenTable/HoldingsTokenTable";
import { CiSearch } from "react-icons/ci";
import { SellTokenModal } from "../../components/ui/modals/selltoken";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFavoriteToggle = ({ index, isFavorited }) => {
    console.log(
      `Token ${index} is ${isFavorited ? "favorited" : "unfavorited"}`
    );
  };

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
      invested: "10k",
      remaining: "10M",
      sold: "10k",
      changeInPL: "1%",
    },
  ];

  const handleQuickBuy = (token) => {
    console.log(`Quick buy ${token.name}`);
  };

  return (
    <div className="Container">
      <div className="innerContainer">
        {/* header */}
        <div className="">
          <p className="flex items-center header gap-x-3">
            PORTFOLIO{" "}
            <span className="text-sm text-primaryText">
              SHOW HIDDEN <span>switch</span>{" "}
            </span>
          </p>
        </div>

        <div className="flex items-center justify-between w-full flex-wrap gap-y-3 ">
          <div className="flex flex-wrap w-full  md:w-fit gap-y-3 items-center gap-x-3">
            <div className="flex-col px-2 md:px-6 text-xs md:text-sm lg:text-base primarybutton gap-y-1">
              <p>INVESTED</p>
              <p className="flex items-center w-full gap-x-1">
                {" "}
                <span className="text-xs"><img src="/Icon.svg" alt="" className="h-4 w-4" /></span> 100k
              </p>
            </div>
            <div className="flex-col px-2 md:px-6 text-xs md:text-sm lg:text-base primarybutton gap-y-1">
              <p>REMAINING</p>
              <p className="flex items-center w-full gap-x-1">
                {" "}
                <span className="text-xs"><img src="/Icon.svg" alt="" className="h-4 w-4" /></span> 50k
              </p>
            </div>
            <div className="flex-col px-2 md:px-6 text-xs md:text-sm lg:text-base primarybutton gap-y-1 ">
              <p className="w-full">SOLD</p>
              <p className="flex items-start w-full gap-x-1">

                <span className="text-xs"><img src="/Icon.svg" alt="" className="h-4 w-4" /></span> 50k
              </p>
            </div>
            <div className="flex-col px-2 md:px-6 text-xs md:text-sm lg:text-base primarybutton gap-y-1">
              <p>CHANGE IN P&L</p>
              <p className="w-full text-positive">{"10.04%"}</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="primarybutton">
              <RefreshCw size={18} />
              <p className="capitalize">Refresh P&L</p>
            </div>

            <p className="text-sm">Last refresh 1m ago</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center  justify-between w-full gap-x-2 gap-y-2 ">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-x-3 gap-y-3 w-full md:w-fit ">
            <div className="h-12 primarybutton">
              <RxMixerHorizontal size={20} />
              <p className="text-xs md:text-base">filters</p>
            </div>

            <div className="flex items-center w-full h-12 px-3 py-2 border rounded-md bg-sidebar border-bordercolor gap-x-3">
              <img src="/search_icon.svg" alt="" />
              <input
                type="text"
                placeholder="SEARCH TOKEN "
                className="w-full h-full font-bold uppercase outline-none bg-sidebar placeholder:text-placeholderText"
              />
            </div>
          </div>

          <div className="flex items-center gap-x-3 w-full md:w-fit">
            <div className="flex items-center w-full h-12 px-3 py-2 border rounded-md bg-sidebar border-bordercolor gap-x-3">

              <input
                type="text"
                placeholder="INPUT TOKEN ADRESS"
                className="w-full h-full font-bold uppercase outline-none bg-sidebar placeholder:text-placeholderText"
              />
            </div>

            {/* <div className="w-8/12 h-12 primarybutton ">
              <RefreshCw size={18} />
              <p className="capitalize">Refresh P&L</p>
            </div> */}
          </div>
        </div>

        <div className="w-full h-[calc(85vh-200px)] overflow-y-scroll">
          {/* table */}
          {/* <Table
            columns={columns}
            data={data}
            onFavoriteToggle={handleFavoriteToggle}
            onQuickBuy={handleQuickBuy}
            showQuickBuy={false}
          /> */}

          <HoldingTokenTable
            tokens={token}
            onSellClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>
      <SellTokenModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

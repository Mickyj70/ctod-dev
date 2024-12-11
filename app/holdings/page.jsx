"use client"
import React from "react";
import { RxMixerHorizontal } from "react-icons/rx";
import { RefreshCw } from "lucide-react";
import { Table } from "../../components/ui/table/table"
import HoldingTokenTable from "../../components/ui/LockedTokenTable/HoldingsTokenTable";
export default function Page() {
  const handleFavoriteToggle = ({ index, isFavorited }) => {
    console.log(`Token ${index} is ${isFavorited ? "favorited" : "unfavorited"}`);
  };

  const formatPrice = (price) => {
    if (price >= 1000000) {
      return (price / 1000000) + 'M';
    } else if (price >= 1000) {
      return (price / 1000) + 'k';
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
          <p className="header flex items-center gap-x-3">PORTFOLIO <span className="text-primaryText text-sm">SHOW HIDDEN <span>switch</span> </span></p>

        </div>

        <div className="flex justify-between items-center w-full ">
          <div className="flex items-center gap-x-3">
            <div className="primarybutton flex-col px-6 gap-y-1">
              <p>INVESTED</p>
              <p className="w-full flex items-center gap-x-1"> <span className="text-xs">icon</span> 100k</p>
            </div>
            <div className="primarybutton flex-col px-6 gap-y-1">
              <p>REMAINING</p>
              <p className="w-full flex items-center gap-x-1"> <span className="text-xs">icon</span> 50k</p>
            </div>
            <div className="primarybutton flex-col px-6 gap-y-1">
              <p>SOLD</p>
              <p className="w-full flex items-center gap-x-1"> <span className="text-xs">icon</span> 50k</p>
            </div>
            <div className="primarybutton flex-col px-6 gap-y-1">
              <p>CHANGE IN P&L</p>
              <p className="w-full text-positive">{"10.04%"}</p>
            </div>

          </div>
          <div className="flex items-center gap-x-2">
            <div className="primarybutton">

              <RefreshCw size={18} />
              <p className="capitalize" >Refresh P&L</p>
            </div>

            <p className="text-sm">Last refresh 1m ago</p>
          </div>
        </div>


        <div className="flex justify-between items-center w-full ">
          <div className="flex items-center gap-x-3 w-fit">
            <div className="primarybutton h-12">
              <RxMixerHorizontal size={20} />
              <p>filters</p>
            </div>

            <div className="w-full h-12 bg-sidebar border border-bordercolor rounded-md py-2 px-3 flex items-center gap-x-3">
              <p>icon</p>
              <input
                type="text"
                placeholder="SEARCH TOKEN "
                className="bg-sidebar w-full h-full outline-none font-bold placeholder:text-placeholderText uppercase"
              />
            </div>
          </div>


          <div className="flex items-center gap-x-3 ">
            <div className="w-full h-12 bg-sidebar border border-bordercolor rounded-md py-2 px-3 flex items-center gap-x-3">
              <p>icon</p>
              <input
                type="text"
                placeholder="SEARCH TOKEN "
                className="bg-sidebar w-full h-full outline-none font-bold placeholder:text-placeholderText uppercase"
              />
            </div>

            <div className="primarybutton h-12 w-8/12 ">

              <RefreshCw size={18} />
              <p className="capitalize" >Refresh P&L</p>
            </div>
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

          <HoldingTokenTable tokens={token} />
        </div>

      </div>
    </div>
  );
}
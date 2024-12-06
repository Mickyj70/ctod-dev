"use client"
import React from "react";
import { RxMixerHorizontal } from "react-icons/rx";
import { Table } from "@/components/ui/table/table";
import { GoPerson } from "react-icons/go";
import { BiTargetLock } from "react-icons/bi";
import { Clock } from "lucide-react";
export default function Page() {
  const handleFavoriteToggle = (index, isFavorited) => {
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


  const columns = [
    { label: "Token Info", key: "token" },
    // {
    //   label: "Price",
    //   key: "price",
    //   render: (item) => `$${item.price.toLocaleString()}`
    // },
    // {
    //   label: "24h Change",
    //   key: "change",
    //   render: (item) => (
    //     <span className={item.change > 0 ? "text-green-500" : "text-red-500"}>
    //       {item.change}%
    //     </span>
    //   )
    // },
    {
      label: "Created",
      key: "created",
    },
    {
      label: "Liquidity",
      key: "liquidity",
    },
    {
      label: "MTK CAP",
      key: "mtk_cap",
    },
    {
      label: "TXNS",
      key: "txns",
    },
    {
      label: "Volume",
      key: "volume",
    },

    {
      label: "1m",
      key: "1m",
    },
    {
      label: "5m",
      key: "5m",
    },
    {
      label: "30m",
      key: "30m",
    },
    {
      label: "1h",
      key: "1h",
    },
    {
      label: "ADDITIONAL INFO",
      key: "additional_info",
    },

  ];

  const data = [
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
        }
      ].map(info => (
        <div className="flex items-center gap-x-2" key={info.t10}>
          <p className="text-positive font-bold">T10: {info.t10}</p>
          <p className="text-negative font-bold">DH: {info.dh}</p>
          <p className="flex items-center gap-x-1 text-primaryText font-bold"> <span><GoPerson /></span> {info.person}</p>
          <p className="flex items-center gap-x-1 text-primaryText font-bold"> <span><BiTargetLock /></span> {info.target}</p>
        </div>
      ))
    },
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
      m1: "-1.05%",
      m5: "-0.85%",
      m30: "-0.65%",
      m1h: "-0.45%",
      additional_info: [
        {
          t10: "4%",
          dh: "10%",
          person: 100,
          target: 200,
        }
      ].map(info => (
        <div className="flex items-center gap-x-2" key={info.t10}>
          <p className="text-positive font-bold">T10: {info.t10}</p>
          <p className="text-negative font-bold">DH: {info.dh}</p>
          <p className="flex items-center gap-x-1 text-primaryText font-bold"> <span><GoPerson /></span> {info.person}</p>
          <p className="flex items-center gap-x-1 text-primaryText font-bold"> <span><BiTargetLock /></span> {info.target}</p>
        </div>
      ))
    },
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
        }
      ].map(info => (
        <div className="flex items-center gap-x-2" key={info.t10}>
          <p className="text-positive font-bold">T10: {info.t10}</p>
          <p className="text-negative font-bold">DH: {info.dh}</p>
          <p className="flex items-center gap-x-1 text-primaryText font-bold"> <span><GoPerson /></span> {info.person}</p>
          <p className="flex items-center gap-x-1 text-primaryText font-bold"> <span><BiTargetLock /></span> {info.target}</p>
        </div>
      ))
    },
    // Add more tokens as needed
  ];

  const handleQuickBuy = (token) => {
    console.log(`Quick buy ${token.name}`);
  };


  return (
    <div className="Container">
      <div className="innerContainer">
        {/* header */}
        <div className="">
          <p className="header">TRENDING</p>
          <p>Top 100 trending token pairs by transactions within selected timeframe.</p>
        </div>

        <div className="flex justify-between items-center w-full ">
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
          <div className="primarybutton">
            <p className="text-xs">orange switch</p>
            <p >quick buy</p>
            <p className="flex items-center font-medium"> <span className="pr-2 text-sm">icon</span> 100</p>
          </div>
        </div>

        <div className="w-full h-[calc(85vh-200px)] overflow-y-scroll">
          {/* table */}
          <Table
            columns={columns}
            data={data}
            onFavoriteToggle={handleFavoriteToggle}
            onQuickBuy={handleQuickBuy}
            showQuickBuy={true}
          />
        </div>

      </div>
    </div>
  );
}
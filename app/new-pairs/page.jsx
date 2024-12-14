"use client";
import { useState } from "react";
import { RxMixerHorizontal } from "react-icons/rx";
import { Table } from "../../components/ui/table/table";
import { GoPerson } from "react-icons/go";
import { BiTargetLock } from "react-icons/bi";
import { FilterModal } from "../../components/ui/modals/FilterModal";
export default function Page() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const handleFavoriteToggle = (index, isFavorited) => {
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
      label: "ADDITIONAL INFO",
      key: "additional_info",
    },
  ];

  const data = [
    {
      id: 1,
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
          <p className="font-bold text-positive">T10: {info.t10}</p>
          <p className="font-bold text-negative">DH: {info.dh}</p>
          <p className="flex items-center font-bold gap-x-1 text-primaryText">
            {" "}
            <span>
              <GoPerson />
            </span>{" "}
            {info.person}
          </p>
          <p className="flex items-center font-bold gap-x-1 text-primaryText">
            {" "}
            <span>
              <BiTargetLock />
            </span>{" "}
            {info.target}
          </p>
        </div>
      )),
    },
    {
      id: 2,
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
          <p className="font-bold text-positive">T10: {info.t10}</p>
          <p className="font-bold text-negative">DH: {info.dh}</p>
          <p className="flex items-center font-bold gap-x-1 text-primaryText">
            {" "}
            <span>
              <GoPerson />
            </span>{" "}
            {info.person}
          </p>
          <p className="flex items-center font-bold gap-x-1 text-primaryText">
            {" "}
            <span>
              <BiTargetLock />
            </span>{" "}
            {info.target}
          </p>
        </div>
      )),
    },
    {
      id: 3,
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
          <p className="font-bold text-positive">T10: {info.t10}</p>
          <p className="font-bold text-negative">DH: {info.dh}</p>
          <p className="flex items-center font-bold gap-x-1 text-primaryText">
            {" "}
            <span>
              <GoPerson />
            </span>{" "}
            {info.person}
          </p>
          <p className="flex items-center font-bold gap-x-1 text-primaryText">
            {" "}
            <span>
              <BiTargetLock />
            </span>{" "}
            {info.target}
          </p>
        </div>
      )),
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
          <p className="header">NEW PAIRS</p>
          <p>New token pairs in the last 24-hours updated in real time</p>
        </div>

        <div className="flex items-center justify-between w-full ">
          <div
            className="cursor-pointer primarybutton"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <RxMixerHorizontal size={20} />
            <p>filters</p>
          </div>
          <div className="primarybutton">
            <p>quick buy</p>
            <p className="flex items-center font-medium">
              <span className="pr-2 text-sm">
                <img src="/Icon.svg" alt="i" className="w-4 h-4" />
              </span>
              100
            </p>
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
      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
}

"use client";

import {
  ChevronDown,
  ChevronUp,
  Share,
  SquareArrowOutUpRight,
} from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";

const CandlestickChart = dynamic(
  () => import("../../components/ui/cancle/candleStickChart"),
  { ssr: false }
);

const ChartToolbar = dynamic(
  () => import("../../components/ui/cancle/chartToolbar"),
  { ssr: false }
);

const Dashboard = () => {
  const data = [
    { time: "2023-01-01T00:00:00", open: 6.5, close: 7.0, high: 7.5, low: 6.0 },
    { time: "2023-01-02T00:00:00", open: 7.0, close: 6.8, high: 7.2, low: 6.5 },
    { time: "2023-01-03T00:00:00", open: 6.8, close: 7.2, high: 7.3, low: 6.7 },
    { time: "2023-01-04T00:00:00", open: 7.2, close: 7.4, high: 7.6, low: 7.1 },
    { time: "2023-01-05T00:00:00", open: 7.4, close: 7.3, high: 7.5, low: 7.2 },
    { time: "2023-01-06T00:00:00", open: 7.3, close: 7.5, high: 7.7, low: 7.2 },
    { time: "2023-01-07T00:00:00", open: 7.5, close: 7.6, high: 7.8, low: 7.4 },
    { time: "2023-01-08T00:00:00", open: 7.6, close: 7.7, high: 7.9, low: 7.5 },
    { time: "2023-01-09T00:00:00", open: 7.7, close: 7.8, high: 8.0, low: 7.6 },
    { time: "2023-01-10T00:00:00", open: 7.8, close: 7.9, high: 8.1, low: 7.7 },
    { time: "2023-01-11T00:00:00", open: 7.9, close: 8.0, high: 8.2, low: 7.8 },
    { time: "2023-01-12T00:00:00", open: 8.0, close: 8.1, high: 8.3, low: 7.9 },
    { time: "2023-01-13T00:00:00", open: 8.1, close: 8.2, high: 8.4, low: 8.0 },
    { time: "2023-01-14T00:00:00", open: 8.2, close: 8.3, high: 8.5, low: 8.1 },
    { time: "2023-01-15T00:00:00", open: 8.3, close: 8.4, high: 8.6, low: 8.2 },
    { time: "2023-01-16T00:00:00", open: 8.4, close: 8.5, high: 8.7, low: 8.3 },
    { time: "2023-01-17T00:00:00", open: 8.5, close: 8.6, high: 8.8, low: 8.4 },
    { time: "2023-01-18T00:00:00", open: 8.6, close: 8.7, high: 8.9, low: 8.5 },
    { time: "2023-01-19T00:00:00", open: 8.7, close: 8.8, high: 9.0, low: 8.6 },
    { time: "2023-01-20T00:00:00", open: 8.8, close: 8.9, high: 9.1, low: 8.7 },
    { time: "2023-01-21T00:00:00", open: 8.9, close: 9.0, high: 9.2, low: 8.8 },
    { time: "2023-01-22T00:00:00", open: 9.0, close: 9.1, high: 9.3, low: 8.9 },
    { time: "2023-01-23T00:00:00", open: 9.1, close: 9.2, high: 9.4, low: 9.0 },
    { time: "2023-01-24T00:00:00", open: 9.2, close: 9.3, high: 9.5, low: 9.1 },
    { time: "2023-01-25T00:00:00", open: 9.3, close: 9.4, high: 9.6, low: 9.2 },
    { time: "2023-01-26T00:00:00", open: 9.4, close: 9.5, high: 9.7, low: 9.3 },
  ];
  // Convert time to UNIX timestamp for Lightweight Charts
  const processedData = data.map((item) => ({
    ...item,
    time: Math.floor(new Date(item.time).getTime() / 1000),
  }));

  const [activeTab, setActiveTab] = useState("buy");
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);

  const toggleAdvancedSettings = () => {
    setShowAdvancedSettings(!showAdvancedSettings);
  };

  return (
    <div className="Container">
      <div className="min-h-screen pb-10 innerContainer">
        <div className="flex w-full px-10 gap-x-5">
          <div className="flex flex-col w-9/12 h-full gap-y-5">
            <div className="flex flex-col w-full ">
              <ChartToolbar />
              <CandlestickChart data={processedData} />
            </div>

            <div className="w-full">
              <TradesAndThreads />
            </div>
          </div>

          <div className="flex flex-col w-4/12 h-full gap-y-5">
            {/* first section */}
            <div className="flex flex-col items-center border rounded-md border-bordercolor">
              <div className="flex items-start w-11/12 py-4 gap-x-3">
                <div
                  className="w-16 h-16 border rounded-full border-secondaryText bg-placeholderText"
                  alt=""
                />

                <div className="flex flex-col w-full gap-y-3 ">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-x-3">
                      <p className="text-lg font-bold">TOKEN NAME</p>
                      <p className="text-sm font-bold text-placeholderText">
                        $TOKEN
                      </p>
                    </div>

                    <img src="/heart.svg" alt="" />
                  </div>

                  <div className="flex items-center justify-between w-full">
                    <p className="text-sm font-bold text-positive">
                      MARKET CAP : $3.3K
                    </p>
                    <p className="text-sm font-bold text-placeholderText">
                      AGE : 1h 30min
                    </p>
                  </div>

                  <p className="text-sm font-bold text-placeholderText">
                    DEPLOYED BY : 0X00000..000
                  </p>

                  <p className="text-sm font-medium text-placeholderText">
                    Join us as we embark on a journey into a new era. The future
                    is now, poised for discovery. Unveil the mysteries with us
                    and become part of something extraordinary. Together, lets
                    push the boundaries of what is possible.??
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between w-11/12 px-2 py-2 my-2 border-t border-bordercolor gap-x-2">
                <div className="flex items-center gap-x-2 text-placeholderText">
                  <p className="font-medium text-positive">
                    Top 10 holders : 14%
                  </p>{" "}
                  |<p className="font-medium text-negative">Dev holds : 70%</p>
                </div>
                <div className="flex items-center gap-x-3">
                  <SquareArrowOutUpRight
                    size={16}
                    className="text-placeholderText"
                  />
                  <img src="/web.svg" alt="" />
                  <img src="/x.svg" alt="" />
                  <img src="/telegram.svg" alt="" />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center py-2 border rounded-md border-bordercolor">
              <div className="flex flex-col items-center justify-between w-11/12 py-4 gap-y-3">
                <div className="flex items-center w-full gap-x-3">
                  <button
                    className={`flex-1 rounded-md py-3 font-semibold ${
                      activeTab === "buy"
                        ? "bg-positive duration-100"
                        : "bg-positive scale-95 duration-100"
                    }`}
                    onClick={() => setActiveTab("buy")}
                  >
                    Buy
                  </button>
                  <button
                    className={`flex-1 rounded-md py-3 font-semibold ${
                      activeTab === "sell"
                        ? "bg-negative duration-100"
                        : "bg-negative scale-95 duration-100"
                    }`}
                    onClick={() => setActiveTab("sell")}
                  >
                    Sell
                  </button>
                </div>
                <div className="w-full">
                  {activeTab === "buy" ? (
                    <div className="">
                      {/* Render Buy content */}
                      <div className="">
                        <div className="flex flex-col py-4 border-b border-bordercolor">
                          <div className="flex items-center justify-between">
                            <p>Buy now</p>
                            <p>Balance : 0.00000</p>
                          </div>
                          <div className="grid grid-cols-3 gap-4 mt-4 ">
                            <div className="flex items-center justify-center p-3 font-bold text-center border rounded-md border-bordercolor gap-x-2">
                              <img src="/tokenicon.svg" alt="" />
                              0.25
                            </div>
                            <div className="flex items-center justify-center p-3 font-bold text-center border rounded-md border-bordercolor gap-x-2">
                              <img src="/tokenicon.svg" alt="" />
                              0.5
                            </div>
                            <div className="flex items-center justify-center p-3 font-bold text-center border rounded-md border-bordercolor gap-x-2">
                              <img src="/tokenicon.svg" alt="" />1
                            </div>
                            <div className="flex items-center justify-center p-3 font-bold text-center border rounded-md border-bordercolor gap-x-2">
                              <img src="/tokenicon.svg" alt="" />2
                            </div>
                            <div className="flex items-center justify-center p-3 font-bold text-center border rounded-md border-bordercolor gap-x-2">
                              <img src="/tokenicon.svg" alt="" />5
                            </div>
                            <div className="flex items-center justify-center p-3 font-bold text-center border rounded-md border-bordercolor gap-x-2">
                              <img src="/tokenicon.svg" alt="" />
                              10
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center w-full px-3 py-2 mt-4 border rounded-md border-bordercolor gap-x-2">
                          <img src="/tokenicon.svg" alt="" />
                          <input
                            type="text"
                            className="w-full font-bold bg-transparent outline-none placeholder:text-placeholderText"
                            placeholder="Amount to buy in son"
                          />
                          <button className="px-2 py-1 border rounded-md border-bordercolor text-placeholderText">
                            Max
                          </button>
                        </div>

                        <div className="mt-4">
                          <div className="flex items-center justify-between">
                            <p
                              className="flex items-center cursor-pointer gap-x-2"
                              onClick={toggleAdvancedSettings}
                            >
                              {" "}
                              <span>
                                <img src="/settings.svg" alt="" />
                              </span>{" "}
                              Advanced Settings
                            </p>

                            {showAdvancedSettings ? (
                              <ChevronUp />
                            ) : (
                              <ChevronDown />
                            )}
                          </div>

                          {showAdvancedSettings && (
                            <div className="mt-2 transition-all duration-300 ease-in-out">
                              {/* Advanced Settings content */}
                              <div className="flex flex-col p-1 gap-y-2">
                                <div className="flex items-center justify-between px-4 py-2 rounded-md bg-sidebar">
                                  <p>Spillage</p>
                                  <p>5%</p>
                                </div>
                                <div className="flex items-center justify-between px-4 py-2 rounded-md bg-sidebar">
                                  <p>Mev Protection</p>
                                  <p>5%</p>
                                </div>
                                <div className="flex items-center justify-between px-4 py-2 rounded-md bg-sidebar">
                                  <p>Priority Fee</p>
                                  <p>10 SON</p>
                                </div>
                                <div className="flex items-center justify-between px-4 py-2 rounded-md bg-sidebar">
                                  <p>Bribery Amount</p>
                                  <p>3 SON</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        <button className="w-full px-3 py-2 mt-6 font-medium text-center rounded-md bg-secondaryText">
                          Quicky buy
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="">
                      <div className="flex flex-col py-4 border-b border-bordercolor">
                        <div className="flex items-center justify-between">
                          <p>Buy now</p>
                          <p>Balance : 0.00000</p>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-4 ">
                          <div className="flex items-center justify-center p-3 font-bold text-center border rounded-md border-bordercolor gap-x-2">
                            <img src="/tokenicon.svg" alt="" />
                            25%
                          </div>
                          <div className="flex items-center justify-center p-3 font-bold text-center border rounded-md border-bordercolor gap-x-2">
                            <img src="/tokenicon.svg" alt="" />
                            50%
                          </div>
                          <div className="flex items-center justify-center p-3 font-bold text-center border rounded-md border-bordercolor gap-x-2">
                            <img src="/tokenicon.svg" alt="" />
                            100%
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center w-full px-3 py-2 mt-4 border rounded-md border-bordercolor gap-x-2">
                        <img src="/tokenicon.svg" alt="" />
                        <input
                          type="text"
                          className="w-full font-bold bg-transparent outline-none placeholder:text-placeholderText"
                          placeholder="Amount to buy in son"
                        />
                        <button className="px-2 py-1 border rounded-md border-bordercolor text-placeholderText">
                          Max
                        </button>
                      </div>

                      <div className="mt-4">
                        <div className="flex items-center justify-between">
                          <p
                            className="flex items-center cursor-pointer gap-x-2"
                            onClick={toggleAdvancedSettings}
                          >
                            {" "}
                            <span>
                              <img src="/settings.svg" alt="" />
                            </span>{" "}
                            Advanced Settings
                          </p>

                          {showAdvancedSettings ? (
                            <ChevronUp />
                          ) : (
                            <ChevronDown />
                          )}
                        </div>

                        {showAdvancedSettings && (
                          <div className="mt-2 transition-all duration-300 ease-in-out">
                            {/* Advanced Settings content */}
                            <div className="flex flex-col p-1 gap-y-2">
                              <div className="flex items-center justify-between px-4 py-2 rounded-md bg-sidebar">
                                <p>Spillage</p>
                                <p>5%</p>
                              </div>
                              <div className="flex items-center justify-between px-4 py-2 rounded-md bg-sidebar">
                                <p>Mev Protection</p>
                                <p>5%</p>
                              </div>
                              <div className="flex items-center justify-between px-4 py-2 rounded-md bg-sidebar">
                                <p>Priority Fee</p>
                                <p>10 SON</p>
                              </div>
                              <div className="flex items-center justify-between px-4 py-2 rounded-md bg-sidebar">
                                <p>Bribery Amount</p>
                                <p>3 SON</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <button className="w-full px-3 py-2 mt-6 font-medium text-center rounded-md bg-secondaryText">
                        Quicky sell
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <p>3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

function TradesAndThreads() {
  const [activeTab, setActiveTab] = useState("Latest Trades");

  // Sample data for the table
  const latestTrades = [
    {
      date: "7m ago",
      type: "Buy",
      son: "0.08979",
      token: "9.31",
      maker: "0x0000...0000",
      txn: "#",
    },
    {
      date: "7m ago",
      type: "Sell",
      son: "0.08979",
      token: "9.31",
      maker: "0x0000...0000",
      txn: "#",
    },
    {
      date: "7m ago",
      type: "Buy",
      son: "0.08979",
      token: "9.31",
      maker: "0x0000...0000",
      txn: "#",
    },
  ];

  const threads = [
    { title: "Thread 1", author: "User1", createdAt: "1h ago", replies: 10 },
    { title: "Thread 2", author: "User2", createdAt: "2h ago", replies: 5 },
    { title: "Thread 3", author: "User3", createdAt: "3h ago", replies: 8 },
  ];

  return (
    <div className="bg-[#0F0F10] text-placeholderText p-6 rounded-lg">
      {/* Tab Selector */}
      <div className="flex mb-4 border-b border-bordercolor">
        <button
          onClick={() => setActiveTab("Latest Trades")}
          className={`px-4 py-2 text-base font-bold ${
            activeTab === "Latest Trades"
              ? "text-white border-b-2 border-orange-500"
              : "text-placeholderText"
          }`}
        >
          Latest Trades
        </button>
        <button
          onClick={() => setActiveTab("Threads")}
          className={`px-4 py-2 text-base font-bold ${
            activeTab === "Threads"
              ? "text-white border-b-2 border-orange-500"
              : "text-placeholderText"
          }`}
        >
          Threads
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "Latest Trades" && (
        <div>
          <table className="w-full text-base">
            <thead>
              <tr className="text-base border-b text-placeholderText border-bordercolor">
                <th className="py-2 text-left">DATE</th>
                <th className="py-2 text-left">TYPE</th>
                <th className="py-2 text-left">SON</th>
                <th className="py-2 text-left">TOKEN</th>
                <th className="py-2 text-left">MAKER</th>
                <th className="py-2 text-left">TXN</th>
              </tr>
            </thead>
            <tbody>
              {latestTrades.map((trade, index) => (
                <tr key={index} className="border-b border-gray-800">
                  <td className="py-2 text-white">{trade.date}</td>
                  <td
                    className={`py-2 ${
                      trade.type === "Buy" ? "text-positive" : "text-negative"
                    }`}
                  >
                    {trade.type}
                  </td>
                  <td className="py-2">{trade.son}</td>
                  <td className="py-2">{trade.token}</td>
                  <td className="py-2">{trade.maker}</td>
                  <td className="py-2">
                    <a
                      href={trade.txn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-placeholderText"
                    >
                      <SquareArrowOutUpRight size={18} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "Threads" && (
        <div>
          {threads.map((thread, index) => (
            <div
              key={index}
              className="flex flex-col px-3 py-2 border-b border-bordercolor gap-y-2"
            >
              <div className="flex items-center justify-between ">
                <div className="flex items-center gap-x-3">
                  <img
                    src={null}
                    alt=""
                    className="bg-white rounded-full h-7 w-7"
                  />
                  <p className="text-sm font-bold text-secondaryText">
                    {thread.author}
                  </p>
                </div>
                <p className="text-sm ">{thread.createdAt}</p>
              </div>

              <p className="text-sm font-bold text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis,
                perferendis ex dignissimos voluptates blanditiis molestiae illo
                quas nostrum atque accusamus molestias quam ad amet, dolorum
                quos, saepe officiis sit. Voluptatem!
              </p>
            </div>
          ))}

          <div className="mt-6">
            <div className="flex items-center justify-between h-16 px-4 py-3 rounded-md bg-sidebar gap-x-4">
              <input
                type="text"
                className="w-10/12 h-full text-base font-semibold text-white bg-transparent outline-none outline placeholder:text-placeholderText "
                placeholder="Enter a message here"
              />
              <div className="flex items-center gap-x-2 w-fit">
                <img
                  src="/img_icon.svg"
                  alt="img icon"
                  className="cursor-pointer"
                />
                <button className="px-4 py-1 text-white rounded-md bg-secondaryText w-fit">
                  Post a reply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

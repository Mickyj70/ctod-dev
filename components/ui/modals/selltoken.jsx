"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const SellTokenModal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState("");
  const [data, setData] = useState("");
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
  const [mavProtection, setMavProtection] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-[563px] bg-sidebar border border-bordercolor rounded-lg p-6">
        {/* Add close button */}
        <div className="flex justify-between mb-4 border-b-2 border-bordercolor">
          <p className="text-white">Sell</p>
          <button
            onClick={onClose}
            className="text-primaryText hover:text-white"
          >
            ✕
          </button>
        </div>
        {/* add headers and all */}
        <div className="flex justify-between pb-3 mb-4 border-b-2 border-bordercolor">
          <div className="gap-2 ">
            <p className="text-primaryText">TOKEN</p>
            <p>SNOOGE</p>
          </div>
          <div className="gap-2 ">
            <p className="text-primaryText">INVESTED</p>
            <p className="flex gap-2">
              <img src="/Icon.svg" alt="i" />
              10K
            </p>
          </div>
          <div className="gap-2 ">
            <p className="text-primaryText">REMAINING</p>
            <p className="flex gap-2">
              <img src="/Icon.svg" alt="i" />
              10K
            </p>
          </div>
          <div className="gap-2 ">
            <p className="text-primaryText">SOLD</p>
            <p className="flex gap-2">
              <img src="/Icon.svg" alt="i" />0
            </p>
          </div>
          <div className="gap-2 ">
            <p className="text-primaryText">CHANGE IN P&L</p>
            <p className="text-positive">10.04%</p>
          </div>
        </div>
        {/* Input Section */}
        <div className="mb-4 space-y-4 border-b-2 border-bordercolor">
          <div className="flex justify-between ">
            <p> sell now</p>
            <p> Balance : 10,000</p>
          </div>
          <div className="flex w-full mb-1 gap-x-1">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-1/4 p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
              placeholder="Initial"
            />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-1/4 p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
              placeholder="25%"
            />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-1/4 p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
              placeholder="50%"
            />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-1/4 p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
              placeholder="100%"
            />
          </div>
          <div className="flex mb-2">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-4/5 p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
              placeholder="Amount to sell in SNOOGE"
            />
            <input
              type="text"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="w-1/4 p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
              placeholder="SNOOGE"
            />
          </div>
        </div>

        <div className="mb-4">
          <div
            className="flex justify-between cursor-pointer"
            onClick={() => setShowAdvancedSettings(!showAdvancedSettings)}
          >
            <p>⚙️Advanced Settings </p>
            <IoIosArrowDown
              className={`transition-transform ${
                showAdvancedSettings ? "rotate-180" : ""
              }`}
            />
          </div>

          {showAdvancedSettings && (
            <div className="pt-4 mt-4 space-y-4 border-t border-bordercolor">
              <div className="flex justify-between p-4 bg-background">
                <p className="text-sm text-white text-primaryText">Slippage</p>
                <p className="text-sm text-white text-primaryText">5%</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between p-4 bg-background">
                  <label className="text-sm text-white ">Mev Protection</label>
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
                </div>
              </div>

              <div className="flex justify-between p-4 bg-background">
                <p className="text-sm text-white text-primaryText">
                  Priority Fee
                </p>
                <p className="text-sm text-white text-primaryText">10 SON</p>
              </div>

              <div className="flex justify-between p-4 bg-background">
                <p className="text-sm text-white text-primaryText">
                  Bribery Fee
                </p>
                <p className="text-sm text-white text-primaryText">3 SON</p>
              </div>
            </div>
          )}
        </div>

        <button className="w-full py-3 mb-3 font-bold text-white rounded-md bg-secondaryText hover:bg-secondaryText/90">
          Quick Sell
        </button>
        {/* Warning Message */}
        <div className="p-4 mb-6 border rounded-md border-secondaryText">
          <p className="text-sm text-white text-negative">
            Once you click Quick sell the transaction is sent immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

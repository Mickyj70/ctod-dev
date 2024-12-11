"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const CreateTokenModal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState("");
  const [data, setData] = useState("");
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
  const [mavProtection, setMavProtection] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-[563px] bg-sidebar border border-bordercolor rounded-lg p-6">
        {/* Add close button */}
        <div className="flex justify-end mb-4 border-b-2 border-bordercolor">
          <p className="text-white ">sell</p>
          <button
            onClick={onClose}
            className="text-primaryText hover:text-white"
          >
            ✕
          </button>
        </div>
        {/* Input Section */}
        <div className="mb-4 space-y-4 border-b-2 border-bordercolor">
          <div className="flex space-x-4 ">
            <p> sell now</p>
            <p> Balance : 10,000</p>
          </div>
          <div className="flex mb-1 gap-x-1">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-1/5 p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
              placeholder="0.0"
            />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-1/5 p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
              placeholder="0.0"
            />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-1/5 p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
              placeholder="0.0"
            />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-1/5 p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
              placeholder="0.0"
            />
          </div>
          <div className="flex mb-2">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-4/5 p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
              placeholder="0.0"
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
              <div className="space-y-2">
                <label className="text-sm text-primaryText">Slippage</label>
                <input
                  type="number"
                  className="w-full p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
                  placeholder="0.5%"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-primaryText">
                    Mav Protection
                  </label>
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

              <div className="space-y-2">
                <label className="text-sm text-primaryText">priority fee</label>
                <input
                  type="number"
                  className="w-full p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
                  placeholder="30 minutes"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-primaryText">
                  Bribery amount
                </label>
                <input
                  type="number"
                  className="w-full p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
                  placeholder="30 minutes"
                />
              </div>
            </div>
          )}
        </div>

        <button className="w-full py-3 font-bold text-white rounded-md bg-secondaryText hover:bg-secondaryText/90">
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

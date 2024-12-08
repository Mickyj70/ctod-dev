"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const CreateTokenModal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState("");
  const [data, setData] = useState("");

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

        <div>
          <p>⚙️Advanced Settings </p>
          <IoIosArrowDown />
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

"use client";
import { useState } from "react";

export const FilterModal = ({ isOpen, onClose }) => {
  const [topHoldersChecked, setTopHoldersChecked] = useState(false);
  const [socialChecked, setSocialChecked] = useState(false);

  return (
    isOpen && (
      <div className="absolute left-0 z-10 mt-2 bg-[#0F0F10] border border-bordercolor rounded-md shadow-lg p-5 w-[405px] max-h-[80vh] overflow-y-auto scrollbar-hide gap-4">
        <div className="col-span-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Filters</h3>
            <button
              onClick={onClose}
              className="text-placeholderText hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="col-span-2 p-4 mb-3 border-b border-bordercolor">
          <label className="text-sm">Name / Symbol</label>
          <div className="flex flex-col mt-2">
            <input
              type="text"
              name="tokenName"
              className="w-full p-3 text-sm border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
              placeholder="ENTER TOKEN NAME OR TICKER"
            />
          </div>
        </div>

        <div className="col-span-2 p-4 mb-3 border-b border-bordercolor">
          <div className="flex items-center gap-3 mb-3">
            <button
              onClick={() => setTopHoldersChecked(!topHoldersChecked)}
              className={`w-5 h-5 rounded flex items-center justify-center ${
                topHoldersChecked
                  ? "bg-secondaryText"
                  : "border border-bordercolor"
              }`}
            >
              {topHoldersChecked && "✓"}
            </button>
            <span className="text-sm">Top 10 holders</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSocialChecked(!socialChecked)}
              className={`w-5 h-5 rounded flex items-center justify-center ${
                socialChecked ? "bg-secondaryText" : "border border-bordercolor"
              }`}
            >
              {socialChecked && "✓"}
            </button>
            <span className="text-sm">At least 1 social</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label className="text-sm">By current liquidity ($)</label>
          <div className="flex gap-2 mt-2">
            <input
              type="number"
              placeholder="Min"
              className="p-2 w-full border border-bordercolor bg-[#1D1D1E] rounded"
            />
            <p className="mx-1 mt-2">To</p>
            <input
              type="number"
              placeholder="Max"
              className="p-2 w-full border border-bordercolor bg-[#1D1D1E] rounded"
            />
          </div>
        </div>
        <div className="p-4 mb-3 border-b border-bordercolor">
          <div className="flex flex-col gap-2 mb-4">
            <label className="text-sm">By current liquidity ($)</label>
            <div className="flex gap-2 mt-2">
              <input
                type="number"
                placeholder="Min"
                className="p-2 w-full border border-bordercolor bg-[#1D1D1E] rounded"
              />
              <p className="mx-1 mt-2">To</p>
              <input
                type="number"
                placeholder="Max"
                className="p-2 w-full border border-bordercolor bg-[#1D1D1E] rounded"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label className="text-sm">By volume</label>
            <div className="flex gap-2 mt-2">
              <input
                type="number"
                placeholder="Min"
                className="p-2 w-full border border-bordercolor bg-[#1D1D1E] rounded"
              />
              <p className="mx-1 mt-2">To</p>
              <input
                type="number"
                placeholder="Max"
                className="p-2 w-full border border-bordercolor bg-[#1D1D1E] rounded"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label className="text-sm">By age [mins] </label>
            <div className="flex gap-2 mt-2">
              <input
                type="number"
                placeholder="Min"
                className="p-2 w-full border border-bordercolor bg-[#1D1D1E] rounded"
              />
              <p className="mx-1 mt-2">To</p>
              <input
                type="number"
                placeholder="Max"
                className="p-2 w-full border border-bordercolor bg-[#1D1D1E] rounded"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label className="text-sm">By marketcap</label>
            <div className="flex gap-2 mt-2">
              <input
                type="number"
                placeholder="Min"
                className="p-2 w-full border border-bordercolor bg-[#1D1D1E] rounded"
              />
              <p className="mx-1 mt-2">To</p>
              <input
                type="number"
                placeholder="Max"
                className="p-2 w-full border border-bordercolor bg-[#1D1D1E] rounded"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label className="text-sm">By txns</label>
            <div className="flex gap-2 mt-2">
              <input
                type="number"
                placeholder="Min"
                className="p-2 w-full border border-bordercolor bg-[#1D1D1E] rounded"
              />
              <p className="mx-1 mt-2">To</p>
              <input
                type="number"
                placeholder="Max"
                className="p-2 w-full border border-bordercolor bg-[#1D1D1E] rounded"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label className="text-sm">By buys</label>
            <div className="flex gap-2 mt-2">
              <input
                type="number"
                placeholder="Min"
                className="p-2 w-full border border-bordercolor bg-[#1D1D1E] rounded"
              />
              <p className="mx-1 mt-2">To</p>
              <input
                type="number"
                placeholder="Max"
                className="p-2 w-full border border-bordercolor bg-[#1D1D1E] rounded"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label className="text-sm">By sells</label>
            <div className="flex gap-2 mt-2">
              <input
                type="number"
                placeholder="Min"
                className="p-2 w-full border border-bordercolor bg-[#1D1D1E] rounded"
              />
              <p className="mx-1 mt-2">To</p>
              <input
                type="number"
                placeholder="Max"
                className="p-2 w-full border border-bordercolor bg-[#1D1D1E] rounded"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="w-full py-2 mt-4 font-bold bg-transparent border rounded-md border-bordercolor">
            Reset
          </button>
          <button className="w-full py-2 mt-4 font-bold rounded-md bg-secondaryText">
            Apply Filters
          </button>
        </div>
      </div>
    )
  );
};

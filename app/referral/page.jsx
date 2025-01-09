"use client";
import React from "react";
import { RxMixerHorizontal } from "react-icons/rx";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";

export default function Page() {
  return (
    <div className="flex justify-center flex-1 w-full h-full px-4 mb-20 md:px-0">
      <div className="w-full innerContainer">
        {/* Header Section */}
        <div className="flex flex-col mb-6 gap-y-4">
          <h1 className="text-xl font-bold">REFERRAL TRACKING</h1>
          <p className="text-sm font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col justify-between gap-4 mb-6 md:flex-row">
          <div className="grid grid-cols-2 gap-4 md:flex md:flex-row">
            {/* Stats cards */}
            <div className="flex flex-col p-4 border rounded-lg border-bordercolor">
              <h3 className="text-sm font-medium">REFERRALS</h3>
              <p className="text-sm font-medium">300</p>
            </div>
            {/* Repeat for other stat cards */}
            {/* ... */}
          </div>
          <button className="w-full px-6 py-2 my-3 text-sm text-white rounded-lg md:w-auto bg-secondaryText">
            claim all rewards
          </button>
        </div>

        {/* Referral Link Section */}
        <div className="flex flex-col p-4 mb-6 border rounded-lg gap-y-3 border-bordercolor">
          <h1 className="text-base font-bold">YOUR REFERRAL LINK</h1>
          <div className="flex flex-col w-full gap-2 md:flex-row">
            <input
              type="text"
              value="https://stimmy.com/ref/yourcode123"
              className="w-full px-4 py-2 text-sm border rounded-lg bg-background border-bordercolor"
              readOnly
            />
            <button className="w-full px-4 py-2 text-sm text-white rounded-lg md:w-auto bg-secondaryText">
              Copy Link
            </button>
          </div>
        </div>

        {/* Filter and Search Section */}
        <div className="flex flex-col justify-between gap-4 mb-6 md:flex-row">
          <div className="w-full primarybutton md:w-auto">
            <RxMixerHorizontal size={20} />
            <p>filters</p>
          </div>
          <div className="flex flex-col w-full gap-2 md:flex-row md:w-auto">
            <div className="flex items-center w-full p-2 border rounded-md search-container">
              <img src="/search_icon.svg" alt="" className="w-5 h-5" />
              <input
                type="text"
                placeholder="search token"
                className="w-full ml-2 bg-transparent outline-none"
              />
            </div>
            <button className="w-full px-4 py-2 text-sm text-white rounded-lg md:w-auto bg-primaryText">
              Add Token
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <div className="mt-4 border rounded-lg border-bordercolor  min-w-[800px]">
            <table className="w-full">
              <thead className="bg-sidebar">
                <tr className="text-left">
                  <th className="p-4 text-sm font-medium">Token</th>
                  <th className="p-4 text-sm font-medium">Referrals</th>
                  <th className="p-4 text-sm font-medium">Volume Done</th>
                  <th className="p-4 text-sm font-medium">Fees Earned</th>
                  <th className="p-4 text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-bordercolor">
                  <td className="p-4 text-sm">
                    <div className="flex items-center gap-x-3">
                      <img
                        src="/Solid_white.svg"
                        alt=""
                        className="object-cover w-12 h-12 rounded-full"
                      />
                      <div className="flex flex-col">
                        <div className="flex items-center gap-x-2">
                          <span className="text-sm font-medium">SNOOGE</span>
                          <img src="/verified.svg" alt="" className="w-4 h-4" />
                        </div>
                        <div className="flex items-center text-sm text-fadedText">
                          0x0000...0000
                        </div>
                        <div className="flex gap-x-2 text-fadedText">
                          <FaTelegramPlane size={16} />
                          <FaXTwitter size={16} />
                          <CiGlobe size={16} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm">25</td>
                  <td className="p-4 text-sm">
                    <div className="flex gap-x-2">
                      <img src="/Icon.svg" alt="" className="w-4 h-4" />
                      50K
                    </div>
                    <p className="text-sm text-primaryText">2.5M</p>
                  </td>
                  <td className="p-4 text-sm text-positive">
                    <div>10.04%</div>
                    <p className="text-sm text-primaryTextx">+10K $</p>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center text-sm gap-x-4 text-primaryText">
                      <img src="/copy.svg" alt="" />
                      <p>COPY TOKEN REF URL</p>
                      <button className="flex items-center justify-center w-[89px] px-6 py-2 text-sm text-white rounded-lg bg-secondaryText gap-2.5">
                        Claim
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="border-t border-bordercolor">
                  <td className="p-4 text-sm">
                    <div className="flex items-center gap-x-3">
                      <img
                        src="/Solid_white.svg"
                        alt=""
                        className="object-cover w-12 h-12 rounded-full"
                      />
                      <div className="flex flex-col">
                        <div className="flex items-center gap-x-2">
                          <span className="text-sm font-medium">SNOOGE</span>
                          <img src="/verified.svg" alt="" className="w-4 h-4" />
                        </div>
                        <div className="flex items-center text-sm text-fadedText">
                          0x0000...0000
                        </div>
                        <div className="flex gap-x-2 text-fadedText">
                          <FaTelegramPlane size={16} />
                          <FaXTwitter size={16} />
                          <CiGlobe size={16} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm">18</td>
                  <td className="p-4 text-sm">
                    <div className="flex gap-x-2">
                      <img src="/Icon.svg" alt="" className="w-4 h-4" />
                      50K
                    </div>
                    <p className="text-sm text-primaryText">2.5M</p>
                  </td>
                  <td className="p-4 text-sm text-positive">
                    <div>10.04%</div>
                    <p className="text-sm text-primaryTextx">+10K $</p>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center text-sm gap-x-4 text-primaryText">
                      <img src="/copy.svg" alt="" />
                      <p>COPY TOKEN REF URL</p>
                      <button className="flex items-center justify-center w-[89px] px-6 py-2 text-sm text-white rounded-lg bg-secondaryText gap-2.5">
                        Claim
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

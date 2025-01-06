"use client";
import React from "react";
import { RxMixerHorizontal } from "react-icons/rx";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
export default function Page() {
  return (
    <div className="flex justify-center flex-1 w-full h-full mb-20">
      <div className=" innerContainer">
        <div className="flex flex-col gap-x-2">
          <h1 className="text-xl font-bold"> REFERRAL TRACKING</h1>
          <p className="text-sm font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex justify-between mr-4">
          <div className="flex gap-x-5 ">
            <div className="flex flex-col px-8 py-4 border rounded-lg border-bordercolor">
              <h3 className="text-sm font-medium">REFERRALS</h3>
              <p className="text-sm font-medium">300</p>
            </div>

            <div className="flex flex-col p-4 border rounded-lg border-bordercolor">
              <h3 className="text-sm font-medium">TRADERS</h3>
              <p className="text-sm font-medium">120</p>
            </div>

            <div className="flex flex-col p-4 border rounded-lg border-bordercolor">
              <h3 className="text-sm font-medium">VOLUME DONE BY TRADERS</h3>
              <p className="text-sm font-medium">
                <div className="flex gap-x-2">
                  <img src="/Icon.svg" alt="" className="w-4 h-4" />
                  50K
                </div>
              </p>
            </div>

            <div className="flex flex-col p-4 border rounded-lg border-bordercolor">
              <h3 className="text-sm font-medium">REWARDS</h3>
              <p className="text-sm font-medium text-positive">
                <div className="flex gap-x-2">
                  <img src="/Icon.svg" alt="" className="w-4 h-4" />
                  <span className="text-positive"> 50K</span>
                </div>
              </p>
            </div>
          </div>
          <div className="flex mt-4 mb-4 mr-4">
            <button
              type="submit"
              className="flex items-center justify-center px-6 py-2 text-sm text-white transition-colors rounded-lg bg-secondaryText gap-x-2.5"
            >
              claim all rewards
            </button>
          </div>
        </div>

        <div className="flex flex-col px-4 py-8 border rounded-lg gap-y-3 border-bordercolor">
          <div className="">
            <h1 className="text-base font-bold">YOUR REFERRAL LINK</h1>
          </div>
          <div className="flex w-full gap-x-2">
            <input
              type="text"
              value="https://stimmy.com/ref/yourcode123"
              className="w-full px-4 py-2 text-sm border rounded-lg bg-background border-bordercolor"
              readOnly
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  "https://stimmy.com/ref/yourcode123"
                );
              }}
              className="px-4 py-2 text-sm text-white transition-colors rounded-lg whitespace-nowrap bg-secondaryText hover:opacity-90"
            >
              Copy Link
            </button>
          </div>
        </div>

        <div className="flex justify-between gap-x-2">
          <div className="flex">
            <div
              className="cursor-pointer primarybutton"
              // onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <RxMixerHorizontal size={20} />
              <p>filters</p>
            </div>
          </div>
          <div className="flex gap-x-2">
            <div className="flex items-center w-full h-12 px-3 py-2 bg-transparent border rounded-md cursor-pointer gap-x-3 border-bordercolor">
              <img src="/search_icon.svg" alt="" className="w-5 h-5" />
              <input
                type="text"
                placeholder="search token "
                className="w-full h-full text-sm font-bold uppercase bg-transparent outline-none placeholder:text-placeholderText"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <button className="px-4 py-2 text-sm text-white rounded-lg whitespace-nowrap bg-primaryText ">
              Add Token
            </button>
          </div>
        </div>

        <div className="mt-4 border rounded-lg border-bordercolor">
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
  );
}

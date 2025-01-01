"use client";
import {
  Copy,
  FilePenLine,
  RefreshCcw,
  RotateCw,
  SquareArrowOutUpRight,
} from "lucide-react";
import { useState } from "react";
export default function Page() {
  const [activeTab, setActiveTab] = useState("coins-held");

  const renderContent = () => {
    switch (activeTab) {
      case "coins-held":
        return <CoinsHeldTable />;
      case "coins-created":
        return <CoinsCreatedTable />;
      case "followers":
        return <FollowersList />;
      case "following":
        return <FollowingList />;
      default:
        return <CoinsHeldTable />;
    }
  };
  return (
    <div className="Container">
      <div className="mx-8 innerContainer ">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-x-4 gap-y-4">
          <div className="flex items-center justify-between w-full px-3 md:px-6 py-4 gap-x-3 rounded-md bg-sidebar min-h-24 ">
            <div className="flex items-center ">
              <div className="flex items-center gap-x-3">
                <div className="w-9 h-9 md:w-16 md:h-16 bg-white rounded-full"></div>
                <div className="">
                  <p className="flex items-center text-base md:text-base lg:text-base xl:text-xl font-semibold gap-x-2">
                    @wgm{" "}
                    <span className="cursor-pointer">
                      <FilePenLine size={16} />
                    </span>
                  </p>
                  <div className="font-semibold text-placeholderText text-xs md:text-sm lg:text-base">
                    0x000000000000
                  </div>
                  <p className="flex items-center font-semibold gap-x-2 text-xs md:text-sm lg:text-base text-placeholderText">
                    View on sonscan
                    <span className="cursor-pointer">
                      <SquareArrowOutUpRight size={16} />
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <button className="px-2 md:px-5 py-2 font-medium rounded-md bg-secondaryText text-xs md:text-sm lg:text-base">
              Follow
            </button>
          </div>

          <div className="flex w-full lg:w-fit items-center gap-x-3">
            <div className="flex flex-col items-center justify-center w-full lg:w-64 font-bold uppercase border rounded-md border-bordercolor min-h-24 py-7 text-xs md:text-sm lg:text-base">
              <p>followers</p>
              <p>10</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full lg:w-64 font-bold uppercase border rounded-md border-bordercolor min-h-24 py-7 text-xs md:text-sm lg:text-base">
              <p>followering</p>
              <p>10</p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full mt-3 gap-x-4">
          <button
            onClick={() => setActiveTab("coins-held")}
            className={`border border-bordercolor py-2 px-3 rounded-md primarybutton ${activeTab === "coins-held" ? "bg-secondaryText" : ""
              }`}
          >
            <p className="text-[#F5F5F5] font-semibold uppercase">coins held</p>
          </button>
          <button
            onClick={() => setActiveTab("coins-created")}
            className={`border border-bordercolor py-2 px-3 rounded-md primarybutton ${activeTab === "coins-created" ? "bg-secondaryText" : ""
              }`}
          >
            <p className="text-[#F5F5F5] font-semibold uppercase">
              coins created
            </p>
          </button>
          <button
            onClick={() => setActiveTab("followers")}
            className={`border border-bordercolor py-2 px-3 rounded-md primarybutton ${activeTab === "followers" ? "bg-secondaryText" : ""
              }`}
          >
            <p className="text-[#F5F5F5] font-semibold uppercase">Followers</p>
          </button>
          <button
            onClick={() => setActiveTab("following")}
            className={`border border-bordercolor py-2 px-3 rounded-md primarybutton ${activeTab === "following" ? "bg-secondaryText" : ""
              }`}
          >
            <p className="text-[#F5F5F5] font-semibold uppercase">Following</p>
          </button>
        </div>

        <div className="mt-6  mb-24 md:mb-0">{renderContent()}</div>
      </div>
    </div>
  );
}

function CoinsHeldTable() {
  return (
    <div className="w-full px-3 md:px-4 py-6 border rounded-md border-bordercolor ">
      <h2 className="font-bold uppercase text-md px-4">Coins Held</h2>

      <div className="w-full overflow-x-scroll">
        <div className="p-4 mt-3 w-[500px] md:w-full  text-white rounded-md shadow-lg ">
          {/* Table Header */}
          <div className="flex items-center justify-between px-1 md:px-3 py-3 mb-3  font-semibold uppercase bg-transparent text-placeholderText text-xs md:text-sm lg:text-base">
            <div className="w-1/3">Token</div>
            <div className="w-1/3 text-center">Holdings</div>
            <div className="w-1/3 text-right">Actions</div>
          </div>

          {/* Table Row */}
          <div className="flex justify-between items-center bg-[#1D1D1E4D] py-3 text-sm px-3">
            {/* Token Information */}
            <div className="flex items-center w-1/3">
              <div className="bg-white rounded-full w-7 h-7 md:h-14 md:w-14"></div>
              <div className="ml-2">
                <div className="text-xs md:text-sm lg:text-base font-semibold">SNOOGE</div>
                <div className="flex items-center text-xs text-gray-400 gap-x-2">
                  0x0000...0000{" "}
                  <span>
                    <Copy size={12} />
                  </span>
                </div>
              </div>
            </div>

            {/* Holdings */}
            <div className="w-1/3 text-center">
              <div className="text-xs md:text-sm lg:text-base font-semibold">0 $SNO</div>
              <div className="text-xs md:text-sm lg:text-base font-semibold text-orange-500 text-md">
                0.000 SNO
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end w-1/3 text-right ">
              <div className="flex items-center w-fit gap-x-4">
                <button className="flex items-center font-semibold uppercase gap-x-2 text-placeholderText text-xs md:text-sm lg:text-base">
                  <RotateCw size={14} />
                  <p>Refresh</p>
                </button>
                <button className="px-4 py-2 font-medium text-white rounded-md bg-secondaryText hover:bg-secondaryText/85 text-xs md:text-sm lg:text-base min-w-fit">
                  View Coin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CoinsCreatedTable() {
  return (
    <div className="w-full px-4 md:px-8 py-4 md:py-10 border rounded-md border-bordercolor">
      <h2 className="font-bold uppercase text-md">Coins created</h2>

      <div className="flex items-center w-full px-3 py-2 mt-3 border rounded-md border-bordercolor gap-x-2">
        <div className="w-8 h-8 md:w-12 md:h-12 border rounded-full border-secondaryText bg-slate-500"></div>

        <div className="w-full">
          <div className="flex items-center justify-between">
            <p className="flex items-center font-semibold uppercase gap-x-4 text-sm md:text-sm lg:text-base">
              TOKEN NAME{" "}
              <span className="text-xs md:text-sm lg:text-base text-placeholderText ">$TOKEN</span>
            </p>
            <p className="text-xs md:text-sm lg:text-base font-semibold text-placeholderText">3d ago</p>
          </div>

          <p className="mt-1 text-xs md:text-sm lg:text-base font-bold uppercase text-placeholderText">
            CREATED BY : @ <span>WGM</span>{" "}
          </p>
          <p className="text-xs md:text-sm lg:text-basefont-bold uppercase text-positive">
            MARKET CAP :$3.3k{" "}
          </p>
          <p className="text-sm text-placeholderText">
            Join us as we embark on a journey into a new era. The future is now,
            poised for discovery. Unveil the mysteries with us and become part
            of something extraordinary. Together, let&apos;s push the boundaries
            of what is possible.
          </p>
        </div>
      </div>
    </div>
  );
}

function FollowersList() {
  return (
    <div className="w-full px-3 md:px-8 py-4 md:py-10 border rounded-md border-bordercolor">
      <h2 className="font-bold uppercase text-sm  md:text-base">Followers</h2>

      <div className="flex items-center justify-between w-full px-3 py-2 mt-3 border rounded-md border-bordercolor gap-x-2">
        <div className="flex items-center gap-x-2">
          <div className="w-8 h-8 md:w-12 md:h-12 border rounded-full border-secondaryText bg-slate-500"></div>

          <div className="">
            <p className="flex items-center text-xs md:text-sm lg:text-base font-semibold gap-x-4">
              {" "}
              @anonon{" "}
            </p>
            <p className="flex items-center text-xs md:text-sm lg:text-base font-semibold text-placeholderText gap-x-1">
              0x000000000000{" "}
              <span>
                <Copy size={14} />
              </span>
            </p>
            <p className="text-xs md:text-sm lg:text-base font-semibold text-placeholderText">
              {" "}
              3 Followers{" "}
            </p>
          </div>
        </div>

        <button className="px-3 py-2 text-xs md:text-sm lg:text-base font-medium rounded-md bg-secondaryText min-w-fit">
          View profile
        </button>
      </div>
    </div>
  );
}

function FollowingList() {
  return (
    <div className="w-full px-3 md:px-8 py-4 md:py-10 border rounded-md border-bordercolor">
      <h2 className="font-bold uppercase text-sm  md:text-base">Following</h2>

      <div className="flex items-center justify-between w-full px-3 py-2 mt-3 border rounded-md border-bordercolor gap-x-2">
        <div className="flex items-center gap-x-2">
          <div className="h-8 w-8 md:w-12 md:h-12 border rounded-full border-secondaryText bg-slate-500"></div>

          <div className="">
            <div className="">
              <p className="flex items-center text-xs md:text-sm lg:text-base font-semibold gap-x-4">
                {" "}
                @anonon{" "}
              </p>
              <p className="flex items-center text-xs md:text-sm lg:text-base font-semibold text-placeholderText gap-x-1">
                0x000000000000{" "}
                <span>
                  <Copy size={14} />
                </span>
              </p>
              <p className="text-xs md:text-sm lg:text-base font-semibold text-placeholderText">
                {" "}
                3 Followers{" "}
              </p>
            </div>
          </div>
        </div>

        <button className="px-3 py-2 text-xs md:text-sm lg:text-base font-medium rounded-md bg-secondaryText min-w-fit">
          View profile
        </button>
      </div>
    </div>
  );
}

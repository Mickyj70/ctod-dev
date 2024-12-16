"use client";
import { LinearProgress } from "@mui/material";
import { Clock } from "lucide-react";
import { UserRound } from "lucide-react";
import { Copy } from "lucide-react";
import { useState } from "react";
import { RxMixerHorizontal } from "react-icons/rx";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { SiAeromexico } from "react-icons/si";
import Link from "next/link";
import { FilterModal } from "../../components/ui/modals/FilterModal";

export default function Page() {
  const [mavProtection, setMavProtection] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="Container">
      <div className="innerContainer">
        {/* header */}
        <div className="">
          <p className="header">ADVANCED MODE</p>
          <p>
            Customized real-time feeds of new tokens matching your selected
            preset filters.
          </p>
        </div>

        <div className="flex items-center justify-between w-full ">
          <div className="primarybutton">
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
            <p>quick buy</p>
            <p className="flex items-center font-medium">
              <span className="pr-2 text-sm">
                <img src="/Icon.svg" alt="i" className="w-4 h-4" />
              </span>
              100
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <NewlyCreated />
          <AboutToGraduate />
          <Graduated />
        </div>
      </div>
      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
}

const NewlyCreated = ({ token }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between w-full px-4 py-6 bg-[#0F0F10] border border-bordercolor">
        {/* HEADER */}

        <p className="font-bold text-placeholderText"> NEWLY CREATED </p>
        <div
          className="cursor-pointer primarybutton"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <RxMixerHorizontal size={20} />
          <p>filters</p>
        </div>
      </div>

      <div className="bg-[#1D1D1E4D] py-4 px-4 border border-bordercolor">
        <div className="flex items-center justify-between px-1 gap-x-4">
          <Link
            href={`/token/${token ? token?.id : 1}`}
            className="flex items-center gap-x-3"
          >
            <div className="rounded-full w-14 h-14 bg-neutral-100">
              <img
                src={"https://via.placeholder.com/150"}
                alt="img"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <div className="font-bold uppercase ">DODGE</div>
              <LinearProgress
                className="text-secondaryText"
                sx={{ color: "orange" }}
                color="warning"
                variant="determinate"
                value={45}
              />
              <div className="flex items-center gap-x-2">
                <div className="flex items-center text-xs text-gray-500 gap-x-2">
                  112.saxdasds
                  <span>
                    <Copy size={12} />
                  </span>
                </div>

                <div className="flex items-center text-xs gap-x-2">
                  <span>
                    <CiGlobe />
                  </span>
                  <span>
                    <FaXTwitter />
                  </span>
                  <span>
                    <FaTelegramPlane />
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-x-1">
                <div className="flex items-center gap-x-1 text-placeholderText">
                  <Clock size={14} />
                  <p className="text-xs font-medium">10s</p>
                </div>
                <div className="flex w-full">
                  <p className="text-xs font-bold text-positive">T10 : 4%</p>
                </div>
                <div className="flex w-full">
                  <p className="text-xs font-bold text-negative">DH : 10%</p>
                </div>
              </div>
            </div>
          </Link>

          <div className="flex flex-col items-end gap-y-2">
            <div className="flex flex-row w-full">
              <button className="flex w-full gap-1 px-10 py-2 font-bold rounded-md bg-secondaryText">
                <img className="w-4 h-4 mt-1 " src="/Icon.svg" alt="i" /> 100
              </button>
            </div>
            <div className="flex items-center gap-x-2">
              <p className="flex items-center text-xs font-bold gap-x-2 text-placeholderText">
                <span>
                  <UserRound size={12} />
                </span>
                100
              </p>
              <p className="text-xs font-bold text-placeholderText">V $ 100</p>
              <p className="text-xs font-bold text-positive">
                <span className="text-placeholderText">MC </span> 100K
              </p>
            </div>
          </div>
        </div>
      </div>
      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
};
const AboutToGraduate = ({ token }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between w-full px-4 py-6 bg-[#0F0F10] border border-bordercolor">
        {/* HEADER */}

        <p className="font-bold text-placeholderText"> NEWLY CREATED </p>
        <div
          className="cursor-pointer primarybutton"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <RxMixerHorizontal size={20} />
          <p>filters</p>
        </div>
      </div>

      <div className="bg-[#1D1D1E4D] py-4 px-4  border border-bordercolor">
        <div className="flex items-center justify-between px-1 gap-x-4">
          <Link
            href={`/token/${token ? token?.id : 1}`}
            className="flex items-center gap-x-3"
          >
            <div className="rounded-full w-14 h-14 bg-neutral-100">
              <img
                src={"https://via.placeholder.com/150"}
                alt="img"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <div className="font-bold uppercase ">DODGE</div>
              <LinearProgress
                className="text-secondaryText"
                sx={{ color: "orange" }}
                color="warning"
                variant="determinate"
                value={45}
              />
              <div className="flex items-center gap-x-2">
                <div className="flex items-center text-xs text-gray-500 gap-x-2">
                  112.saxdasds
                  <span>
                    <Copy size={12} />
                  </span>
                </div>

                <div className="flex items-center text-xs gap-x-2">
                  <span>
                    <CiGlobe />
                  </span>
                  <span>
                    <FaXTwitter />
                  </span>
                  <span>
                    <FaTelegramPlane />
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-x-1">
                <div className="flex items-center gap-x-1 text-placeholderText">
                  <Clock size={14} />
                  <p className="text-xs font-medium">10s</p>
                </div>
                <div className="flex w-full">
                  <p className="text-xs font-bold text-positive">T10 : 4%</p>
                </div>
                <div className="flex w-full">
                  <p className="text-xs font-bold text-negative">DH : 10%</p>
                </div>
              </div>
            </div>
          </Link>

          <div className="flex flex-col items-end gap-y-2">
            <div className="flex flex-row w-full">
              <button className="flex w-full gap-1 px-10 py-2 font-bold rounded-md bg-secondaryText">
                <img className="w-4 h-4 mt-1" src="/Icon.svg" alt="i" />
                100
              </button>
            </div>
            <div className="flex items-center gap-x-2">
              <p className="flex items-center text-xs font-bold gap-x-2 text-placeholderText">
                <span>
                  <UserRound size={12} />
                </span>
                100
              </p>
              <p className="text-xs font-bold text-placeholderText">V $ 100</p>
              <p className="text-xs font-bold text-positive">
                <span className="text-placeholderText">MC </span> 100K
              </p>
            </div>
          </div>
        </div>
      </div>
      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
};
const Graduated = ({ token }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between w-full px-4 py-6 bg-[#0F0F10] border border-bordercolor">
        {/* HEADER */}

        <p className="font-bold text-placeholderText"> NEWLY CREATED </p>
        <div
          className="cursor-pointer primarybutton"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <RxMixerHorizontal size={20} />
          <p>filters</p>
        </div>
      </div>

      <div className="bg-[#1D1D1E4D] py-4  px-4 border border-bordercolor">
        <div className="flex items-center justify-between px-1 gap-x-4">
          <Link
            href={`/token/${token ? token?.id : 1}`}
            className="flex items-center gap-x-3"
          >
            <div className="rounded-full w-14 h-14 bg-neutral-100">
              <img
                src={"https://via.placeholder.com/150"}
                alt="img"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <div className="font-bold uppercase ">DODGE</div>
              <LinearProgress
                className="text-secondaryText"
                sx={{ color: "orange" }}
                color="warning"
                variant="determinate"
                value={45}
              />
              <div className="flex items-center gap-x-2">
                <div className="flex items-center text-xs text-gray-500 gap-x-2">
                  112.saxdasds
                  <span>
                    <Copy size={12} />
                  </span>
                </div>

                <div className="flex items-center text-xs gap-x-2">
                  <span>
                    <CiGlobe />
                  </span>
                  <span>
                    <FaXTwitter />
                  </span>
                  <span>
                    <FaTelegramPlane />
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-x-1">
                <div className="flex items-center gap-x-1 text-placeholderText">
                  <Clock size={14} />
                  <p className="text-xs font-medium">10s</p>
                </div>
                <div className="flex w-full">
                  <p className="text-xs font-bold text-positive">T10 : 4%</p>
                </div>
                <div className="flex w-full">
                  <p className="text-xs font-bold text-negative">DH : 10%</p>
                </div>
              </div>
            </div>
          </Link>

          <div className="flex flex-col items-end gap-y-2">
            <div className="flex flex-row w-full">
              <button className="flex w-full gap-1 px-10 py-2 font-bold rounded-md bg-secondaryText">
                <img className="w-4 h-4 mt-1" src="/Icon.svg" alt="i" />
                100
              </button>
            </div>
            <div className="flex items-center gap-x-2">
              <p className="flex items-center text-xs font-bold gap-x-2 text-placeholderText">
                <span>
                  <UserRound size={12} />
                </span>
                100
              </p>
              <p className="text-xs font-bold text-placeholderText">V $ 100</p>
              <p className="text-xs font-bold text-positive">
                <span className="text-placeholderText">MC </span> 100K
              </p>
            </div>
          </div>
        </div>
      </div>
      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
};

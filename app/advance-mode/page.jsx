
import { LinearProgress } from "@mui/material";
import { Clock } from "lucide-react";
import { UserRound } from "lucide-react";
import { Copy } from "lucide-react";
import React from "react";
import { RxMixerHorizontal } from "react-icons/rx";

export default function Page() {
  return (
    <div className="Container">
      <div className="innerContainer">
        {/* header */}
        <div className="">
          <p className="header">ADVANCED MODE</p>
          <p>Customized real-time feeds of new tokens matching your selected preset filters.</p>
        </div>

        <div className="flex justify-between items-center w-full ">
          <div className="primarybutton">
            <p className="text-xs">orange switch</p>
            <p >quick buy</p>
            <p className="flex items-center font-medium"> <span className="pr-2 text-sm">icon</span> 100</p>
          </div>
        </div>


        <div className="grid grid-cols-3 gap-4">
          <NewlyCreated />
          <AboutToGraduate />
          <Graduated />
        </div>


      </div>
    </div>
  );
}


const NewlyCreated = () => {
  return (
    <div className="flex flex-col  w-full">
      <div className="flex items-center justify-between w-full px-4 py-6 bg-[#0F0F10] border border-bordercolor">
        {/* HEADER */}

        <p className="font-bold text-placeholderText" > NEWLY CREATED </p>
        <div className="primarybutton">
          <RxMixerHorizontal size={20} />
          <p>filters</p>
        </div>
      </div>


      <div className="bg-[#1D1D1E4D] py-4  border border-bordercolor">
        <div className="flex items-center justify-between px-4 gap-x-4">
          <div className="flex items-center gap-x-3">
            <div className="rounded-full h-14 w-14 bg-neutral-100">
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
                value={50}
              />
              <div className="flex items-center gap-x-2">
                <div className="flex items-center text-xs text-gray-500 gap-x-2">
                  112.saxdasds <span><Copy size={14} /></span>
                </div>

                <div className="flex items-center text-xs gap-x-2">
                  <span>web</span>
                  <span>x</span>
                  <span>telegram</span>
                </div>
              </div>

              <div className="flex items-center  gap-x-4">
                <div className="flex items-center gap-x-1 text-placeholderText">
                  <Clock size={16} />
                  <p className="font-medium">10s</p>
                </div>
                <p className="font-bold text-positive">T10 : 4%</p>
                <p className="font-bold text-negative">DH : 10%</p>
              </div>


            </div>
          </div>

          <div className="flex flex-col items-end gap-y-2">
            <button
              className="px-10 py-3 bg-secondaryText font-bold rounded-md"
            >icon 100</button>
            <div className="flex itemms-center gap-x-2">
              <p className="flex items-center gap-x-2 font-bold text-placeholderText"> <span><UserRound size={16} /></span> 100</p>
              <p className="font-bold text-placeholderText">V $ 100</p>
              <p className="text-positive font-bold"> <span className="text-placeholderText">MC </span> 100K</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
const AboutToGraduate = () => {
  return (
    <div className="flex flex-col  w-full">
      <div className="flex items-center justify-between w-full px-4 py-6 bg-[#0F0F10] border border-bordercolor">
        {/* HEADER */}

        <p className="font-bold text-placeholderText uppercase"> about to graduate </p>
        <div className="primarybutton">
          <RxMixerHorizontal size={20} />
          <p>filters</p>
        </div>
      </div>


      <div className="bg-[#1D1D1E4D] py-4  border border-bordercolor">
        <div className="flex items-center justify-between px-4 gap-x-4">
          <div className="flex items-center gap-x-3">
            <div className="rounded-full h-14 w-14 bg-neutral-100">
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
                value={50}
              />
              <div className="flex items-center gap-x-2">
                <div className="flex items-center text-xs text-gray-500 gap-x-2">
                  112.saxdasds <span><Copy size={14} /></span>
                </div>

                <div className="flex items-center text-xs gap-x-2">
                  <span>web</span>
                  <span>x</span>
                  <span>telegram</span>
                </div>
              </div>

              <div className="flex items-center  gap-x-4">
                <div className="flex items-center gap-x-1 text-placeholderText">
                  <Clock size={16} />
                  <p className="font-medium">10s</p>
                </div>
                <p className="font-bold text-positive">T10 : 4%</p>
                <p className="font-bold text-negative">DH : 10%</p>
              </div>


            </div>
          </div>

          <div className="flex flex-col items-end gap-y-2">
            <button
              className="px-10 py-3 bg-secondaryText font-bold rounded-md"
            >icon 100</button>
            <div className="flex itemms-center gap-x-2">
              <p className="flex items-center gap-x-2 font-bold text-placeholderText"> <span><UserRound size={16} /></span> 100</p>
              <p className="font-bold text-placeholderText">V $ 100</p>
              <p className="text-positive font-bold"> <span className="text-placeholderText">MC </span> 100K</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
const Graduated = () => {
  return (
    <div className="flex flex-col  w-full">
      <div className="flex items-center justify-between w-full px-4 py-6 bg-[#0F0F10] border border-bordercolor">
        {/* HEADER */}

        <p className="font-bold text-placeholderText uppercase" >graduated</p>
        <div className="primarybutton">
          <RxMixerHorizontal size={20} />
          <p>filters</p>
        </div>
      </div>


      <div className="bg-[#1D1D1E4D] py-4  border border-bordercolor">
        <div className="flex items-center justify-between px-4 gap-x-4">
          <div className="flex items-center gap-x-3">
            <div className="rounded-full h-14 w-14 bg-neutral-100">
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
                value={50}
              />
              <div className="flex items-center gap-x-2">
                <div className="flex items-center text-xs text-gray-500 gap-x-2">
                  112.saxdasds <span><Copy size={14} /></span>
                </div>

                <div className="flex items-center text-xs gap-x-2">
                  <span>web</span>
                  <span>x</span>
                  <span>telegram</span>
                </div>
              </div>

              <div className="flex items-center  gap-x-4">
                <div className="flex items-center gap-x-1 text-placeholderText">
                  <Clock size={16} />
                  <p className="font-medium">10s</p>
                </div>
                <p className="font-bold text-positive">T10 : 4%</p>
                <p className="font-bold text-negative">DH : 10%</p>
              </div>


            </div>
          </div>

          <div className="flex flex-col items-end gap-y-2">
            <button
              className="px-10 py-3 bg-secondaryText font-bold rounded-md"
            >icon 100</button>
            <div className="flex itemms-center gap-x-2">
              <p className="flex items-center gap-x-2 font-bold text-placeholderText"> <span><UserRound size={16} /></span> 100</p>
              <p className="font-bold text-placeholderText">V $ 100</p>
              <p className="text-positive font-bold"> <span className="text-placeholderText">MC </span> 100K</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
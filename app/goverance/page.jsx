"use client";

import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { Table } from "../../components/ui/table/table";
import LockedTokensTable from "../../components/ui/LockedTokenTable/lockedtokentable";
import { CircleAlert } from "lucide-react";

const marks = [
  { value: 0, label: "7 days" },
  { value: 25, label: "1 Month" },
  { value: 50, label: "6 Months" },
  { value: 75, label: "1 Year" },
  { value: 100, label: "3 Years" },
];

const getDurationLabel = (value) => {
  const selectedMark = marks.find((mark) => mark.value === value);
  return selectedMark ? selectedMark.label : "7 days";
};

function PageContent() {
  const searchParams = useSearchParams();
  const currentStep = searchParams.get("step") || "lock";
  const [lockData, setLockData] = useState(null);

  return (
    <div className="Container">
      <div className="innerContainer">
        {currentStep === "lock" && <LockAndEarn setLockData={setLockData} />}
        {currentStep === "mylocks" && <MyLocks lockData={lockData} />}
        {currentStep === "claimrewards" && <ClaimRewards lockData={lockData} />}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}

function LockAndEarn({ setLockData }) {
  const router = useRouter();
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState(0);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDurationChange = (_, value) => {
    setDuration(value);
  };

  const handleLockSubmit = () => {
    const data = {
      amount,
      duration,
      votingPower: calculateVotingPower(amount, duration),
    };
    setLockData(data);
    router.push("/goverance?step=mylocks");
  };

  const calculateVotingPower = (amt, dur) => {
    return "0.0";
  };

  return (
    <div className="Container">
      <div className="innerContainer">
        <div className="">
          <p className="header">LOCK AND EARN</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex items-center justify-between w-full ">
          <div className="primarybutton">
            <p>LOCK $CTO</p>
          </div>
        </div>

        <div className="flex items-start w-full gap-x-4">
          <div className="w-7/12 px-3 py-6 border border-bordercolor min-h-96">
            <p className="font-bold">AMOUNT TO LOCK</p>

            <div className="flex items-end w-full gap-x-4">
              <div className="flex items-center w-11/12 px-4 py-2 border rounded-md border-bordercolor h-14 gap-x-3 ">
                <input
                  value={amount}
                  onChange={handleAmountChange}
                  type="text"
                  placeholder="0.0"
                  className="w-full h-full font-bold bg-transparent outline-none placeholder:text-placeholderText"
                />
                <button className="capitalize primarybutton text-placeholderText">
                  Max
                </button>
              </div>

              <div className="flex flex-col items-end w-3/12 gap-y-3">
                <p className="font-medium uppercase w-fit">balance 0.0000</p>
                <div className="flex items-center justify-center w-full primarybutton h-14 gap-x-6">
                  <div className="w-8 h-8 mr-1 rounded-full bg-placeholderText"></div>
                  <p>CTO</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full my-4 gap-y-4">
              <p className="font-semibold">SELECT DURATION</p>
              <p>
                Locking for{" "}
                <span className="font-bold">{getDurationLabel(duration)}</span>{" "}
                for <span className="font-bold">0.0 veCTO</span> voting power.
              </p>

              <div className="flex flex-col w-full gap-y-6">
                <Box className="w-9/12 pl-4">
                  <Slider
                    aria-label="Lock Duration"
                    defaultValue={0}
                    step={null}
                    valueLabelDisplay="off"
                    marks={marks}
                    value={duration}
                    onChange={handleDurationChange}
                    sx={{
                      "& .MuiSlider-mark": {
                        backgroundColor: "#ED5409",
                      },
                      "& .MuiSlider-markLabel": {
                        color: "#FFFFFFCC",
                        marginTop: "8px",
                      },
                      "& .MuiSlider-rail": {
                        opacity: 0.5,
                        backgroundColor: "#28282D",
                        height: "10px",
                      },
                      "& .MuiSlider-track": {
                        border: "none",
                        backgroundColor: "#ED5409",
                        height: "10px",
                      },
                      "& .MuiSlider-thumb": {
                        backgroundColor: "#ED5409",
                      },
                    }}
                  />
                </Box>
                <button
                  onClick={handleLockSubmit}
                  className="w-full py-2 font-semibold rounded-md bg-secondaryText"
                >
                  Lock token
                </button>
              </div>

              <div className="border rounded-md border-secondaryText">
                <p className="flex items-center px-3 py-3 text-xs gap-x-2">
                  <span className="text-xs">
                    <CircleAlert size={16} />
                  </span>{" "}
                  Locking will give you an NFT, referred to as a veNFT. You can
                  increase the lock amount or extend the lock time at any point
                  after
                </p>
              </div>
            </div>
          </div>

          <div className="w-5/12 px-5 py-4 border border-bordercolor min-h-80">
            <p className="py-2 pl-5 font-bold">NEW LOCK</p>
            <div className="flex justify-start w-full">
              <Timeline
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }}
              >
                {[
                  "Select the amount of CTO you want to lock.",
                  "Select the number of weeks. The minimum lock time is one week, and the maximum lock time is 3 years.",
                ].map((text, index) => (
                  <TimelineItem key={index}>
                    <TimelineSeparator>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>{text}</TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MyLocks({ lockData }) {
  const tokens = [
    {
      name: "CTO",
      address: "0x0000...0000",
      unlockDuration: "6M 13D",
      amount: "10K",
      votingPower: "10K",
      actions: [
        {
          label: "Unlock",
          type: "secondary",
          onClick: () => alert("Unlock clicked"),
        },
        {
          label: "Edit",
          type: "primary",
          onClick: () => alert("Edit clicked"),
        },
      ],
    },
  ];

  const actualduration = getDurationLabel(lockData?.duration);

  const router = useRouter();

  const handleClaim = () => {
    router.push("/goverance?step=claimrewards");
  };

  const handleMyLocks = () => {
    router.push("/goverance?step=mylocks");
  };

  return (
    <>
      <div className="Container">
        <div className="innerContainer">
          <div className="">
            <p className="header">LOCK AND EARN</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="flex items-center justify-between w-full ">
            <div onClick={handleMyLocks} className="primarybutton">
              <p>MY LOCKS</p>
            </div>

            <div className="flex items-center gap-x-3">
              <div onClick={handleClaim} className="primarybutton">
                <p>CLAIM REWARDS</p>
              </div>
              <div className="primarybutton">
                <p>VOTE</p>
              </div>
            </div>
          </div>

          <div className="w-full py-6 min-h-96">
            <LockedTokensTable tokens={tokens} />
          </div>
        </div>
      </div>
    </>
  );
}
function ClaimRewards({ lockData }) {
  const actualduration = getDurationLabel(lockData?.duration);

  const tokens = [
    {
      name: "CTO",
      address: "0x0000...0000",
      unlockDuration: "6M 13D",
      amount: "10K",
      votingPower: "10K",
      actions: [
        {
          label: "Claim",
          type: "primary",
          onClick: () => alert("Claim clicked"),
        },
      ],
    },
  ];

  const router = useRouter();
  const handleMyLocks = () => {
    router.push("/goverance?step=mylocks");
  };

  return (
    <>
      <div className="Container">
        <div className="innerContainer">
          <div className="">
            <p className="header">CLAIM REWARDS</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="flex items-center justify-between w-full ">
            <div onClick={handleMyLocks} className="primarybutton">
              <p>MY LOCKS</p>
            </div>

            <div className="flex items-center gap-x-3">
              <div className="primarybutton">
                <p>CLAIM REWARDS</p>
              </div>
              <div className="primarybutton">
                <p>VOTE</p>
              </div>
            </div>
          </div>

          <div className="w-full py-6 min-h-96">
            <LockedTokensTable tokens={tokens} />
          </div>
        </div>
      </div>
    </>
  );
}

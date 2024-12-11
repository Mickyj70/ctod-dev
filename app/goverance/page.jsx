"use client"

import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Table } from '../../components/ui/table/table';
import LockedTokensTable from "../../components/ui/LockedTokenTable/lockedtokentable"
import { CircleAlert } from 'lucide-react';


const marks = [
    { value: 0, label: '7 days' },
    { value: 25, label: '1 Month' },
    { value: 50, label: '6 Months' },
    { value: 75, label: '1 Year' },
    { value: 100, label: '3 Years' }
];

const getDurationLabel = (value) => {
    const selectedMark = marks.find(mark => mark.value === value);
    return selectedMark ? selectedMark.label : '7 days';
};

export default function Page() {
    const searchParams = useSearchParams();
    const currentStep = searchParams.get('step') || 'lock';
    const [lockData, setLockData] = useState(null);

    return (
        <div className="Container">
            <div className="innerContainer">
                {currentStep === 'lock' && (
                    <LockAndEarn setLockData={setLockData} />
                )}
                {currentStep === 'mylocks' && (
                    <MyLocks lockData={lockData} />
                )}

                {currentStep === 'claimrewards' && (
                    <ClaimRewards lockData={lockData} />
                )}
            </div>
        </div>
    )
}

function LockAndEarn({ setLockData }) {
    const router = useRouter();
    const [amount, setAmount] = useState('');
    const [duration, setDuration] = useState(0);

    function valuetext(value) {
        return `${value}°C`;
    }

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
            votingPower: calculateVotingPower(amount, duration)
        };
        setLockData(data);
        router.push('/goverance?step=mylocks');
    };

    const calculateVotingPower = (amt, dur) => {
        return '0.0';
    };

    const handleMyLocks = () => {
        router.push('/goverance?step=mylocks');
    };
    return (
        <div className="Container">
            <div className="innerContainer">
                <div className="">
                    <p className="header">LOCK AND EARN</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="flex justify-between items-center w-full ">
                    <div onClick={handleMyLocks} className="primarybutton">
                        <p>LOCK $CTO</p>
                    </div>
                </div>

                <div className="flex items-start gap-x-4 w-full">
                    <div className="border border-bordercolor w-7/12 min-h-96 py-6 px-3">
                        <p className='font-bold'>AMOUNT TO LOCK</p>

                        <div className="flex w-full items-end gap-x-4">
                            <div className="border border-bordercolor flex w-11/12  h-14 items-center py-2 px-4 gap-x-3 rounded-md ">
                                <input value={amount} onChange={handleAmountChange} type="text" placeholder='0.0' className='font-bold placeholder:text-placeholderText bg-transparent outline-none w-full h-full' />
                                <button className="primarybutton capitalize text-placeholderText">Max</button>
                            </div>

                            <div className="w-3/12 flex flex-col items-end gap-y-3">
                                <p className='font-medium uppercase w-fit'>balance 0.0000</p>
                                <div className="primarybutton h-14 w-full flex justify-center items-center gap-x-6">
                                    <div className="h-8 w-8 rounded-full bg-placeholderText mr-1"></div>
                                    <p>CTO</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex flex-col gap-y-4 my-4">
                            <p className='font-semibold'>SELECT DURATION</p>
                            <p>Locking for <span className='font-bold'>{getDurationLabel(duration)}</span> for <span className='font-bold'>0.0 veCTO</span> voting power.</p>

                            <div className="w-full flex flex-col gap-y-6">
                                <Box className="w-9/12 pl-4">
                                    <Slider
                                        aria-label="Lock Duration"
                                        defaultValue={0}
                                        getAriaValueText={valuetext}
                                        step={null}
                                        valueLabelDisplay="off"
                                        marks={marks}
                                        value={duration}
                                        onChange={handleDurationChange}
                                        sx={{
                                            '& .MuiSlider-mark': {
                                                backgroundColor: '#ED5409',
                                            },
                                            '& .MuiSlider-markLabel': {
                                                color: '#FFFFFFCC',
                                                marginTop: '8px',
                                            },
                                            '& .MuiSlider-rail': {
                                                opacity: 0.5,
                                                backgroundColor: '#28282D',
                                                height: '10px',
                                            },
                                            '& .MuiSlider-track': {
                                                border: 'none',
                                                backgroundColor: '#ED5409',
                                                height: '10px',
                                            },
                                            '& .MuiSlider-thumb': {
                                                backgroundColor: '#ED5409',
                                            },
                                        }}
                                    />
                                </Box>
                                <button onClick={handleLockSubmit} className='w-full bg-secondaryText font-semibold py-2 rounded-md'>Lock tokens</button>
                            </div>

                            <div className="border border-secondaryText rounded-md">
                                <p className='text-xs py-3 px-3 flex items-center gap-x-2'><span className='text-xs'><CircleAlert size={16} /></span> Locking will give you an NFT, referred to as a veNFT. You can increase the lock amount or extend the lock time at any point after</p>
                            </div>
                        </div>
                    </div>

                    <div className="border border-bordercolor w-5/12 min-h-80 py-4 px-5">
                        <p className='font-bold pl-5 py-2'>NEW LOCK</p>
                        <div className="w-full flex justify-start">
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
                                    "Confirm the locking!",
                                    "Your lock will be available in the dashboard."
                                ].map((text, index) => (
                                    <TimelineItem key={index}>
                                        <TimelineSeparator>
                                            <TimelineConnector />
                                            <div className="h-10 w-10 rounded-full bg-[#FFFBFE1A] flex justify-center items-center">
                                                <p className='font-bold'>{index + 1}</p>
                                            </div>
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                            <Typography>{text}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </Timeline>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function MyLocks({ lockData }) {
    const tokens = [
        {
            name: 'CTO',
            address: '0x0000...0000',
            unlockDuration: '6M 13D',
            amount: '10K',
            votingPower: '10K',
            actions: [
                { label: 'Unlock', type: 'secondary', onClick: () => alert('Unlock clicked') },
                { label: 'Edit', type: 'primary', onClick: () => alert('Edit clicked') },
            ],
        },

    ];



    const actualduration = getDurationLabel(lockData?.duration);

    const router = useRouter();

    const handleClaim = () => {
        router.push('/goverance?step=claimrewards');
    };

    const handleMyLocks = () => {
        router.push('/goverance?step=mylocks');
    };

    return (

        <>

            <div className="Container">
                <div className="innerContainer">
                    <div className="">
                        <p className="header">LOCK AND EARN</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="flex justify-between items-center w-full ">
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

                    <div className=" w-full min-h-96 py-6 ">

                        <LockedTokensTable tokens={tokens} />
                    </div>
                </div>
            </div>


        </>
    )
}
function ClaimRewards({ lockData }) {
    const actualduration = getDurationLabel(lockData?.duration);

    const tokens = [
        {
            name: 'CTO',
            address: '0x0000...0000',
            unlockDuration: '6M 13D',
            amount: '10K',
            votingPower: '10K',
            actions: [
                { label: 'Claim', type: 'primary', onClick: () => alert('Claim clicked') },
            ],
        },

    ];

    const router = useRouter();
    const handleMyLocks = () => {
        router.push('/goverance?step=mylocks');
    };

    return (

        <>

            <div className="Container">
                <div className="innerContainer">
                    <div className="">
                        <p className="header">CLAIM REWARDS</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="flex justify-between items-center w-full ">
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

                    <div className=" w-full min-h-96 py-6 ">
                        <LockedTokensTable tokens={tokens} />
                    </div>
                </div>
            </div>


        </>
    )
}

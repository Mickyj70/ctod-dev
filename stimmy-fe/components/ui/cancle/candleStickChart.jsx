"use client";
import dynamic from 'next/dynamic';

const CandlestickChart = dynamic(() => import('./CandlestickChartComponent'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-[#0F0F10]" />
});

export default CandlestickChart;

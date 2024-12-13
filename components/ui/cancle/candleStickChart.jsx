"use client";

import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

const CandlestickChart = ({ data }) => {
    const chartContainerRef = useRef();

    useEffect(() => {
        // Ensure the chart is initialized only if the container is available
        if (!chartContainerRef.current) return;

        // Create the chart
        const chart = createChart(chartContainerRef.current, {
            width: chartContainerRef.current.clientWidth || 600, // Fallback width
            height: 540,
            layout: {
                backgroundColor: "#000000",
                background: { type: "solid", color: "#0F0F10" },
                textColor: "#757CA4",

            },
            grid: {
                vertLines: {
                    color: "#333333",
                },
                horzLines: {
                    color: "#333333",
                },
            },
        });

        // Add candlestick series
        const candleSeries = chart.addCandlestickSeries({
            upColor: "#00E3DD",
            downColor: "#FE6666",
            borderUpColor: "#00E3DD",
            borderDownColor: "#FE6666",
            wickUpColor: "#00E3DD",
            wickDownColor: "#FE6666",
        });

        // Set data for the chart
        candleSeries.setData(data);

        // Clean up chart on unmount
        return () => {
            chart.remove();
        };
    }, [data]);

    return (
        <div
            ref={chartContainerRef}
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
            }}

        />
    );
};

export default CandlestickChart;
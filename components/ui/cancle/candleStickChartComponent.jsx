import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

const CandlestickChartComponent = ({ data, className }) => {
    const chartContainerRef = useRef();

    useEffect(() => {
        if (!chartContainerRef.current) return;

        const chart = createChart(chartContainerRef.current, {
            width: chartContainerRef.current.clientWidth,
            height: chartContainerRef.current.clientHeight,
            layout: {
                backgroundColor: "#000000",
                background: { type: "solid", color: "#0F0F10" },
                textColor: "#757CA4",
            },
            grid: {
                vertLines: { color: "#333333" },
                horzLines: { color: "#333333" },
            },
        });

        const candleSeries = chart.addCandlestickSeries({
            upColor: "#00E3DD",
            downColor: "#FE6666",
            borderUpColor: "#00E3DD",
            borderDownColor: "#FE6666",
            wickUpColor: "#00E3DD",
            wickDownColor: "#FE6666",
        });

        candleSeries.setData(data);

        const handleResize = () => {
            chart.applyOptions({
                width: chartContainerRef.current.clientWidth,
                height: chartContainerRef.current.clientHeight
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            chart.remove();
            window.removeEventListener('resize', handleResize);
        };
    }, [data]);

    return (
        <div
            ref={chartContainerRef}
            className={`w-full ${className}`}
        />
    );
};

export default CandlestickChartComponent;

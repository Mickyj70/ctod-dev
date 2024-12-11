import React from "react";
import {
    ComposedChart,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

// Sample candlestick data
const data = [
    { time: "08:00", open: 6.2, close: 6.8, high: 7.6, low: 6.0 },
    { time: "09:00", open: 6.8, close: 7.1, high: 7.2, low: 6.5 },
    { time: "10:00", open: 7.1, close: 7.3, high: 7.8, low: 7.0 },
    { time: "11:00", open: 7.3, close: 7.2, high: 7.5, low: 7.0 },
];

// Custom tooltip
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const { time, open, close, high, low } = payload[0].payload;
        return (
            <div className="custom-tooltip bg-gray-800 text-white p-2 rounded-md">
                <p>Time: {time}</p>
                <p>Open: {open}</p>
                <p>Close: {close}</p>
                <p>High: {high}</p>
                <p>Low: {low}</p>
            </div>
        );
    }
    return null;
};

// Custom candlestick shape
const CustomCandle = ({ x, y, width, payload }) => {
    const { open, close, high, low } = payload;
    const isUp = open < close; // Green candle if closing price is higher
    const candleColor = isUp ? "#22c55e" : "#ef4444"; // Tailwind green and red
    const candleY = y(Math.max(open, close));
    const candleHeight = Math.abs(y(open) - y(close));
    const wickX = x + width / 2; // Center the wick in the rectangle

    return (
        <g>
            {/* Wick */}
            <line
                x1={wickX}
                x2={wickX}
                y1={y(high)}
                y2={y(low)}
                stroke="#555"
                strokeWidth={2}
            />
            {/* Body */}
            <rect
                x={x}
                y={candleY}
                width={width}
                height={candleHeight}
                fill={candleColor}
                stroke={candleColor}
            />
        </g>
    );
};

const CandlestickChart = () => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <ComposedChart
                data={data}
                margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis domain={[5.5, 8.0]} />
                <Tooltip content={<CustomTooltip />} />

                {/* Render custom candlesticks */}
                {data.map((entry, index) => (
                    <CustomCandle
                        key={index}
                        x={index * 80 + 30} // Adjust x position
                        y={(value) => 400 - value * 50} // Scale y for height
                        width={20} // Candle body width
                        payload={entry}
                    />
                ))}
            </ComposedChart>
        </ResponsiveContainer>
    );
};

export default CandlestickChart;
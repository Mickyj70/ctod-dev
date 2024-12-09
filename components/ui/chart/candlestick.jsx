import React from "react";
import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Bar,
} from "recharts";

// Sample candlestick data
const data = [
  { time: "08:00", open: 6.2, close: 6.8, high: 7.6, low: 6.0 },
  { time: "09:00", open: 6.8, close: 7.1, high: 7.2, low: 6.5 },
  { time: "10:00", open: 7.1, close: 7.3, high: 7.8, low: 7.0 },
  { time: "11:00", open: 7.3, close: 7.2, high: 7.5, low: 7.0 },
];

// Custom tooltip to show candlestick details
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { time, open, close, high, low } = payload[0].payload;
    return (
      <div className="custom-tooltip bg-gray-700 text-white p-2 rounded-md">
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

// Custom SVG renderer for the candlesticks
const CustomCandle = (props) => {
  const { x, y, width, payload } = props;

  const candleColor = payload.open > payload.close ? "#FF0000" : "#00C49F"; // Red for down, green for up
  const candleBodyY = Math.min(y(payload.open), y(payload.close));
  const candleBodyHeight = Math.abs(y(payload.open) - y(payload.close));

  return (
    <g>
      {/* Wick (line from high to low) */}
      <line
        x1={x + width / 2}
        x2={x + width / 2}
        y1={y(payload.high)}
        y2={y(payload.low)}
        stroke="#000000"
        strokeWidth={1}
      />
      {/* Body (rectangle for open-close range) */}
      <rect
        x={x}
        y={candleBodyY}
        width={width}
        height={candleBodyHeight}
        fill={candleColor}
      />
    </g>
  );
};

const CandlestickChart = () => {
  const candleWidth = 10; // Fixed width for each candlestick body

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart
        data={data}
        margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />

        {/* Render candlesticks */}
        {data.map((entry, index) => (
          <CustomCandle
            key={index}
            x={index * 50 + 30} // Adjust x position for spacing
            y={(value) => 400 - value * 50} // Scale y for chart height
            width={candleWidth}
            payload={entry}
          />
        ))}
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default CandlestickChart;
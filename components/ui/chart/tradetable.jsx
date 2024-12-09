export const LatestTradesTable = () => {
  const trades = [
    { time: '7m ago', type: 'Buy', son: 0.08979, token: 9.31, maker: '0x0000...0000' },
    { time: '7m ago', type: 'Sell', son: 0.08979, token: 9.31, maker: '0x0000...0000' },
    { time: '7m ago', type: 'Buy', son: 0.08979, token: 9.31, maker: '0x0000...0000' },
  ];

  return (
    <div className="overflow-x-auto bg-[#1a1a1a] text-white rounded-lg shadow-md mt-6">
      <table className="table-auto w-full text-left text-sm">
        <thead>
          <tr className="border-b border-gray-600">
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">SON</th>
            <th className="px-4 py-2">Token</th>
            <th className="px-4 py-2">Maker</th>
            <th className="px-4 py-2">TXN</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade, index) => (
            <tr key={index} className="border-b border-gray-800">
              <td className="px-4 py-2">{trade.time}</td>
              <td className={`px-4 py-2 ${trade.type === 'Buy' ? 'text-green-500' : 'text-red-500'}`}>{trade.type}</td>
              <td className="px-4 py-2">{trade.son}</td>
              <td className="px-4 py-2">{trade.token}</td>
              <td className="px-4 py-2">{trade.maker}</td>
              <td className="px-4 py-2">
                <a href="#" className="text-blue-400 hover:underline">View</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


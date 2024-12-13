import { Clock, Copy } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import React from "react";

const TrendingTokenTable = ({ tokens, isQuickBuy }) => {
  return (
    <div className="p-6 overflow-x-auto text-white rounded-lg shadow-md ">
      <table className="w-full table-auto text-left min-w-[800px]">
        <thead>
          <tr className="uppercase text-placeholderText">
            <th className="p-3 font-bold">Token Info</th>
            <th className="p-3 font-bold">Created</th>
            <th className="p-3 font-bold">MKT CAP</th>
            <th className="p-3 font-bold">liquidity</th>
            <th className="p-3 font-bold">TXNS</th>
            <th className="p-3 font-bold">volume</th>
            <th className="p-3 font-bold">1m</th>
            <th className="p-3 font-bold">5m</th>
            <th className="p-3 font-bold">30m</th>
            <th className="p-3 font-bold">1h</th>
            <th className="p-3 font-bold">Additional info</th>
            {isQuickBuy && <th className="p-3 font-bold">quick buy</th>}
          </tr>
        </thead>
        <tbody className="font-bold">
          {tokens.map((token, index) => (
            <tr
              key={index}
              className="border-b border-bordercolor hover:bg-bordercolor/20 transition-colors bg-[#1D1D1E4D] w-full"
            >
              <td className="p-3">
                <div className="flex flex-col">
                  <span className="font-medium">{token.name}</span>
                  <span className="text-placeholderText text-sm truncate max-w-[200px] flex items-center gap-x-2">
                    {token.address} <Copy size={12} />
                  </span>
                  <div className="flex items-center text-xs gap-x-2">
                    <span>
                      <CiGlobe size={12} />
                    </span>
                    <span>
                      <FaXTwitter size={12} />
                    </span>
                    <span>
                      <FaTelegramPlane size={12} />
                    </span>
                  </div>
                </div>
              </td>
              <td className="p-3">
                <div className="flex items-center space-x-2">
                  <span className="flex items-center gap-x-2">
                    <Clock size={14} /> {token?.created}
                  </span>
                </div>
              </td>
              <td className="p-3 font-mono text-positive">{token.mtk_cap}</td>
              <td className="p-3 font-medium">
                {token.liquidity}
                <span className="text-placeholderText">
                  / {token.liquidity}
                </span>
              </td>
              <td className="p-3 font-mono">
                <div className="flex flex-col items-start">
                  <p>{token.txns}</p>
                  <span className="text-positive">
                    {token.txns} <span className="text-placeholderText">/</span>{" "}
                    <span className="text-negative">{token.txns}</span>{" "}
                  </span>
                </div>
              </td>

              <td className="p-3 font-bold text-negative">{token.volume}</td>
              <td className="p-3 font-bold text-positive">{token.m1}</td>
              <td className="p-3 font-bold text-positive">{token.m5}</td>
              <td className="p-3 font-bold text-positive">{token.m30}</td>
              <td className="p-3 font-bold text-positive">{token.m1h}</td>
              <td className="p-3 font-bold text-positive">
                {token.additional_info}
              </td>

              {isQuickBuy && (
                <td className="p-3">
                  <div className="flex flex-wrap gap-2">
                    {token?.quickbuy?.map((action, idx) => (
                      <button
                        key={idx}
                        className={`${
                          action.type === "primary"
                            ? "bg-secondaryText hover:bg-secondaryText/80"
                            : "bg-placeholderText hover:bg-placeholderText/60"
                        } px-10 py-3 rounded-md text-base font-medium transition-colors`}
                        onClick={action.onClick}
                      >
                        icon {action.label}
                      </button>
                    ))}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrendingTokenTable;

"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { TokenCell } from "./TokenCell";
import { TableHeader } from "./TableHeader";
import { QuickBuyButton } from "./QuickBuyButton";
import { Clock } from "lucide-react";


export function Table({
  columns,
  data,
  onFavoriteToggle,
  showQuickBuy = true,
  onQuickBuy,
  className = "",
}) {
  const [favorites, setFavorites] = useState(new Set());

  const handleFavoriteToggle = (index) => {
    const newFavorites = new Set(favorites);
    newFavorites.has(index) ? newFavorites.delete(index) : newFavorites.add(index);
    setFavorites(newFavorites);
    onFavoriteToggle?.(index, !favorites.has(index));
  };

  return (
    <div className={`w-full text-white p-4 ${className}`}>
      <table className="w-full border-separate border-spacing-y-2">
        <TableHeader columns={columns} showQuickBuy={showQuickBuy} />
        <tbody className="bg-[#1D1D1E4D]">
          {data.map((item, index) => (
            <tr key={index} className="bg-zinc-900/50 rounded-lg">
              <td className="px-4 py-4">
                <TokenCell
                  token={item}
                  isFavorite={favorites.has(index)}
                  onFavoriteToggle={() => handleFavoriteToggle(index)}
                />
              </td>
              {columns.slice(1).map((column, colIndex) => (
                <td key={colIndex} className="px-4 py-4">
                  {column.key === 'liquidity' ? (
                    <div className="flex items-center gap-x-2">
                      <p>icon</p>
                      <span className="text-white font-bold">{item[column.key]}</span>
                      <span className="text-primaryText font-bold">/  {item.againstLiquuidity}</span>
                    </div>
                  ) : column.key === 'txns' ? (
                    <div className="">
                      <p className="font-bold">{item[column.key]}</p>
                      <div className="flex items-center gap-x-2">
                        <span className="text-positive font-bold">{item[column.key]}</span> /
                        <span className=" text-negative font-bold">{item.againstTxns}</span>
                      </div>
                    </div>
                  ) : column.key === "created" ? (
                    <div className="flex items-center gap-x-2">
                      <Clock size={18} />
                      <p className="font-bold">{item[column.key]}</p>
                    </div>
                  ) : column.render ? (
                    column.render(item)
                  ) : (
                    <p className="font-bold">{item[column.key]}</p>
                  )}
                </td>
              ))}
              {showQuickBuy && (
                <td className="px-4 py-4">
                  <QuickBuyButton onClick={() => onQuickBuy?.(item)} />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { TokenCell } from "./TokenCell";
import { TableHeader } from "./TableHeader";
import { QuickBuyButton } from "./QuickBuyButton";
import { Clock } from "lucide-react";
import { SquareArrowOutUpRight } from "lucide-react";
import { EyeClosed } from "lucide-react";
import { Eye } from "lucide-react";
// import { SiAeromexico } from "react-icons/si";

export function Table({
  columns,
  data,
  onFavoriteToggle,
  showQuickBuy = true,
  onQuickBuy,
  className = "",
}) {
  const [favorites, setFavorites] = useState(new Set());
  const [eye, setEye] = useState(false);
  const [sold, setSold] = useState(false);

  const handleFavoriteToggle = (index) => {
    const newFavorites = new Set(favorites);
    newFavorites.has(index)
      ? newFavorites.delete(index)
      : newFavorites.add(index);
    setFavorites(newFavorites);
    onFavoriteToggle?.(index, !favorites.has(index));
  };
  const handleEyeToggle = (index) => {
    setEye(!eye);
  };

  const handleSoldToggle = (index) => {
    setSold(true);
  };

  return (
    <div className={`w-full text-white p-4 ${className}`}>
      <table className="w-full border-separate border-spacing-y-1 md:border-spacing-y-2 ">
        <TableHeader columns={columns} showQuickBuy={showQuickBuy} />
        <tbody className="bg-[#1D1D1E4D]">
          {data.map((item, index) => (
            <tr key={index} className="rounded-lg bg-zinc-900/50">
              <td className="px-4 py-4">
                <TokenCell
                  token={item}
                  isFavorite={favorites.has(index)}
                  onFavoriteToggle={() => handleFavoriteToggle(index)}
                />
              </td>
              {columns.slice(1).map((column, colIndex) => (
                <td key={colIndex} className="px-4 py-4">
                  {column.key === "liquidity" ? (
                    <div className="flex items-center gap-x-1">
                      <span>
                        <img src="/Icon.svg" alt="i" />
                      </span>
                      <span className="text-xs font-bold text-white">
                        {item[column.key]}
                      </span>
                      <span className="text-xs font-bold text-primaryText">
                        / {item.againstLiquuidity}
                      </span>
                    </div>
                  ) : column.key === "txns" ? (
                    <div className="">
                      <span className="text-xs font-bold">
                        {item[column.key]}
                      </span>
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-bold text-positive">
                          {item[column.key]}
                        </span>{" "}
                        /
                        <span className="text-xs font-bold text-negative">
                          {item.againstTxns}
                        </span>
                      </div>
                    </div>
                  ) : column.key === "created" ? (
                    <div className="flex items-center gap-x-2">
                      <Clock size={14} />
                      <span className="text-xs font-bold">
                        {item[column.key]}
                      </span>
                    </div>
                  ) : column.key === "action" ? (
                    <div className="flex items-center gap-x-6">
                      <button className="flex items-center font-bold uppercase gap-x-1 text-placeholderText">
                        {" "}
                        <span>
                          <SquareArrowOutUpRight size={18} />
                        </span>{" "}
                        share
                      </button>
                      <button
                        onClick={handleSoldToggle}
                        className={`px-8 py-2 rounded-md ${sold ? "text-secondaryText" : "bg-secondaryText"
                          }  text-lg capitalize font-medium hover:scale-90 hover:duration-150 duration-150`}
                      >
                        {sold ? "sold" : "sell"}
                      </button>
                      <button
                        onClick={handleEyeToggle}
                        className="text-placeholderText"
                      >
                        {eye ? <EyeClosed /> : <Eye />}
                      </button>
                    </div>
                  ) : column.key === "actions" ? (
                    <div className="flex items-center gap-x-3">
                      <button
                        className={`px-8 py-2 rounded-md bg-placeholderText  text-lg capitalize font-medium hover:scale-90 hover:duration-150 duration-150`}
                      >
                        Unlock
                      </button>
                      <button
                        className={`px-8 py-2 rounded-md bg-secondaryText text-lg capitalize font-medium hover:scale-90 hover:duration-150 duration-150`}
                      >
                        Edit
                      </button>
                    </div>
                  ) : column.render ? (
                    column.render(item)
                  ) : (
                    <div className="font-bold">{item[column.key]}</div>
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

import { LinearProgress } from "@mui/material";
import { Copy } from "lucide-react";
import { Star } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";

export function TokenCell({ token, isFavorite, onFavoriteToggle }) {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={onFavoriteToggle}
        className="flex items-center justify-center w-6 h-6"
      >
        <Star
          className={`h-4 w-4 ${
            isFavorite ? "fill-yellow-500 text-yellow-500" : "text-gray-500"
          }`}
        />
      </button>
      <div className="flex items-center gap-x-3">
        <div className="rounded-full h-14 w-14 bg-neutral-100">
          <img
            src={token.image}
            alt="img"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="font-bold uppercase ">{token.name}</div>
          <LinearProgress
            className="text-secondaryText"
            sx={{ color: "orange" }}
            color="warning"
            variant="determinate"
            value={50}
          />
          <div className="flex items-center text-xs text-gray-500 gap-x-2">
            {token.address}{" "}
            <span>
              <Copy size={14} />
            </span>
          </div>

          <div className="flex items-center text-xs gap-x-2">
            <span>
              <CiGlobe />
            </span>
            <span>
              <FaXTwitter />
            </span>
            <span>
              <FaTelegramPlane />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

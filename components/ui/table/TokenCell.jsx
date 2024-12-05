import { LinearProgress } from "@mui/material";
import { Star } from "lucide-react";

export function TokenCell({ token, isFavorite, onFavoriteToggle }) {
    return (
        <div className="flex items-center gap-4">
            <button
                onClick={onFavoriteToggle}
                className="flex items-center justify-center w-6 h-6"
            >
                <Star
                    className={`h-4 w-4 ${isFavorite ? "fill-yellow-500 text-yellow-500" : "text-gray-500"
                        }`}
                />
            </button>
            <div className="flex items-center gap-x-3">
                <div className="h-14 w-14 bg-neutral-100 rounded-full">
                    <img
                        src={token.image}

                        className="w-full h-full rounded-full object-cover"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="font-bold uppercase ">{token.name}</div>
                    <LinearProgress className="text-secondaryText" sx={{ color: 'orange' }} color="warning" variant="determinate" value={50} />
                    <div className="text-xs flex items-center gap-x-1 text-gray-500">
                        {token.address} <span>copu ui</span>
                    </div>

                    <div className="flex items-center gap-x-2 text-xs">
                        <p>web</p>
                        <p>x</p>
                        <p>telegram</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

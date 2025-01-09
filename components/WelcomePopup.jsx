"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import Link from "next/link";

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-2xl p-6 rounded-lg bg-background">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-primaryText hover:opacity-80"
        >
          <X size={24} />
        </button>

        <h2 className="mb-4 text-2xl font-bold">How It Works</h2>
        <p className="mb-6 text-sm">
          Stimmy prevents rugs by making sure that all created tokens are safe.
          Each coin on pump is a fair-launch with no presale and no team
          allocation.
        </p>

        <div className="mb-6 space-y-3">
          {[
            "When enough people buy on the bonding curve it reaches a market cap of $100k",
            "Pick a coin that you like",
            "Buy the coin on the bonding curve",
            "Sell at any time to lock in your profits or losses",
          ].map((text, index) => (
            <div key={index} className="flex gap-x-3">
              <span className="flex items-center justify-center w-8 h-8 text-white rounded-full bg-secondaryText">
                {index + 1}
              </span>
              <p className="flex-1 text-sm">{text}</p>
            </div>
          ))}
        </div>

        <Link href="/referral">
          <button
            onClick={() => setIsOpen(false)}
            className="w-full py-3 text-white transition-opacity rounded-lg bg-secondaryText hover:opacity-90"
          >
            Let me cook
          </button>
        </Link>
      </div>
    </div>
  ) : null;
}

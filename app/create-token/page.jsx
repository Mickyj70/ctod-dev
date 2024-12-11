"use client";
import { CreateTokenModal } from "../../components/ui/modals/createtoken";
import { useState } from "react";

export default function CreateTokenPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    tokenName: "",
    tokenTicker: "",
    tokenDesc: "",
    tokenImage: "",
    tokenWebsite: "",
    tokenTelegram: "",
    tokenTwitter: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="Container">
      <div className="innerContainer ">
        {/* header */}
        <div className="mb-4">
          <p className="header">CREATE TOKEN</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex gap-4">
          {/* Left side - Form */}
          <div className="w-8/12 border border-bordercolor">
            <div className="px-5 py-7">
              <div className="mb-3">
                <p className="text-base font-bold">TOKEN DETAILS</p>
              </div>
              {/* forms */}
              <div className="flex flex-col gap-3 mb-4">
                <p>Token name</p>
                <input
                  type="text"
                  name="tokenName"
                  value={formData.tokenName}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
                  placeholder="Insert coin name here"
                />
              </div>

              <div className="flex flex-col gap-3 mb-4">
                <p>Ticker</p>
                <input
                  type="text"
                  name="tokenTicker"
                  value={formData.tokenTicker}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
                  placeholder="Insert ticker here"
                />
              </div>

              <div className="flex flex-col gap-3 mb-4">
                <p>Description</p>
                <input
                  type="text"
                  name="tokenDesc"
                  value={formData.tokenDesc}
                  onChange={handleInputChange}
                  className="flex justify-start w-full h-24 p-2 border rounded resize-none bg-background "
                  placeholder="Insert description here"
                />
              </div>
            </div>
          </div>

          {/* Right side - Preview */}
          <div></div>
        </div>
      </div>
    </div>
  );
}

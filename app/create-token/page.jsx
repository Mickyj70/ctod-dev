"use client";
import { CreateTokenModal } from "../../components/ui/modals/createtoken";
import { useState } from "react";
import { CloudUpload, Upload } from "lucide-react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
          <form
            onSubmit={handleSubmit}
            className="w-8/12 mb-[90px] border border-bordercolor"
          >
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
                  className="flex justify-start w-full h-40 p-2 border border-bordercolor rounded resize-none bg-background "
                  placeholder="Insert description here"
                />
              </div>

              <div className="flex flex-col gap-3 mb-8">
                <p>image or video</p>
                <div className="p-6 text-center border border-bordercolor border-dashed rounded-lg">
                  <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    accept=".jpg,.jpeg,.png"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file && file.size <= 25 * 1024 * 1024) {
                        // Handle file upload
                        setFormData((prev) => ({
                          ...prev,
                          image: file,
                        }));
                      } else {
                        alert("File size should be less than 25MB");
                      }
                    }}
                  />
                  <div className="flex flex-col items-center gap-2">
                    <CloudUpload className="w-12 h-12 text-secondaryText" />
                    <p className="text-sm text-gray-500">
                      Drop files here or browse
                    </p>
                    <p className="text-xs text-gray-400">
                      Format: JPEG, PNG (max. 25MB)
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        document.getElementById("fileInput").click()
                      }
                      className="px-4 py-2 mt-2 text-white transition-colors rounded-md bg-secondaryText hover:bg-secondaryText"
                    >
                      Select File
                    </button>
                  </div>
                </div>
              </div>

              <div className="mb-4 mt-[40px]">
                <p>LINKS</p>
              </div>
              <div className="flex flex-col gap-3 mb-4">
                <p>Twitter URL</p>
                <input
                  type="text"
                  name="tokenTwitter"
                  value={formData.tokenTwitter}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
                  placeholder="Insert coin name here"
                />
              </div>

              <div className="flex flex-col gap-3 mb-4">
                <p>Website URL</p>
                <input
                  type="text"
                  name="tokenWebsite"
                  value={formData.tokenWebsite}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
                  placeholder="Insert coin name here"
                />
              </div>

              <div className="flex flex-col gap-3 mb-4">
                <p>Telegram URL</p>
                <input
                  type="text"
                  name="tokenTelegram"
                  value={formData.tokenTelegram}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
                  placeholder="Insert coin name here"
                />
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full p-3 text-white transition-colors rounded-md bg-secondaryText hover:bg-secondaryText"
              >
                create token
              </button>
            </div>
          </form>

          {/* Right side - Preview */}
          <div className="w-1/3 h-full">
            <div className="border border-bordercolor">
              <div className="px-5 py-7">
                <div className="mb-3">
                  <p className="text-base font-bold">PREVIEW</p>
                </div>
                <div className="w-full border border-bordercolor">
                  <div className="flex p-2">
                    <div className="flex items-center justify-center w-1/4">
                      {formData.image ? (
                        <img
                          src={URL.createObjectURL(formData.image)}
                          alt="Token preview"
                          className="object-cover w-full h-full mt-2 rounded-lg"
                        />
                      ) : (
                        <img
                          src="/solid_white.svg"
                          alt="img"
                          className="object-cover w-16 h-16 border border-orange-400 rounded-full"
                        />
                      )}
                    </div>
                    <div className="flex flex-col w-3/4 gap-col-2">
                      <p className="text-xl font-bold">
                        {formData.tokenName || "SNOOGE"}
                      </p>
                      <p className="text-xs text-#1D1D1E4D">
                        <span>DEPLOYED BY : </span>
                        {formData.tokenTicker || "0x0000...0000"}
                      </p>
                      <p className="text-xs text-#1D1D1E4D">
                        {formData.tokenDesc ||
                          "Join  us as we embark on a journey into a new era. The future is now, poised  for discovery. Unveil the mysteries with us and become part of something  extraordinary. Together, let's push the boundaries of what is  possible.??"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Warning Message */}
              <div className="p-4 mx-5 border rounded-md my-7 border-secondaryText">
                <p className="text-sm text-white text-negative">
                  Warning: Coin data cannot be changed after creation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { CloudUpload, Upload } from "lucide-react";

export default function Settings() {
  const [activeForm, setActiveForm] = useState("general");
  const [mavProtection, setMavProtection] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const renderForm = () => {
    switch (activeForm) {
      case "general":
        return (
          <div className="mb-16 border border-bordercolor">
            <div className="p-4 ">
              <div>
                <h2 className="mb-4 text-xl font-bold">PROFILE SETTINGS</h2>
              </div>
              <div className="flex flex-col gap-3 mb-4">
                <p>Username</p>
                <input
                  type="text"
                  name="username"
                  className="w-full p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
                  placeholder="Enter your username"
                />
              </div>

              <div className="flex flex-col gap-3 mb-8">
                <p>Profile Picture</p>
                <div className="p-6 text-center border border-dashed rounded-lg border-bordercolor">
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
                  <div className="flex flex-col items-center gap-2 py-8">
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
              <button
                type="submit"
                className="w-full p-3 text-white transition-colors rounded-md bg-secondaryText hover:bg-secondaryText"
              >
                update profile
              </button>
            </div>
          </div>
        );
      case "profile":
        return (
          <div className="flex flex-col-reverse gap-4 px-1 md:flex-row md:p-4">
            {/* Left side - Form */}
            <form
              className="w-full md:w-8/12 mb-[90px] border border-bordercolor"
              onSubmit={handleSubmit}
            >
              <div className="px-5 py-7">
                <div className="mb-3">
                  <p className="text-base font-bold">QUICK BUY SETTINGS</p>
                </div>
                {/* forms */}
                <div className="flex flex-col gap-2 mb-4">
                  <p>Slippage</p>
                  <p className="text-xs text-bordercolor">
                    How much less tokens you&apos;re willing to receive from a
                    trade due to price volatility.
                  </p>
                  <input
                    type="text"
                    name="tokenName"
                    className="w-full p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
                    placeholder="20%"
                  />
                </div>

                <div className="flex flex-col gap-2 mb-4">
                  <p>Smart-Mev protection</p>
                  <p className="text-xs text-bordercolor">
                    Choose between Fast and Secure to fully customize how you
                    send transactions
                  </p>
                  <div className="flex gap-2">
                    <p>Fast</p>
                    <button
                      onClick={() => setMavProtection(!mavProtection)}
                      className={`w-12 h-6 rounded-full p-1 transition-colors ${
                        mavProtection ? "bg-secondaryText" : "bg-gray-600"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full bg-white transition-transform ${
                          mavProtection ? "translate-x-6" : "translate-x-0"
                        }`}
                      />
                    </button>
                    <p>Secure</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mb-4">
                  <p>Priority Fee</p>
                  <p className="text-xs text-bordercolor">
                    The amount you send to validators to pick up your
                    transaction. We recommend using an amount that&apos;s equal
                    to or higher than the median
                  </p>
                  <input
                    type="text"
                    name="tokenTicker"
                    className="w-full p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
                    placeholder="10"
                  />
                </div>

                <div className="flex flex-col gap-3 mb-4">
                  <p>Bribery Amount</p>
                  <p className="text-xs text-bordercolor">
                    An additional tip to incentivize validators to pick up your
                    transactions faster
                  </p>
                  <input
                    type="text"
                    name="tokenTicker"
                    className="w-full p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
                    placeholder="10"
                  />
                </div>

                <div className="flex flex-col gap-3 mb-4">
                  <p>Customize</p>
                  <p className="text-xs text-bordercolor">
                    Customize your Quick Buy buttons with your own preset
                    amounts.
                  </p>
                  <div className="flex gap-4 mb-4">
                    <input
                      type="text"
                      className="w-full p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
                      placeholder="2"
                    />
                    <input
                      type="text"
                      className="w-full p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
                      placeholder="5"
                    />
                    <input
                      type="text"
                      className="w-full p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
                      placeholder="10"
                    />
                    <input
                      type="text"
                      className="w-full p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
                      placeholder="0.25"
                    />
                    <input
                      type="text"
                      className="w-full p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
                      placeholder="0.5"
                    />
                    <input
                      type="text"
                      className="w-full p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
                      placeholder="1"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full p-3 text-white transition-colors rounded-md bg-secondaryText hover:bg-secondaryText"
                >
                  Save
                </button>
              </div>
            </form>

            {/* Right side - Preview */}
            <div className="w-full h-full md:w-1/3">
              <div className="border border-bordercolor">
                <div className="flex flex-col gap-2 px-5 py-7">
                  <h2 className="text-xl font-bold">WHAT IS SLIPPAGE?</h2>
                  <p className="text-[14px]">
                    Suppose you wanted to spend 1 son to buy 10 $CTO tokens, and
                    you have your slippage set to 10%. You place your order, and
                    when it&apos;s confirmed, you see that instead of 10 $CTO
                    tokens,{" "}
                  </p>
                  <p className="text-[14px]">
                    you only received 9 $CTO tokens. In this case, you just
                    experienced slippage of 10% because of price fluctuations
                    and it decreased your total buying power. In the scenario
                    above, if the price had fluctuated even more, and Stimmy
                    estimates that you would only have received 8 $CTO tokens
                    for your 1 son, the transaction would have failed, as this
                    was above your slippage setting of 10%.
                  </p>
                  <p className="text-[14px]">
                    Slippage essentially represents how much fewer tokens you
                    would be willing to accept for your transaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case "security":
        return (
          <div className="p-4">
            <h2 className="mb-4 text-xl font-bold">Security Settings</h2>
            {/* Add your security settings form here */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="Container">
      <div className="innerContainer ">
        {/* header */}
        <div className="mb-2">
          <p className="header">SETTINGS</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="">
          <div className="flex gap-4 pb-4 ">
            <button
              onClick={() => setActiveForm("general")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeForm === "general"
                  ? "bg-secondaryText text-white"
                  : "bg-transparent hover:bg-secondaryText border border-bordercolor"
              }`}
            >
              PROFILE
            </button>
            <button
              onClick={() => setActiveForm("profile")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeForm === "profile"
                  ? "bg-orange-500 text-white "
                  : "bg-transparent hover:bg-orange-500 border border-bordercolor"
              }`}
            >
              QUICK BUY
            </button>
            <button
              onClick={() => setActiveForm("security")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeForm === "security"
                  ? "bg-orange-500 text-white"
                  : "bg-transparent hover:bg-orange-500 border border-bordercolor"
              }`}
            >
              QUICK SELL
            </button>
          </div>

          {renderForm()}
        </div>
      </div>
    </div>
  );
}

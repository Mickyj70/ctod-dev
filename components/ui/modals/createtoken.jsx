// "use client";
// import { useState } from "react";

// export const CreateTokenModal = ({ isOpen, onClose }) => {
//   const [amount, setAmount] = useState("");
//   const [data, setData] = useState("");

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
//       <div className="w-[563px] bg-sidebar border border-bordercolor rounded-lg p-6">
//         {/* Add close button */}
//         <div className="flex justify-end mb-4">
//           <button
//             onClick={onClose}
//             className="text-primaryText hover:text-white"
//           >
//             ✕
//           </button>
//         </div>

//         {/* Input Section */}
//         <div className="space-y-4">
//           <p className="font-bold text-white">
//             Choose how many $ticker you want to buy (optional)
//           </p>
//           <div className="flex">
//             <input
//               type="number"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               className="w-4/5 p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
//               placeholder="0.0"
//             />
//             <input
//               type="text"
//               value={data}
//               onChange={(e) => setData(e.target.value)}
//               className="w-1/4 p-3 border rounded-md outline-none bg-background border-bordercolor focus:border-secondaryText"
//               placeholder="SON"
//             />
//           </div>
//           <button className="w-full py-3 font-bold text-white rounded-md bg-secondaryText hover:bg-secondaryText/90">
//             Create Token
//           </button>
//           {/* Warning Message */}
//           <div className="p-4 mb-6 border rounded-md border-secondaryText">
//             <p className="text-sm text-white text-negative">
//               Warning: Please ensure you understand the risks before creating a
//               token.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import { Clock, Copy } from 'lucide-react';
import React from 'react';

const LockedTokensTable = ({ tokens }) => {
    return (
        <div className=" text-white p-6 rounded-lg shadow-md overflow-x-auto">
            <table className="w-full table-auto text-left min-w-[800px]">
                <thead>
                    <tr className=" uppercase text-placeholderText">
                        <th className="p-3 font-semibold">Locked Token</th>
                        <th className="p-3 font-semibold">Until Unlock</th>
                        <th className="p-3 font-semibold">Amount</th>
                        <th className="p-3 font-semibold">Voting Power</th>
                        <th className="p-3 font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody >
                    {tokens.map((token, index) => (
                        <tr key={index} className="border-b border-bordercolor hover:bg-bordercolor/20 transition-colors bg-[#1D1D1E4D]">
                            <td className="p-3">
                                <div className="flex flex-col">
                                    <span className="font-medium">{token.name}</span>
                                    <span className="text-placeholderText text-sm truncate max-w-[200px] flex items-center gap-x-2">{token.address} <Copy size={12} /> </span>
                                </div>
                            </td>
                            <td className="p-3">
                                <div className="flex items-center space-x-2">
                                    <span className="flex items-center gap-x-2"><Clock size={14} /> {token.unlockDuration}</span>
                                </div>
                            </td>
                            <td className="p-3 font-mono">{token.amount}</td>
                            <td className="p-3  font-medium">{token.votingPower}</td>
                            <td className="p-3">
                                <div className="flex flex-wrap gap-2">
                                    {token.actions.map((action, idx) => (
                                        <button
                                            key={idx}
                                            className={`${action.type === 'primary'
                                                ? 'bg-secondaryText hover:bg-secondaryText/80'
                                                : 'bg-placeholderText hover:bg-placeholderText/60'
                                                } px-10 py-3 rounded-md text-base font-medium transition-colors`}
                                            onClick={action.onClick}
                                        >
                                            {action.label}
                                        </button>
                                    ))}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default LockedTokensTable;
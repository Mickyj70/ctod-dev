import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

export const Chatpopup = ({ handleChatClick }) => {
    const [messages, setMessages] = useState([
        { id: 1, user: 'amg', time: '09:30', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
    ]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;

        const newMessageObj = {
            id: messages.length + 1,
            user: 'You', // Replace with the actual user
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            text: newMessage
        };

        setMessages([...messages, newMessageObj]);
        setNewMessage('');
    };
    return (
        <div className="fixed bottom-10 right-6 w-96 h-[500px] bg-background border border-bordercolor rounded-t-lg shadow-lg">
            <div className="flex items-center justify-between p-4 border-b border-bordercolor">
                <h2 className="font-bold text-primaryText">GLOBAL CHAT</h2>
                <AiOutlineClose
                    size={20}
                    className="transition-colors cursor-pointer text-primaryText hover:text-white"
                    onClick={handleChatClick}
                />
            </div>

            <div className="h-[calc(100%-116px)] overflow-y-auto ">
                {/* Chat messages will go here */}

                {messages.map((message) => (
                    <div key={message.id} className="w-full flex flex-col gap-y-2 border-b border-bordercolor py-2 px-3">
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-x-2">
                                {message.user && (
                                    <img src={message.user ? "/path/to/user/image" : null} alt="" className='w-8 h-8 rounded-full bg-white' />
                                )}
                                <p className='text-secondaryText font-semibold'>{message.user}</p>
                            </div>
                            <p className='text-placeholderText font-medium'>{message.time}</p>
                        </div>
                        <div className="w-full">
                            <p>{message.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-bordercolor">
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 w-4/6 p-2 bg-transparent border-l rounded-l border-y border-bordercolor focus:outline-none focus:border-primaryText text-white placeholder:text-placeholderText"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button onClick={handleSendMessage} className="w-4/12 px-4 py-2 font-bold text-white uppercase border rounded rounded-r border-bordercolor bg-secondaryText">
                    Send
                </button>
            </div>
        </div>
    )
}

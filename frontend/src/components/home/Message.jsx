import { useState } from "react";
import UserMessage from "./UserMessage";
import OtherMessage from "./OtherMessage";

function Message() {

    const [message, setMessage] = useState('');

    return (
        <div className="relative h-full">
            {/* Message input */}
            <div className="flex gap-2 absolute bottom-0 w-full z-10 bg-white">
                <input
                    type='text'
                    placeholder='Message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className='p-1 px-2 border-2 rounded border-primary-blue focus:outline-gray-300 flex-grow' />
                <button className="bg-primary-blue text-white uppercase font-bold p-2 px-4 rounded hover:cursor-pointer hover:bg-secondary-blue transition-all duration-300">Send</button>
            </div>
            {/* Messages */}
            <div className="flex flex-col overflow-y-scroll w-full h-full">
                <UserMessage />
                <OtherMessage />
                <UserMessage />
                <OtherMessage />
                <UserMessage />
                <OtherMessage />
                <UserMessage />
                <OtherMessage />
                <UserMessage />
                <OtherMessage />
            </div>
        </div>
    )
}

export default Message
import React, { useContext } from 'react';
import ChatContext from '../context';

function ChatList() {
    const { chats } = useContext(ChatContext);

    return (
        <div className='overflow-y-auto p-4'>
            {chats.map((chat, index) => (
                <div 
                    key={index} 
                    className={`flex ${chat.from === 'user' ? 'justify-start' : 'justify-end'} mb-4`}
                >
                    <div className={`bg-cyan-500 w-fit rounded-xl p-4 ${chat.from === 'user' ? 'text-left' : 'text-right dark:bg-teal-600'} dark:bg-cyan-700`}>
                        <p className='text-black font-bold dark:text-white'>
                            {chat.value}
                        </p>
                        <p className='text-xs text-white dark:text-gray-300'>
                            {chat.from}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ChatList;

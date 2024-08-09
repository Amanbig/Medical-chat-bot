import React, { useContext, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import ChatContext from '../context';

function UserBar() {
    const [value, setValue] = useState('');
    const { chats, setChats } = useContext(ChatContext);

    return (
        <div className="bg-white p-4 dark:bg-gray-800">
            <div className="flex">
                <input 
                    type="text" 
                    className="border-2 border-black p-4 rounded flex-grow dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"  
                    placeholder="Search" 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                />
                <button 
                    className="ml-4 p-4 text-xl bg-green-500 rounded-xl text-white hover:bg-green-600 active:bg-green-900 dark:bg-green-700 dark:hover:bg-green-600 dark:active:bg-green-800" 
                    onClick={() => {
                        setChats([...chats, { value: value, from: 'user' }]);
                        setValue(''); 
                    }}
                >
                    <FiArrowRight className="text-white" />
                </button>
            </div>
        </div>
    );
}

export default UserBar;

import React, { useContext, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import axios from 'axios';
import ChatContext from '../context';

function UserBar() {
    const [value, setValue] = useState('');
    const { chats, setChats } = useContext(ChatContext);

    const handlePredict = async () => {
        try {
            const response = await axios.post('http://localhost:5000/predicts', { value }); // put the endpoint of the backend here 
            setChats(prevChats => [...prevChats, { value: response.data.prediction, from: 'ai' }]); //  a json reponse should be there  {'prediction':'value'} so response.data.prediction is written here accordingly update 
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    

    const handleSendMessage = () => {
        if (value) {
            // Update the chat with the user's message
            setChats(prevChats => [...prevChats, { value: value, from: 'user' }]);
            // Call the prediction function
            handlePredict();
            // Clear the input field
            setValue('');
        }
    };

    return (
        <div className="bg-white p-4 dark:bg-gray-800">
            <div className="flex">
                <input 
                    type="text" 
                    className="border-2 border-black p-4 rounded flex-grow dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"  
                    placeholder="Search" 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button 
                    className="ml-4 p-4 text-xl bg-green-500 rounded-xl text-white hover:bg-green-600 active:bg-green-900 dark:bg-green-700 dark:hover:bg-green-600 dark:active:bg-green-800" 
                    onClick={handleSendMessage}
                >
                    <FiArrowRight className="text-white" />
                </button>
            </div>
        </div>
    );
}

export default UserBar;

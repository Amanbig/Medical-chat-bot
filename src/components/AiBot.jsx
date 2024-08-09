import React from 'react';
import './AiBot.css'; // Ensure your CSS file includes necessary styles for animations

function AiBot() {
  return (
    <div className="flex items-center justify-center w-36 h-36 bg-gray-200 dark:bg-gray-800 dark:shadow-white rounded-full shadow-2xl border border-black dark:border-white relative">
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="w-4 h-4 bg-black dark:bg-white rounded-full animate-blink"></div>
        </div>
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="w-4 h-4 bg-black dark:bg-white rounded-full animate-blink"></div>
        </div>
      </div>
    </div>
  );
}

export default AiBot;

import React, { useState } from 'react';
import { FiToggleLeft, FiToggleRight } from 'react-icons/fi';

function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="p-4 flex justify-end border-none"
    >
      <FiToggleLeft 
        className={`${theme === 'dark' ? 'hidden' : 'visible'} text-3xl`} 
      />
      <FiToggleRight 
        className={`${theme === 'light' ? 'hidden' : 'visible text-white'} text-3xl`} 
      />
    </button>
  );
}

export default ThemeToggle;

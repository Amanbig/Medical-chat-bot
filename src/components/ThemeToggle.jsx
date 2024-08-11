import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ThemeToggle() {
  const [theme, setTheme] = useState('light');
  const [isOn, setIsOn] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setIsOn(!isOn);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className="flex justify-end p-4">
      <div className='p-1 dark:text-white'>
        {theme.toUpperCase()}
      </div>
      <motion.div
        className={`w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer ${isOn ? 'justify-end' : 'justify-start'}`}
        onClick={toggleTheme}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          className="w-6 h-6 bg-white dark:bg-gray-200 rounded-full shadow"
          layout
          transition={{ type: 'spring', stiffness: 700, damping: 30 }}
        />
      </motion.div>
    </div>
  );
}

export default ThemeToggle;
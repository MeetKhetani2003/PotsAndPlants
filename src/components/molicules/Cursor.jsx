/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import React, { useState, useEffect, useContext } from 'react';

import { HoverContext } from '../../contexts/HoverContext';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isHovering = useContext(HoverContext);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  const cursorVariants = {
    default: {
      scale: 1,
      x: position.x, // Adjust for centering
      y: position.y,
      transition: { type: 'spring', stiffness: 1000, damping: 25 },
    },
    hover: {
      scale: 2,
      backgroundColor: 'rgba(249, 115, 22, 0.3)',
      borderColor: '#f97316',
      x: position.x - 15, // Adjust for centering when scaled
      y: position.y - 15,
      transition: { type: 'spring', stiffness: 500, damping: 30 },
    },
  };

  return (
    <motion.div
      className='fixed pointer-events-none z-50 border-2 border-orange-500 rounded-full bg-transparent'
      style={{
        zIndex: 9999,
        width: '20px',
        height: '20px',
      }}
      variants={cursorVariants}
      animate={isHovering ? 'hover' : 'default'}
    />
  );
};

export default Cursor;

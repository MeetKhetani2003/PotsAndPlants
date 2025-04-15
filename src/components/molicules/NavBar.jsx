/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const menuRef = useRef(null);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Featured Plants', href: '#plants' },
    { name: 'Benefits', href: '#benifits' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Intersection Observer for tracking sections
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );

      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveLink(
              navLinks.find((link) => link.href === `#${section.id}`).name
            );
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className='fixed top-0 left-0 w-full bg-gradient-to-r from-white to-gray-50/95 backdrop-blur-md text-orange-500 z-50 shadow-lg'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <a
              href='#hero'
              className='text-4xl font-marcellus font-bold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent tracking-tight drop-shadow-md hover:drop-shadow-lg transition-shadow duration-300'
            >
              Mahatvi
            </a>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex gap-12'>
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`relative text-lg font-normal transition-colors duration-300 tracking-widest ${
                  activeLink === link.name
                    ? 'text-orange-700 font-bold'
                    : 'text-orange-600 hover:text-orange-700'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                <span
                  className={`absolute left-0 bottom-[-4px] w-full h-0.5 bg-gradient-to-r from-orange-500 to-orange-700 transition-transform duration-300 ${
                    activeLink === link.name
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                ></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='p-2 rounded-full bg-orange-50/50 hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300'
              aria-label='Toggle menu'
            >
              <motion.svg
                className='w-8 h-8 text-orange-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                animate={isOpen ? 'open' : 'closed'}
                variants={{
                  open: {
                    rotate: 180,
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  },
                  closed: {
                    rotate: 0,
                    scale: 1,
                    transition: { duration: 0.3 },
                  },
                }}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d={
                    isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </motion.svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              className='md:hidden bg-gradient-to-b from-white to-gray-50/90 backdrop-blur-md border-t border-orange-100 shadow-xl absolute w-full left-0'
              initial='closed'
              animate='open'
              exit='closed'
            >
              <div className='px-6 pt-6 pb-8 space-y-5'>
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className={`block px-5 py-3 text-xl font-normal rounded-xl shadow-md hover:shadow-lg transition-all duration-300 tracking-widest ${
                      activeLink === link.name
                        ? 'bg-orange-500 text-white'
                        : 'text-orange-600 bg-orange-50/30 hover:bg-orange-100/70'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavBar;

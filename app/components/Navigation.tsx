'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeInOut" as const
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const itemVariants = {
    closed: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    open: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#2563EA] to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">ET</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#2563EA] to-purple-600 bg-clip-text text-transparent">
                Empire Tech
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.path}
                  className={`relative px-3 py-2 font-medium transition-colors ${
                    pathname === item.path
                      ? 'text-[#2563EA] dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-[#2563EA] dark:hover:text-blue-400'
                  }`}
                >
                  {item.name}
                  {pathname === item.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EA]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col space-y-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
              className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 block"
            />
            <motion.span
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 block"
            />
            <motion.span
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
              className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 block"
            />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden absolute top-full left-6 right-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <motion.div className="py-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-6 py-3 text-lg font-medium transition-colors ${
                        pathname === item.path
                          ? 'text-[#2563EA] dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                          : 'text-gray-600 dark:text-gray-300 hover:text-[#2563EA] dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
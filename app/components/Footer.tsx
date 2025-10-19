import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/empiretech', icon: '🐙' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/empiretech', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com/empiretech', icon: '🐦' },
    { name: 'Email', url: 'mailto:contact@empiretech.dev', icon: '✉️' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="relative border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#2563EA] to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">ET</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#2563EA] to-purple-600 bg-clip-text text-transparent">
                Empire Tech
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Crafting digital experiences that merge innovation with functionality.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#2563EA] hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <motion.div key={link.name} whileHover={{ x: 5 }}>
                  <Link
                    href={link.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-[#2563EA] dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white">Get In Touch</h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p>📍 Lagos, Nigeria</p>
              <p>✉️ contact@empiretech.dev</p>
              <p>💬 +234 812 345 6789</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-500 dark:text-gray-400"
        >
          <p>© {new Date().getFullYear()} Empire Tech. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
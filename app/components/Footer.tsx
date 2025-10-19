import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/empiretech', icon: FiGithub },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/empiretech', icon: FiLinkedin },
    { name: 'Twitter', url: 'https://twitter.com/empiretech', icon: FiTwitter },
    { name: 'Email', url: 'mailto:contact@empiretech.dev', icon: FiMail },
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
          <div className="space-y-4 animate-slide-up">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#2563EA] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <span className="text-white font-bold text-sm">ET</span>
              </div>
              <span className="text-xl font-bold text-[#2563EA]">
                Empire Tech
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Crafting digital experiences that merge innovation with functionality.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#2563EA] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-slide-up delay-100">
            <h3 className="font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <div key={link.name} className="hover:translate-x-2 transition-transform duration-300">
                  <Link
                    href={link.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-[#2563EA] dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-slide-up delay-200">
            <h3 className="font-semibold text-gray-900 dark:text-white">Get In Touch</h3>
            <div className="space-y-3 text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-3 hover:text-[#2563EA] transition-colors duration-300">
                <FiMapPin size={18} />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-[#2563EA] transition-colors duration-300">
                <FiMail size={18} />
                <span>contact@empiretech.dev</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-[#2563EA] transition-colors duration-300">
                <FiPhone size={18} />
                <span>+234 812 345 6789</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-500 dark:text-gray-400 animate-slide-up delay-300">
          <p>© {new Date().getFullYear()} Empire Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
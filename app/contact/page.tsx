'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="pt-20">
      <div className="relative max-w-6xl mx-auto px-6 py-20">
        {/* Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-80 h-80 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-20 animate-pulse delay-1000"></div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Let's <span className="bg-gradient-to-r from-[#2563EA] to-purple-600 bg-clip-text text-transparent">Connect</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can work together 
            to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Get In Touch</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                I'm always interested in new challenges and opportunities. 
                Whether you need a website, automation solution, or design work, 
                let's start a conversation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-[#2563EA] rounded-full flex items-center justify-center text-white">
                  ✉️
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                  <a href="mailto:contact@empiretech.dev" className="text-gray-600 dark:text-gray-300 hover:text-[#2563EA] transition-colors">
                    contact@empiretech.dev
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                  💬
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">WhatsApp</h3>
                  <a href="https://wa.me/1234567890" className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white">
                  💼
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h3>
                  <a href="https://linkedin.com/in/empiretech" className="text-gray-600 dark:text-gray-300 hover:text-blue-400 transition-colors">
                    linkedin.com/in/empiretech
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#2563EA] focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#2563EA] focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#2563EA] focus:border-transparent transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#2563EA] focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-2xl bg-gradient-to-r from-[#2563EA] to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
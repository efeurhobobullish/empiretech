import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-50 dark:from-[#0f172a] dark:to-[#1e293b] text-gray-900 dark:text-gray-100 transition-all duration-300 font-sans">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-20 animate-pulse delay-1000"></div>
      </div>

      <nav className="relative flex justify-between items-center p-6 max-w-6xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-[#2563EA] rounded-full animate-bounce"></div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#2563EA] to-purple-600 bg-clip-text text-transparent">
            Empire Tech
          </h1>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center py-20 px-6">
        <div className="absolute -z-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        
        <div className="mb-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
          <div className="relative w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[#2563EA] to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
            ET
          </div>
        </div>

        <h2 className="text-4xl sm:text-6xl font-extrabold leading-tight">
          Crafting Digital{" "}
          <span className="bg-gradient-to-r from-[#2563EA] via-purple-600 to-blue-400 bg-clip-text text-transparent animate-gradient">
            Experiences
          </span>
        </h2>
        
        <p className="mt-6 text-xl max-w-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
          I build immersive web experiences, compelling visual identities, and intelligent automation solutions that drive real results.
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-[#2563EA] to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Explore My Work</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="mailto:contact@empiretech.dev"
            className="px-8 py-4 rounded-2xl border-2 border-[#2563EA] text-[#2563EA] dark:text-white font-semibold hover:bg-[#2563EA] hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            Start a Project
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative max-w-6xl mx-auto py-20 px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Featured Creations
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Each project represents a unique challenge solved with innovative thinking and technical excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative overflow-hidden rounded-xl mb-6">
              <Image
                src="/swiftpay.png"
                alt="SwiftPay Platform"
                width={600}
                height={400}
                className="rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Live Preview</span>
              </div>
            </div>
            
            <h4 className="font-bold text-2xl mb-3 text-gray-900 dark:text-white">SwiftPay Platform</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              A comprehensive financial ecosystem featuring digital wallets, virtual banking, and secure transaction processing with real-time analytics.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">Next.js</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">MongoDB</span>
            </div>
            <a
              href="https://swiftpay.net.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-[#2563EA] font-semibold hover:text-purple-600 transition-colors group/link"
            >
              <span>Explore Platform</span>
              <span className="group-hover/link:translate-x-1 transition-transform">↗</span>
            </a>
          </div>

          {/* Project 2 */}
          <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative overflow-hidden rounded-xl mb-6">
              <Image
                src="/telegram-bot.png"
                alt="Automation Bot Suite"
                width={600}
                height={400}
                className="rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">View Demo</span>
              </div>
            </div>
            
            <h4 className="font-bold text-2xl mb-3 text-gray-900 dark:text-white">Automation Bot Suite</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Intelligent chatbot solutions for Telegram & WhatsApp, featuring AI-powered responses, workflow automation, and seamless CRM integration.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm">AI/ML</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">API Integration</span>
            </div>
            <a
              href="https://github.com/empiretech/automation-bots"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-[#2563EA] font-semibold hover:text-purple-600 transition-colors group/link"
            >
              <span>View Source Code</span>
              <span className="group-hover/link:translate-x-1 transition-transform">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative max-w-4xl mx-auto py-20 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
        
        <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 p-12">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#2563EA] to-purple-600 bg-clip-text text-transparent">
            Ready to Bring Your Vision to Life?
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's collaborate to create something extraordinary that resonates with your audience and exceeds your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@empiretech.dev"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#2563EA] to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Start Conversation
            </a>
            <a
              href="https://calendly.com/empiretech"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-[#2563EA] hover:text-[#2563EA] dark:hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              Schedule Call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative text-center py-8 text-sm opacity-80 border-t border-gray-200 dark:border-gray-800 mx-6">
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <div className="w-2 h-2 bg-[#2563EA] rounded-full animate-pulse"></div>
            <span>© {new Date().getFullYear()} Empire Tech. Crafted with passion.</span>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/empiretech" className="hover:text-[#2563EA] transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/empiretech" className="hover:text-[#2563EA] transition-colors">LinkedIn</a>
            <a href="https://twitter.com/empiretech" className="hover:text-[#2563EA] transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
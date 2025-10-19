import Link from 'next/link';

export default function Home() {
  const projects = [
    {
      title: "SwiftPay Platform",
      description: "A modern payment app with wallet, virtual accounts, and secure transfers.",
      image: "/swiftpay.png",
      link: "https://swiftpay.net.ng",
      tags: ["Next.js", "Node.js", "MongoDB"]
    },
    {
      title: "Telegram Bot Suite", 
      description: "Custom automation bots for Telegram & WhatsApp, built for businesses.",
      image: "/telegram-bot.png",
      link: "https://github.com/empiretech/telegram-bot",
      tags: ["Python", "AI/ML", "Automation"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-20 blur-3xl animate-float-slower" />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Avatar */}
          <div className="mb-8 animate-bounce-slow">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#2563EA] to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl transition-transform duration-500 hover:scale-110">
              ET
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 leading-tight animate-slide-up">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-[#2563EA] via-purple-600 to-blue-400 bg-clip-text text-transparent bg-size-200 animate-gradient">
              Empire Tech
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up delay-100">
            A Website Developer, Graphics Designer & Bot Developer crafting digital excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-200">
            <Link
              href="/projects"
              className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-[#2563EA] to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 flex items-center space-x-2"
            >
              <span>View My Work</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 rounded-2xl border-2 border-[#2563EA] text-[#2563EA] dark:text-white font-semibold hover:bg-[#2563EA] hover:text-white transition-all duration-500 hover:scale-105"
            >
              Hire Me
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A glimpse of my recent work that showcases my skills and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-[#2563EA] to-purple-600 rounded-full flex items-center justify-center text-white font-bold transition-transform duration-300 group-hover:scale-110">
                      ET
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">{project.title}</p>
                  </div>
                </div>
              </div>
              
              <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white group-hover:text-[#2563EA] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm transition-colors duration-300 hover:bg-blue-200 dark:hover:bg-blue-800/50">
                    {tag}
                  </span>
                ))}
              </div>
              
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-[#2563EA] font-semibold hover:text-purple-600 transition-all duration-300 group/link"
              >
                <span>View Project</span>
                <span className="group-hover/link:translate-x-1 transition-transform duration-300">↗</span>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center animate-slide-up delay-300">
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-4 rounded-2xl border-2 border-[#2563EA] text-[#2563EA] dark:text-white font-semibold hover:bg-[#2563EA] hover:text-white transition-all duration-500 hover:scale-105 group"
          >
            <span>View All Projects</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto py-20 px-6 text-center">
        <div className="bg-gradient-to-r from-[#2563EA] to-purple-600 rounded-3xl p-12 text-white animate-scale-in">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's collaborate to create something extraordinary together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-[#2563EA] font-semibold rounded-2xl hover:bg-gray-100 transition-all duration-500 hover:scale-105 group"
          >
            <span>Get In Touch</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">👋</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
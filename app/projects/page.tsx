import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "SwiftPay Platform",
    description: "A comprehensive financial ecosystem featuring digital wallets, virtual banking, and secure transaction processing.",
    image: "/swiftpay.png",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://swiftpay.net.ng",
    githubUrl: "https://github.com/empiretech/swiftpay",
    featured: true
  },
  {
    id: 2,
    title: "Automation Bot Suite",
    description: "Intelligent chatbot solutions for Telegram & WhatsApp with AI-powered responses and workflow automation.",
    image: "/telegram-bot.png",
    tags: ["Python", "AI/ML", "API Integration", "Redis"],
    liveUrl: "https://github.com/empiretech/automation-bots",
    githubUrl: "https://github.com/empiretech/automation-bots",
    featured: true
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with advanced product filtering, cart management, and payment integration.",
    image: "/ecommerce.png",
    tags: ["React", "Express", "PostgreSQL", "PayPal"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 4,
    title: "Portfolio CMS",
    description: "Custom content management system for artists and designers to showcase their work.",
    image: "/cms.png",
    tags: ["Next.js", "Sanity.io", "Tailwind", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

export default function Projects() {
  return (
    <div className="pt-20">
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-10 animate-pulse"></div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-[#2563EA] to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of digital solutions that showcase my expertise in web development, 
            design, and automation.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Featured Work</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">All Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project) => (
              <ProjectCard key={project.id} project={project} compact />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Have a project in mind?
          </h3>
          <Link 
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-[#2563EA] to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Let's Discuss Your Project
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, compact = false }: { project: any; compact?: boolean }) {
  if (compact) {
    return (
      <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="relative h-40 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg mb-4 overflow-hidden">
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold">
              View Project
            </div>
          </div>
        </div>
        <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tags.slice(0, 3).map((tag: string) => (
            <span key={tag} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          <a href={project.liveUrl} className="text-sm text-[#2563EA] hover:underline">Live Demo</a>
          <a href={project.githubUrl} className="text-sm text-gray-600 dark:text-gray-400 hover:underline">Code</a>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative overflow-hidden rounded-xl mb-6">
        <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-[#2563EA] to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              ET
            </div>
            <p className="text-gray-500 dark:text-gray-400">{project.title}</p>
          </div>
        </div>
      </div>
      
      <h3 className="font-bold text-2xl mb-3 text-gray-900 dark:text-white">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag: string) => (
          <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a
          href={project.liveUrl}
          className="flex items-center space-x-2 text-[#2563EA] font-semibold hover:text-purple-600 transition-colors group/link"
        >
          <span>Live Demo</span>
          <span className="group-hover/link:translate-x-1 transition-transform">↗</span>
        </a>
        <a
          href={project.githubUrl}
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 font-semibold hover:text-gray-900 dark:hover:text-white transition-colors group/link"
        >
          <span>Source Code</span>
          <span className="group-hover/link:translate-x-1 transition-transform">↗</span>
        </a>
      </div>
    </div>
  );
}
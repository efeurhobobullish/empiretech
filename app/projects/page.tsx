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
          <div className="absolute inset-
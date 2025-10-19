import Image from "next/image";

export default function About() {
  const skills = [
    { category: "Development", items: ["React/Next.js", "TypeScript", "Node.js", "Python", "MongoDB"] },
    { category: "Design", items: ["UI/UX Design", "Figma", "Adobe Creative Suite", "Motion Design"] },
    { category: "Automation", items: ["Bot Development", "API Integration", "AI/ML", "Workflow Automation"] }
  ];

  return (
    <div className="pt-20">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-60 h-60 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-20 animate-float delay-1000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-[#2563EA] to-purple-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate digital creator with a focus on building solutions that merge 
            aesthetics with functionality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#2563EA] to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-2xl">
              <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[#2563EA] to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    ET
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">Empire Tech</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Crafting Digital Excellence
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              With over 3 years of experience in the digital space, I specialize in creating 
              comprehensive solutions that bridge the gap between design and technology.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My approach combines creative thinking with technical expertise to deliver 
              products that not only look stunning but also perform exceptionally.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
                <div className="text-2xl font-bold text-[#2563EA]">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
                <div className="text-2xl font-bold text-purple-600">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div 
                key={skillGroup.category}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {skillGroup.category}
                </h3>
                <div className="space-y-3">
                  {skillGroup.items.map((skill) => (
                    <div 
                      key={skill}
                      className="flex items-center space-x-3 text-gray-600 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-[#2563EA] rounded-full"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-gradient-to-r from-[#2563EA] to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">My Philosophy</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            "Great digital products are born from the perfect harmony of design thinking, 
            technical excellence, and user-centric approach."
          </p>
        </div>
      </div>
    </div>
  );
}
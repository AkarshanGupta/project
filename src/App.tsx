import React, { useState } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, Code2, Server, Database, Palette, ArrowRight, Star } from 'lucide-react';

function App() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const portfolio = {
    name: "Akarshan Gupta",
    title: "Full Stack Developer & AI/ML Engineer",
    bio: "Passionate developer with 2+ years of experience building web applications. Specialized in React, AI/ML, and cloud technologies.",
    resumeUrl: "https://raw.githubusercontent.com/AkarshanGupta/project/main/Public/Akarshan.pdf",
    skills: {
      frontend: ["React", "Redux", "TypeScript", "Tailwind CSS", "Gradio"],
      backend: ["Node.js", "Python", "Go", "RESTful APIs", "FastAPI"],
      database: ["MongoDB", "Firebase", "PostgreSQL", "MySQL"],
      other: ["Machine Learning", "Deep Learning", "Git", "Docker", "AWS","Tensorflow","Pytorch"]
    },
    projects: [
      {
        title: "Chatting Application",
        description: "Built a Full Stack Chating application using react redux and used firebase as DB.",
        link: "https://chat-sable-kappa-30.vercel.app/",
        github: "https://github.com/AkarshanGupta/chat",
        tags: ["React", "Firebase", "Redux"]
      },
      {
        title: "3D Tshirt Designer",
        description: "Developed a 3D T shirt Designer interface which have AI capabilites to generate images using prompt, built with react, threejs.",
        link: "https://threadedartisy.vercel.app/",
        github: "https://github.com/AkarshanGupta/TShirt-Designer",
        tags: ["React", "Three.js", "AI"]
      },
      {
        title: "SortWiz",
        description: "Developed a Algorithm Viuslaizer which viusalizes various sorting algorithms.",
        link: "https://sortviz-chi.vercel.app/",
        github: "https://github.com/AkarshanGupta/AlgoWiz",
        tags: ["React", "Visualization", "Algorithms"]
      },
      {
        title: "AI Urban Planner",
        description: "Designed a website where we can design layout of the city with the help of AI",
        link: "https://ai-urban-planner.vercel.app/",
        github: "https://github.com/AkarshanGupta/AI-Urban-Planner",
        tags: ["ML", "Python", "Classification"]
      },
      {
        title: "Legal Ease",
        description: "Developed a system which can process legal document and give simplified version of it.Built using gradio and google gemma 2B model to get result.",
        link: "https://huggingface.co/spaces/akarshan11/legalease1",
        github: "https://github.com/AkarshanGupta/legal-ease",
        tags: ["AI", "LLM", "Python"]
      },
      {
        title: "Food Classifier",
        description: "Developed a food classifier model which can classify the food and it was trained on food 101 dataset",
        link: "https://github.com/AkarshanGupta/food_classifier_101-Pytorch",
        github: "https://github.com/AkarshanGupta/food_classifier_101-Pytorch",
        tags: ["PyTorch", "Deep Learning", "CV"]
      }
    ],
    social: {
      github: "https://github.com/AkarshanGupta",
      linkedin: "www.linkedin.com/in/akarshangupta11",
      email: "guptaakarshan10@gmail.com"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <div className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/50 text-blue-300 text-sm font-medium">
                Welcome to my portfolio
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {portfolio.name}
              </span>
            </h1>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                {portfolio.title}
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                {portfolio.bio}
              </p>
            </div>
            <div className="flex justify-center items-center gap-6 pt-4">
              <a 
                href={portfolio.social.github} 
                className="group relative p-3 rounded-full bg-blue-500/20 border border-blue-400/50 text-blue-300 hover:bg-blue-500/40 transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a 
                href={portfolio.social.linkedin} 
                className="group relative p-3 rounded-full bg-blue-500/20 border border-blue-400/50 text-blue-300 hover:bg-blue-500/40 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href={`mailto:${portfolio.social.email}`} 
                className="group relative p-3 rounded-full bg-blue-500/20 border border-blue-400/50 text-blue-300 hover:bg-blue-500/40 transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Code2, label: 'Frontend', skills: portfolio.skills.frontend, color: 'from-blue-400 to-cyan-400' },
              { icon: Server, label: 'Backend', skills: portfolio.skills.backend, color: 'from-purple-400 to-pink-400' },
              { icon: Database, label: 'Database', skills: portfolio.skills.database, color: 'from-orange-400 to-red-400' },
              { icon: Palette, label: 'Other', skills: portfolio.skills.other, color: 'from-green-400 to-emerald-400' }
            ].map((category, idx) => {
              const Icon = category.icon;
              return (
                <div 
                  key={idx}
                  className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} p-3 mb-6`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-6">{category.label}</h3>
                    <div className="space-y-3">
                      {category.skills.map((skill, i) => (
                        <div key={i} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mr-3"></div>
                          <span className="text-gray-300 text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.projects.map((project, index) => (
              <div 
                key={index}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-8 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white pr-4">{project.title}</h3>
                    <Star size={20} className={`flex-shrink-0 transition-all duration-300 ${hoveredProject === index ? 'fill-yellow-400 text-yellow-400' : 'text-white/30'}`} />
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group/btn"
                    >
                      <Github size={18} />
                      <span>Code</span>
                      <ArrowRight size={16} className="opacity-0 -ml-2 group-hover/btn:opacity-100 transition-all" />
                    </a>
                    <a 
                      href={project.link}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/10 text-white font-medium border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group/btn"
                    >
                      <ExternalLink size={18} />
                      <span>Live</span>
                      <ArrowRight size={16} className="opacity-0 -ml-2 group-hover/btn:opacity-100 transition-all" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-blue-400/50 rounded-3xl overflow-hidden p-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 opacity-50"></div>
            <div className="relative z-10 text-center space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get My Resume</h2>
                <p className="text-gray-300 text-lg">
                  Download a detailed look at my experience, skills, and qualifications.
                </p>
              </div>
              <a
                href={portfolio.resumeUrl}
                download="Akarshan-Gupta-Resume.pdf"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 group hover:scale-105"
              >
                <Download size={22} className="group-hover:animate-bounce" />
                <span>Download Resume</span>
                <ArrowRight size={20} className="opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-white/10 mt-12">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-gray-400 font-medium">© {new Date().getFullYear()} {portfolio.name}. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-2">Built with React, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
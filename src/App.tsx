import React from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, Code2, Server, Database, Palette } from 'lucide-react';

function App() {
  const portfolio = {
    name: "Akarshan Gupta",
    title: "Full Stack Developer & AI/ML Engineer",
    bio: "Passionate developer with +2 years of experience building web applications. Specialized in React, AI/ML, and cloud technologies.",
    resumeUrl: "https://github.com/AkarshanGupta/project/blob/main/Public/Akarshan.pdf",
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
        link: "https://github.com/AkarshanGupta/chat",
        github: "https://github.com/AkarshanGupta/chat"
      },
      {
        title: "3D Tshirt Designer",
        description: "Developed a 3D T shirt Designer interface which have AI capabilites to generate images using prompt, built with react, threejs.",
        link: "https://threadedartisy.vercel.app/",
        github: "https://github.com/AkarshanGupta/TShirt-Designer"
      },
      {
        title: "AlgoWiz",
        description: "Developed a Algorithm Viuslaizer which viusalizes various sorting algorithms.",
        link: "https://algowiz1.netlify.app/",
        github: "https://github.com/AkarshanGupta/AlgoWiz"
      },
      {
        title: "SMS Spam Classifier",
        description: "Designed a SMS Classifier which classify whether the sms is spam or not.",
        link: "https://huggingface.co/spaces/akarshan11/SMSentinel",
        github: "https://github.com/AkarshanGupta/sms-spam-detection"
      },
      {
        title: "Legal Ease",
        description: "Developed a system which can process legal document and give simplified version of it.Built using gradio and google gemma 2B model to get result.",
        link: "https://huggingface.co/spaces/akarshan11/legalease1",
        github: "https://github.com/AkarshanGupta/legal-ease"
      },
      {
        title: "Food Classifier",
        description: "Developed a food classifier model which can classify the food and it was trained on food 101 dataset",
        link: "https://github.com/AkarshanGupta/food_classifier_101-Pytorch",
        github: "https://github.com/AkarshanGupta/food_classifier_101-Pytorch"
      }
    ],
    social: {
      github: "https://github.com/AkarshanGupta",
      linkedin: "https://www.linkedin.com/in/gupta-akarshan-85970324b/",
      email: "akarshangupta14@gmail.com"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">{portfolio.name}</h1>
            <h2 className="text-2xl md:text-3xl mb-8 text-blue-100">{portfolio.title}</h2>
            <p className="text-xl mb-12 text-blue-50">{portfolio.bio}</p>
            <div className="flex justify-center space-x-6">
              <a href={portfolio.social.github} className="hover:text-blue-200 transition-colors">
                <Github size={24} />
              </a>
              <a href={portfolio.social.linkedin} className="hover:text-blue-200 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${portfolio.social.email}`} className="hover:text-blue-200 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="flex items-center mb-4">
                <Code2 className="text-blue-600 mr-2" size={24} />
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              <ul className="space-y-2">
                {portfolio.skills.frontend.map((skill, index) => (
                  <li key={index} className="text-gray-700">{skill}</li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="flex items-center mb-4">
                <Server className="text-blue-600 mr-2" size={24} />
                <h3 className="text-xl font-semibold">Backend</h3>
              </div>
              <ul className="space-y-2">
                {portfolio.skills.backend.map((skill, index) => (
                  <li key={index} className="text-gray-700">{skill}</li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="flex items-center mb-4">
                <Database className="text-blue-600 mr-2" size={24} />
                <h3 className="text-xl font-semibold">Database</h3>
              </div>
              <ul className="space-y-2">
                {portfolio.skills.database.map((skill, index) => (
                  <li key={index} className="text-gray-700">{skill}</li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="flex items-center mb-4">
                <Palette className="text-blue-600 mr-2" size={24} />
                <h3 className="text-xl font-semibold">Other</h3>
              </div>
              <ul className="space-y-2">
                {portfolio.skills.other.map((skill, index) => (
                  <li key={index} className="text-gray-700">{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github size={20} className="mr-1" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.link}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Download Resume</h2>
          <p className="text-gray-600 mb-8">
            Get a detailed look at my experience, skills, and qualifications.
          </p>
          <a
            href={portfolio.resumeUrl}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download size={20} className="mr-2" />
            Download Resume
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} {portfolio.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
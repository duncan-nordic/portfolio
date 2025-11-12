export default function Project1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-800 to-forest-950 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <a
            href="/work"
            className="inline-flex items-center text-brown-400 hover:text-brown-300 mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Work
          </a>

          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Project 1
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              A modern web application built with cutting-edge technologies
            </p>
            
            {/* Status and Technologies */}
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-brown-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Live
              </span>
              {["React", "Node.js", "PostgreSQL", "Docker"].map((tech) => (
                <span
                  key={tech}
                  className="bg-brown-900 text-brown-200 px-3 py-1 rounded-full text-sm border border-brown-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Image Placeholder */}
          <div className="bg-forest-900 rounded-lg p-12 mb-12 border border-brown-700">
            <div className="text-center">
              <div className="w-24 h-24 bg-brown-800 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🖼️</span>
              </div>
              <p className="text-gray-300">Project Screenshot/Demo</p>
              <p className="text-sm text-gray-400 mt-2">Upload your project images here</p>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
              <div className="space-y-4 text-gray-200">
                <p>
                  This project showcases modern web development practices using React 
                  and Node.js. The application features a responsive design and robust 
                  backend architecture.
                </p>
                <p>
                  Key features include user authentication, real-time data updates, 
                  and seamless integration with third-party services.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Technical Details</h2>
              <div className="space-y-4">
                <div className="bg-forest-900 p-4 rounded-lg border border-brown-700">
                  <h3 className="text-brown-400 font-semibold mb-2">Frontend</h3>
                  <p className="text-gray-200 text-sm">React, TypeScript, Tailwind CSS</p>
                </div>
                <div className="bg-forest-900 p-4 rounded-lg border border-brown-700">
                  <h3 className="text-brown-400 font-semibold mb-2">Backend</h3>
                  <p className="text-gray-200 text-sm">Node.js, Express, PostgreSQL</p>
                </div>
                <div className="bg-forest-900 p-4 rounded-lg border border-brown-700">
                  <h3 className="text-brown-400 font-semibold mb-2">Deployment</h3>
                  <p className="text-gray-200 text-sm">Docker, AWS, CI/CD Pipeline</p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Links */}
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#"
              className="bg-brown-600 hover:bg-brown-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View Live Demo
            </a>
            <a
              href="#"
              className="border border-brown-600 hover:bg-brown-600 text-brown-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
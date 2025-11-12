export default function Project2() {
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
              Project 2
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Mobile-first responsive design with advanced functionality
            </p>
            
            {/* Status and Technologies */}
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-brown-800 text-brown-200 px-3 py-1 rounded-full text-sm font-medium">
                In Development
              </span>
              {["Next.js", "TypeScript", "MongoDB", "Tailwind"].map((tech) => (
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
                <span className="text-3xl">📱</span>
              </div>
              <p className="text-gray-300">Mobile App Screenshots</p>
              <p className="text-sm text-gray-400 mt-2">Upload your project images here</p>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
              <div className="space-y-4 text-gray-200">
                <p>
                  A comprehensive mobile application built with Next.js and TypeScript. 
                  This project focuses on creating an exceptional user experience 
                  across all device sizes.
                </p>
                <p>
                  The application includes advanced features like offline support, 
                  push notifications, and real-time synchronization with cloud services.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Technical Details</h2>
              <div className="space-y-4">
                <div className="bg-forest-900 p-4 rounded-lg border border-brown-700">
                  <h3 className="text-brown-400 font-semibold mb-2">Frontend</h3>
                  <p className="text-gray-200 text-sm">Next.js, TypeScript, Tailwind CSS</p>
                </div>
                <div className="bg-forest-900 p-4 rounded-lg border border-brown-700">
                  <h3 className="text-brown-400 font-semibold mb-2">Database</h3>
                  <p className="text-gray-200 text-sm">MongoDB, Prisma ORM</p>
                </div>
                <div className="bg-forest-900 p-4 rounded-lg border border-brown-700">
                  <h3 className="text-brown-400 font-semibold mb-2">Features</h3>
                  <p className="text-gray-200 text-sm">PWA, Offline Support, Push Notifications</p>
                </div>
              </div>
            </div>
          </div>

          {/* Development Progress */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Development Progress</h2>
            <div className="space-y-4">
              <div className="bg-forest-900 p-4 rounded-lg border border-brown-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-brown-400 font-medium">UI/UX Design</span>
                  <span className="text-gray-200 text-sm">100%</span>
                </div>
                <div className="w-full bg-forest-800 rounded-full h-2">
                  <div className="bg-brown-600 h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>
              <div className="bg-forest-900 p-4 rounded-lg border border-brown-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-brown-400 font-medium">Frontend Development</span>
                  <span className="text-gray-200 text-sm">75%</span>
                </div>
                <div className="w-full bg-forest-800 rounded-full h-2">
                  <div className="bg-brown-600 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="bg-forest-900 p-4 rounded-lg border border-brown-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-brown-400 font-medium">Backend Integration</span>
                  <span className="text-gray-200 text-sm">60%</span>
                </div>
                <div className="w-full bg-forest-800 rounded-full h-2">
                  <div className="bg-brown-600 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Links */}
          <div className="mt-12 flex flex-wrap gap-4">
            <button
              disabled
              className="bg-brown-800 text-brown-400 px-6 py-3 rounded-lg font-semibold cursor-not-allowed"
            >
              Coming Soon
            </button>
            <a
              href="#"
              className="border border-brown-600 hover:bg-brown-600 text-brown-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View Progress
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="text-center space-y-6 p-8 max-w-2xl mx-auto">
        <div className="opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-4">
            Hello World
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
            Welcome to your Next.js application
          </p>
        </div>
        
        <div className="opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
          <div className="inline-block px-8 py-4 bg-white rounded-full shadow-lg border border-gray-100">
            <p className="text-gray-700 font-medium">
              🚀 Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
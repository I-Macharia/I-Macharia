import Link from "next/link"
import Image from "next/image"

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-center flex-1">
              <h1 className="text-3xl font-bold">Gichoya Macharia</h1>
              <p className="text-xl text-slate-200 mt-1">Data Scientist</p>
            </div>
            <div className="ml-8">
              <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-white">
                <Image
                  src="/images/profile-photo.png"
                  alt="Gichoya Macharia"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <nav className="border-t border-slate-700 pt-4 pb-2">
            <div className="flex justify-center space-x-8">
              <Link href="/about" className="text-white hover:text-slate-200 font-medium">
                About
              </Link>
              <Link href="/" className="text-white hover:text-slate-200 font-medium">
                Home
              </Link>
              <Link href="/blog" className="text-white hover:text-slate-200 font-medium">
                Blog
              </Link>
              <Link href="/contact" className="text-white hover:text-slate-200 font-medium">
                Contact Me
              </Link>
              <Link href="/projects" className="text-white hover:text-slate-200 font-medium">
                Projects
              </Link>
              <Link href="/photography" className="text-white hover:text-slate-200 font-medium">
                Photo Gallery
              </Link>
              <Link href="/marketplace" className="text-white hover:text-slate-200 font-medium">
                Marketplace
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog</h1>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Coming Soon</h2>
          <p className="text-gray-600">
            I'm working on some exciting blog posts about data science, machine learning, and technology. Stay tuned for
            insights, tutorials, and project deep-dives!
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2023 Gichoya Macharia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

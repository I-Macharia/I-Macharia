import Link from "next/link"
import Image from "next/image"

export default function About() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">About Me</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            Highly skilled and detail-oriented administrative assistant with a strong focus on delivering exceptional
            back-office operations, providing comprehensive team support, and handling queries and calls.
          </p>

          <p className="text-gray-700 mb-6">
            Passionate about the field of data science and eager to contribute to projects and opportunities in this
            domain. Continuously improving skills in data analysis, visualization, reporting, and machine learning.
            Currently pursuing certification in Data Science and Microsoft Azure.
          </p>

          <p className="text-gray-700 mb-6">
            Proven ability to manage multiple responsibilities effectively while maintaining attention to detail.
            Polished editing skills and the ability to meet tight deadlines.
          </p>

          <p className="text-gray-700 mb-8">
            Our team of dedicated professionals is committed to providing you with exceptional service and guiding you
            through the entire process of buying your dream property. Whether you are looking for a cozy beachfront
            villa, a piece of land or a luxurious vacation home, we have something for everyone.
          </p>

          <p className="text-gray-700 mb-8">
            Here is a link to my{" "}
            <Link href="/resume" className="text-blue-600 hover:text-blue-700 underline font-medium">
              Resume
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">My favorite reggae playlist.</h2>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Compilation</h3>
            <p className="text-gray-600 mb-4">
              <strong>Various Artists</strong>
              <br />
              2014, 24 songs,
              <br />1 hr 36 min
            </p>

            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded"></div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Reggae Mixtape Vol 1 mixed by DJ Wayne - Various Artists
                    </p>
                    <p className="text-sm text-gray-600">Old Time Love - Tarrus Riley, Lem's Wilks</p>
                    <span className="text-xs bg-gray-200 px-2 py-1 rounded">Preview</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-200 rounded">⏮</button>
                  <button className="p-2 hover:bg-gray-200 rounded">⏸</button>
                  <button className="p-2 hover:bg-gray-200 rounded">⏭</button>
                  <button className="p-2 hover:bg-gray-200 rounded">🔄</button>
                  <button className="p-2 hover:bg-gray-200 rounded">⋯</button>
                  <button className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800">▶</button>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">My favorite pop playlist.</h2>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Playlist</h3>
            <p className="text-gray-600 mb-4">
              <strong>279 songs,</strong>
              <br />
              about 17 hr
            </p>

            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded"></div>
                  <div>
                    <p className="font-medium text-gray-900">Mixed Pop Playlist 2023-2024 - Mixed Artists</p>
                    <p className="text-sm text-gray-600">Top hits and favorites</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-200 rounded">⏮</button>
                  <button className="p-2 hover:bg-gray-200 rounded">⏸</button>
                  <button className="p-2 hover:bg-gray-200 rounded">⏭</button>
                  <button className="p-2 hover:bg-gray-200 rounded">🔄</button>
                  <button className="p-2 hover:bg-gray-200 rounded">⋯</button>
                  <button className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800">▶</button>
                </div>
              </div>
            </div>
          </div>
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

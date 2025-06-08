import Link from "next/link"
import Image from "next/image"

export default function Contact() {
  const socialLinks = [
    { name: "Facebook", icon: "📘", url: "https://facebook.com/gichoya", color: "bg-blue-600" },
    { name: "X (Twitter)", icon: "✖️", url: "https://twitter.com/gichoya", color: "bg-black" },
    { name: "LinkedIn", icon: "💼", url: "https://linkedin.com/in/gichoya", color: "bg-blue-700" },
    {
      name: "Instagram",
      icon: "📷",
      url: "https://instagram.com/gichoya",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    { name: "Telegram", icon: "✈️", url: "https://t.me/gichoya", color: "bg-blue-500" },
    { name: "Pinterest", icon: "📌", url: "https://pinterest.com/gichoya", color: "bg-red-600" },
    { name: "WhatsApp", icon: "💬", url: "https://wa.me/254718338439", color: "bg-green-500" },
    { name: "Tumblr", icon: "📝", url: "https://gichoya.tumblr.com", color: "bg-indigo-900" },
  ]

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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Me</h1>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-12">
          <p className="text-gray-700 mb-8">
            If you have any inquiries or need assistance, please feel free to get in touch with me. I am always happy to
            be of any assistance.
          </p>

          <div className="space-y-4 mb-8">
            <div>
              <span className="font-semibold text-gray-900">Email: </span>
              <a href="mailto:Macharia.Gichoya@gmail.com" className="text-blue-600 hover:text-blue-700">
                Macharia.Gichoya@gmail.com
              </a>
            </div>
            <div>
              <span className="font-semibold text-gray-900">Phone: </span>
              <a href="tel:+254718338439" className="text-blue-600 hover:text-blue-700">
                +2547 1833 8439
              </a>
            </div>
            <div>
              <span className="font-semibold text-gray-900">Address: </span>
              <span className="text-gray-700">Nairobi, Kenya</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Follow Me on Social Media</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialLinks.map((social, index) => (
              <Link key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="group">
                <div
                  className={`w-20 h-20 rounded-full ${social.color} flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform duration-200 mx-auto`}
                >
                  {social.icon}
                </div>
                <p className="text-center text-sm text-gray-600 mt-2 group-hover:text-gray-900">{social.name}</p>
              </Link>
            ))}
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

import Link from "next/link"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Motivational Quote Delivery System",
      description:
        "This project leverages data science techniques to deliver daily motivational quotes to users; by curating quotes from a diverse range of sources and categorizing them based on themes, the system provides personalized, inspiring content. Implemented using the CRISP-DM framework, the project focuses on data preparation, modeling, and user engagement, ensuring a seamless and uplifting experience.",
      githubUrl: "https://github.com/gichoya/motivational-quotes",
      demoUrl: "#",
      technologies: ["Python", "Machine Learning", "NLP", "Flask"],
    },
    {
      title: "Africura Travel Destination Recommendation System",
      description:
        "A recommendation system that gives users suggestions that best match their travel preferences in and around African countries.",
      githubUrl: "https://github.com/gichoya/africura-travel",
      technologies: ["Python", "Recommendation Systems", "Data Analysis"],
    },
    {
      title: "Default_predictor",
      description:
        "The goal of this project is to develop a credit card default prediction model using a given dataset.",
      githubUrl: "https://github.com/gichoya/default-predictor",
      technologies: ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
    },
    {
      title: "Movie_Recommendation_System",
      description:
        "This project aims to develop a personalized movie recommendation system by leveraging datasets containing movie information, user ratings, and interactions.",
      githubUrl: "https://github.com/gichoya/movie-recommendation",
      demoUrl: "#",
      technologies: ["Python", "Collaborative Filtering", "Content-Based Filtering", "Pandas"],
    },
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
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Projects</h1>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <Link
                  href={project.githubUrl}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </Link>
                {project.demoUrl && (
                  <>
                    <span className="text-gray-400">•</span>
                    <Link href={project.demoUrl} className="text-blue-600 hover:text-blue-700 font-medium">
                      Try it!
                    </Link>
                  </>
                )}
              </div>
            </div>
          ))}
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

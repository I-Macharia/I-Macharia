import Link from "next/link"
import Image from "next/image"

export default function Resume() {
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
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">CURRICULUM VITAE</h1>
            <h2 className="text-xl font-semibold text-gray-800">IAN GICHOYA MACHARIA</h2>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Details:</h3>
            <div className="border border-gray-300 p-4 rounded">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p>
                    <strong>LinkedIn:</strong>{" "}
                    <Link href="https://linkedin.com/in/gichoya" className="text-blue-600 hover:text-blue-700">
                      LinkedIn Profile
                    </Link>
                  </p>
                  <p>
                    <strong>Phone Number:</strong> +254718338439
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <Link href="mailto:macharia.gichoya@gmail.com" className="text-blue-600 hover:text-blue-700">
                      macharia.gichoya@gmail.com
                    </Link>
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Github:</strong>{" "}
                    <Link href="https://github.com/gichoya" className="text-blue-600 hover:text-blue-700">
                      Github Profile
                    </Link>
                  </p>
                  <p>
                    <strong>Address:</strong> 3956 - 20100, Nakuru, Kenya
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 underline">Experience Summary:</h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              Detail-oriented and adaptable professional with excellent communication skills and a strong commitment to
              user satisfaction. Seeking the role of Customer Support Specialist at NIO to provide exceptional support
              to NIO users, handle emergency situations, and contribute to the company's mission of shaping a joyful
              lifestyle. Diligent professional with a background in customer service, strong data analysis skills, and
              proficiency in data management software, seeking to leverage my skills and passion for accuracy in the
              role of Customer service representative. Effective at time management and multitasking in a
              deadline-driven environment. Outstanding and focused on high-quality content under tight deadlines.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 underline">Skills and Competencies:</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800">Exceptional Communication:</h4>
                <p className="text-gray-700">
                  My ability to communicate effectively, both in writing and verbally, allows me to engage with users in
                  a clear and helpful manner, ensuring their questions and concerns are addressed comprehensively.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">User-Centric Approach:</h4>
                <p className="text-gray-700">
                  I am genuinely interested in electric vehicles and premium brands/services, which enables me to
                  empathize with users and provide tailored solutions that exceed their expectations.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Support Center Experience:</h4>
                <p className="text-gray-700">
                  While I have not worked in a support center previously, my strong analytical skills, ability to
                  prioritize tasks, and aptitude for problem-solving make me well-prepared to handle the demands of this
                  role.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Adaptability and Resilience:</h4>
                <p className="text-gray-700">
                  I thrive in fast-paced, dynamic environments and am unafraid to take on new challenges. I am
                  particularly skilled at handling emergency situations with composure and efficiency.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">References:</h3>
            <div className="space-y-4">
              <div>
                <p>
                  <strong>1. Dr. Eng. Samson Otieno Ooko, Lecturer, Dedan Kimathi University of Technology</strong>
                </p>
                <p className="ml-4">Phone: (072) 458-3596</p>
                <p className="ml-4">
                  Email:{" "}
                  <Link href="mailto:sokungu@drimkssacco.co.ke" className="text-blue-600 hover:text-blue-700">
                    sokungu@drimkssacco.co.ke
                  </Link>
                </p>
              </div>
              <div>
                <p>
                  <strong>2. The Rt. Revd. Charles Mutua, Bishop, Diocese of Mt. Kenya South</strong>
                </p>
                <p className="ml-4">Phone: (072) 458-3596</p>
                <p className="ml-4">
                  Email:{" "}
                  <Link href="mailto:info@ackmtkenyasouth.co.ke" className="text-blue-600 hover:text-blue-700">
                    info@ackmtkenyasouth.co.ke
                  </Link>
                </p>
              </div>
              <div>
                <p>
                  <strong>3. Maurice Tharao, Founder/CEO, Netcen</strong>
                </p>
                <p className="ml-4">Phone: 254720336730</p>
                <p className="ml-4">
                  Email:{" "}
                  <Link href="mailto:info@netcen.co.ke" className="text-blue-600 hover:text-blue-700">
                    info@netcen.co.ke
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">My personality type is: Logician</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Logicians' gifts include rationality, innovation, and the ability to envision a better future – but they
                don't just want to hear what makes them great. Logicians want to find real, meaningful answers to
                seemingly impossible problems that haunt their imagination.
              </p>
              <p>
                Imaginative and curious, Logician personalities can find endless fascination in the workings of their
                own mind.
              </p>
              <p>
                For Logicians, the best conversations are like brainstorming sessions, with plenty of room for
                unconventional thoughts and off-the-wall what-ifs.
              </p>
              <p>
                Logicians pride themselves on their unique perspectives and vigorous intellect. They can't help but
                puzzle over the mysteries of the universe – which may explain why some of the most influential
                philosophers and scientists of all time have been Logicians. This personality type is fairly rare, but
                with their creativity and inventiveness, Logicians aren't afraid to stand out from the crowd.
              </p>
              <p>
                Logicians often lose themselves in thought – which isn't necessarily a bad thing. People with this
                personality type hardly ever stop thinking. From the moment they wake up, their minds buzz with ideas,
                questions, and insights. At times, they may even find themselves conducting full-fledged debates in
                their own heads.
              </p>
              <p>
                From the outside, Logicians may seem to live in a never-ending daydream. They have a reputation for
                being pensive, detached, and a bit reserved. That is, until they try to train all of their mental energy
                on the moment or the person at hand, which can be a bit uncomfortable for everyone. But regardless of
                which mode they're in, Logicians are Introverts and tend to get tired out by extensive socializing.
                After a long day, they crave time alone to consult their own thoughts.
              </p>
              <p className="mt-6">
                Here is a link to my{" "}
                <Link href="#" className="text-blue-600 hover:text-blue-700 underline font-medium">
                  Personality Profile
                </Link>
                .
              </p>
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

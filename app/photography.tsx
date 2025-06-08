"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Upload, X } from "lucide-react"
import Image from "next/image"

// Event categories
const categories = [
  { id: "all", name: "All Events" },
  { id: "wedding", name: "Weddings" },
  { id: "corporate", name: "Corporate" },
  { id: "portrait", name: "Portraits" },
  { id: "travel", name: "Travel" },
  { id: "nature", name: "Nature" },
]

// Photography gallery items with event names
const galleryItems = [
  {
    id: 1,
    title: "Ceremony Moments",
    category: "wedding",
    eventName: "Sarah & John's Wedding",
    description: "Beautiful ceremony moments at Lakeside Gardens",
    date: "June 15, 2023",
    aspectRatio: "portrait",
  },
  {
    id: 2,
    title: "Reception Dance",
    category: "wedding",
    eventName: "Sarah & John's Wedding",
    description: "First dance and celebration",
    date: "June 15, 2023",
    aspectRatio: "landscape",
  },
  {
    id: 3,
    title: "Keynote Speaker",
    category: "corporate",
    eventName: "Tech Summit 2023",
    description: "Opening keynote presentation",
    date: "March 10, 2023",
    aspectRatio: "landscape",
  },
  {
    id: 4,
    title: "Networking Session",
    category: "corporate",
    eventName: "Tech Summit 2023",
    description: "Attendees networking during break",
    date: "March 10, 2023",
    aspectRatio: "portrait",
  },
  {
    id: 5,
    title: "Mountain Vista",
    category: "nature",
    eventName: "Mount Rainier Expedition",
    description: "Sunrise at Mount Rainier National Park",
    date: "July 22, 2023",
    aspectRatio: "landscape",
  },
  {
    id: 6,
    title: "Alpine Lake",
    category: "nature",
    eventName: "Mount Rainier Expedition",
    description: "Crystal clear alpine lake reflection",
    date: "July 22, 2023",
    aspectRatio: "portrait",
  },
  {
    id: 7,
    title: "Executive Headshot",
    category: "portrait",
    eventName: "Corporate Portraits - Johnson & Co",
    description: "Professional executive portrait session",
    date: "April 18, 2023",
    aspectRatio: "portrait",
  },
  {
    id: 8,
    title: "Team Photo",
    category: "portrait",
    eventName: "Corporate Portraits - Johnson & Co",
    description: "Executive team group portrait",
    date: "April 18, 2023",
    aspectRatio: "landscape",
  },
  {
    id: 9,
    title: "Beach Ceremony",
    category: "wedding",
    eventName: "Emma & Mike's Beach Wedding",
    description: "Intimate beach wedding ceremony",
    date: "August 12, 2023",
    aspectRatio: "landscape",
  },
  {
    id: 10,
    title: "Sunset Portraits",
    category: "wedding",
    eventName: "Emma & Mike's Beach Wedding",
    description: "Golden hour couple portraits",
    date: "August 12, 2023",
    aspectRatio: "portrait",
  },
  {
    id: 11,
    title: "Product Showcase",
    category: "corporate",
    eventName: "Innovation Expo 2023",
    description: "New product launch presentation",
    date: "September 5, 2023",
    aspectRatio: "landscape",
  },
  {
    id: 12,
    title: "Demo Station",
    category: "corporate",
    eventName: "Innovation Expo 2023",
    description: "Interactive product demonstration",
    date: "September 5, 2023",
    aspectRatio: "portrait",
  },
  {
    id: 13,
    title: "Street Markets",
    category: "travel",
    eventName: "Tokyo Adventure 2023",
    description: "Bustling street markets in Tokyo",
    date: "November 8, 2023",
    aspectRatio: "landscape",
  },
  {
    id: 14,
    title: "Neon Nights",
    category: "travel",
    eventName: "Tokyo Adventure 2023",
    description: "Nighttime neon street photography",
    date: "November 8, 2023",
    aspectRatio: "portrait",
  },
  {
    id: 15,
    title: "Family Gathering",
    category: "portrait",
    eventName: "Miller Family Reunion",
    description: "Multi-generation family portrait session",
    date: "October 14, 2023",
    aspectRatio: "landscape",
  },
  {
    id: 16,
    title: "Countryside Views",
    category: "travel",
    eventName: "Tuscany Photography Tour",
    description: "Rolling hills and vineyard landscapes",
    date: "May 20, 2023",
    aspectRatio: "landscape",
  },
]

export default function PhotographyGallery() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeEvent, setActiveEvent] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [showUpload, setShowUpload] = useState(false)
  const [dragActive, setDragActive] = useState(false)

  // Get unique events for the active category
  const getEventsForCategory = (categoryId: string) => {
    if (categoryId === "all") return []
    const events = galleryItems.filter((item) => item.category === categoryId).map((item) => item.eventName)
    return [...new Set(events)]
  }

  // Filter gallery items based on active category and event
  const filteredItems = (() => {
    let items = galleryItems

    if (activeCategory !== "all") {
      items = items.filter((item) => item.category === activeCategory)
    }

    if (activeEvent) {
      items = items.filter((item) => item.eventName === activeEvent)
    }

    return items
  })()

  // Handle category change
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    setActiveEvent(null) // Reset event selection when category changes
  }

  // Handle image click to open lightbox
  const openLightbox = (id: number) => {
    setSelectedImage(id)
    document.body.style.overflow = "hidden"
  }

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  // Get current image for lightbox
  const currentImage = selectedImage !== null ? galleryItems.find((item) => item.id === selectedImage) : null

  // Get next image id for lightbox navigation (only within current filter)
  const getNextImageId = () => {
    if (selectedImage === null) return null
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage)
    return currentIndex < filteredItems.length - 1 ? filteredItems[currentIndex + 1].id : filteredItems[0].id
  }

  // Get previous image id for lightbox navigation (only within current filter)
  const getPrevImageId = () => {
    if (selectedImage === null) return null
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage)
    return currentIndex > 0 ? filteredItems[currentIndex - 1].id : filteredItems[filteredItems.length - 1].id
  }

  // Handle file upload
  const handleFileUpload = (files: FileList | null) => {
    if (!files) return

    // Here you would typically upload to your backend/storage
    console.log("Files to upload:", files)

    // For demo purposes, we'll just log the files
    Array.from(files).forEach((file) => {
      console.log("File:", file.name, "Type:", file.type)
    })

    setShowUpload(false)
  }

  // Handle drag events
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  // Handle drop
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files)
    }
  }

  const availableEvents = getEventsForCategory(activeCategory)

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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/" passHref>
            <Button variant="ghost" className="flex items-center text-gray-600 hover:text-gray-900">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Gallery Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Photography Gallery</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of photographs from various events, showcasing moments captured through the lens.
          </p>
        </div>

        {/* Breadcrumb Navigation */}
        {(activeCategory !== "all" || activeEvent) && (
          <div className="flex items-center gap-2 mb-6 text-sm text-gray-600">
            <button
              onClick={() => {
                setActiveCategory("all")
                setActiveEvent(null)
              }}
              className="hover:text-gray-900"
            >
              All Events
            </button>
            {activeCategory !== "all" && (
              <>
                <ChevronRight className="h-4 w-4" />
                <button onClick={() => setActiveEvent(null)} className="hover:text-gray-900">
                  {categories.find((cat) => cat.id === activeCategory)?.name}
                </button>
              </>
            )}
            {activeEvent && (
              <>
                <ChevronRight className="h-4 w-4" />
                <span className="text-gray-900 font-medium">{activeEvent}</span>
              </>
            )}
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`
                  ${activeCategory === category.id ? "bg-gray-900 text-white" : "bg-white text-gray-700 hover:bg-gray-50"}
                `}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Event Filter (shown when category is selected) */}
          {activeCategory !== "all" && availableEvents.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={activeEvent === null ? "default" : "outline"}
                size="sm"
                className={`
                  ${activeEvent === null ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"}
                `}
                onClick={() => setActiveEvent(null)}
              >
                All {categories.find((cat) => cat.id === activeCategory)?.name}
              </Button>
              {availableEvents.map((eventName) => (
                <Button
                  key={eventName}
                  variant={activeEvent === eventName ? "default" : "outline"}
                  size="sm"
                  className={`
                    ${activeEvent === eventName ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"}
                  `}
                  onClick={() => setActiveEvent(eventName)}
                >
                  {eventName}
                </Button>
              ))}
            </div>
          )}

          <Button
            onClick={() => setShowUpload(true)}
            className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
          >
            <Upload className="h-4 w-4" />
            Upload Images
          </Button>
        </div>

        {/* Gallery Info */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            {activeEvent ? (
              <>
                Showing {filteredItems.length} images from <span className="font-medium">{activeEvent}</span>
              </>
            ) : activeCategory !== "all" ? (
              <>
                Showing {filteredItems.length} images from{" "}
                <span className="font-medium">{categories.find((cat) => cat.id === activeCategory)?.name}</span>
              </>
            ) : (
              <>Showing all {filteredItems.length} images</>
            )}
          </p>
        </div>

        {/* Masonry Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`
                group relative overflow-hidden rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300
                ${item.aspectRatio === "portrait" ? "row-span-2" : ""}
              `}
              onClick={() => openLightbox(item.id)}
            >
              <div
                className={`
                  w-full bg-gradient-to-br cursor-pointer
                  ${item.category === "wedding" ? "from-pink-200 to-rose-400" : ""}
                  ${item.category === "corporate" ? "from-blue-200 to-sky-400" : ""}
                  ${item.category === "portrait" ? "from-amber-200 to-orange-400" : ""}
                  ${item.category === "travel" ? "from-emerald-200 to-teal-400" : ""}
                  ${item.category === "nature" ? "from-green-200 to-lime-400" : ""}
                  ${item.aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"}
                `}
              >
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                    <div className="bg-black bg-opacity-50 backdrop-blur-sm p-3 rounded-lg">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                      <p className="text-xs mt-1 opacity-80">{item.eventName}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-white font-medium">{item.title}</h3>
                    <p className="text-white/80 text-xs">{item.eventName}</p>
                    <p className="text-white/60 text-xs">{item.date}</p>
                  </div>
                  <span className="text-xs font-medium text-white bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
                    {categories.find((cat) => cat.id === item.category)?.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No images found for the selected filters.</p>
          </div>
        )}
      </main>

      {/* Upload Modal */}
      {showUpload && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Upload Images</h3>
              <button onClick={() => setShowUpload(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Event Category</label>
              <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate</option>
                <option value="portrait">Portrait</option>
                <option value="travel">Travel</option>
                <option value="nature">Nature</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Name</label>
              <input
                type="text"
                placeholder="e.g., Sarah & John's Wedding"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">Enter a unique name for this event</p>
            </div>

            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-600 mb-2">Drag and drop images here, or</p>
              <label className="cursor-pointer">
                <span className="text-blue-600 hover:text-blue-700 font-medium">browse files</span>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleFileUpload(e.target.files)}
                />
              </label>
              <p className="text-xs text-gray-500 mt-2">PNG, JPG, GIF up to 10MB each</p>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <Button variant="outline" onClick={() => setShowUpload(false)}>
                Cancel
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Upload</Button>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {selectedImage !== null && currentImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="max-w-5xl w-full bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div
                className={`w-full ${currentImage.aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-[16/9]"} bg-gradient-to-br
                  ${currentImage.category === "wedding" ? "from-pink-200 to-rose-400" : ""}
                  ${currentImage.category === "corporate" ? "from-blue-200 to-sky-400" : ""}
                  ${currentImage.category === "portrait" ? "from-amber-200 to-orange-400" : ""}
                  ${currentImage.category === "travel" ? "from-emerald-200 to-teal-400" : ""}
                  ${currentImage.category === "nature" ? "from-green-200 to-lime-400" : ""}
                `}
              ></div>

              {/* Navigation Arrows */}
              <button
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(getPrevImageId())
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(getNextImageId())
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Close Button */}
              <button
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                onClick={closeLightbox}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{currentImage.title}</h2>
                  <p className="text-lg text-blue-600 font-medium">{currentImage.eventName}</p>
                  <p className="text-gray-600">{currentImage.date}</p>
                  {(activeCategory !== "all" || activeEvent) && (
                    <p className="text-sm text-green-600 mt-1">
                      Viewing: {activeEvent || categories.find((cat) => cat.id === activeCategory)?.name} (
                      {filteredItems.length} images)
                    </p>
                  )}
                </div>
                <span className="text-sm font-medium text-white bg-gray-900 px-3 py-1 rounded-full">
                  {categories.find((cat) => cat.id === currentImage.category)?.name}
                </span>
              </div>
              <p className="text-gray-700 mb-6">{currentImage.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Photographer Name</p>
                    <p className="text-xs text-gray-500">Professional Photographer</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="text-gray-700">
                    Download
                  </Button>
                  {(activeCategory !== "all" || activeEvent) && (
                    <Button
                      variant="outline"
                      onClick={() => {
                        closeLightbox()
                        setActiveCategory("all")
                        setActiveEvent(null)
                      }}
                      className="text-blue-600 border-blue-600 hover:bg-blue-50"
                    >
                      View All Events
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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

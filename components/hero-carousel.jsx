// "use client"

// import { useState, useEffect, useCallback } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { cn } from "@/lib/utils"

// /**
//  * @typedef {Object} SlideProps
//  * @property {string} image - The image URL
//  * @property {string} title - The slide title
//  * @property {string} description - The slide description
//  * @property {string} [ctaText] - Call to action text
//  * @property {string} [ctaLink] - Call to action link
//  */

// /** @type {SlideProps[]} */
// const slides = [
//   {
//     image: "/images/hero-1.jpeg",
//     title: "General Law Firm",
//     description: "Providing efficient and affordable legal services for individuals and businesses",
//     ctaText: "Our Services",
//     ctaLink: "#services",
//   },
//   {
//     image: "/images/hero-2.jpeg",
//     title: "Experienced Legal Team",
//     description: "Our lawyers bring years of experience across multiple practice areas",
//     ctaText: "Meet Our Team",
//     ctaLink: "#team",
//   },
//   {
//     image: "/images/hero-3.jpg",
//     title: "Serving Tisdale & Nipawin",
//     description: "With offices in Tisdale and Nipawin, we're here to serve our local communities",
//     ctaText: "Contact Us",
//     ctaLink: "#contact",
//   },
// ]

// export default function HeroCarousel() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isTransitioning, setIsTransitioning] = useState(false)

//   const nextSlide = useCallback(() => {
//     if (isTransitioning) return
//     setIsTransitioning(true)
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
//     setTimeout(() => setIsTransitioning(false), 500)
//   }, [isTransitioning])

//   const prevSlide = useCallback(() => {
//     if (isTransitioning) return
//     setIsTransitioning(true)
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
//     setTimeout(() => setIsTransitioning(false), 500)
//   }, [isTransitioning])

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide()
//     }, 6000)
//     return () => clearInterval(interval)
//   }, [nextSlide])

//   return (
//     <div className="relative w-full h-[600px] overflow-hidden">
//       {/* Slides */}
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={cn(
//             "absolute inset-0 w-full h-full transition-opacity duration-500",
//             currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0",
//           )}
//         >
//           {/* Image with overlay */}
//           <div className="relative w-full h-full">
//             <Image
//               src={slide.image || "/placeholder.svg"}
//               alt={slide.title}
//               fill
//               className="object-cover"
//               priority={index === 0}
//             />
//             <div className="absolute inset-0 bg-[#002548] bg-opacity-30"></div>
//           </div>

//           {/* Content */}
//           <div className="absolute inset-0 z-20 flex items-center justify-center">
//             <div className="container mx-auto px-4 md:px-8 text-center">
//               <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl mx-auto">
//                 {slide.title}
//               </h1>
//               <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">{slide.description}</p>
//               {slide.ctaText && (
//                 <Link
//                   href={slide.ctaLink || "#"}
//                   className="inline-block border border-white text-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-white hover:text-[#0078BE] transition-colors font-semibold"
//                 >
//                   {slide.ctaText}
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Navigation arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft className="h-8 w-8" />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors"
//         aria-label="Next slide"
//       >
//         <ChevronRight className="h-8 w-8" />
//       </button>

//       {/* Indicators */}
//       <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               if (!isTransitioning) {
//                 setIsTransitioning(true)
//                 setCurrentSlide(index)
//                 setTimeout(() => setIsTransitioning(false), 500)
//               }
//             }}
//             className={cn(
//               "w-2 h-2 rounded-full transition-all duration-300",
//               currentSlide === index ? "bg-white w-8" : "bg-white/50 hover:bg-white/70",
//             )}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }



"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    image: "/images/hero-1.jpeg",
    title: "General Law Firm",
    description: "Providing efficient and affordable legal services for individuals and businesses",
    ctaText: "Our Services",
    ctaLink: "#services",
  },
  {
    image: "/images/hero-2.jpeg",
    title: "Experienced Legal Team",
    description: "Our lawyers bring years of experience across multiple practice areas",
    ctaText: "Meet Our Team",
    ctaLink: "#team",
  },
  {
    image: "/images/hero-3.jpg",
    title: "Serving Tisdale & Nipawin",
    description: "With offices in Tisdale and Nipawin, we're here to serve our local communities",
    ctaText: "Contact Us",
    ctaLink: "#contact",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const prevSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-500",
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0",
          )}
        >
          {/* Image with overlay */}
          <div className="relative w-full h-full">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-[#1a2026] bg-opacity-40"></div>
          </div>

          {/* Content - Moves to bottom on mobile, stays centered on larger screens */}
          <div className="absolute inset-0 z-20 flex items-end md:items-center justify-center p-4 mb-12 md:mb-8">
            <div className="container mx-auto px-4 md:px-8 text-center">
              <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-white mb-3 max-w-4xl mx-auto">
                {slide.title}
              </h1>
              <p className="text-base md:text-xl text-white/90 mb-6 max-w-2xl mx-auto font-medium">{slide.description}</p>
              {slide.ctaText && (
                <Link
                  href={slide.ctaLink || "#"}
                  className="inline-block border border-white text-white px-6 py-3 text-xs uppercase tracking-wider hover:bg-white hover:text-[#0078BE] transition-colors font-semibold"
                >
                  {slide.ctaText}
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows - Moves to text level on mobile */}
      <button
        onClick={prevSlide}
        className="absolute left-4 bottom-24 sm:top-auto sm:bottom-24 md:top-1/2 md:-translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 bottom-24 sm:top-auto sm:bottom-24 md:top-1/2 md:-translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true)
                setCurrentSlide(index)
                setTimeout(() => setIsTransitioning(false), 500)
              }
            }}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              currentSlide === index ? "bg-white w-8" : "bg-white/50 hover:bg-white/70",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}




import Navbar from "@/components/navbar"
import HeroCarousel from "@/components/hero-carousel"
import FeaturedContent from "@/components/featured-content"
import AboutSection from "@/components/about-section"
import CommitmentSection from "@/components/commitment-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-[#002548]">
        <Navbar />
      </div>
      <HeroCarousel />
      <FeaturedContent />
      <AboutSection />
      <CommitmentSection />
      <ContactSection />
      <Footer />
    </main>
  )
}


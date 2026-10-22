import HeroSection from '@/sections/home/HeroSection'
import TrustBar from '@/sections/home/TrustBar'
import ServicesSection from '@/sections/home/ServicesSection'
import ProjectsPreviewSection from '@/sections/home/ProjectsPreviewSection'
import StoryTestimonialSection from '@/sections/home/StoryTestimonialSection'
import EstimateCtaSection from '@/sections/home/EstimateCtaSection'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <ProjectsPreviewSection />
      <StoryTestimonialSection />
      <EstimateCtaSection />
    </>
  )
}

export default HomePage
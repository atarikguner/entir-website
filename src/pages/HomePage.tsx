import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import HowItWorksSection from '../components/home/HowItWorksSection'
import WhyEntirSection from '../components/home/WhyEntirSection'
import MeetEntirSection from '../components/home/MeetEntirSection'
import ContactCTASection from '../components/home/ContactCTASection'

function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <WhyEntirSection />
      <MeetEntirSection />
      <ContactCTASection />
    </main>
  )
}

export default HomePage
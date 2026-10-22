import { ContactDetailsSection } from '@/sections/contact/ContactDetailsSection'
import ContactHeroSection from '@/sections/contact/ContactHeroSection'
import ContactRequestBar from '@/sections/contact/ContactRequestBar'

const ContactPage = () => {
  return (
    <>
      <ContactHeroSection />
      <ContactDetailsSection />
      <ContactRequestBar />
    </>
  )
}

export default ContactPage
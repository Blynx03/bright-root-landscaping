import { PageContainer } from '@/components/layout/PageContainer'
import styles from './ContactHeroSection.module.css'
import SectionHeading from '@/components/ui/SectionHeading'
import headingImage from '@/assets/contact-page/images/contact-hero.webp'

const ContactHeroSection = () => {
  return (
    <section className={styles.contactHeroSection}>
        <PageContainer className={styles.contactHeroSectionPageContainer}>
        <div className={styles.headingContainer}>
            <SectionHeading
                eyebrow='Contact'
                title="Let's create something lasting."
                description="From inspired landscapes to functional outdoor spaces, we're here to help you bring your vision to life. Reach out and let's start the coversation."
                className={styles.heading}
                section='hero'
                variant='inverse'
                layout='stacked'
            />
        </div>
        </PageContainer>
        <div className={styles.headingImageContainer}>
            <img src={headingImage} className={styles.headingImage} alt='project-image' aria-hidden='true' />
        </div>
    </section>
  )
}

export default ContactHeroSection
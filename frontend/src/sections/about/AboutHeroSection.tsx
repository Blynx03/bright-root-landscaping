import SectionHeading from '@/components/ui/SectionHeading'
import styles from './AboutHeroSection.module.css'
import { PageContainer } from '@/components/layout/PageContainer'
import heroImage from '@/assets/about-page/images/about-hero.webp'

const AboutHeroSection = () => {
  return (
    <section className={styles.aboutHeroSection}>
        <PageContainer className={styles.aboutHeroPageContainer}>
            <SectionHeading 
                eyebrow='About Brightroot'
                title='Rooted in care.  Built to Last.'
                description='We designed and care for outdoor spaces that feel natural, personal and enduring.'
                className={styles.heading}
                layout='stacked'
                section='hero'
            />
        </PageContainer>
        <div className={styles.heroImageContainer}>
            <img src={heroImage} className={styles.heroImage} alt='about-hero-image' aria-hidden='true' />
        </div>
    </section>
  )
}

export default AboutHeroSection
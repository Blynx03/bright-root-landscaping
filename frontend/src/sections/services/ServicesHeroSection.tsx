import SectionHeading from '@/components/ui/SectionHeading'
import styles from './ServicesHeroSection.module.css'
import { PageContainer } from '@/components/layout/PageContainer'
import heroImage from '@/assets/service-page/images/services-hero-v4-woodland.webp'

const ServicesHeroSection = () => {
  return (
    <section className={styles.heroSectionContainer}>
        
        {/* <PageContainer className={styles.servicesPageContainer}> */}
        
            {/* Mobile */}
            <div className={styles.mobileView}>
                    <SectionHeading
                        variant='inverse'
                        layout='stacked'
                        section='hero'
                        eyebrow='Our Services'
                        className={styles.headingContainer}
                        title='Thoughtful care for every season'
                        description='From inspired design to year-round care, we create and maintain outdoor spaces that bring lasting beauty, health and enjoyment to your home.'
                    />
                <div className={styles.heroImageContainer}>
                    <img src={heroImage} className={styles.heroImage} alt='garden-stairs' aria-hidden='true' />
                </div>
            </div>
        

            {/* Desktop */}
            <div className={styles.desktopView}>
                <PageContainer className={styles.servicePageContainer}>
                    <SectionHeading
                        eyebrow='Our Services'
                        title='Thoughtful care for every season'
                        description='From inspired design to year-round care, we create and maintain outdoor spaces that bring lasting beauty, health and enjoyment to your home.'
                        className={styles.headingContainer}
                        section='hero'
                        variant='inverse'
                        layout='stacked'
                    />
                </PageContainer>
                <div className={styles.heroImageContainer}>
                    <img src={heroImage} className={styles.heroImage} alt='garden-stairs' aria-hidden='true' />
                </div>
            </div>
        {/* </PageContainer> */}
    </section>
  )
}

export default ServicesHeroSection
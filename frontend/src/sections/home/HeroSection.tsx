import { PageContainer } from '@/components/layout/PageContainer'
import styles from './HeroSection.module.css'
import heroImage from '@/assets/home-page/images/hero-landscaped-garden.webp'
import ButtonLink from '@/components/ui/ButtonLink'
import leavesRight from '@/assets/home-page/decorative/botanical-branch-right.svg'
import leavesLeft from '@/assets/home-page/decorative/botanical-branch-left.svg'
import SectionHeading from '@/components/ui/SectionHeading'


const HeroSection = () => {
  return (
    <section className={styles.heroSection}>

         {/* Mobile */}
        <div className={styles.mobileSection}>
            <PageContainer className={styles.pageContainerHero}>

                <div className={styles.mobileMainHeroContainer}>
                    {/* Top Hero */}
                    <div className={styles.mainHeroContainer}>
                        <div className={styles.titleContainer}>
                            <div className={styles.eyebrow}>LANDSCAPES FOR A BRIGHTER TOMORROW</div>
                            <div className={styles.title}>Beautiful yards. Thoughtfully cared for.</div>
                            <div className={styles.titleInfo}>Landscape design, lawn care, and seasonal maintenance for homes across Durham Region.</div>
                        </div>
                        <div className={styles.buttonContainer}>
                            <ButtonLink page='estimate' text='Request a Free Estimate' className={styles.estimateButton} />
                            <ButtonLink page='services' text='Explore Our Services' className={styles.servicesButton} />
                        </div>
                        <div className={styles.areasContainer}>
                            <div className={styles.iconContainer}>
                                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#bd8b4b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Location">
                                    <path d="M20 10c0 5.5-8 11-8 11s-8-5.5-8-11a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>
                                </svg>
                            </div>
                            <span className={styles.areas}>
                                Serving Pickering, Ajax, Whitby, Oshawa & Clarington
                            </span>
                        </div>

                    </div>
                </div>
            </PageContainer>

            {/* Bottom Hero */}
            <div className={styles.imageContainer}>
                <img src={heroImage} className={styles.image} alt='garden' aria-hidden='true'/>
            </div>

        </div>
        
        {/* Desktop */}
        <div className={styles.desktopSection}>
            <PageContainer className={styles.pageContainerHero} >
                <div className={styles.mainHeroContainer}>
                    <SectionHeading 
                        variant='inverse'
                        layout='stacked'
                        section='hero'
                        eyebrow='Landscapes for a brighter tomorrow'
                        eyebrowLayout='defaultEyebrow'
                        title='Beautiful yards. Thoughtfully cared for.'
                        description='Landscape design, lawn care, and seasonal manintenance for homes across Durham Region.'
                    />

                    <div className={styles.buttonContainer}>
                        <ButtonLink text='Request a Free Estimate' page='estimate' className={styles.estimateButton} />
                        <ButtonLink text='Explore Our Services' page='services' className={styles.servicesButton} />
                    </div>
                    <div className={styles.areasContainer}>
                        <div className={styles.iconContainer}>
                            <svg className={styles.locationIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#bd8b4b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Location">
                                <path d="M20 10c0 5.5-8 11-8 11s-8-5.5-8-11a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>
                            </svg>
                        </div>
                        <div className={styles.areas}>Serving Pickering, Ajax, Whitby, Oshawa & Clarington</div>
                    </div>
                </div>

                <div className={styles.imageContainer}>
                    <img src={heroImage} className={styles.heroImage} alt='hero image' aria-hidden='true' />
                </div>
            </PageContainer>
                <div className={styles.rightLeavesContainer}>
                    <img src={leavesRight} className={styles.rightLeavesImage} alt='left branch' aria-hidden='true' />
                </div>
                <div className={styles.leftLeavesContainer}>
                    <img src={leavesLeft} alt='leaves' aria-hidden='true' className={styles.leftLeavesImage} />
                </div>
        </div>
    </section>
  )
}

export default HeroSection
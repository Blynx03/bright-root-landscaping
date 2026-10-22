import SectionHeading from '@/components/ui/SectionHeading'
import styles from './ProjectsHeroSection.module.css'
import headingImage from '@/assets/projects-page/images/projects-hero.webp'
import { PageContainer } from '@/components/layout/PageContainer'

const ProjectsHeroSection = () => {
    return (
        <section className={styles.heroSectionContainer}>
            <PageContainer className={styles.projectHeroSectionPageContainer}>
                {/* <div className={styles.headingContainer}> */}
                    <SectionHeading 
                        eyebrow='Our Work'
                        title='Outdoor spaces, thoughtfully transformed.'
                        description='Distinctive landscapes for Ontario homes, designed and built with care.'
                        className={styles.heading}
                        section='hero'
                        variant='inverse'
                        layout='stacked'
                    />
                {/* </div> */}
            </PageContainer>
            <div className={styles.headingImageContainer}>
                <img src={headingImage} className={styles.headingImage} alt='project-image' aria-hidden='true' />
            </div>
        </section>
  )
}

export default ProjectsHeroSection
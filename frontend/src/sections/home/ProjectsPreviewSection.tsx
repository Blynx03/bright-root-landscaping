import { PageContainer } from '@/components/layout/PageContainer'
import styles from './ProjectPreviewSection.module.css'
import SectionHeading from '@/components/ui/SectionHeading'
import transformationImage from '@/assets/home-page/images/project-whitby-transformation.webp'
import stonePathImage from '@/assets/home-page/images/project-stone-path-detail.webp'
import hydrangeaImage from '@/assets/home-page/images/project-hydrangea-detail.webp'

const ProjectsPreviewSection = () => {
  return (
    <section className={styles.projectsSection}>
        <PageContainer className={styles.mobileProjectsPageContainer}>
            <div className={styles.headingContainer}>
                <SectionHeading
                    variant='inverse'
                    eyebrow='Featured Transformation'
                    title='From ordinary to extraordinary'
                    description='A complete backyard transformation in Whitby, featuring a natural stone patio, lush plantings and timeless detailing.'
                    className={styles.heading}
                    projectLink= {true}
                    projectHref='/projects'
                    projectText='View More Projects'                
                />
            </div>
            <div className={styles.imagesContainer}>
                <img src={transformationImage} alt='transformation' className={styles.image} aria-hidden='true' />
                <img src={stonePathImage} alt='stone-path' className={styles.image} aria-hidden='true' />
                <img src={hydrangeaImage} alt='hydrangea' className={styles.image} aria-hidden='true' />
            </div>
        </PageContainer>
        <PageContainer className={styles.desktopProjectsPageContainer}>
            <div className={styles.headingContainer}>
                <img className={styles.transformation} src={transformationImage} alt='transformation' aria-hidden='true' />
                <img className={styles.stonePath} src={stonePathImage} alt='stone-path' aria-hidden='true' />
                <img className={styles.hydrangea} src={hydrangeaImage} alt='hydrangea' aria-hidden='true' />
            </div>
            <SectionHeading
                variant='inverse'
                layout='stacked'
                eyebrow='Featured Transformation'
                title='From ordinary to extraordinary'
                description='A complete backyard transformation in Whitby, featuring a natural stone patio, lush plantings and timeless detailing.'
                className={styles.heading}
                section='transformation'
                projectLink= {true}
                projectHref='/projects'
                projectText='View More Projects'                
            />
        </PageContainer>
    </section>
  )
}

export default ProjectsPreviewSection
import { PageContainer } from '@/components/layout/PageContainer'
import styles from './ProjectDetailsSection.module.css'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

export type FeatureDetailsProps = {
    id: string,
    image: string,
    imgAlt: string,
    eyebrow: string,
    title: string,
    location: string
}

const ProjectDetailsSection = () => {
  return (
        <section className={styles.projectDetailsSectionContainer}>
            <PageContainer className={styles.projectDetailsSectionPageContainer}>
                {/* <div className={styles.featuresContainer}> */}
                    <div className={styles.featuresTitle}>Featured transformations</div>
                    <div className={styles.projectCardsContainer}>
                        { projects.map(({id, image, imgAlt, eyebrow, title, location}: FeatureDetailsProps) => {
                            return (
                                <ProjectCard 

                                    key={id}
                                    id={id}
                                    className={`styles.card-${id}`}
                                    image={image}
                                    imgAlt={imgAlt}
                                    eyebrow={eyebrow}
                                    title={title}
                                    location={location}
                                >
                                </ProjectCard>
                            )
                        })}
                    </div>
                {/* </div> */}
            </PageContainer>
        </section>
  )
}

export default ProjectDetailsSection
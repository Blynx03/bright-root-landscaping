import styles from './ProjectCard.module.css'
import type { FeatureDetailsProps } from './ProjectDetailsSection'

type ProjectCardProps = FeatureDetailsProps & {
    className: string,
}
const ProjectCard = ({className, image, imgAlt, eyebrow, title, location}:ProjectCardProps) => {
    return (
        <div className={`${styles.projectCardContainer} ${className}` }>
            <div className={styles.imageContainer}>
                <img src={image} alt={imgAlt} className={styles.image} aria-hidden='true' />
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.eyebrow}>
                    {eyebrow}
                </div>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.location}>
                    {location}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
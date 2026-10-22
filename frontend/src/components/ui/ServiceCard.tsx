import { NavLink } from "react-router-dom"
import styles from '@/components/ui/ServiceCard.module.css'

type ImageServicesProps = {
    id: string,
    image: string,
    alt: string,
    title: string,
    description: string,
    link: string
}

const ServiceCard = ({id, image, alt, title, description, link}: ImageServicesProps) => {
  return (
    <section id={id} className={styles.serviceCardContainer}>
        <img src={image} alt={alt} aria-hidden='true' className={styles.image} />
        <div className={styles.bottomContainer}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
            <NavLink to={link} className={styles.link}>
                <span className={styles.learnMore}>Learn More</span>
                <div className={styles.iconContainer}>
                    <svg className={styles.arrowIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#bd8b4b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M14 7l5 5-5 5"/>
                    </svg>
                </div>
            </NavLink>
        </div>
    </section>
  )
}

export default ServiceCard
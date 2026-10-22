import { Link } from 'react-router-dom'
import styles from './ServicePreviewCard.module.css'

type ServiceCardProps = {
    tag: string,
    layout: 'mobile' | 'desktop',
    id: string,
    title: string,
    description: string,
    image: string,
    imgAlt: string,
    href: string,
}

const ServicePreviewCard = ({tag, layout, id, title, description, image, imgAlt, href}: ServiceCardProps) => {
    const imageRight = +id % 2 === 0;

    return layout === 'mobile'
    ?   
        <div id={tag} className={styles.serviceCardContainer}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={image} alt={imgAlt} aria-hidden='true' />
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.eyebrow}>{id}</div>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
                <div className={styles.linkContainer}>
                    <Link to={href} className={styles.link}>Request this service</Link>
                    <div className={styles.iconContainer}>
                        <svg className={styles.arrowRightIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#bd8b4b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14M14 7l5 5-5 5"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    :   
        imageRight
        ?   
            <div id={tag} className={styles.serviceCardContainer}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={image} alt={imgAlt} aria-hidden='true' />
                </div>
                <div className={styles.detailsContainer}>
                    <div className={styles.eyebrow}>{id}</div>
                    <div className={styles.serviceDetailsContainer}>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.description}>{description}</div>
                        <div className={styles.linkContainer}>
                            <Link to={href} className={styles.link}>Request this service</Link>
                            <div className={styles.iconContainer}>
                                <svg className={styles.arrowRightIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#bd8b4b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M5 12h14M14 7l5 5-5 5"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        :
            <div id={tag} className={styles.serviceCardContainer}>
                <div className={styles.detailsContainer}>
                    <div className={styles.eyebrow}>{id}</div>
                    <div className={styles.serviceDetailsContainer}>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.description}>{description}</div>
                        <div className={styles.linkContainer}>
                            <Link to={href} className={styles.link}>Request this service</Link>
                            <div className={styles.iconContainer}>
                                <svg className={styles.arrowRightIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#bd8b4b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M5 12h14M14 7l5 5-5 5"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={image} alt={imgAlt} aria-hidden='true' />
                </div>
            </div>
        
  
}

export default ServicePreviewCard
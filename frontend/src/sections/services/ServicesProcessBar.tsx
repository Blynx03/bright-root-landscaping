import { PageContainer } from '@/components/layout/PageContainer'
import styles from './ServicesProcessBar.module.css'
import { serviceProcess } from '@/data/serviceProcess'

const ServicesProcessBar = () => {


  return (
    <div className={styles.serviceProcessBarContainer}>
        <PageContainer className={styles.serviceProcessBarPageContainer}>
            <div className={styles.eyebrow}>Our Process</div>
            <div className={styles.title}>A simple path to a more beautiful outdoor space.</div>
            
            {/* Mobile */}
            <div className={styles.mobileProcessesContainer}>
                { serviceProcess.map(({id, image, imgAlt, title, description}) => {
                    return (
                        <div className={styles.detailContainer}>
                            <div className={styles.iconContainer}>
                                <img src={image} alt={imgAlt} className={styles.image} aria-hidden='true' />
                            </div>
                            <div className={styles.step}>{id}</div>
                            <div className={styles.processContainer}>
                                <div className={styles.processTitle}>{title}</div>
                                <div className={styles.processDescription}>{description}</div>
                            </div>
                        </div>
                    )})
                }

            </div>

            {/* Desktop */}
            <div className={styles.desktopProcessesContainer}>
                { serviceProcess.map(({id, image, imgAlt, title, description}) => {
                    return (
                        <div className={styles.detailContainer}>
                            <div className={styles.iconContainer}>
                                <img src={image} alt={imgAlt} className={styles.image} aria-hidden='true' />
                            </div>
                            <div className={styles.step}>{id}</div>
                            <div className={styles.processContainer}>
                                <div className={styles.processTitle}>{title}</div>
                                <div className={styles.description}>{description}</div>
                            </div>
                            { +id <= 2 && 
                                <div className={styles.arrowContainer}>
                                    <svg className={styles.arrowIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#bd8b4b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M5 12h14M14 7l5 5-5 5"/>
                                    </svg>
                                </div>
                            }
                        </div>
                    )
                })}
            </div>

        </PageContainer>
    </div>
  )
}

export default ServicesProcessBar
import { PageContainer } from '@/components/layout/PageContainer'
import styles from './EstimateHeroSection.module.css'
import heroImage from '@/assets/estimate-page/images/estimate-support.webp'

type EstimateHeroProps = {
    className: string,
    formMode: 'contact' | 'estimate'
}

const EstimateHeroSection = ({className = '', formMode}: EstimateHeroProps) => {
    const eyebrow = formMode === 'contact' 
                        ? 'Get in touch' 
                        : 'Request an Estimate';
    const title = formMode === 'contact' 
                        ? 'How can we help?' 
                        : 'Tell us about your outdoor space.';
    const description = formMode === 'contact' 
                        ? 'Have a question about our services or your outdoor space? Share a few details below, and our team will get back to you as soon as they are able.' 
                        : 'Share a few details about your property and project. Our team will review your request and be in touch to discuss next steps.'

  return (
    <section className={`${styles.estimateSection} ${className}`.trim()}>
        {/* mobile */}
        <div className={styles.mobileSection}>
            <PageContainer className={styles.mobilePageContainer}>
                <div className={styles.eyebrow}>{eyebrow}</div>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
            </PageContainer>
            <div className={styles.imageContainer}>
                <img src={heroImage} className={styles.image} aria-hidden='true' alt='garden' />
            </div>
        </div>

            {/* desktop */}
        <div className={styles.desktopSection}>
            <PageContainer className={styles.desktopPageContainer}>
                <div className={styles.titleContainer}>
                    <div className={styles.eyebrow}>{eyebrow}</div>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.description}>{description}</div>
                </div>
            </PageContainer>
        </div>
    </section>
  )
}

export default EstimateHeroSection
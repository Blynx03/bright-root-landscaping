import { PageContainer } from '@/components/layout/PageContainer'
import styles from './TrustBar.module.css'

const TrustBar = () => {
  return (
    <section className={styles.trustBarContainer} >

        <PageContainer className={styles.pageContainerTrustBar} >
            <div className={styles.iconTrustContainer}>
                <div className={styles.iconContainer}>
                    <svg className={styles.iconSVG} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#bd8b4b" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Leaf">
                        <path d="M20.5 3.5C12 3.7 6.4 7.1 5.2 13.1c-.7 3.8 1.8 6.7 5.5 6.2 6.2-.8 9.2-7 9.8-15.8Z"/>
                        <path d="M4 21c2.8-6.1 7-9.9 12.4-12.5"/>
                    </svg>
                </div>
                <div className={styles.trust}>Locally Owned & Operated</div>
            </div>
            <div className={styles.iconTrustContainer}>
                <div className={styles.iconContainer}>
                    <svg className={styles.iconSVG} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#bd8b4b" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Community">
                        <circle cx="12" cy="7" r="3"/>
                        <path d="M6.5 20v-2.2a5.5 5.5 0 0 1 11 0V20"/>
                        <circle cx="4.5" cy="9" r="2"/>
                        <path d="M1.5 18v-1.3a3.7 3.7 0 0 1 4.8-3.5"/>
                        <circle cx="19.5" cy="9" r="2"/>
                        <path d="M22.5 18v-1.3a3.7 3.7 0 0 0-4.8-3.5"/>
                    </svg>
                </div>
                <div className={styles.trust}>Trusted Across Durham Region</div>
            </div>

            <div className={styles.iconTrustContainer}>
                <div className={styles.iconContainer}>
                    <svg className={styles.iconSVG} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#bd8b4b" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Three leaves">
                        <path d="M12 21V9.5"/>
                        <path d="M12 14.5c-4.1.1-6.8-1.8-7.7-5.6 4-.4 6.8 1.5 7.7 5.6Z"/>
                        <path d="M12 17.2c4.2.1 6.9-1.9 7.8-5.8-4.1-.4-6.9 1.6-7.8 5.8Z"/>
                        <path d="M12 10.2C9.4 7 9.7 3.7 12.1 1c2.7 2.9 2.6 6.2-.1 9.2Z"/>
                        <path d="M7.1 10.1c2 1.1 3.6 2.6 4.9 4.4M16.9 12.8c-2 1-3.7 2.5-4.9 4.4M12.1 3.5 12 9.8"/>
                    </svg>
                </div>
                <div className={styles.trust}>Quality Work, Lasting Results</div>
            </div>

            <div className={styles.iconTrustContainer}>
                <div className={styles.iconContainer}>
                    <svg className={styles.iconSVG} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#bd8b4b" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Residential property">
                        <path d="m3 11 9-8 9 8"/>
                        <path d="M5.5 9.2V21h13V9.2"/>
                        <path d="M9.5 21v-6h5v6"/>
                    </svg>
                </div>
                <div className={styles.trust}>Residential Property Specialists</div>
            </div>
        </PageContainer>
    </section>
  )
}

export default TrustBar
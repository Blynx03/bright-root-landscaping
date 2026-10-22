import { PageContainer } from '@/components/layout/PageContainer'
import styles from './AboutBar.module.css'
import { about } from '@/data/about'

const AboutBar = () => {
  return (
    <section className={styles.aboutBarSection}>
        <PageContainer className={styles.aboutBarPageContainer}>
            <div className={styles.aboutEyebrow}>
                What guides our work
            </div>
            <div className={styles.aboutTitle}>Rooted in care, guided by purpose</div>
            <div className={styles.aboutBarCardsContainer}>
                { about.map(({id, title, description}) => {
                    return (
                        <div key={id} className={styles.aboutBarCardContainer}>
                            <div className={styles.number}>{id}</div>
                            <div className={styles.cardDetailsContainer}>
                                <div className={styles.title}>{title}</div>
                                <div className={styles.description}>{description}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </PageContainer>
    </section>
  )
}

export default AboutBar
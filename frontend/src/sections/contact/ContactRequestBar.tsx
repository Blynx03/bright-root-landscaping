import ButtonLink from '@/components/ui/ButtonLink'
import styles from './ContactRequestBar.module.css'
import bgImage from '@/assets/about-page/images/Dappled Ontario Shade Garden Path.png'
import { PageContainer } from '@/components/layout/PageContainer'

const ContactRequestBar = () => {
  return (
    <div className={styles.contactRequestBarContainer}>
        <PageContainer className={styles.requestBarPageContainer}>
            <div className={styles.title}>Beautiful spaces start with a conversation.</div>
            <ButtonLink page='estimate' text='Request an Estimate' className={styles.estimateButton} />
        </PageContainer>
        <div className={styles.backgroundImageContainer}>
            <img src={bgImage} className={styles.bgImage} alt='background-image' aria-hidden='true' />
        </div>
        <div className={styles.backgroundEffect}></div>
     </div>
  )
}

export default ContactRequestBar
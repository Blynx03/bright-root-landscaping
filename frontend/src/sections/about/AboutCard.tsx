import { PageContainer } from '@/components/layout/PageContainer'
import styles from './AboutCard.module.css'
import storyImage from '@/assets/about-page/images/Dappled Ontario Shade Garden Path.png'

const AboutCard = () => {
  return (
    <div id='our-story' className={styles.aboutCardsContainer}>
        <PageContainer className={styles.aboutCardPageContainer}>
            <div className={styles.aboutCardContainer}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={storyImage} alt='about-story-image' aria-hidden='true' />
                </div>
                <div className={styles.detailsContainer}>
                    <div className={styles.eyebrow}>Our Story</div>
                    <div className={styles.title}>Thoughtful landscapes begin with listening.</div>
                    <p className={styles.description}>BrightRoot Lawn & Landscape is a local Durham Region 
                        company built on a simple belief: great landscapes start with understanding how you live, 
                        what you value and what your outdoor space can become.
                    </p>
                    <p className={styles.description}>We combine attentive planning, honest communication and practical 
                        horticultural care to create and maintain landscapes that feel natural, personal and enduring.</p>
                </div>
            </div>
        </PageContainer>
    </div>
  )
}

export default AboutCard
import { PageContainer } from "@/components/layout/PageContainer"
import styles from "./EstimateCtaSection.module.css"
import SectionHeading from "@/components/ui/SectionHeading"
import ctaImage from "@/assets/home-page/images/cta-evening-garden.webp"

const EstimateCtaSection = () => {
  return (
    <div className={styles.estimateSection}>
        <PageContainer className={styles.estimatePageContainer}>
            <div className={styles.estimateHeadingSectionContainer}>
                <SectionHeading
                    eyebrow="Ready to get started?"
                    title="Let's create a yard you'll love coming home to."
                    className={styles.estimateHeadingContainer}
                    layout="stacked"
                    section="cta"
                    buttons
                    locations
                />
                </div>
            <div className={styles.imageContainer}>
                <img src={ctaImage} className={styles.image} alt='cta-garden' aria-hidden='true' />
            </div>
        </PageContainer> 
    </div>
  )
}

export default EstimateCtaSection
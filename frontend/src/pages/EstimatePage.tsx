import styles from './EstimatePage.module.css'
import EstimateDetailsSection from '@/sections/estimate/EstimateDetailsSection'
import EstimateHeroSection from '@/sections/estimate/EstimateHeroSection'
import EstimateSideBar from '@/sections/estimate/EstimateSideBar'
import bgImage from '@/assets/home-page/images/story-pathway.png'
import { PageContainer } from '@/components/layout/PageContainer'

export type EstimatePageProps = {
  formMode: 'contact' | 'estimate';
}


const EstimatePage = ({formMode}: EstimatePageProps) => {
  return (
    <div className={styles.estimateContainer}>
      {/* mobile */}
      <div className={styles.mobileContainer}>
        <EstimateHeroSection className={styles.heroSectionMain} formMode={formMode}/>
        <EstimateDetailsSection className={styles.detailSectionMain} formMode={formMode}/>
        <EstimateSideBar className={styles.sideBarMain} />
      </div>
      
      {/* desktop */}
      <div className={styles.desktopContainer}>
        <img src={bgImage} className={styles.image} alt='background garden' aira-hidden='true' />
        <EstimateHeroSection className={styles.heroSectionMain} formMode={formMode}/>
        <PageContainer className={styles.detailsAndSideBarPageContainer}>
          <EstimateDetailsSection className={styles.detailSectionMain} formMode={formMode}/>
          <EstimateSideBar className={styles.sideBarMain} />
        </PageContainer>
      </div>
    </div>
  )
}

export default EstimatePage
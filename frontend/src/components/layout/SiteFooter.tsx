import { Link } from 'react-router-dom'
import { PageContainer } from './PageContainer'
import styles from './SiteFooter.module.css'
import logoSVG from '@/assets/home-page/brand/brightroot-logo.svg'
import ButtonLink from '../ui/ButtonLink'

const SiteFooter = () => {
  return (
    <footer className={styles.siteFooter} >


          {/* Desktop */}
          <div className={styles.desktopFooter}>
            <PageContainer className={styles.footerPageContainer}>
              <div className={styles.headerContainer}>
                <div className={styles.headerInfoContainer}>
                  <div className={styles.headerInfoEyebrow}>READY TO GET STARTED?</div>
                  <div className={styles.headerInfo}>Let's talk about your property.</div>
                </div>
                <ButtonLink page='estimate' text='Request a Free Estimate' className={styles.estimateButton}/>
              </div>

              <div className={styles.detailsContainer}>

                <div className={styles.detailInfoContainer}>
                  <div className={styles.companyLogoContainer}>
                    <img src={logoSVG} className={styles.logo} />
                  </div>
                  <p className={styles.detailInfo}>Thoughtful residential landscaping, lawn care and seasonal maintenance across Durham Region.</p>
                </div>

                <div className={styles.detailExploreContainer}>
                  <div className={styles.detailTitle}>EXPLORE</div>
                  <div className={styles.detailExploreChoicesContainer}>
                    <div className={styles.exploreChoices}>Services</div>
                    <div className={styles.exploreChoices}>Our Work</div>
                    <div className={styles.exploreChoices}>About</div>
                    <div className={styles.exploreChoices}>Contact</div>
                  </div>
                </div>

                <div className={styles.detailAreasContainer}>
                  <div className={styles.detailTitle}>SERVICE AREAS</div>
                  <div className={styles.detailServiceAreasContainer}>
                    <div className={styles.detailServiceArea}>Pickering</div>
                    <div className={styles.detailServiceArea}>Ajax</div>
                    <div className={styles.detailServiceArea}>Whitby</div>
                    <div className={styles.detailServiceArea}>Oshawa</div>
                    <div className={styles.detailServiceArea}>Clarington</div>
                  </div>
                </div>

                <div className={styles.detailContactContainer}>
                  <div className={styles.detailTitle}>CONTACT</div>
                  <div className={styles.detailPhoneAreaContainer}>
                    <div className={styles.detailPhoneEmailContainer}>
                      <div className={styles.detailPhoneContainer}>
                        <div className={styles.phoneIconContainer}>
                          <svg className={styles.phoneIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#bd8b4b" stroke="#d9ddcf" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Telephone">
                            <path d="M5.2 3.5 8 3l2 4.7-2.1 1.7a14.5 14.5 0 0 0 6.7 6.7l1.7-2.1 4.7 2-.5 2.8a2 2 0 0 1-2 1.7C10.2 20.5 3.5 13.8 3.5 5.5a2 2 0 0 1 1.7-2Z"/>
                          </svg>
                        </div>
                        <a href='tel:+19052420064'><span className={styles.phone}>(905) 242-0064</span></a>
                      </div>
                      <div className={styles.detailEmailContainer}>
                        <div className={styles.emailIconContainer}>
                          <svg className={styles.emailIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#bd8b4b" stroke="#d9ddcf" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Email">
                            <rect x="3" y="5" width="18" height="14" rx="2"/>
                            <path d="m4 7 8 6 8-6"/>
                          </svg>
                        </div>
                        <Link to={'/contact/inquiry'} className={`${styles.email} ${styles.emailLink}`}>info@brightroot.sample</Link>
                      </div>
                    </div>
                    <div className={styles.detailArea}>Durham Region, Ontario</div>
                  </div>
                </div>
              </div>
            </PageContainer>
            <div className={styles.legalBar}>
              <div className={styles.legalContent}>
                <div className={styles.copyright}>&copy; 2026 BrightRoot Lawn & Landscape.</div>
                <div className={styles.disclaimer}>Blynx03 Portfolio concept created for demonstration purposes.</div>
              </div>           
            </div>
          </div>

          {/* Mobile */}
          <div className={styles.mobileFooter}>
            <PageContainer className={styles.footerPageContainer}>

              <Link to='/' className={styles.logoContainer}>
                <div className={styles.title}>BrightRoot</div>
                <div className={styles.subTitle}>LAWN & LANDSCAPE</div>
              </Link>
              <p className={styles.description}>Thougthful residential landscaping, lawn care and seasonal maintenance across Durham Region</p>
              <div className={styles.lead}>EXPLORE</div>
              <div className={styles.contentContainer}>
                <Link to='/services' className={styles.contentList}>Services</Link>
                <Link to='/projects' className={styles.contentList}>Our Work</Link>
                <Link to='/about' className={styles.contentList}>About</Link>
                <Link to='/contact' className={styles.contentList}>Contact</Link>
              </div>
              <div className={styles.lead}>LET'S TALK ABOUT YOUR PROPERTY.</div>
              <div className={styles.extraContainer}>
                <div className={styles.extra}>(905) 242-0064</div>
                <Link to={'/contact/inquiry'} className={`${styles.extra} ${styles.emailLink}`}>info@brightroot.sample</Link>
                <div className={styles.extra}>Request a Free Estimate</div>
                <div className={styles.extra}>Pickering &middot; Ajax &middot; Whitby &middot; Oshawa &middot; Clarington</div>
              </div>
            </PageContainer>
            <div className={styles.legalBar}>
              <div className={styles.legalContent}>
                <div className={styles.copyright}>&copy; 2026 BrightRoot Lawn & Landscape.</div>
                <div className={styles.disclaimer}>Blynx03 Portfolio concept created for demonstration purposes.</div>
              </div>           
            </div>
          </div>
    </footer>

  )
}

export default SiteFooter
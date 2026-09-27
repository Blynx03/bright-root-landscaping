import { PageContainer } from './PageContainer'
import styles from './SiteFooter.module.css'

const SiteFooter = () => {
  return (
    <PageContainer className={styles.footerContainer}>
        <div className={styles.footerTitle}></div>
        <p className={styles.footerParagraph}>Beautiful yards. Thoughtfully cared for.</p>
        <p className={styles.footerParagraph}>Portfolio concept created for demonstration purposes.</p>
        <div className={styles.footerSectionContainer}>
            <div className={styles.footerSectionTitle}>Service Area</div>
            <p className={styles.footerSectionContent}>Pickering</p>
            <p className={styles.footerSectionContent}>Ajax</p>
            <p className={styles.footerSectionContent}>Whitby</p>
            <p className={styles.footerSectionContent}>Oshawa</p>
            <p className={styles.footerSectionContent}>Bowmanville</p>
        </div>
        <div className={styles.footerSectionContainer}>
            <div className={styles.footerSectionTitle}>Contact</div>
            <p className={styles.footerSectionContent}>(905) 555-0148</p>
            <p className={styles.footerSectionContent}>info@brightroot.com</p>
            <p className={styles.footerSectionContent}>Mon-Sat : 8AM - 6PM</p>
        </div>
    </PageContainer>
  )
}

export default SiteFooter
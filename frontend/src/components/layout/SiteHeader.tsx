import { PageContainer } from './PageContainer';
import styles from './SiteHeader.module.css';
import { NavLink, Link} from 'react-router-dom';
import logoSVG from '@/assets/brand/brightroot-logo.svg'
import phoneSVG from '@/assets/decorative/phone.svg'
import menuSVG from '@/assets/decorative/menu.svg'
import ButtonLink from '@/components/ui/ButtonLink'


function SiteHeader() {

    return (
        <PageContainer>
            <div className={styles.desktopHeader}>
                <Link to='/' className={styles.desktopLogoContainer}>
                    <img src={logoSVG} className={styles.desktopLogo} alt='BrightRoot logo' />
                </Link>
                <nav className={styles.desktopNav}>
                    <NavLink to='/services' className={ ( {isActive}) =>  { isActive ? `${styles.desktopNavLink} ${styles.desktopNavActive}` : `${styles.desktopNavLink}`}} />
                    <NavLink to='/projects' className={ ( {isActive}) =>  { isActive ? `${styles.desktopNavLink} ${styles.desktopNavActive}` : `${styles.desktopNavLink}`}} />
                    <NavLink to='/about' className={ ( {isActive}) =>  { isActive ? `${styles.desktopNavLink} ${styles.desktopNavActive}` : `${styles.desktopNavLink}`}} />
                    <NavLink to='/contact' className={ ( {isActive}) =>  { isActive ? `${styles.desktopNavLink} ${styles.desktopNavActive}` : `${styles.desktopNavLink}`}} />
                </nav>
          
                <div className={styles.desktopContact}>
                    <div className={styles.desktopPhoneContainer}>
                        <img src={phoneSVG} alt='Phone icon' />
                        <span>(905) 242-0064</span>
                    </div>
                    <ButtonLink page='estimate' text='Request a Free Estimate' className='estimateBtn'/>
                </div>
            </div>
            <div className={styles.mobileHeader}>
                <Link to='/' className={styles.mobileLogoContainer}>
                    <img className={styles.mobileLogo} alt='BrightRoot Logo' />
                </Link>
                <div className={styles.mobileContact}>
                    <div className={styles.mobilePhoneContainer}>
                        <img src={phoneSVG} alt='Phone icon' />
                        <span>(905) 242-0064</span>
                    </div>
                </div>
                <div className={styles.mobileMenuIcon}>
                    <img src={menuSVG} alt='Menu Icon' />
                </div>
            </div>
        </PageContainer>
    )
}

export default SiteHeader
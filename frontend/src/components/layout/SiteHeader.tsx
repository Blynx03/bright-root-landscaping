import { PageContainer } from './PageContainer';
import styles from './SiteHeader.module.css';
import { NavLink, Link} from 'react-router-dom';
import logoSVG from '@/assets/home-page/brand/brightroot-logo.svg'
import menuSVG from '@/assets/home-page/icons/menu.svg'
import closeSVG from '@/assets/home-page/icons/close.svg'
import ButtonLink from '@/components/ui/ButtonLink'
import { useState } from 'react';


function SiteHeader() {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    return (
        <header className={styles.siteHeader}>
            <PageContainer >

                {/* Mobile */}
                <div className={styles.mobileHeader}>
                    <Link to='/' className={styles.mobileLogoContainer}>
                        <img src={logoSVG} className={styles.mobileLogo} alt='BrightRoot Logo' />
                    </Link>

                    <div className={styles.mobileContactContainer}>
                        <a href="tel:+19052420064" className={styles.mobilePhone}>
                            <svg className={styles.phoneIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#bd8b4b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Telephone">
                                <path d="M5.2 3.5 8 3l2 4.7-2.1 1.7a14.5 14.5 0 0 0 6.7 6.7l1.7-2.1 4.7 2-.5 2.8a2 2 0 0 1-2 1.7C10.2 20.5 3.5 13.8 3.5 5.5a2 2 0 0 1 1.7-2Z"/>
                            </svg>
                        </a>
                    </div>

                    <button className={styles.mobileMenuButton} onClick={() => setIsMenuOpen((current) => !current)} aria-expanded={isMenuOpen} aria-controls='mobile-navigation' aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} >
                        <img className={styles.menuIcon} src={isMenuOpen ? closeSVG : menuSVG} alt='' aria-hidden='true' />
                    </button>
                </div>

                {/* Desktop */}
                <div className={styles.desktopHeader}>
                    <Link to='/' className={styles.desktopLogoContainer}>
                        <img src={logoSVG} className={styles.desktopLogo} alt='BrightRoot logo' />
                    </Link>
                    <nav className={styles.desktopNav}>
                        <NavLink to='/' className={ ({isActive}) => isActive ? `${styles.desktopNavLink} ${styles.desktopNavActive}` : `${styles.desktopNavLink}`} >
                            Home
                        </NavLink>
                        <NavLink to='/services' className={ ({isActive}) => isActive ? `${styles.desktopNavLink} ${styles.desktopNavActive}` : `${styles.desktopNavLink}`} >
                            Services
                        </NavLink>
                        <NavLink to='/projects' className={ ({isActive}) => isActive ? `${styles.desktopNavLink} ${styles.desktopNavActive}` : `${styles.desktopNavLink}`} >
                            Our Work
                        </NavLink>
                        <NavLink to='/about' className={ ({isActive}) => isActive ? `${styles.desktopNavLink} ${styles.desktopNavActive}` : `${styles.desktopNavLink}`} >
                            About
                        </NavLink>
                        <NavLink to='/contact' className={ ({isActive}) => isActive ? `${styles.desktopNavLink} ${styles.desktopNavActive}` : `${styles.desktopNavLink}`} >
                            Contact
                        </NavLink>
                    </nav>
            
                    <div className={styles.desktopContactContainer}>
                        <div className={styles.desktopPhoneContainer}>
                            <div className={styles.phoneIconContainer}>
                                <svg className={styles.phoneIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#bd8b4b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Telephone">
                                    <path d="M5.2 3.5 8 3l2 4.7-2.1 1.7a14.5 14.5 0 0 0 6.7 6.7l1.7-2.1 4.7 2-.5 2.8a2 2 0 0 1-2 1.7C10.2 20.5 3.5 13.8 3.5 5.5a2 2 0 0 1 1.7-2Z"/>
                                </svg>
                            </div>
                            {/* <img src={phoneSVG} className={styles.phoneIcon} alt='Phone icon' /> */}
                            <a href="tel:+19052420064" className={styles.desktopPhoneLink}><span className={styles.spanPhoneNumber}>(905) 242-0064</span></a>
                        </div>
                        <ButtonLink page='estimate' text='Request a Free Estimate' className={styles.estimateButton}/>
                    </div>
                </div>

            </PageContainer>

                { isMenuOpen && 
                    <nav id='mobile-navigation' className={ styles.mobileContentContainer } aria-label='Mobile navigation'>
                        <NavLink to='/services' className={ styles.mobileContentLink } onClick={() => setIsMenuOpen(false)}>
                            Services
                            </NavLink>
                        <NavLink to='/projects' className={ styles.mobileContentLink } onClick={() => setIsMenuOpen(false)}>
                            Our Work
                        </NavLink>
                        <NavLink to='/about' className={ styles.mobileContentLink } onClick={() => setIsMenuOpen(false)}>
                            About
                        </NavLink>
                        <NavLink to='/contact' className={ styles.mobileContentLink } onClick={() => setIsMenuOpen(false)}>
                            Contact
                        </NavLink>
                    </nav>
                }
        </header>
    )
}

export default SiteHeader
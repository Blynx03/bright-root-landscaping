import { PageContainer } from '@/components/layout/PageContainer'
import styles from './ContactDetailsSection.module.css'
import phoneIcon from '@/assets/home-page/icons/phone.svg'
import emailIcon from '@/assets/home-page/icons/email.svg'
import locationIcon from '@/assets/home-page/icons/location.svg'
import ButtonLink from '@/components/ui/ButtonLink'
import leavesImage from '@/assets/home-page/decorative/botanical-branch-right.svg'
import { Link } from 'react-router-dom'

export const ContactDetailsSection = () => {

  return (
    <section className={styles.contactDetailsSection}>
        <PageContainer className={styles.contactDetailsPageContainer}>
            <div className={styles.contactDetailsContainer}>
                <div className={styles.sectionTitle}>Start a conversation</div>
                <p className={styles.description}>Have a question, want to discuss a project, or need guidance on what's possible? We'd love to hear from you.</p>
                <div className={styles.contactContainer}>

                    {/* phone */}
                    <div className={styles.infoContainer}>
                        <div className={styles.iconContainer}>
                            <img className={styles.icon} src={phoneIcon} alt='phone' aria-hidden='true'/>
                        </div>
                        <div className={styles.detailsContainer}>
                            <div className={styles.title}>Phone</div>
                            <a href={"tel:+19055550123"} className={styles.telLink}><div className={styles.info}>(905) 555-0123</div></a>
                        </div>
                    </div>

                    {/* email */}
                    <div className={styles.infoContainer}>
                        <div className={styles.iconContainer}>
                            <img className={styles.icon} src={emailIcon} alt='email' aria-hidden='true'/>
                        </div>
                        <div className={styles.detailsContainer}>
                            <div className={styles.title}>Email</div>
                            <div className={styles.info}><Link to={'/contact/inquiry'} className={styles.emailLink}>info@brightroot.sample</Link></div>
                        </div>
                    </div>

                    {/* service area */}
                    <div className={styles.infoContainer}>
                        <div className={styles.iconContainer}>
                            <img className={styles.icon} src={locationIcon} alt='location' aria-hidden='true'/>
                        </div>
                        <div className={styles.detailsContainer}>
                            <div className={styles.title}>Service Area</div>
                            <div className={styles.info}>Pickering, Ajax, Whitby, Oshawa and Clarington</div>
                        </div>
                    </div>

                    {/* hours */}
                    <div className={styles.infoContainer}>
                        <div className={styles.iconContainer}>
                            <svg
                                className={styles.icon}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="#fffdf8"
                                stroke="#bd8b4b"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <circle cx="12" cy="12" r="9" />
                                <path d="M12 7v5l3.5 2" />
                            </svg>
                        </div>
                        <div className={styles.detailsContainer}>
                            <div className={styles.title}>Business Hours</div>
                            <div className={styles.info}>Monday - Friday, 8:00 a.m. - 5:00 p.m.</div>
                            <div className={styles.info}>Saturday by appointment</div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={styles.planningContainer}>
                <div className={styles.planningTitle}>Planning a project?</div>
                <p className={styles.planningInfo}>Tell us about your vision, and we'll provide a detailed estimate tailored to your property and goals.</p>
                <p className={styles.planningInfo}>Visit our estimate page to share the details and get started.</p>
                <ButtonLink page='estimate' text='Request an Estimate' className={styles.estimateButton} />
                <div className={styles.leavesContainer}>
                    <img src={leavesImage} className={styles.leaves} alt='leaves' aira-hidden='true' />
                </div>
            </div>
        </PageContainer>
    </section>
  )
}

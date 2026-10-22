import { NavLink } from 'react-router-dom'
import styles from './SectionHeading.module.css'
import ButtonLink from './ButtonLink'

type SectionHeadingProps = {
    eyebrow: string,
    title: string,
    buttons?: boolean,
    locations?: boolean,
    description?: string,
    className?: string,
    section?: 'default' | 'story' | 'hero' | 'cta' | 'transformation',
    variant?: 'default' | 'inverse',
    layout?: 'responsive' | 'stacked',
    eyebrowLayout?: 'defaultEyebrow' | 'noEyebrow',
    projectLink?: boolean,
    projectText?: string,
    projectHref?: string
}

const SectionHeading = ({eyebrow, title, buttons = false, locations = false , description, className = '', section = 'default', variant = 'default', layout = 'responsive', eyebrowLayout='defaultEyebrow', projectLink = false, projectText = '', projectHref = ''}: SectionHeadingProps) => {
  return (
    <div className={`${styles.sectionHeading} ${styles[section]} ${styles[variant]} ${styles[layout]} ${styles[eyebrowLayout]} ${className}`.trim()}>
      {/* Mobile */}
      <div className={styles.mobileHeading}>
        { eyebrow && (
          <div className={styles.eyebrow}>{eyebrow}</div>
        )}
        
        <h2 className={styles.title}>{title}</h2>
        
        { buttons && (
          <div className={styles.buttonsContainer}>
            <ButtonLink
              page='estimate'
              text='Request a Free Estimate'
              className={styles.estimateButton}
            />
            <ButtonLink
              page='services'
              text='Explore Our Services'
              className={styles.servicesButton}
            />
          </div>
        )}

        { locations && (
          <div className={styles.locations}>
            Serving Pickering, Ajax, Whitby, Oshawa & Clarington
          </div>
        )}

        { description && (
          <p className={styles.description}>{description}</p>
        )}

      </div>
      
      {/* Desktop */}
      <div className={styles.desktopHeading}>
        { eyebrow && (
          <div className={styles.eyebrow}>{eyebrow}</div>
        )}
        <div className={styles.titleDescriptionContainer}>
          <h2 className={styles.title}>{title}</h2>
          { description && (
            <p className={styles.description}>{description}</p>
          )}
        </div>
      
        { buttons && (
          <div className={styles.buttonsContainer}>
            <ButtonLink
              page='estimate'
              text='Request a Free Estimate'
              className={styles.estimateButton}
            />
            <ButtonLink
              page='services'
              text='Explore Our Services'
              className={styles.servicesButton}
            />
          </div>
        )}

        { locations && (
          <div className={styles.areasContainer}>
            <div className={styles.iconContainer}>
              <svg className={styles.areaIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#bd8b4b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Location">
                  <path d="M20 10c0 5.5-8 11-8 11s-8-5.5-8-11a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>
              </svg>
            </div>
            <div className={styles.locations}>
              Serving Pickering, Ajax, Whitby, Oshawa & Clarington
            </div>
          </div>
        )}

        { projectLink && (
          <div className={styles.linkContainer}>
            <NavLink to={projectHref} className={styles.link}>{projectText}</NavLink> 
            <svg className={styles.arrowIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#bd8b4b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M14 7l5 5-5 5"/>
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}

export default SectionHeading
import styles from './TestimonialCard.module.css'

export type TestimonialCardProps = {
    layoutColors: 'mobileColors' | 'desktopColors',
    className?: string,
    eyebrow?: string,
    quote?: string,
    quoteMobile?: string,
    customer: string,
    location: string,
    service?: string,
    desktopView?: boolean,

}
const TestimonialCard = ({layoutColors = 'mobileColors', className='', eyebrow='', quote, quoteMobile, customer, location, service, desktopView=false}: TestimonialCardProps) => {
  return (
    <div className={`${styles.cardContainer} ${styles[layoutColors]} ${className}`.trim()}>
        
        { eyebrow &&
            <div className={styles.eyebrow}>
                {eyebrow}
            </div>
        }
        <blockquote className={styles.quoteContainer}>
            <span className={styles.openQuoteIconContainer}>
                <svg className={styles.quoteIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="#436B4F" role="img" aria-label="Quotation mark">
                    <path d="M20 11C11 14 7 21 7 31c0 5 3 8 7 8 4 0 7-3 7-7 0-4-3-7-7-7h-1c1-5 4-8 9-10l-2-4Zm21 0c-9 3-13 10-13 20 0 5 3 8 7 8 4 0 7-3 7-7 0-4-3-7-7-7h-1c1-5 4-8 9-10l-2-4Z"/>
                </svg>
            </span>
            <span className={styles.quote}>{desktopView ? quote : quoteMobile}</span>
            <span className={styles.closeQuoteIconContainer}>
                <svg className={styles.quoteIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="#436B4F" role="img" aria-label="Quotation mark">
                    <path d="M20 11C11 14 7 21 7 31c0 5 3 8 7 8 4 0 7-3 7-7 0-4-3-7-7-7h-1c1-5 4-8 9-10l-2-4Zm21 0c-9 3-13 10-13 20 0 5 3 8 7 8 4 0 7-3 7-7 0-4-3-7-7-7h-1c1-5 4-8 9-10l-2-4Z"/>
                </svg>
            </span>
        </blockquote>
        { !desktopView
            ? <div className={styles.nameAddressContainer}>
                <div className={styles.nameAndAddress}>{`${customer} \u00B7 ${location}`}</div>
            </div>

            : <div className={styles.nameAndAddressAndServicesContainer}>
                <div className={styles.customer}>{`-- ${customer}`}</div>
                <div className={styles.location}>{`${location}`}</div>
                <div className={styles.service}>{`${service}`}</div>
            </div>
        }
    </div>
  )
}

export default TestimonialCard
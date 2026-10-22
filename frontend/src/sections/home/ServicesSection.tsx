import styles from './ServicesSection.module.css'
import SectionHeading from '@/components/ui/SectionHeading'
import { PageContainer } from '@/components/layout/PageContainer'
import ServiceCard from '@/components/ui/ServiceCard'
import { services } from '@/data/services'


const ServicesSection = () => {
  return (
    <section className={styles.servicesSection}>
        <PageContainer className={styles.pageContainerServices}>
            <SectionHeading
                layout='responsive'
                eyebrow='Our Services'
                title='Complete care for every season.'
                description='From inspired landscape design to reliable lawn care and seasonal maintenance, we help you enjoy a helathier, more beautiful property - all year long.'
                className={styles.heading}
            />
            <div className={styles.serviceCardsContainer}>
            { services.map((service,i) => 
                <ServiceCard 
                    id={service.id}
                    key={`service${i}`}
                    image={service.image}
                    alt={service.id}
                    title={service.title}
                    description={service.description}
                    link={service.href}
                />
            )}
            </div>

        </PageContainer>
    </section>
  )
}

export default ServicesSection
import { servicesPage } from '@/data/servicesPage'
import styles from './ServicesDetails.module.css'
import ServicePreviewCard from '@/components/layout/ServicePreviewCard'
import { PageContainer } from '@/components/layout/PageContainer'

const ServicesDetails = () => {

    const serviceDetails = (layout: 'mobile' | 'desktop') => {
        return (
            servicesPage.map((service) => {
                return (
                    <ServicePreviewCard
                        key={service.id}
                        tag={service.tag}
                        layout={layout}
                        id={service.id}
                        title={service.title}
                        description={service.description}
                        image={service.image}
                        imgAlt={service.imgAlt}
                        href={service.href}
                    />
                )
            })
        )
    }

  return (
    <div className={styles.detailsContainer}>

        {/* Mobile */}
        <PageContainer className={styles.mobilePageContainer}>
            {/* <div className={styles.servicesCardsContainer}> */}
                { serviceDetails('mobile') }
            {/* </div> */}
        </PageContainer>

        {/* Desktop */}
        <PageContainer className={styles.desktopPageContainer}>
            {/* <div className={styles.servicesCardsContainer}> */}
                { serviceDetails('desktop') }
            {/* </div> */}
        </PageContainer>

    </div>
  )
}

export default ServicesDetails
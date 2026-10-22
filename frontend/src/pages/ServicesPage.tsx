import ServicesDetails from '@/sections/services/ServicesDetails'
import ServicesHeroSection from '@/sections/services/ServicesHeroSection'
import ServicesProcessBar from '@/sections/services/ServicesProcessBar'


const ServicesPage = () => {
    return (
        <>
            <ServicesHeroSection />
            <ServicesDetails />
            <ServicesProcessBar />
        </>
    )
}

export default ServicesPage
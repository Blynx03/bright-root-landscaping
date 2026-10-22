import landscapeImage from '@/assets/home-page/images/service-landscape-design.webp'
import lawnImage from '@/assets/home-page/images/service-lawn-garden-care.webp'
import seasonalImage from '@/assets/home-page/images/service-seasonal-maintenance.webp'

export const services = [
    {
        id: 'landscape-design',
        title: 'Landscape Design',
        description: 'Thoughtful, functional designs that bring out the best in your property',
        image: landscapeImage,
        href: '/services#landscape-design',
    },
    {
        id: 'lawn-and-garden-care',
        title: 'Lawn & Garden Care',
        description: 'Reliable care that keeps lawns healthy and gardens looking their best.',
        image: lawnImage,
        href: '/services#lawn-and-garden-care',
    },    
    {
        id: 'seasonal-cleanup',
        title: 'Seasonal Maintenance',
        description: 'Timely spring and fall service to prepare your property for every season.',
        image: seasonalImage,
        href: '/services#seasonal-cleanup',
    }
]
import landscapeImage from '@/assets/service-page/images/landscape-design.webp'
import gardenImage from '@/assets/service-page/images/garden-installation.webp'
import lawnImage from '@/assets/service-page/images/lawn-garden-care.webp'
import seasonalImage from '@/assets/service-page/images/seasonal-cleanup.webp'
import propertyImage from '@/assets/service-page/images/property-maintenance.webp'

export const servicesPage = [
    {
        id: '01',
        tag: 'ladnscape-design',
        title: 'Landscape Design',
        description: 'Custom designs that blend natural beauty with how you live, creating outdoor spaces that feel timeless and intentional.',
        image: landscapeImage,
        imgAlt: 'landscape-design',
        href: '/contact?service=landscape-design'
    },
    {
        id: '02',
        tag: 'garden-installation',
        title: 'Garden Installation',
        description: 'Expert installation of trees, plants, and refined outdoor features that bring your design to life.',
        image: gardenImage,
        imgAlt: 'garden-installation',
        href: '/contact?service=garden-installation'
    },
    {
        id: '03',
        tag: 'lawn-and-garden-care',
        title: 'Lawn & Garden Care',
        description: 'Ongoing care that keeps your landscape healthy, vibrant, and looking its best through every season.',
        image: lawnImage,
        imgAlt: 'lawn-and-garden-care',
        href: '/contact?service=lawn-garden-care'
    },
    {
        id: '04',
        tag: 'seasonal-cleanup',
        title: 'Seasonal Cleanup',
        description: "Thoughtful seasonal services to refresh your property and prepare it for what's next",
        image: seasonalImage,
        imgAlt: 'seasonal-cleanup',
        href: '/contact?service=seasonal-cleanup'
    },
    {
        id: '05',
        tag: 'property-maintenance',
        title: 'Property Maintenance',
        description: 'Reliable, detail-focused maintenance for beautiful, well-cared-for outdoor spaces year-round.',
        image: propertyImage,
        imgAlt: 'property-maintenance',
        href: '/contact?service=property-maintenance'
    },


]
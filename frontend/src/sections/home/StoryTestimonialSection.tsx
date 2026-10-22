import { PageContainer } from '@/components/layout/PageContainer'
import styles from './StoryTestimonialSection.module.css'
import SectionHeading from '@/components/ui/SectionHeading'
import storyImage from '@/assets/home-page/images/story-front-entrance.webp'
import TestimonialCard from '@/components/ui/TestimonialCard'
import storyPathwayImage from '@/assets/home-page/images/story-pathway.png'
import { testimonials } from '@/data/testimonials'
import { useState } from 'react'
import rightArrow from '@/assets/home-page/icons/chevron-right.svg'
import leftArrow from '@/assets/home-page/icons/chevron-left.svg'

const StoryTestimonialSection = () => {
    const [ carouselNumber, setCarouselNumber ] = useState(0);
 
    const testimonialCards = testimonials.map((testimonial, i) => {
        return (
            <TestimonialCard 
                key={`testimonial.${i}`}
                layoutColors='desktopColors'
                className={styles.testimonialCard}
                quote={testimonial.quote}
                customer={testimonial.customer}
                location={testimonial.location}
                service={testimonial.service}
                desktopView={true}
            />
        )
    });
        
    const carousels = testimonials.map((_, i) => {
        return (
            <div id={`carousel${i}`} key={i} className={styles.dotIconContainer}>
                <svg className={styles.dotSVG} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="6.5" fill={carouselNumber === i ? "#BD8B4B" : "#d9ddcf"} stroke="#d9ddcf" strokeWidth="1.5"/>
                </svg>
            </div>
        )
    });


    const handleArrowClick = (direction: 'left' | 'right') => {
        const num: number = carouselNumber;
        const length = testimonials.length;
        
        if ( direction === 'left' ) {
            if ( num <= 0 ) {
                setCarouselNumber(0);
            } else {
                setCarouselNumber(num - 1);
            }
        } else {
            if ( num >= length - 1 ) {
                setCarouselNumber(length - 1);
            } else {
                setCarouselNumber(num + 1);
            }
        }
    }

    return (
        <section className={styles.storyTestimonialSection}>

            {/* Mobile */}
            <div className={styles.mobileSection}>
                <PageContainer className={styles.storyPageContainer}>
                    <SectionHeading 
                        variant='inverse'
                        eyebrow='A Local Company Rooted In Community'
                        eyebrowLayout='noEyebrow'
                        title='More than landscapes. Stronger communities.'
                        description='BrightRoot brings thoughtful care, honest service, and lasting craftsmanship to homes across Durham Region.'
                        projectLink
                        projectHref='/story'
                        projectText='Our Story'
                    />
                    <div className={styles.imageTestimonialContainer}>
                        <img className={styles.storyImage} src={storyImage} alt='front-entrance' aria-hidden='true' />
                        <TestimonialCard 
                            layoutColors='mobileColors'
                            eyebrow='Sample Testimonial'
                            quoteMobile='The care and attention transformed our yard into a space our family truly enjoys.'
                            customer='Homeowner'
                            location='Durham Region'
                            />
                    </div>
                </PageContainer>
            </div>

            {/* Desktop */}
            <div className={styles.desktopSection}>
                <PageContainer className={styles.storyPageContainer}>
                    <div className={styles.headingAndImageContainer}>
                        <SectionHeading
                            variant='inverse'
                            layout='stacked'
                            eyebrow='A Local Company Rooted in Community'
                            section='story'
                            title='More than landscapes. Stronger communities'
                            description='At BrightRoot Lawn & Landscape, we believe great outdoor spaces do more than look good - they bring people together, add lasting value, and make our neighbourhoods healthier, happier places to live.'
                            className={styles.storyHeading}
                            projectLink
                            projectHref='/about#our-story'
                            projectText='Our Story'
                        />
                        <div className={styles.imageContainer}>
                            <img className={styles.storyImage} src={storyPathwayImage} alt='pathway' aira-hidden='true' />
                        </div>
                    </div>

                    <div className={styles.testimonialContainer}>
                        {/* Testimonial Card */}                    
                        { testimonialCards[carouselNumber] }

                        {/* Carousel */}
                        <div className={styles.carouselContainer}>
                            <div className={styles.carouselDotsContainer}>
                                { carousels }
                            </div>

                            <div className={styles.arrowContainer}>
                                <div className={styles.iconContainer}>
                                    <img src={leftArrow} className={styles.arrowIcon} alt='left-arrow' aira-hidden='true' onClick={() => handleArrowClick('left')}/>
                                </div>
                                <div className={styles.iconContainer}>
                                    <img src={rightArrow} className={styles.arrowIcon} alt='right-arrow' aira-hidden='true' onClick={() => handleArrowClick('right')}/>
                                </div>

                            {/* put arrows here and this must be functional */}
                            </div>
                        </div>
                    </div>
                </PageContainer>
            </div>
        </section>
    )
}

export default StoryTestimonialSection
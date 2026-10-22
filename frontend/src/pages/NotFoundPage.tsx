import { PageContainer } from '@/components/layout/PageContainer'
import styles from './NotFoundPage.module.css'
import ButtonLink from '@/components/ui/ButtonLink';
import decorImage from '@/assets/notFound-page/images/brightroot-404-botanical.png'
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    const eyebrow = 'Page not found';
    const title = "This path doesn't lead anywhere.";
    const description = "The page you're looking for may have moved or no longer exists.";
    const errorCode = "404";
  return (
    <PageContainer className={styles.notFoundPageContainer}>
        <div className={styles.layoutContainer}>
            <div className={styles.eyebrow}>{eyebrow}</div>
            <div className={styles.mobileErrorCode}>{errorCode}</div>
            <div className={styles.title}>{title} </div>
            <div className={styles.description}>{description}</div>
            <ButtonLink text='Back to home' page='' className={styles.homeButton} />
            <Link to='/services' className={styles.link}>View our services</Link>
        </div>
        <div className={styles.desktopErrorCode}>{errorCode}</div>
        <div className={styles.imageContainer}>
            <img src={decorImage} className={styles.image} alt='leaves-decor' aria-hidden='true' />
        </div>
    </PageContainer>
  )
}

export default NotFoundPage
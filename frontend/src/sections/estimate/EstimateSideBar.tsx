import { PageContainer } from '@/components/layout/PageContainer'
import styles from './EstimateSideBar.module.css'
import sideBarImage from '@/assets/estimate-page/images/estimate-support.webp'
import { estimateFlow } from '@/data/estimateFlow'

type EstimateBarProps = {
    className: string,
}

const EstimateSideBar = ({className = ''}: EstimateBarProps) => {
    const fineNotes = 'Submitting this form does not constitute a binding quote. It simply helps us start the conversation about your project.'
    return (
        <section className={`${styles.estimateSideBarSection} ${className}`.trim()}>
            {/* the following image needs to appear only on desktop view */}
            <img src={sideBarImage} alt='side-bar-image' className={styles.image} aria-hidden='true' />
            <PageContainer className={styles.sideBarPageContainer}>
                <div className={styles.sideBarTitle}>What happens next</div>
                <div className={styles.flowsContainer}>
                { estimateFlow.map((data) => {
                    return (
                        <div key={data.id} className={styles.flowContainer}>
                            <div className={styles.numberContainer}>
                                <div className={styles.number}>{data.id}</div>
                            </div>
                            <div className={styles.descriptionContainer}>
                                <div className={styles.title}>{data.title}</div>
                                <div className={styles.description}>{data.description}</div>
                            </div>
                        </div>
                    )
                })}
                </div>
                <div className={styles.fineNotes}>{fineNotes}</div>
            </PageContainer>
        </section>
    )
}

export default EstimateSideBar
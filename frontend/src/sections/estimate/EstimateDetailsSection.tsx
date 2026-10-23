import { useState, type SubmitEventHandler } from 'react'
import styles from './EstimateDetailsSection.module.css'
import EstimateInputField from './EstimateInputField'
import { PageContainer } from '@/components/layout/PageContainer'
import { budgetOptions, projectTypeOptions, serviceOptions, timelineOptions } from '@/data/estimateFormOptions'
import ContactInputField from './ContactInputField'

type EstimateDetailsProps = {
  className?: string,
  formMode: 'contact' | 'estimate',
}

export interface EstimateFormData {
    fullName: string,
    email: string,
    phone: string,
    location: string,
    projectType: string,
    servicesOfInterest: string[],
    estimatedBudget: string,
    timeline: string,
    comment: string,
    consent: boolean
}

export interface ContactFormData {
    fullName: string,
    email: string,
    phone: string,
    service: string,
    location: string,
    message: string,
}

const InitialContactData: ContactFormData = {
    fullName: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: '',
}

const InitialClientData: EstimateFormData = {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    projectType: '',
    servicesOfInterest: [],
    estimatedBudget: '',
    timeline: '',
    comment: '',
    consent: false,
}

type ApiResponse = {
    message: string;
    emailId?: string;
}

// type ClientDataType = {
//     clientData: EstimateFormData,
//     setClientData: Dispatch<SetStateAction<EstimateFormData>>;
// }

const EstimateDetailsSection = ({className = '', formMode}: EstimateDetailsProps) => {

    const API_URL = import.meta.env.VITE_API_URL;

    const termsAndCondition = 'I understand that submitting this form does not constitute a binding quote. This information will be used only to review my request and contact me about my project.'
    const textAreaPlaceholder = 'Share any additional details about your vision, the space or specific goals.'
    const [ clientData, setClientData ] = useState<EstimateFormData>(InitialClientData);
    const [ contactData, setContactData ] = useState<ContactFormData>(InitialContactData);
    const [submitMessage, setSubmitMessage] = useState('');
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        setSubmitStatus('idle');
        setSubmitMessage('');

        const dataToSubmit = formMode === 'contact' ? contactData : clientData;
        const apiLink = formMode === 'contact' ? '/api/contact' : '/api/estimate';

        try {
            const response = await fetch(`${API_URL}${apiLink}`, {
                method: "POST",
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSubmit),
            });

            const result:ApiResponse = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message || 'Your inquiry could not be sent.',
                );
            }

            setSubmitStatus('success');
            setSubmitMessage(result.message);

            if (formMode === 'contact') {
                setContactData(InitialContactData);
            } else {
                setClientData(InitialClientData);
            }
            
        } catch (error) {
            setSubmitStatus('error');
            setSubmitMessage(
                error instanceof Error
                    ? error.message
                    : 'Something went wrong. Please try again.'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    function formatNumber(value: string): string {
        const digits = value.replace(/\D/g, '').slice(0, 10);

        if (digits.length <= 3) {
            return digits;
        }

        if (digits.length <= 6)
        return (
            `${digits.slice(0, 3)}-${digits.slice(3)}`
        )

        return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`
    }
    
    function handleChangeEstimate(key: keyof EstimateFormData, value: string) {
        const updatedValue = key === 'phone' 
            ? formatNumber(value)
            : value
 
        setClientData((prevData) => ({...prevData, [key]: updatedValue}));
    }

    function handleChangeContact(key: keyof ContactFormData, value: string) {
        const updatedValue = key === 'phone'
            ? formatNumber(value)
            : value

        setContactData((prevData) => ({...prevData, [key]: updatedValue}));
    }

    return (
        <section className={`${styles.estimateDetailsSection} ${className}`.trim()}>
            <PageContainer>

                {formMode === 'contact'
                ? <form onSubmit={(e) => handleSubmit(e)}>
                        <div className={styles.contactOnlyContainer}>
                            <div className={styles.contactOnlyFieldContainer}>
                                <div className={styles.title}>Contact details</div>
                                <ContactInputField
                                    name='fullName'
                                    id='fullName'
                                    type='text'
                                    label='Full name'
                                    value={contactData.fullName}
                                    placeholder='Your full name'
                                    onChange={handleChangeContact}
                                    required
                                    autoFocus
                                    tabIndex={1}
                                />
                                <ContactInputField
                                    name='email'
                                    id='email'
                                    type='email'
                                    label='Email address'
                                    value={contactData.email}
                                    placeholder='you@yourmail.com'
                                    onChange={handleChangeContact}
                                    tabIndex={2}
                                />
                                <ContactInputField
                                    name='phone'
                                    id='phone'
                                    type='tel'
                                    label='Phone number'
                                    value={contactData.phone}
                                    placeholder='855-123-4567'
                                    pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                                    onChange={handleChangeContact}
                                    tabIndex={3}
                                />
                            </div>
                            <div className={styles.locationAndProjectTypeContainer}>
                                <ContactInputField
                                    name='location'
                                    id='location'
                                    type='text'
                                    label='Property location'
                                    value={contactData.location}
                                    placeholder='City or town, ON'
                                    required
                                    onChange={handleChangeContact}
                                    tabIndex={4}
                                />
                                <div className={styles.projectTypeContainer}>
                                    <div className={styles.fieldName}>Project type</div>
                                    <select id='property-type' className={styles.select} name='property-type' value={contactData.service} onChange={(e) => handleChangeContact('service', e.target.value)}>
                                        <option value='' disabled hidden>Select a service</option>
                                        { projectTypeOptions.map((data) => {
                                            return (
                                                <option key={data.value} value={data.value} className={styles.options}>{data.label}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className={styles.textAreaContainer}>
                                    <div className={styles.title}>Tell us about your project.</div>
                                    <textarea id='message' rows={3} value={contactData.message} className={styles.message} name='message' required onChange={(e) => handleChangeContact('message', e.target.value)} placeholder={textAreaPlaceholder}></textarea>
                                </div>
                            </div>
                        </div>
                        <button type='submit' className={styles.submitButton} disabled={isSubmitting}>
                                {isSubmitting
                                ? 'Sending...'
                                : 'Send Inquiry'}
                        </button>
                        <div className={`${styles.submitMessage} ${
                                submitStatus === 'success'
                                    ? styles.successMessage
                                    : submitStatus === 'error'
                                        ? styles.errorMessage
                                        : ''
                            }`}
                            role={submitStatus === 'error' ? 'alert' : 'status'}
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            {submitMessage}
                        </div>
                    </form>
                :
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className={styles.contactDetailsContainer}>
                            <div className={styles.title}>Contact details</div>
                            <div className={styles.detailsContainer}>
                                <EstimateInputField
                                    name='fullName'
                                    id='fullName'
                                    type='text'
                                    label='Full name'
                                    value={clientData.fullName}
                                    placeholder='Your full name'
                                    onChange={handleChangeEstimate}
                                    required
                                    autoFocus
                                    tabIndex={1}
                                />
                                <EstimateInputField
                                    name='email'
                                    id='email'
                                    type='email'
                                    label='Email address'
                                    value={clientData.email}
                                    placeholder='you@yourmail.com'
                                    onChange={handleChangeEstimate}
                                    tabIndex={2}
                                />
                                <EstimateInputField
                                    name='phone'
                                    id='phone'
                                    type='tel'
                                    label='Phone number'
                                    value={clientData.phone}
                                    placeholder='855-123-4567'
                                    pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                                    onChange={handleChangeEstimate}
                                    tabIndex={3}
                                />
                            </div>
                        </div>

                        <div className={styles.projectDetailsContainer}>
                            <div className={styles.title}>Project details</div>
                            <div className={styles.locationAndProjectTypeContainer}>
                                <EstimateInputField
                                    name='location'
                                    id='location'
                                    type='text'
                                    label='Property location'
                                    value={clientData.location}
                                    placeholder='City or town, ON'
                                    required
                                    onChange={handleChangeEstimate}
                                    tabIndex={4}
                                />
                                <div className={styles.projectTypeContainer}>
                                    <div className={styles.fieldName}>Project type</div>
                                    <select id='property-type' className={styles.select} name='property-type' value={clientData.projectType} onChange={(e) => handleChangeEstimate('projectType', e.target.value)}>
                                        { projectTypeOptions.map((data) => {
                                            return (
                                                <option key={data.value} value={data.value} className={styles.options}>{data.label}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className={styles.servicesContainer}>
                                <fieldset id='services-of-interest'>
                                    <legend className={styles.legend}>Services of interest</legend>
                                    <div className={styles.serviceOptionsContainer}>
                                        { serviceOptions.map((data) => {
                                            return (
                                                <label key={data.value} htmlFor={data.value} className={styles.label}>
                                                    <input 
                                                        name='servicesOfInterest'
                                                        id={data.value} 
                                                        type='checkbox' 
                                                        value={data.value}
                                                        className={styles.checkboxOptions} 
                                                        checked={clientData.servicesOfInterest.includes(data.value)}
                                                        onChange={(e) => {
                                                            const service = e.target.value;
                                                            const isChecked = e.target.checked;
                                                            setClientData((prevData) => ({
                                                                ...prevData, 
                                                                servicesOfInterest: isChecked
                                                                ? [ ...prevData.servicesOfInterest, service ]
                                                                : prevData.servicesOfInterest.filter((item) => item !== service,),
                                                            }));
                                                        }}
                                                    />
                                                {data.label}</label>
                                            )
                                        })}
                                    </div>
                                </fieldset>
                            </div>
                        </div>

                        <div className={styles.planningContainer}>
                            <div className={styles.title}>Planning</div>
                            <div className={styles.budgetAndTimelineContainer}>
                                <div className={styles.budgetContainer}>
                                    <div className={styles.fieldName}>Estimated budget</div>
                                    <select id='estimated-budget' className={styles.select} name='budget' value={clientData.estimatedBudget} onChange={(e) => handleChangeEstimate('estimatedBudget', e.target.value)}>
                                        { budgetOptions.map((data) => {
                                            return (
                                                <option key={data.value} value={data.value} className={styles.options}>{data.label}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className={styles.timelineContainer}>
                                    <div className={styles.fieldName}>Preferred timeline</div>
                                    <select id='preferred-timeline' className={styles.select} name='timeline' value={clientData.timeline} onChange={(e) => handleChangeEstimate('timeline', e.target.value)}>
                                        {timelineOptions.map((data) => {
                                            return (
                                                <option key={data.value} id={data.value} value={data.value} className={styles.options}>{data.label}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={styles.textAreaContainer}>
                            <div className={styles.title}>Tell us about your project.</div>
                            <textarea id='comment' rows={3} value={clientData.comment} className={styles.comment} name='comment' onChange={(e) => handleChangeEstimate('comment', e.target.value)} placeholder={textAreaPlaceholder}></textarea>
                        </div>

                        <div className={styles.consentContainer}>
                            <input id='consent' name='consent' type='checkbox' checked={clientData.consent} className={styles.inputTC} onChange={(e) => { setClientData((prevData) => ({...prevData, consent: e.target.checked}))}} />
                            <label htmlFor='terms' className={styles.labelTC}>
                                {termsAndCondition}
                            </label>
                        </div>

                        <button type='submit' className={styles.submitButton} disabled={isSubmitting}>
                            {isSubmitting
                            ? 'Sending...'
                            : 'Submit Estimate Request'}
                        </button>

                        <div className={`${styles.submitMessage} ${
                                submitStatus === 'success'
                                    ? styles.successMessage
                                    : submitStatus === 'error'
                                        ? styles.errorMessage
                                        : ''
                            }`}
                            role={submitStatus === 'error' ? 'alert' : 'status'}
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            {submitMessage}
                        </div>
                    </form>
                }
            </PageContainer>
        </section>
    )
}

export default EstimateDetailsSection
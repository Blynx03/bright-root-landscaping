import type { ContactFormData } from './EstimateDetailsSection';
import styles from './ContactInputField.module.css'

type InputProps = {
  name: keyof ContactFormData,
  id: string,
  label: string,
  type: 'text' | 'email' | 'tel',
  value: string,
  placeholder: string,
  pattern?: string
  required?: boolean,
  autoFocus?: boolean,
  tabIndex?: number,
  onChange: (key: keyof ContactFormData, value: string) => void;
}


const ContactInputField = ({name, id, label, type, value, placeholder, pattern, tabIndex, required = false, autoFocus = false, onChange}: InputProps) => {

  return (
    <div className={styles.fieldContainer}>
        <label htmlFor={id} className={styles.label}>{label}</label>
        <input id={id} name={name} tabIndex={tabIndex} className={styles.input} type={type} value={value} placeholder={placeholder} pattern={pattern} autoFocus={autoFocus} onChange={(e) => onChange(name, e.target.value)} required={required}/>
    </div>
  )
}

export default ContactInputField
import { NavLink } from 'react-router-dom';
import styles from './ButtonLink.module.css'

type ButtonProps = {
  page: 'estimate' | 'contact' | '' | 'about' | 'projects' | 'services';
  text: string;
  className?: string;
}

const ButtonLink = ({page, text, className = ''}: ButtonProps) => {
  return (
    <NavLink to={`/${page}`} className={`${styles.button} ${className}`.trim()}>{text} </NavLink>
  )
}

export default ButtonLink
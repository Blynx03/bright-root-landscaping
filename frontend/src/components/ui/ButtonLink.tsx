import { NavLink } from 'react-router-dom';

type ButtonProps = {
  page: 'estimate' | 'contact' | '' | 'about' | 'projects' | 'services';
  text: string;
  className?: string;
}

const ButtonLink = ({page, text, className = ''}: ButtonProps) => {
  return (
    <NavLink to={`/${page}`} className={`button btn ${className}`.trim()}>{text} </NavLink>
  )
}

export default ButtonLink
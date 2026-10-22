import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const el = document.querySelector(hash);

            if (el) {
                el.scrollIntoView({
                    behavior: 'auto',
                    block: 'center'
                });
                return;
            }
        }
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto',
        });
    },[pathname, hash]);

  return null;
  
};

export default ScrollTop
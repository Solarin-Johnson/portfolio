import { useEffect } from 'react';
import './menu.scss'
import { useState } from 'react';

function Menu(){
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on unmount
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  const stick = isSticky ? 'header sticky' : 'header';

    return(
        <div id="menu" className={stick}>
        
        </div>
    )
}

export default Menu
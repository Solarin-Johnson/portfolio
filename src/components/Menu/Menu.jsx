import { useEffect } from 'react';
import './menu.scss'
import { useState } from 'react';

function Menu(){
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 500) {
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
            <div className="logo"></div>
            <div className="tabs"></div>
        </div>
    )
}

export default Menu
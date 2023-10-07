import { useEffect } from 'react';
import './menu.scss'
import { useState } from 'react';
import logo from '../../logo.svg'
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
            <div className="logo">
                <img src={logo} width={'60px'} alt='js' />
            </div>
            <div className="tabs"></div>
        </div>
    )
}

export default Menu
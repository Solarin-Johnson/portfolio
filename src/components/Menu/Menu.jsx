import { useEffect } from 'react';
import './menu.scss'
import Tab from './Tabs';
import { useState } from 'react';
import logo from '../../logo.svg'
import logo_light from '../../logo_light.svg'
import Menubar from './menubar';
function Menu(){
    const [isSticky, setIsSticky] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
        };
        window.addEventListener('scroll', handleScroll);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };      
        window.addEventListener('resize', handleResize);
      

        return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
    
        };
    }, []);

        const stick = isSticky ? 'header sticky' : 'header';

       
        const[mode, setMode] = useState('light')
        const [primaryColor, setPrimaryColor] = useState('#007BFF');
        const [bgColor, setBgColor] = useState('#F5F5F5');
        const [textColor, setTextColor] = useState('#333333');

        const lightMode = () => {
                setPrimaryColor('#03A9F4')
                setBgColor('#121212')
                setTextColor('#F5F5F5')
                setMode('dark')
            }
        const darkMode = () => {
                setPrimaryColor('#007BFF')
                setBgColor('#F5F5F5')
                setTextColor('#333333')
                setMode('light')
        }
        
        document.documentElement.style.setProperty('--primary-color', primaryColor)
        document.documentElement.style.setProperty('--bg-color', bgColor)
        document.documentElement.style.setProperty('--text-color', textColor)

        const[clicked, isClicked] = useState(false)

        const setIsClicked = (e) => {
            isClicked(!e)
        }
    return(
        <>
            <div id="menu" className={stick}>
                <div className="logo">
                {mode === 'light' ?
                    <img src={logo} width={'60px'} alt='js' />
                    : 
                    <img src={logo_light} width={'60px'} alt='js' />
                }
                </div>
                {windowWidth > 600 ?
                        <div className="tabs show">
                            <Tab />
                        </div>
                : <></> 
                }

                {mode === 'light' ? 
                <div id='mode' onClick={lightMode} className="material-symbols-outlined">
                    light_mode
                </div>
                : <div id='mode' onClick={darkMode} className="material-symbols-outlined">
                    dark_mode
                </div>
                }
                
                { windowWidth <= 600 ? 
                    <Menubar setIsClicked={setIsClicked} />
                : <></>
                }

            </div>
            {windowWidth < 600 ?
                    <>
                    {clicked ? 
                    <>
                        <div className="tabs show">
                            <Tab />
                        </div>
                        <div id="fade" className='show'></div>
                    </>
                    :
                    <>
                        <div className="tabs">
                            <Tab />
                        </div>
                        <div id="fade"></div>
                    </>
                    
                }
                </>
            : <></> 
            }
        </>
    )
}

export default Menu
import { useEffect } from 'react';
import './menu.scss'
import { useState } from 'react';
import logo from '../../logo.svg'
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

        const home = (e)=>{
            // console.log(e.target.parentElement.parentElement.lastChild)
            e.target.parentElement.parentElement.lastChild.style.marginLeft = '1.5px'
        }
        const about = (e)=>{
            // console.log(e.target.parentElement.parentElement.lastChild)
            e.target.parentElement.parentElement.lastChild.style.marginLeft = 'calc(7vw + 66px)'
        }
        const skills = (e)=>{
            // console.log(e.target.parentElement.parentElement.lastChild)
            e.target.parentElement.parentElement.lastChild.style.marginLeft = 'calc(14vw + 127px)'
        }
        const contact = (e)=>{
            // console.log(e.target.parentElement.parentElement.lastChild)
            e.target.parentElement.parentElement.lastChild.style.marginLeft = 'calc(21vw + 206px)'
        }
        const[mode, setMode] = useState('light')
        const [primaryColor, setPrimaryColor] = useState('#007BFF');
        const [bgColor, setBgColor] = useState('#F5F5F5');
        const [textColor, setTextColor] = useState('#333333');
        console.log(mode)

        const lightMode = () => {
                setPrimaryColor('#03A9F4')
                setBgColor('#121212')
                setTextColor('#FFFFFF')
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
    return(
        <div id="menu" className={stick}>
            <div className="logo">
                <img src={logo} width={'60px'} alt='js' />
            </div>
            <div className="tabs">
                <div className="menu">
                    <div id="home"onClick={home}>Home</div>
                    <div id="about" onClick={about} >About</div>
                    <div id="skills" onClick={skills}>Skills</div>
                    <div id="contact" onClick={contact}>Contact</div>
                </div>
                <div id="scroll"></div>
            </div>
            {mode === 'light' ? 
            <div id='mode' onClick={lightMode} className="material-symbols-outlined">
                light_mode
            </div>
            : <div id='mode' onClick={darkMode} className="material-symbols-outlined">
                dark_mode
            </div>
            }

        </div>
    )
}

export default Menu
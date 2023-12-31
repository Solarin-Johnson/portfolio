// import logo from './logo.svg';
import './App.scss';
import './_color.scss';
import Menu from './components/Menu/Menu'
import Welcome from './components/welcome/Welcome';
import Services from './components/Services/Services'
import { useEffect, useRef, useState } from 'react';
import Projects from './components/Projects/Projects';
import About from './components/About/About.';

function App() {
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
  return (
    <div id='container'>
      <Menu />
      {isSticky ?
        <div id='camo'></div>
        :
        <></>
      }
      <Welcome />
      <Services />
      <Projects />
      <About />
    </div>
  )

}

export default App;
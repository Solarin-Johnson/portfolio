
function Tab({ hideMenu }){
    
    const home = (e)=>{
        // console.log(e.target.parentElement.parentElement.lastChild)
        e.target.parentElement.parentElement.lastChild.style.marginLeft = '1px'
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }
    const services = (e)=>{
        // console.log(e.target.parentElement.parentElement.lastChild)
        e.target.parentElement.parentElement.lastChild.style.marginLeft = 'calc(7vw + 76.2px)'
        let element = document.querySelectorAll('.services')[0]
        if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
    }
    const projects = (e)=>{
        // console.log(e.target.parentElement.parentElement.lastChild)
        e.target.parentElement.parentElement.lastChild.style.marginLeft = 'calc(14vw + 139px)'
    }
    const about = (e)=>{
        // console.log(e.target.parentElement.parentElement.lastChild)
        e.target.parentElement.parentElement.lastChild.style.marginLeft = 'calc(21vw + 195px)'
    }

    // const hide = () => {
    //     hideMenu(true)
    // }
    return(
        <>
            <div className="menu" id="bug" >
                <div id="home"onClick={home}>Home</div>
                <div id="skills" onClick={services}>Services</div>
                <div id="contact" onClick={projects}>Projects</div>
                <div id="about" onClick={about} >About</div>
            </div>
            <div id="scroll"></div>
        </>
    )
}

export default Tab
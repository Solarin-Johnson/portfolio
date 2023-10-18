
function Tab(props){
    // if(props.width > 500){
      
    // }
    const home = (e)=>{
        // console.log(e.target.parentElement.parentElement.lastChild)
        e.target.parentElement.parentElement.lastChild.style.marginLeft = '1px'
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        if(document.getElementById('fade')){
          document.getElementById('fade').click()
        }
    }
    const services = (e)=>{
        // console.log(e.target.parentElement.parentElement.lastChild)
        e.target.parentElement.parentElement.lastChild.style.marginLeft = 'calc(7vw + 76.2px)'
        let element = document.querySelectorAll('.services')[0].getBoundingClientRect()
        if (element) {
            window.scrollTo({
              top:  element.top + window.pageYOffset -20,
              behavior: "smooth",
            });
        }
        if(document.getElementById('fade')){
          document.getElementById('fade').click()
        }
    }
    const projects = (e)=>{
        // console.log(e.target.parentElement.parentElement.lastChild)
        e.target.parentElement.parentElement.lastChild.style.marginLeft = 'calc(14vw + 139px)'
        let element = document.querySelectorAll('.projects')[0].getBoundingClientRect()
        if (element) {
            window.scrollTo({
              top:  element.top + window.pageYOffset -10,
              behavior: "smooth",
            });
        }
        if(document.getElementById('fade')){
          document.getElementById('fade').click()
        }
    }
    const about = (e)=>{
        // console.log(e.target.parentElement.parentElement.lastChild)
        e.target.parentElement.parentElement.lastChild.style.marginLeft = 'calc(21vw + 196px)'
        let element = document.querySelectorAll('.about')[0].getBoundingClientRect()
        if (element) {
            window.scrollTo({
              top:  element.top + window.pageYOffset,
              behavior: "smooth",
            });
        }
        if(document.getElementById('fade')){
          document.getElementById('fade').click()
        }
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
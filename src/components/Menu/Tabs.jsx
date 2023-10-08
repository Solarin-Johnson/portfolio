
function Tab(){
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
    return(
        <div className="tabs">
            <div className="menu">
                <div id="home"onClick={home}>Home</div>
                <div id="about" onClick={about} >About</div>
                <div id="skills" onClick={skills}>Skills</div>
                <div id="contact" onClick={contact}>Contact</div>
            </div>
            <div id="scroll"></div>
        </div>
    )
}

export default Tab
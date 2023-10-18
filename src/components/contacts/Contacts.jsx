import './contacts.scss'
function Contact(){
    const fb = () => {
        window.open('https://www.facebook.com/johnson.solarin/')
    }
    const linkedin = () => {
        window.open('www.linkedin.com/in/solarin-johnson-99a52b26a')
    }
    const git = () => {
        window.open('https://www.github.com/solarin-johnson')
    }
    return(
        <div className="contacts">
            <span onClick={fb} className="fab fa-facebook"></span>
            <span onClick={git} className="fab fa-github"></span>
            <span onClick={linkedin} className="fab fa-linkedin"></span>
        </div>
    )
}
export default Contact
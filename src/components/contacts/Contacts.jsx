import './contacts.scss'
function Contact(){
    const fb = () => {
        window.open('https://www.facebook.com/johnson.solarin/')
    }
    const twitter = () => {
        window.open('https://twitter.com/S0LARIN')
    }
    const git = () => {
        window.open('https://www.github.com/solarin-johnson')
    }
    return(
        <div className="contacts">
            <span onClick={fb} className="fab fa-facebook"></span>
            <span onClick={git} className="fab fa-github"></span>
            <span onClick={twitter} className="fab fa-twitter"></span>
        </div>
    )
}
export default Contact
import Contact from "../contacts/Contacts"
import Info from "../info/Info"
import Vector from "../vector/Vector"
import './welcome.scss'

function Welcome() {
    return(
        <div className="welcome">
            <Contact />
            <Info />
            <Vector />
        </div>
    )
}
export default Welcome
import { useState } from 'react'
import './bar.scss' 

function Menubar(){
    const[clicked, isClicked] = useState(false)
    const close = (e)=> {
        if(!clicked){
            e.target.parentElement.classList = 'close'
            isClicked(!clicked)
        } else {
            e.target.parentElement.classList = ''
            isClicked(!clicked)

        }
    }
    return(
        <div onClick={close} id="menuBar">
            <div id=""></div>
            <div id=""></div>
            <div id=""></div>
        </div>
    )
}

export default Menubar
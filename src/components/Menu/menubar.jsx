import { useState } from 'react'
import './bar.scss' 

function Menubar({ setIsClicked }){
    const[clicked, isClicked] = useState(false)
    const close = (e)=> {
        if(!clicked){
            e.target.parentElement.classList = 'close'
            setIsClicked(clicked)
            isClicked(!clicked)
        } else {
            e.target.parentElement.classList = ''
            setIsClicked(clicked)
            isClicked(!clicked)
        }
    }
    return(
        <label id="menuBar">
            <div onClick={close} id=""></div>
            <div onClick={close} id=""></div>
            <div onClick={close} id=""></div>
        </label>
    )
}

export default Menubar
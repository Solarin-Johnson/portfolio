import { useState } from 'react'
import './bar.scss' 

function Menubar({ setIsClicked }){
    const[clicked, isClicked] = useState(false)
    const close = (e)=> {
        if(!clicked){
            e.target.parentElement.lastChild.classList = 'close'
            setIsClicked(clicked)
            isClicked(!clicked)
        } else {
            e.target.parentElement.lastChild.classList = ''
            setIsClicked(clicked)
            isClicked(!clicked)
        }
    }
    return(
        <>
        <div onClick={close} id="cover"></div>
        <label id="menuBar">
            <div id=""></div>
            <div id=""></div>
            <div id=""></div>
        </label>
        </>
    )
}

export default Menubar
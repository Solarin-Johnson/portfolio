import { useState } from 'react';
import './info.scss'
import { useEffect } from 'react';
function Info(){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('I design user-friendly interfaces and seamless experiences, combining aesthetics with functionality. Skilled in user research and prototyping, I bring ideas to life.')
    const [xstate, setXstate] = useState(false)
    const write = (arr) => {
        var i = 0
        var text = ''
        let sleep = setInterval(() => {
            if (i < arr.length) {
                text = text + arr[i]
                setTitle(text)
                i++;
            } else {
                clearInterval(sleep);
                setTimeout(() => {
                    setXstate(!xstate)
                }, 5000);
            }
        }, 100);
    }
useEffect(() => {
    if(!xstate){
        setTitle('')
        setDescription('I design user-friendly interfaces and seamless experiences, combining aesthetics with functionality. Skilled in user research and prototyping, I bring ideas to life.')
        const text = 'UI/UX Designer'
        write(text.split(''))
    } else {
        setTitle('')
        setDescription("I'm a UI developer, crafting user-friendly interfaces through coding expertise. I specialize in building seamless, visually appealing digital experiences for optimal user interactions.")
        const text = 'Front- end Developer'
        write(text.split(''))
    }
}, [xstate])


   const whatsapp = ()=> {
    window.open('https://wa.me/7054294703')
   }

    return(
    <div className="info">
        <div id="name">Hi, I'm Solarin Johnson, a <strong>{title}</strong></div>
        <div id="description"> {description} </div>
        <div id="button">
            <div className="button" onClick={whatsapp}> <span> Lets Talk </span></div>
        </div>
    </div>

    )
}
export default Info
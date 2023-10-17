
function Preview(props){
    const screenshot = {
        backgroundImage: `url(${props.screenshot})`
    }
    const explore = () =>{
        window.open(props.link)
    }
    return(
        <div className="preview">
           <div id="preview_text">
                <div id="project_name">{props.name}</div>
                <div id="project_description">{props.description}</div>
                <div id="languages">{props.languages}</div>
                <div id="explore" onClick={explore}>Explore {props.name}</div>
           </div>
           <div id="preview_image" style={screenshot}>
                
           </div>
        </div>
    )
}

export default Preview
import './services.scss'

function Services(){
    return(
        <div className="services">
            <div className="service_head">
                <div className="head">Top <br /> <span> Services </span></div>
            </div>
            <div className="responsive">
                <div className="s_icon">Icon</div>
                <div className="service_name">Responsive Web Design</div>
                <div className="s_description">Lorem</div>
            </div>
            <div className="app">
            <div className="s_icon"></div>
                <div className="service_name"></div>
                <div className="s_description"></div>
            </div>
            <div className="frontend">
            <div className="s_icon"></div>
                <div className="service_name"></div>
                <div className="s_description"></div>
            </div>
        </div>
    )
}

export default Services
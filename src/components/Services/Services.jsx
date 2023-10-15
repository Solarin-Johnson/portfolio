import './services.scss'

function Services(){
    return(
        <div className="services">
            <div className="service_head">
                <div className="head">Top <br /> <span> Services </span></div>
            </div>
            <div className="service_container">
                <div className="responsive">
                    <div className="s_icon">
                        <span class="material-symbols-outlined">
                        vertical_split
                        </span>
                    </div>
                    <div className="service_name">Responsive Web Design</div>
                    <div className="s_description">Crafting responsive web designs to ensure a seamless user experience on all devices.</div>
                </div>
                <div className="app">
                <div className="s_icon">
                <span class="material-symbols-outlined">
                    devices_other
                </span>
                </div>
                    <div className="service_name">Mobile and Web Apps Design</div>
                    <div className="s_description">Designing responsive websites and mobile apps for optimal user experiences on any devices.</div>
                </div>
                <div className="frontend">
                <div className="s_icon"></div>
                    <div className="service_name"></div>
                    <div className="s_description"></div>
                </div>
            </div>
        </div>
    )
}

export default Services
import './services.scss'
import ServiceBox from './ServiceBox';
function Services(){
   
    return(
        <div className="services">
            <div className="service_head">
                <div className="head">Top <br /> <span> Services </span></div>
            </div>
            <div className="service_container">
                <ServiceBox icon='vertical_split' class='responsive' name='Responsive Web Design' description='Crafting responsive web designs to ensure a seamless user experience on all devices.'/>
                <ServiceBox icon='dashboard' class='app' name='Mobile and Web Apps Design' description='Designing responsive websites and mobile apps for optimal user experiences on any devices.'/>
                <ServiceBox icon='team_dashboard' class='frontend' name='Front-end Development' description='Frontend developer creating responsive websites for optimal user experiences on all devices.<'/>
            </div>
        </div>
    )
}

export default Services
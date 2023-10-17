
import { useInView } from 'react-intersection-observer';

function ServiceBox(props) {
    const [ref, inView] = useInView({
        triggerOnce: true, // Animation will trigger only once when it enters the viewport
    });
    return (
        <div className={`${props.class} ${inView ? 'in-viewport' : ''}`} ref={ref} id='service_box'>
            <div className="s_icon">
                <span className="material-symbols-outlined">
                    {props.icon}
                </span>
            </div>
            <div className="service_name">{props.name}</div>
            <div className="s_description">{props.description}</div>
        </div>
    )
}
export default ServiceBox
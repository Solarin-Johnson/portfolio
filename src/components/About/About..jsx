import './about.scss'
function About(){
    return(
        <div className="about">
            <div className="about_head"> About </div>
            <div className="about_container">
                <div className="about_card">
                    <div className="card_container">
                        <div className="card_image"></div>
                        <div className="card_name">Solarin Johnson</div>
                        <div className="break"></div>
                        <div className="position">Frontend Developer</div>
                    </div>
                </div>
                <div className="about_text">
                    <div className="text_container">
                        <div id="tabs">
                            <div className="tabs_title">What I Do</div>
                            <div className="tabs_desc">I specialize in turning design concepts into interactive and responsive web applications. With a keen eye for detail and a commitment to clean, maintainable code.</div>
                        </div>
                        <div id="tabs">
                        <div className="tabs_title">My Skills</div>
                            <div className="tab_list">
                                <li>HTML, CSS, SCSS, Javascript</li>
                                <li>React.js</li>
                                <li>Responsive Design</li>
                                <li>UI/UX Design</li>
                                <li>Version Contol (Git)</li>
                                <li>Performance Optimisation</li>
                            </div>
                        </div>
                        <div id="tabs">
                            <div className="tabs_title">Let's Collaborate</div>
                            <div className="tabs_desc">I'm always open to new challenges and exciting projects. If you're looking for a front-end developer who's passionate about creating top-notch web experiences, let's connect. Feel free to reach out through <a href="mailto:solarinjohnson@gmail.com">Solarinjohnson@gmail.com</a>.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About
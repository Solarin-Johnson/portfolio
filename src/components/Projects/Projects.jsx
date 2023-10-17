import React from "react";
import './projects.scss'
import Preview from "./preview";

function Projects(){
    return(
        <div className="projects">
            <div className="projects_head">
                Top <span>Projects</span>
            </div>
            <div className="previews">
                <Preview name='Job Seekr' description='Find your dream Job, Thousands of Jobs are posted here everyday, Find The Job That Suits You Today!' languages='HTML, CSS and Vanila js' screenshot={'https://solarin-johnson.github.io/screenshots/Job-Search.png'} link='https://solarin-johnson.github.io/jobseekr/' />
                <Preview name='Job Search App' description="Let's Find the Perfect Job For you We have over 1000+ jobs posted everyday for you Search the best Job for you now" languages='HTML, CSS and React.js' screenshot={'https://solarin-johnson.github.io/screenshots/Job-Search.png'} link='https://solarin-johnson.github.io/Search-Job/' />
                <Preview name='Weather App' description='A Simple Weather App that gets the current weather of about 20 countries' languages='HTML, CSS and Js' screenshot={'https://solarin-johnson.github.io/screenshots/Job-Search.png'} link='https://solarin-johnson.github.io/Weather%20App/' />
                <Preview name='Search Image' description='A Simple Image Search App that gives images based on your search keyword, with a feature to filter the searched images results' languages='HTML, CSS and Js' screenshot={'https://solarin-johnson.github.io/screenshots/Job-Search.png'} link='https://solarin-johnson.github.io/image/image.html' />
                <Preview name='Job Seekr' description='Find your dream Job, Thousands of Jobs are posted here everyday, Find The Job That Suits You Today!' languages='HTML, CSS and React.js' screenshot={'https://solarin-johnson.github.io/screenshots/Job-Search.png'} link='https://solarin-johnson.github.io/jobseekr/' />
                
            </div>
        </div>
    )
}

export default Projects
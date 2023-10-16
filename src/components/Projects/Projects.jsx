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
                <Preview name='Job Seekr' description='Find your dream Job, Thousands of Jobs are posted here everyday, Find The Job That Suits You Today!' />
                <Preview name='Job Seekr' description='Find your dream Job, Thousands of Jobs are posted here everyday, Find The Job That Suits You Today!' />
                <Preview name='Job Seekr' description='Find your dream Job, Thousands of Jobs are posted here everyday, Find The Job That Suits You Today!' />
                <Preview name='Job Seekr' description='Find your dream Job, Thousands of Jobs are posted here everyday, Find The Job That Suits You Today!' />
                <Preview name='Job Seekr' description='Find your dream Job, Thousands of Jobs are posted here everyday, Find The Job That Suits You Today!' />
            </div>
        </div>
    )
}

export default Projects
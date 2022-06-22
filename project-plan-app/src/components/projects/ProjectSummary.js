import React from 'react';
import moments from 'moment'

const ProjectSummary = ({project}) =>{
return(
    <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
            <span className="card-title">{project.title}</span>
            <p>Posted by {project.authorFirstname} {project.authorLastname}</p>
            <p className="grey-text"> {moments(project.createdAt.toDate().toString()).calendar()}</p>
        </div>
    </div>
);
}

export default ProjectSummary
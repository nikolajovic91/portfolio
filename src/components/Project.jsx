import React from 'react'

export default function Project({project}) {

    return (
        <div className="container">
            <img src={project.img} alt="Avatar" className="image" />
            <div className="middle">
            <div>{project.tech}</div>
            </div>
            <div className="btns">
    <a href={project.code} target="_blank" rel='noreferrer' className="text">{project.btn1}</a>
    {project.btn2 ? <a href={project.demo} target="_blank" rel='noreferrer' className="text">{project.btn2}</a> : ''}
    
            </div>
        </div>
    )
}

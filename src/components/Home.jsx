import React from 'react'
import photo from '../assets/photo.jpg'
import angular from '../assets/tech/angular.svg'
import babel from '../assets/tech/babel.svg'
import css from '../assets/tech/css.svg'
import django from '../assets/tech/django.svg'
import express from '../assets/tech/express.svg'
import git from '../assets/tech/git.svg'
import html from '../assets/tech/html.svg'
import javascript from '../assets/tech/javascript.svg'
import jquery from '../assets/tech/jquery.svg'
import linux from '../assets/tech/linux.svg'
import node from '../assets/tech/nodejs.svg'
import postgresql from '../assets/tech/postgresql.svg'
import python from '../assets/tech/python.svg'
import react from '../assets/tech/react.svg'
import sass from '../assets/tech/sass.svg'
import typescript from '../assets/tech/typescript.svg'
import ubuntu from '../assets/tech/ubuntu.svg'
import gulp from '../assets/tech/gulp.svg'

export default function Home() {


    return (
        <div className="home">
            <div className="home__text">
                <h2>Hello, I am Nikola</h2>
                <p> Frontend web developer who previously worked in the public sector. 
                    Love to develop and work on interesting projects in various technologies like 
                    HTML, CSS, Javascript, React, Angular. </p>
                    <p>In my current company, I also write code in Python programming 
                    language for web purpose, API calls, models in database using SQLAlchemy.</p>
                    <p>Team player, love to work in a team and learn new stuff 
                    from colleges and expand knowledge.</p>
                    <p>Also interested to work on freelance projects, 
                        always open for cooperation. Feel free for contact me at any 
                        time if you have business proposition for me.</p>
                <div className="home__text--icons">
                <div>
                <img src={html} alt=""/>
                <img src={css} alt=""/>
                <img src={sass} alt=""/>

                <img src={javascript} alt=""/>
                <img src={jquery} alt=""/>
                <img src={react} alt=""/>
                <img src={angular} alt=""/>
                <img src={typescript} alt=""/>
                </div>

                <div><img src={python} alt=""/>
                <img src={django} alt=""/>
            
                <img src={node} alt=""/>
                <img src={express} alt=""/>
                
                <img src={postgresql} alt=""/></div>
                
                <div>
                <img src={babel} alt=""/>
                <img src={gulp} alt=""/>
                <img src={git} alt=""/>
                <img src={linux} alt=""/>
                <img src={ubuntu} alt=""/>
                </div>
                </div>
            </div>
            <div className="home__image"><img src={photo} alt=""/></div>
        </div>
    )
}

import React from 'react'
import Project from './Project'
import Blog from '../assets/blog.png'
import Fleet from '../assets/fleet.png'
import Dices from '../assets/dices.png'
import Full from '../assets/p.png'
import Grid1 from '../assets/grid1.png'
import Grid2 from '../assets/grid2.png'
import Grid3 from '../assets/grid3.png'
import List from '../assets/rl.png'
import Mermer from '../assets/mermer.png'

export default function Projects() {
    // const {projects}
    const projects = [
        { name: 'Blog', tech:'HTML - SCSS - Python (Flask)', img: Blog, code: 'https://bitbucket.org/nikola_991/nikolas-blog/src/master/', demo: 'http://nykyov.pythonanywhere.com/', btn1: 'Code', btn2: 'Demo' },
        { name: 'Flat Partner', tech:'HTML - SCSS - Javascript', img: Fleet, code: 'https://github.com/nikolajovic91/fleet-partner', demo: 'https://goofy-noyce-e7898a.netlify.app/', btn1: 'Code', btn2: 'Demo' },
        { name: 'Reading List', tech:'React', img: List, code: 'https://github.com/nikolajovic91/reading-list', demo: 'https://hardcore-yalow-968006.netlify.app/', btn1: 'Code', btn2: 'Demo' },
        { name: 'Dices', tech:'HTML - CSS - Javascript', img: Dices, code: 'https://github.com/nikolajovic91/pig-game', demo: 'https://condescending-elion-148695.netlify.app/', btn1: 'Code', btn2: 'Demo' },
        { name: 'Full', tech:'HTML - CSS - Javascript - Python - Angular - React', img: Full, code: 'mailto:nikolajovic91@gmail.com', demo: '', btn1: 'Contact me', btn2: '' },
        { name: 'Mermer', tech:'HTML - CSS - Javascript', img: Mermer, code: 'https://github.com/nikolajovic91/mermer-plus', demo: 'http://mermerplus.rs/', btn1: 'Code', btn2: 'Demo' },

        { name: 'Projects1', tech:'PSD to HTML/CSS/Javascript', img: Grid1, code: 'https://github.com/nikolajovic91/', demo: 'http://nykyov.pythonanywhere.com/', btn1: 'GitHub', btn2: 'BitBucket' },
        { name: 'Projects2', tech:'PSD to HTML/CSS/Javascript', img: Grid2, code: 'https://github.com/nikolajovic91/', demo: 'http://nykyov.pythonanywhere.com/', btn1: 'GitHub', btn2: 'BitBucket' },
        { name: 'Projects3', tech:'PSD to HTML/CSS/Javascript', img: Grid3, code: 'https://github.com/nikolajovic91/', demo: 'http://nykyov.pythonanywhere.com/', btn1: 'GitHub', btn2: 'BitBucket' },
    ]

    return (
        <div className="projects">
            {projects.map(project => <Project key={project.name} project={project} />)}
        </div>
    )
}

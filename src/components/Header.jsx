import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo-white.png'

export default function Header() {
    return (
        <div className="header">
            <div><NavLink to="/" ><img src={Logo} alt="logo"/></NavLink></div>
            <div className="header__nav">
                <NavLink to="/" exact={true} activeClassName='activeRoute' >Home</NavLink>
                <NavLink to="/projects" activeClassName="activeRoute">Projects</NavLink>
                {/* <NavLink to="/contact" activeClassName="activeRoute">Contact</NavLink> */}
                <NavLink to="/socials" activeClassName="activeRoute">Socials</NavLink>
            </div>

        </div>
    )
}

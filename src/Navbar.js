import { NavLink } from 'react-router-dom';
import { MenuToggle } from "./navbar/MenuToggle";
import { useState } from 'react';
import { useMediaQuery } from "react-responsive";
import logo from "./img/SDLogo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

const Navbar = () => {
    const linkUrls = { about:'/about', projects:'/projects', contact:'/contact', blogs:'/blogs'}
    const [isOpen, setOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 1114});
    const handleClick = () => {
        setOpen(false);
    }
    const linkedIn = <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/sylvia-deppen/"><FontAwesomeIcon size="2x" icon={['fab', 'linkedin']} /></a>;
    const github = <a rel="noreferrer" target="_blank" href="https://github.com/deppensylvia"><FontAwesomeIcon size="2x" icon={['fab', 'github']} /></a>;
    
    return ( 
        <nav className="navbar">
            {isMobile && <div className="navbar-menu">
                <NavLink to="/" onClick={handleClick}><img src={ logo } className="logo" alt="logo"/></NavLink>
                <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)}/>
            </div>}
            {isOpen && 
                <div className = "mobileNavbar">
                    <NavLink to={ linkUrls.about } className="nav-item" onClick={handleClick}>About</NavLink>
                    <NavLink to={ linkUrls.projects } className="nav-item" onClick={handleClick}>Projects</NavLink>
                    <div className="sm-nav">
                        {linkedIn}
                        {github}
                    </div>
                </div>
            }
            {!isMobile && <div className="fullNavbar">
                <div className="left-section">
                    <NavLink to="/"><img src={ logo } className="logo" alt="logo"/></NavLink>
                </div>
                <div className="middle-section">
                    <NavLink to={ linkUrls.about } className="nav-item">About</NavLink>
                    <NavLink to={ linkUrls.projects } className="nav-item">Projects</NavLink>
                </div>
                <div className="right-section">
                    <div className="sm-nav">
                        {linkedIn}
                        {github}
                    </div>
                </div>
            </div>
            }
        </nav>
     );
}
 
export default Navbar;
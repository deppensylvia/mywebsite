import { NavLink } from 'react-router-dom';
import { MenuToggle } from "./navbar/MenuToggle";
import { useState } from 'react';
import { useMediaQuery } from "react-responsive";
import PopupModal from "./Popup.js";
import logo from "./img/SDLogo.svg";

const Navbar = () => {
    const linkUrls = { about:'/about', projects:'/projects', contact:'/contact', blogs:'/blogs'}
    const [isOpen, setOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 1114});
    const handleClick = () => {
        setOpen(false);
    }
    const openModal = () => {
        alert("Aww, how nice of you to want to subscribe to me! Unfortunately, this modal is still under construction.");

        <PopupModal  />
    }
    {/*
    // const button = document.querySelector('button');
    // 
    // const close = document.querySelector('.popup-close');

    // button.addEventListener('click', () => {
    //     console.log('open popup');
    //     popup.style.display = 'block';
    // });

    // close.addEventListener('click', () => {
    //     popup.style.display = 'none';
    // });

    // popup.addEventListener('click', (e) => {
    //     if(e.target.className === 'popup-wrapper')
    //         popup.style.display = 'none';
    // });
    */}

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
                    <NavLink to={ linkUrls.contact }className="nav-item" onClick={handleClick}>Contact</NavLink>
                    <NavLink to={ linkUrls.blogs } className="nav-item" onClick={handleClick}>Blog</NavLink>
                    <button id="subscribe" className="nav-item" onClick={handleClick}>Subscribe</button>
                </div>
            }
            {!isMobile && <div className="fullNavbar">
                <div className="left-section">
                    <NavLink to="/"><img src={ logo } className="logo" alt="logo"/></NavLink>
                </div>
                <div className="middle-section">
                    <NavLink to={ linkUrls.about } className="nav-item">About</NavLink>
                    <NavLink to={ linkUrls.projects } className="nav-item">Projects</NavLink>
                    <NavLink to={ linkUrls.contact } className="nav-item">Contact</NavLink>
                    <NavLink to={ linkUrls.blogs } className="nav-item">Blog</NavLink>
                </div>
                <div className="right-section">
                    <button id="subscribe" className="nav-item" onClick={openModal}>Subscribe</button>
                </div>
            </div>
            }
        </nav>
     );
}
 
export default Navbar;
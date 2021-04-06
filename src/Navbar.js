import { Link } from 'react-router-dom';
import { MenuToggle } from "./navbar/MenuToggle";
import { useState } from 'react';
import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "./navbar/Responsive";
import logo from "./img/SDLogo.svg";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile});
    const handleClick = () => {
        setOpen(false);
    }

    return ( 
        <nav className="navbar">
            {isMobile && <div className="navbar-menu">
                <Link to="/" onClick={handleClick}><img src={ logo } className="logo" alt="logo"/></Link>
                <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)}/>
            </div>}
            {isOpen && 
                <div className = "mobileNavbar">
                    <Link to="/about" className="nav-item" onClick={handleClick}>About</Link>
                    <Link to="/projects" className="nav-item" onClick={handleClick}>Projects</Link>
                    <Link to="/contact" className="nav-item" onClick={handleClick}>Contact</Link>
                    <Link to="/blog" className="nav-item" onClick={handleClick}>Blog</Link>
                    <button id="subscribe" className="nav-item" onClick={handleClick}>Subscribe</button>
                </div>
            }
            {!isMobile && <div className="fullNavbar">
                <div className="left-section">
                    <Link to="/"><img src={ logo } className="logo" alt="logo"/></Link>
                </div>
                <div className="middle-section">
                    <Link to="/about" className="nav-item">About</Link>
                    <Link to="/projects" className="nav-item">Projects</Link>
                    <Link to="/contact" className="nav-item">Contact</Link>
                    <Link to="/blog" className="nav-item">Blog</Link>
                </div>
                <div className="right-section">
                    <button id="subscribe" className="nav-item">Subscribe</button>
                </div>
            </div>
            }
        </nav>
     );
}
 
export default Navbar;
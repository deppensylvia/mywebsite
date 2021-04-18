import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Home = ({align}) => {

    const [isShownP, setIsShownP] = useState(false);
    const [isShownU, setIsShownU] = useState(false);
    const [isShownB, setIsShownB] = useState(false);
    const [isShownL, setIsShownL] = useState(false);


    return ( 
        <div className={align}>
            <div className="home-top">
                {!isShownP && !isShownU && !isShownB && !isShownL && (<h2 className="home-iam">I am a...</h2>)}
                {isShownP && (<><img className="home-img-change" src="https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif" alt="cat typing on keyboard"/><p className="gif-text">Gif by <a href="https://www.reddit.com/r/CatGifs/comments/640py3/meet_the_new_it_guy_xpost_raww/?st=j180my0k&sh=2230295e">u/rawling on Reddit</a></p></>)}
                {isShownU && (<><img className="home-img-change" src="https://media.giphy.com/media/QYpWZt7HfbQTci37H5/giphy.gif" alt=""/><p className="gif-text">Gif by <a href="https://media.giphy.com/media/QYpWZt7HfbQTci37H5/giphy.gif">Patrick Hosmer</a></p></>)}
                {isShownB && (<><img className="home-img-change" src="https://media.giphy.com/media/qnlIw1jKhQhZnim1n0/giphy.gif" alt=""/><p className="gif-text" >Gif by <a href="https://kochstrasse.agency/gif-marketing/">Kochstrasse™.agency</a></p></>)}
                {isShownL && (<><img className="home-img-change" src="https://media.giphy.com/media/VIKOfvqJHcVDrdVivT/giphy.gif" alt=""/><p className="gif-text">Gif by <a href="https://giphy.com/channel/emmelinedraws">Emmelinedraws</a></p></>)}
            </div>
            <div className="home-hover-group">
                <div className="home-hover" 
                    onMouseEnter={() => setIsShownP(true)}
                    onMouseLeave={() => setIsShownP(false)}>
                    <h3>{isShownP && (<span >&gt;</span>)}Programmer</h3>
                </div>
                <div className="home-hover"
                    onMouseEnter={() => setIsShownU(true)}
                    onMouseLeave={() => setIsShownU(false)}>
                    <h3>{isShownU && (<span >&gt;</span>)}UX Advocate</h3>
                </div>
                <div className="home-hover"
                    onMouseEnter={() => setIsShownB(true)}
                    onMouseLeave={() => setIsShownB(false)}>
                    <h3>{isShownB && (<span >&gt;</span>)}Business Strategist</h3>
                </div>
                <div className="home-hover"
                    onMouseEnter={() => setIsShownL(true)}
                    onMouseLeave={() => setIsShownL(false)}>
                    <h3>{isShownL && (<span >&gt;</span>)}Lifelong Learner</h3>
                </div>
            </div>
            <NavLink to="/projects">
                <button className="home-cta">View Projects</button>
            </NavLink>
        </div>
     );
}
 
export default Home;
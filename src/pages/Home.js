import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import testp from '../img/testblue.png';
import testu from '../img/testred.png';
import testb from '../img/testgreen.png';
import testl from '../img/testorange.png';

const Home = ({align}) => {

    const [isShownP, setIsShownP] = useState(false);
    const [isShownU, setIsShownU] = useState(false);
    const [isShownB, setIsShownB] = useState(false);
    const [isShownL, setIsShownL] = useState(false);


    return ( 
        <div className={align}>
            <div className="home-top">
                {!isShownP && !isShownU && !isShownB && !isShownL && (<h2 className="home-iam">I am a...</h2>)}
                {isShownP && (<img src={testp} alt="" className="home-img-change"/>)}
                {isShownU && (<img src={testu} alt="" className="home-img-change"/>)}
                {isShownB && (<img src={testb} alt="" className="home-img-change"/>)}
                {isShownL && (<img src={testl} alt="" className="home-img-change"/>)}
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
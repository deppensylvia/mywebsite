import TopButton from '../components/TopButton';
import MyFace from '../img/MyFaceVector.png';

const About = ({align}) => {

    return ( 
        <div className={align}>
            <div className="section-header">
                <h2>About</h2>
                <p>A bit about me</p>
            </div>
            <div className="section-body">
                <img id="myface" src={MyFace} alt="my profile"/>
                <p>
                    I am an <strong>aspiring software engineer</strong>. While I am in a way switching career paths, 
                    I’m actually returning to one of my first career interests after taking a long detour 
                    to explore various career paths and learn about myself. 
                </p>
                <p>
                    <strong>I’ve always been multidisciplinary</strong>. I was very fortunate to be able to pursue many 
                    passions growing up, therefore I did them each with all my heart. I played soccer 
                    and ran track, I performed in orchestras on violin and double bass, I made drawings 
                    and wrote poetry and did all sorts of other arts and crafts as a hobby, and of course, 
                    school was my top priority. Through doing all these activities at the level I did, 
                    <strong>I gained many skills that I could apply to the rest of my life</strong>. For example, 
                    in music, I learned to listen carefully and how persistence and practice get results. 
                    In sports, I learned teamwork, leadership, and how to push through mental and physical limits and 
                    keep going. I especially learned how often the things we are most resistant towards 
                    are the things that will help us grow the most if we make it through the discomfort. 
                    In art, I learned introspection and meditation. And lastly, through my education, I 
                    learned how to be critical and analytical. But, it wasn’t until I started learning 
                    programming that I learned about my passion. 
                </p>
                <p>
                    <strong>Programming has been a part of my life for as long as I can remember</strong>. My path to programming 
                     started when I was young. My dad is an engineer, so he exposed me to tech as soon as he could. 
                     Then, I attended a middle school for math, science, and computer science where I learned 
                     the basics through scratch, TrueBASIC, and HTML/CSS. I continued studying programming in 
                     high school in my school’s <a rel="noreferrer" target="_blank" href="http://woottonaoit.org/">AOIT program</a>, 
                     learning C++, Java (AP and advanced topics), and Linux/UNIX with Montgomery College. Then in college, 
                     I took my school’s <a rel="noreferrer" target="_blank" href="http://cs50.tv/2013/fall/#lectures">CS50 class</a> in 
                     the advanced section due to my experience. 
                </p>
                <p>
                    However, I was also a recruited athlete for track and field, and majoring in CS 
                    unfortunately conflicted too much. Therefore <strong>I had to pivot</strong>. As a result, 
                    I decided to major in neurobiology. I felt like it tied together programming 
                    and psychology (another field I’m passionate about) perfectly. However, I also 
                    learned in my later years of college, that working research was not for me. 
                    I wanted to be less on the side of producing research and more on the side of 
                    making research accessible to the world. This took me down the path of <strong>exploring 
                    various fields like data science, UX, and business</strong>. As someone who has always 
                    been multidisciplinary, these fields appealed to me because they are general 
                    enough to be applied to anything, but involve looking at the whole context 
                    and then taking complex information and parsing them down to get better results.
                </p>
                <p>
                    And while I’ve found these fields invaluable to learn about, within each 
                    of my experiences, <strong>I was always drawn to programming</strong>. Whether it’s been 
                    writing scripts to streamline my work, working with other programmers to 
                    troubleshoot problems, or even working at a school that teaches programming 
                    to kids, <strong>I’ve kept coding close to my heart</strong>. But now, I’m ready to pursue it 
                    full-time and use the experience I’ve gained along the way as a guide. And as 
                    I’ve had the time to refresh myself on the fundamentals and get caught up on 
                    all the new technologies that came out since I last studied CS, 
                    I’ve been loving every day!
                </p>
                <p>
                    And finally, while my path hasn’t been the most straightforward, 
                    <strong> I hope I can help inspire others who are also multidisciplinary</strong> 
                    to prove that we don’t have to sacrifice our desire to explore and 
                    learn in multiple fields to be successful. After all, our value comes 
                    in how we work, rather than what we work on. 
                </p>
            </div>
            <TopButton />
        </div>
     );
}
 
export default About;
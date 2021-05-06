import lahacienda from '../img/lahacienda.jpeg';
import TopButton from '../components/TopButton';

const Projects = ({align}) => {
    const leaguesite = "https://www.jointheleague.org/";

    return ( 
        <div className={align}>
            <div className="section-header">
                <h2>Projects</h2>
                <p>Highlights from past projects</p>
            </div>
            <div className="section-highlight">
                <div className="center-left-align">
                    <h3>Table of Contents</h3>
                    <h4>Programming Projects</h4>
                    <p><a href="#stock">&gt;sylviadeppen.com</a></p>
                    <p><a href="#therapy">&gt;Job Application Tracker App</a></p>
                    <h4>Business Strategy</h4>
                    <p><a href="#volunteer">&gt;Volunteer Program</a></p>
                    <p><a href="#tlp">&gt;TLP Quality Assurance</a></p>
                </div>
            </div>
            <div className="section-body">
                <h3>***This Section is Under Construction***</h3>
                <h3 id="stock">This Website!</h3>
                <p>This website was the first larger-scale project I've done using React.js. I'm clearly not done yet, but I'm having a lot of fun creating it.
                    I decided to publish it so that I could share with other the progress I've made so far.
                    <br/><br/>
                    I started this site by first brainstorming what information I wanted to share. Then once I had an idea, I started to sketch out some wireframes until I was 
                    able to create a higher fidelity site using <a href="https://www.figma.com/file/XsueaUoW9DlcyGuUU4XCf0/Personal-Website?node-id=0%3A286" target="_blank">Figma</a>. 
                    From there I focused on the style I wanted to share. Because this website is about me, creating a theme that really represent my personality was important.
                    I decided to go with a feel of a little fun and a little geeky. Let me know what you think about it! 
                    <br/><br/>
                    Once I got my theme down, it was time to code it up. Because this was my first time really creating a webapp with React, I first followed an amazing React.js tutorial by
                    Shaun Pelling, The Net Ninja, <a href="https://www.youtube.com/watch?v=j942wKiXFu8" target="_blank">which you can find here</a>. After learning so much, I was able to jump off
                    the mini project build with him and create this site.  
                </p>
                {/* <h3 id="stock">Stock Portfolio Project</h3>
                <p>
                    I started this project at the request of my boyfriend. He wanted to be able to download and view stocks every day and then conduct his own analysis on them. Therefore he requested a dashboard that would show him the top 50 stocks and their performance, then be able to implement the data into his own algorithm.
                </p> */}
                {/* <h3 id="therapy">Therapy Notebook Mobile App</h3>
                <p>
                    This project is near and dear to my heart. So many people in my life have suffered from anxiety and as a result, I am a firm supporter of therapy, specifically cognitive-behavioral therapy (CBT) for anxiety disorders.
                </p>
                <p>
                    One day I discovered a book created with the purpose of making CBT more available to everyday people, and uses techniques backed by research that people can use everday to help them work through their anxiety. I bought the book to learn more ans was pleasantly surprised by the content. However, there are people I know who would benefit greatly from such a tool, but prefer apps to physical books. Therefore, I decided to convert the book into a mobile app.
                </p>
                <p>
                    For obvious reason, I cannot distribute my application to others without permission, however I have reached out the creators to ask for permission. Until then, I will be creating the app as a practice project and to create a template that I can use for future projects.
                </p> */}
                <h3 id="volunteer">Volunteer Program</h3>
                <p>
                    When I worked at The LEAGUE of Amazing Programmers, I came in not really sure what I was going to do. As I learned more about the non-profit, I realized that their volunteer program was going to be essential for scaling the program while still being able to serve a large number of under-resourced families. 
                </p>
                <img src={ lahacienda } alt="fountain at la hacienda" className="section-image-box"/>
                <p className="img-caption">This is where I worked: 
                    <a href={ leaguesite } target="_blank" rel="noreferrer">The LEAGUE of Amazing Programmers</a>
                </p>
                <p>
                    One of the main projects I worked on was increasing the communication between the main staff and the volunteers. 
                    I did this in three main steps:
                    <br/>
                    <ol>
                        <li>Researching and understanding the current flow of communication and the limitations. </li>
                        <li>Surveying and interviewing volunteers to learn about their wants and needs.</li>
                        <li>Organizing the information and communicating with the team what is and is not working and proposing solutions.</li>
                    </ol> 
                </p>
                <p>
                    The first step I did by...
                </p>
                
                <h3 id="tlp">TLP Quality Assurance</h3>
                <p>When I worked at Thermo Fisher Scientific as a contractor, I was assigned to work on the quality assurance of our product.
                    This project involved reviewing the team's data before sending it out to our sales team to follow up on. 
                    <br/><br/> Originally, the process was a tedious line by line check of thousands of rows and multiple emails back and forth between two team members over the span of about 4 days. 
                    But, by the time I was done with it, I could finish the process within a day and a half on my own. 
                </p>
            </div>
            <TopButton />
        </div>
     );
}
 
export default Projects;
import lahacienda from '../img/lahacienda.jpeg';
import cube from '../img/SDCube.gif';

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
                    <p><a href="#stock">&gt;Stock Portfolio Dashboard</a></p>
                    <p><a href="#therapy">&gt;Therapy Notebook Mobile App</a></p>
                    <h4>Business Strategy</h4>
                    <p><a href="#volunteer">&gt;Volunteer Program</a></p>
                    <p><a href="#tlp">&gt;TLP Quality Assurance</a></p>
                </div>
            </div>
            <div className="section-body">
                <h3 id="stock">Stock Portfolio Project</h3>
                <p>
                    I started this project at the request of my boyfriend. He wanted to be able to download and view stocks every day and then conduct his own analysis on them. Therefore he requested a dashboard that would show him the top 50 stocks and their performance, then be able to implement the data into his own algorithm.
                </p>
                <h3 id="therapy">Therapy Notebook Mobile App</h3>
                <p>
                    This project is near and dear to my heart. So many people in my life have suffered from anxiety and as a result, I am a firm supporter of therapy, specifically cognitive-behavioral therapy (CBT) for anxiety disorders.
                </p>
                <p>
                    One day I discovered a book created with the purpose of making CBT more available to everyday people, and uses techniques backed by research that people can use everday to help them work through their anxiety. I bought the book to learn more ans was pleasantly surprised by the content. However, there are people I know who would benefit greatly from such a tool, but prefer apps to physical books. Therefore, I decided to convert the book into a mobile app.
                </p>
                <p>
                    For obvious reason, I cannot distribute my application to others without permission, however I have reached out the creators to ask for permission. Until then, I will be creating the app as a practice project and to create a template that I can use for future projects.
                </p>
                <h3 id="volunteer">Volunteer Program</h3>
                <p>
                    When I worked at The LEAGUE of Amazing Programmers, I came in not really sure what I was going to do. As I learned more about the non-profit, I realized that their volunteer program was going to be essential for scaling the program while still being able to serve a large number of under-resourced families. 
                </p>
                <img src={ lahacienda } alt="fountain at la hacienda" className="section-image-box"/>
                <p className="img-caption">This is where I worked: 
                    <a href={ leaguesite } target="_blank" rel="noreferrer">The LEAGUE of Amazing Programmers</a>
                </p>
                <h3 id="tlp">TLP Quality Assurance</h3>
                <p>When I worked at Thermo Fisher Scientific as a constractor, I was assigned to work on the quality assurance of our product.</p>
            </div>
            <img src={ cube } className="page-end" alt=""/>
        </div>
     );
}
 
export default Projects;
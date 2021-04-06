import cube from '../img/SDCube.gif';

const About = () => {
    return ( 
        <div className="main middle">
            <div className="section-header">
                <h2>About</h2>
                <p>A bit about me</p>
            </div>
            <div className="section-body">
                <h3>Programming:</h3>
                <p>
                    The first time I was exposed to programming, I was about 5 years old. I learned really basic HTML and CSS and made one of those very 90’s websites, with gifs of hamsters, bright flashing colors, and the ever so adorable, Amy Castle’s “The Cuppycake Song” that played in the background forever. 
                </p>
                <p>
                    After a brief pause, I continued learning programming in my middle school’s magnet programming for math, science, and computer science. We learned the basics starting in scratch, then moving on to true BASIC, and some more html and css. In high school, I joined my school’s Academy of Information Technology (AOIT) program and learned C++ (functional programming), Java (Object-oriented programming, data structures, design patterns, and algorithmic thinking) and UNIX/Linux operating systems (command-line, scripts in Bash and Perl). In college I took a few classes and additionally learned C, PHP, JS, SQL, Apache Spark and Hadoop. And finally, after college, I took a few data science machine learning classes with UCSD extension. 
                </p>
                <p>
                    While I’ve taken many classes and did well in them, I did not apply my knowledge as much as I wanted, since I primarily was working in research labs (biology and psychology and used my programming knowledge for analysis on data sets. These days I am learning more about software design and am working on creating web and mobile applications. My goal is to be proficient in quickly building and launching MVP applications for internal business use, therefore my current focus in learning front-end web design. That being said, I am also studying backend development, but I have more experience in backend and therefore am working on being more well-rounded. 
                </p>
            </div>
            <div className="section-body">
                <h3>User Experience:</h3>
                <p>
                    I first learned about UX when I was working in my first job as a data analyst. I was talking to a friend about their career path, and they told me that was what they were doing. At the time I was considering going into graphic design, however after I looked into UX, it seemed like the perfect combination of integrating design, research, coding, and human-centered business-thinking. If I am being honest, I never had a great perspective on businesses before, so learning that there was a profession dedicated to creating products actually based on real needs of real people, I was sold. 
                </p>
                <p>
                I got involved in San Diego’s UX community and met incredible, wonderful people with all different levels of experience. I attended many meet-ups and activities in the community, took several online classes to learn UX fundamentals, and read numerous books and articles on various aspects of UX, including information architecture, research, interviewing, accessibility, and strategy. Learning about UX opened my mind up to all new possibilities when it came to businesses. Through my journey in UX, I got a job at a non-profit that taught programming to kids, in which I was going to help use my newfound knowledge to improve the organization.
                </p>
            </div>
            <div className="section-body">
                <h3>Business Strategy:</h3>
                <p>
                    My interest in business really started when I got a part-time job working in an ice cream and candy cafe in the mall nearby my apartment (while I was job searching). I was older than most of the other workers, so I was given some more responsibilities. I was able to learn more about how the business was run and managing the shop. When I got a job as a data analyst, I also spent some time to understand more about how the company was run, both departmentally and organizationally. 
                </p>
                <p>
                However, the main reason I decided to get an MBA was due to working at a non-profit. I worked directly under the Executive Director and had access to the majority of the organization’s accounts and data. I spent a lot of time understanding the overall structure and processes of the organization in order to find ways to simplify and improve where I could. In the process, I realized my limitations and wanted to learn more to bridge the gaps in my knowledge. It was at that point I applied to and got into my MBA program. Throughout my program, I was able to apply what I was learning to my work and also help advise my boss. I ended up primarily focusing on informational strategy, researching and planning ways to implement a new customer management system and restructuring our backend databases. Although I am no longer working there, my interest in creating efficient businesses has only increased.
                </p>
            </div>
            <div className="section-body">
                <h3>Lifelong Learning:</h3>
                <p>
                    I love learning. In addition to my education, I grew up balancing art, music, and sports. As a result, I grew passionate about learning in general.
                </p>
                <p>
                My main belief is that as long as I keep an open-mind and open-heart, life will always be exciting and worthwhile.
                </p>
            </div>
            <img src={ cube } className="page-end" alt=""/>
        </div>
     );
}
 
export default About;
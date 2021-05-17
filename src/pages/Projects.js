import meAtWork from '../img/meboard.jpeg';
import TopButton from '../components/TopButton';

const Projects = ({align}) => {
    
    const setSectionVisability = e => {
        const sectionVis = e.target.getAttribute("href");
        const sectionsAll = document.querySelectorAll(".section-body");
        sectionsAll.forEach(section => {
            section.style.display="none";
            console.log(section);
        });
        const thisSection = document.querySelector(sectionVis);
        thisSection.style.display="flex";
    }

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
                    <p><a onClick={setSectionVisability} href="#website" className="projectLink">&gt;sylviadeppen.com</a></p>
                    <p><a onClick={setSectionVisability} href="#jobhunt" className="projectLink">&gt;Job Hunt Tracker App</a></p>
                    <h4>Business Strategy</h4>
                    <p><a onClick={setSectionVisability} href="#volunteer" className="projectLink">&gt;Volunteer Program</a></p>
                    <p><a onClick={setSectionVisability} href="#tlp" className="projectLink">&gt;TLP Quality Assurance</a></p>
                </div>
            </div>
            <div className="section-body" id="website">
                <h3>sylviadeppen.com AKA This Website</h3>
                <h5>Background and Purpose:</h5>
                <p>
                    I really wanted to make my own website from scratch. I love designing things and although I'm no graphic designer,
                    I'd like to think I have a decent design capabilities. Therefore, I completely made the design and CSS on my own.
                    I wanted my site to reflect my playful personality, so I designed it to be a little whimsical, colorful, and with coding
                    themes. 
                </p>
                <h5>Process:</h5>
                <p>
                    Making this site is still very much a learning process for me. 
                    I started this site by first brainstorming what information I wanted to share. 
                    Then once I had an idea, I started to sketch out some wireframes until I was 
                    able to create a higher fidelity site using <a rel="noreferrer" target="_blank" href="https://www.figma.com/file/XsueaUoW9DlcyGuUU4XCf0/Personal-Website?node-id=0%3A286">Figma</a>. 
                    From there I focused on the style I wanted to share. Because this website is about me, 
                    creating a theme that really represent my personality was important. Then, once I got my theme down, 
                    it was time to code it up. Because this was my first time really creating a webapp with React, 
                    I first followed an amazing React.js tutorial by Shaun Pelling, The Net Ninja, <a rel="noreferrer" target="_blank" href="https://www.youtube.com/watch?v=j942wKiXFu8">which you can find here</a>. 
                    After learning so much, I was able to jump off the mini project build with him and create this site 
                    to what it is now. 
                </p>
                <h5>Results:</h5>
                <p>
                    It turned out just the way I wanted it to. I love the design and it functions smoothly. 
                    I had a lot of fun learning about React components through making this, but it also made it 
                    evident how much JS I didn't quite understand. Therefore, I took some time to go through another great 
                    Net Ninja tutorial, <a href="https://www.udemy.com/course/modern-javascript-from-novice-to-ninja/" target="blank" rel="noreferrer">Modern Javascript</a>, 
                    to get a much better grasp on the essentials. 
                </p>
                <h5>Challenges and Takeaways:</h5>
                <p>
                    One of the main challenges I had was figure out how to get the navbar to work responsively the way I wanted it to,
                    and which content to add onto the site. I looked at code from various users and picked aspects of it that I liked. 
                    Then was the challenge of piecing it all together. It was mostly trial and error, but I got pretty good at working with 
                    flexbox this way. I also ended up with a messy file structure throughout this process, so at some point in the future, 
                    I'm going to reorganize and clean up. 
                </p>
                <p>
                    The other challenge I had was deciding how to manage my contact and a blog page. 
                    I decided against keeping the contact form because I'm still learning security practices, and am not quite 
                    equipped to deal with handling spam and scammers. I've researched about them, but for this site's purpose, 
                    I decided to add my LinkedIn profile so that people can contact me that way. 
                    Secondly, I had a blog page and subscribe button, which I considered adding content about what I'm learning as I go along,
                    however, if I am being realistic, I'm not going to use it frequently enough to make it work keeping on my site. I've never
                    been a consistent blogger, and while that may change at some point, it is not worth having on my site at this moment in time. 
                    Overall, making this site has been a good process for me not only to practice coding a bit, but also to reflect upon how
                    I want to present myself to others. And now that it is done for the most part, I'll just be using it to update my other 
                    projects as I go along. 
                </p>
            </div>
            <div className="section-body" id="jobhunt" style={{display: "none"}}>
                <h3>Job Hunt Tracker</h3>
                <h5>Background and Purpose:</h5>
                <p>
                    As someone actively looking for a job, I've got a spreadsheet of information I use to keep track of all the 
                    applications I'm applying to and contacts I'm talking to. Therefore, I wanted to do a project that I could apply the 
                    skills I am learning. 
                </p>
                <h5>Process:</h5>
                <p>
                    I originally started by brainstorming the elements and functionality I wanted my app to have. 
                    There are three components I needed: information about the applications, information about the companies, 
                    and information about contacts. I mapped the information into how they will be stored in the database (Firebase), and then
                    I started creating a wireframe and then coding the html/css. At this point, I wanted to use vanilla JS, but was
                    missing some of the basics. As I worked through a JS tutorial, and realized the approach I was taking wasn't going 
                    to work the way I wanted due to the number of html file I was making. Therefore, I started again, only this time,
                    I created a the html structure and then did the JS next. The basic structure allowed me to make sure the functionality,
                    was working properly, and that I only needed one html page, making my file structure a lot cleaner. 
                </p>
                <h5>Results:</h5>
                <p>
                    It is still a work in progress, but I will update this section when I've complete this project.
                </p>
                <h5>Challenges:</h5>
                <p>
                    Although I'm not done, one of the major challenges I've faced so far with this project has been deciding 
                    the best way to develop my project. As someone learning new ways of coding every day, I sometimes get 
                    overwhemled with all the possibilities. I had to learn to focus on one method at a time, even it if is not 
                    the more efficient way of doing things in order to complete the project. It really was a shift in mentality, 
                    of learning its okay to not do everything perfectly from the start, and just learn to fix and update as I go.
                </p>
                {/* <h5>Takeaways</h5>
                <p></p> */}
            </div>
            <div className="section-body" id="volunteer" style={{display: "none"}}>
                <h3>Volunteer Program</h3>
                <p>
                    When I worked at The LEAGUE of Amazing Programmers, I came in with the intent on 
                    practicing UX. I started by doing some research in to the operations and company culture,
                    alongside the product and users. As I learned more about the non-profit, I realized 
                    that their volunteer program was going to be essential for scaling the program 
                    while still being able to serve a large number of under-resourced families. 
                </p>
                <h5>Background:</h5>
                <p>
                    Their main program cost about $240/month, which kept the organization self-sufficient, and offered scholarships 
                    for families in need who could not afford classes. In order to increase capacity of scholarships, 
                    we needed both grants and volunteer teachers. However, we were having trouble getting and training 
                    new volunteers. That when I decided that I needed to figure out how to improve the volunteer program
                    to attract and maintain quality volunteers. 
                </p>
                <img src={ meAtWork } alt="me working" className="section-image-box"/>
                <p className="img-caption">
                    A picture my boss took of me when I was working organizing our software platforms
                </p>
                <h5>Process:</h5>
                <p>
                    There were a lot of barriers however that prevented this from happening. While a software solution might
                    have made tracking and managing information easier, there were many communicational and organizational issues
                    that needed to be addressed first. As a result, one of the main projects I worked on was increasing the 
                    communication between the main staff and the volunteers. 
                    I did this in three main steps:
                    </p>
                    
                    <ol>
                        <li>Researching and understanding the current flow of communication and the limitations. </li>
                        <li>Surveying and interviewing volunteers to learn about their wants and needs.</li>
                        <li>Organizing the information and communicating with the team what is and is not working and proposing solutions.</li>
                    </ol>
                <p>
                    The research phase involved getting to know the the teachers, administrative assistants, and volunteers and 
                    the work flow. I attended staff meetings and sat down one-on-one with staff, having them teach me how they 
                    worked and what systems they were using. I found that there were a lot of different methods and strong opinions 
                    on how to do everyday tasks, which helped me understand what the limitations to change were. I had to create a 
                    method to help bridge the gaps in communication in order to facilitate better awareness and transparency. I created
                    a central webpage that had information such as frequently requested links, documents, and procedures, I added 
                    information about who was working on what, and how to contact them, and I made sure that both staff and volunteers 
                    were able to access the information, but not the general public, but keeping it on our google business site.
                </p>
                <p>
                    Once this was established, I started to learn more about the volunteer situation. I conducted a survey and individual 
                    interviews to learn more about the current sentiments of our volunteers. Prior to COVID, it was easier for our volunteers 
                    to learn from other staff and become teachers or teaching assistants, since there was more opportunities for interaction. 
                    After we had to start working remotely, the communication was drastically cut off. The League's culture was a very relaxed
                    culture, however, that meant that volunteers had to be the ones to take initiative if they wanted to help. The training 
                    varied depending on who the volunteer was given to, and the overall process was scattered. Therefore, once I had a better 
                    idea of what was working and what wasn't worked through analyzing the surveys and interviews, I started to redesign the 
                    onboarding process. First, I took the process we currently had and ordered it in a way that was more intuitive. I worked 
                    with out administrative assistants to do this step, since they are the ones who typically execute the process. Then I 
                    started to look into how the teaching staff could be more engaged, since ultimately, they were the ones who had to train 
                    the volunteers in the classroom.
                </p>
                <h5>Results and Challenges:</h5>
                <p>
                    It is at this point, I want to talked about the challenges I faced. I was unable to complete this project due to being laid 
                    of as a result of COVID. But what I had found was our organizational culture made it easy for staff to avoid working on projects
                    that did not directly relate to teaching or curriculum. When it came to tasks like training volunteers or handling parent requests, 
                    they would do what was required for the time being, but often only as a response to an event happening. This often created urgent 
                    situations that our administrative assistants would handle personally, but it was easy to see how the reactive culture would not
                    scale well. Changing a company culture from a reactive to proactive culture isn't easy, and I did not have a leadership role, 
                    so instead I had to make sure my relationships with the other staff memebers was strong. I want to make sure what I was asking 
                    was actually going to fix and issue, not cause more, so I talked to my coworkers about what was working for them and what wasn't. 
                    I then worked on devising solutions that they could use that would push them in the direction of being more proactive. One of these 
                    was using a intranet system, another was instating a hierarchy of teams. I talked about these solutions with my boss and other leadership 
                    to get buy-in, and they supported me. By the time I left, my campaign to fascilite better communication among staff was fairly successful, 
                    however I was not able to finish my campaign to redesign the volunteer onboarding process.  
                </p>
                <h5>Takeaways:</h5>
                <p>
                    Reflecting upon my experience now, I would have taken more time to narrow the scope of my projects. I was very much 
                    over my head with how much I was trying to tackle. This was the first time I've ever had a role with complete freedom, 
                    and I set my scope too broadly. Although I am no longer working with The League, in the future when I am in a more 
                    settled state, I may return to finish my volunteer project if it is not resolved yet. 
                    I think the biggest takeaway was that the volunteers needed more guidance on what they were getting 
                    involved in, how to do it, and where to ask questions. While the whole organization needed more formalization, I'd only 
                    focus on the volunteers next time. 
                </p>
            </div>
            <div className="section-body" id="tlp" style={{display: "none"}}>
                <h3>TLP Quality Assurance</h3>
                <p>
                    When I worked at Thermo Fisher Scientific as a contractor, I was assigned to work on the quality 
                    assurance of our product in addition to my main job. This project involved reviewing the team's data before sending it out 
                    to our sales team to follow up on. 
                </p>
                <h5>Background:</h5>
                <p>
                    The TLP (Targeted Leads Program) was an pilot team created to help our sales team get find better leads. 
                    The main job was to find customers and add their information into our database for our sales team to use 
                    in their territories. The process involved creating thousands of leads every week, reviewing them, and then 
                    sending them to the appropriate sale reps.
                    Originally, the reviewing process was a tedious line by line check of thousands of Execl cells and multiple emails 
                    sending documents back and forth between two team members over the span of about 4 days. 
                    But, by the time I was done with it, I could finish the process within a day and a half on my own. 
                </p>
                <h5>Process:</h5>
                <p>
                    When I was taught the process, I took careful notes to make sure I had all of the steps down perfectly. After a couple
                    of sessions doing the process with my boss, she was able to hand it off to me to do it on my own. I still worked with 
                    another teammate at that point. But as I was doing QA each week, I also spent time learning more about Excel and how
                    to use macros to speed up work. I also worked with my teammate to consolidate any of the redundant processes that we 
                    were doing. Each of us was working on a different region (I was working on North America and she was working on 
                    EMEA), which had slightly different steps, however they also had a lot of similar steps too. By consolidating those 
                    steps, we were able to not only descrease sending the document back and forth, but also decrease conflicts and 
                    miscommunication. 
                </p>
                <p>
                    When this did go wrong, I had to work with our software development team to troubleshoot the issues. This often meant
                    working through XML files, MS Access, Siebel, and spending overtime in order make sure we hit our deadlines. Not only did this help me 
                    better understand the hand-off after we submitted the files to our sales teams, but it helped me figure out how to 
                    further consolidate the QA process and avoid those issues in the future. 
                </p>
                <p>
                    In addition to consolidating parts of the process, 
                    using macros, python code, and a bash script, I was able to create programs that caught errors in the entries such as spelling 
                    or formatting issues, and highlight questionable entries that likely had errors. And because it was an extensive mult-day process,
                    it also incorporated numerous checks throughout the process to decrease any human error that may occur over the span of the process.
                    Essentially, as I was learning the QA process, I was also keeping track of frequent issues that popped up, and then when I did 
                    create my code, I made sure to add checks in those areas to prevent pain and headaches in the future.
                </p>
                <h5>Results:</h5>
                <p>
                    After I had mostly finished streamlining the QA process, I made sure to create a comprehensive guide, since I knew I would 
                    not be in that position forever. In addition to the guide, I created a training protocol to teach others not only the process,
                    but why we did it and how it worked. Through streamlining QA, I was able to reduce the time it took from two people 
                    over the span of four days to one person over the span of a day and a half, enabling my team to spend more time on other work.
                    The process also increased the quality of the data overall.
                </p>
                <h5>Challenges:</h5>
                <p>
                    The biggest challenges I had were probably when I was troubleshooting XML upload issues. Those steps had the highest stakes
                    in that doing them wrong would lead to complex issues, like, sending hundreds of leads to the wrong people and having to 
                    contact every individual involved to inform them of what was going on. This was also a huge challenge when it came to 
                    training other people. I got quite good at quickly figure out what went wrong and correct the issues before they got out of control.
                </p>
                <h5>Takeaways:</h5>
                <p>
                    Doing QA was definitely challenging and frustrating, but streamlining it was one the most rewarding projects I've done. 
                    I'm grateful I was able to take on the task because it gave the the opportunity to dive in deep into the inner workings
                    of the process my team worked on, and also learn how much I love streamlining complex problems.
                </p>
            </div>
            <TopButton />
        </div>
     );
}
 
export default Projects;
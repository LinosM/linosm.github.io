import React from "react";
import { stackList } from "../../data/ProjectData";
import ProfilePic from "../../Assets/images/face2_transparent.png"
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src={ProfilePic}
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            <p>
              A self-motivated full-stack web developer with a recently earned a certificate from The Coding Boot Camp at UNC-Chapel Hill, with newly developed skills in JavaScript, HTML, CSS, React.js, and responsive web design, as well as strong skills and ability in writing clean and efficient code.
            </p>
            <br/>
            <p>
              With each project, the goal is to improve upon previous ones to ensure a better engaging experience for the end-user. On a recent project, I worked with a team of four to develop a MERN app for users and teams to manage and track various projects and tasks with over 170 personal commits within a month. I’m hoping to utilize my skill set with a future team to build better experiences on the web.
            </p>
            <br/>
            <p>
              I specialize in React, Node.js, Express.js, MongoDB, jQuery, Bootstrap, & Bulma. I also have experience with HTML, CSS, Heroku, MySQL, APIs, JSON, AJAX.
            </p>
            <br/>
            <p>
              I've taken intro courses for C++, Java, & Python in Wake Tech Community College before I took the UNC Bootcamp.
            </p>
            <br/>
            <p>
              My family originated from Vietnam, but I was born in Maryland and raised in North Carolina most of my life. My hobbies have been spent mostly around technology, which helped started my passion for programming.
            </p>
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;

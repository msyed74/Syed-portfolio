import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "JobNexus ",
      description: "A chatbot-powered platform that helps students finding internships and Mentorships.",
      keyfeatures: [
        " AI-powered chatbot using Botpress",
        " Next.js frontend for smooth UI",
        " Smart mentor-matching algorithm",
        "Tech Stack: React.js, Next.js, Botpress,Firebase, MongoDB, Python"
      ],
      imgUrl: projImg1,
      link: "https://github.com/msyed74/jobnexusafterhackathonf", 
      liveDemo: "https://jobnexusss.netlify.app",
    },
    {
      title: "Campus-Connect",
      description: "An AI-based job portal for the Technical Education Department, Govt. of Rajasthan, matching candidates with job openings.",
      keyfeatures: [
        " AI-driven job recommendation system",
        " Resume parsing with NLP",
        "Real-time job tracking for applicants",
        "Tech Stack: AI/ML (Python), React.js, MongoDB, FastAPI"
      ],
      imgUrl: projImg2,
      link: "https://github.com/yourrepo",
      liveDemo:"https://yourlivedemo.com",
    },
   
    {
      title: "Face-Recognition",
      description: "A chatbot that automates customer support for e-commerce businesses, handling queries & product recommendations.",
      keyfeatures: [
        " Automated responses for FAQs",
        " AI-based product recommendations",
        " Integrated with WhatsApp & website chat",
        " Tech Stack: Python, NLP, LangChain, Twilio API"
      ],
      imgUrl: projImg3,
      link: "https://github.com/yourrepo",
      liveDemo: "https://yourlivedemo.com",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12} md={10} className="mx-auto">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    "I love turning ideas into reality through code! Below are some of my best projects, ranging from AI-powered applications
                    to full-stack web platforms. These projects reflect my problem-solving skills, creativity, and ability to build
                    production-ready solutions."
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="project0">
                    {/* Project Navigation Tabs */}
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                      {projects.map((project, index) => (
                        <Nav.Item key={index}>
                          <Nav.Link eventKey={`project${index}`}>
                            {project.title}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>

                    {/* Project Content */}
                    <Tab.Content>
                      {projects.map((project, index) => (
                        <Tab.Pane eventKey={`project${index}`} key={index}>
                          <Row>
                            <ProjectCard {...project} />
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};

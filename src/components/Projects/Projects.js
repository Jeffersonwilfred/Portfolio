import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import sis from "../../Assets/Projects/sis.png";

import home from "../../Assets/Projects/home.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sis}
              isBlog={false}
              title="studen-information-system"
              description="A student information system developed with React Native, Python, and MySQL offers a modern, cross-platform solution for managing student data efficiently. React Native enables mobile app development with a single codebase for Android platforms. Python serves as the backend language, handling data processing, authentication, and business logic. MySQL acts as the database to store and retrieve student information securely. This combination ensures a responsive, user-friendly interface for administrators, teachers, and students, facilitating tasks such as enrollment, grading, attendance tracking, and communication."
              ghLink="https://github.com/Jeffersonwilfred/students-information-system"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={home}
              isBlog={false}
              title="home service provider"
              description="A home service provider web application using React.js, Python, and MySQL is designed to connect service providers (like plumbers, electricians, cleaners) with customers efficiently."
              ghLink="https://github.com/Jeffersonwilfred/HOME-SERVICE-PROVIDER"
            />
          </Col>

          

       

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

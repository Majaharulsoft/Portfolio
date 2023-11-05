import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import currency_converter from "../../Assets/Projects/currency-converter.png";
import CV_Project from "../../Assets/Projects/CV-Project.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import E_commerce from "../../Assets/Projects/E-commerce.png";

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
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio"
              description="My personal portfolio which features some of my github projects as well as my
                            resume and technical skills.This project was built wtih React.js, Node.js,Express.js."
              ghLink="https://github.com/Majaharulsoft/Portfolio"
              demoLink="https://majaharulportfolio.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={E_commerce}
              isBlog={false}
              title="E_commerce"
              description="This is a frontend ecommerce project,this ecommerce project is built  with html, css and javascript. "
              ghLink="https://github.com/Majaharulsoft/E-commerce"
              demoLink="https://majaharulsoft.github.io/E-commerce/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CV_Project}
              isBlog={false}
              title="CV_Project"
              description="This is a dummy CV Project, this CV Project is built with html and css."
              ghLink="https://github.com/Majaharulsoft/CV-Project"
              demoLink="https://majaharulsoft.github.io/CV-Project/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currency_converter}
              isBlog={false}
              title="currency_converter"
              description="My Currency Converter is the simplest currency converter. This Currency Converter
                             is built with react.js , node.js.This currency converter is under development."
              ghLink="https://github.com/Majaharulsoft/Currency-converter"
              demoLink="https://currency-convertersite.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

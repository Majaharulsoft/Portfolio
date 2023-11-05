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
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/Majaharulsoft/E-commerce"
              demoLink="https://majaharulsoft.github.io/E-commerce/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CV_Project}
              isBlog={false}
              title="CV_Project"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/Majaharulsoft/CV-Project"
              demoLink="https://majaharulsoft.github.io/CV-Project/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currency_converter}
              isBlog={false}
              title="currency_converter"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
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

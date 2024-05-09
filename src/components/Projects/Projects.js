import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import currency_converter from "../../Assets/Projects/currency-converter.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import E_commerce from "../../Assets/Projects/Techshop.PNG";

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
              title="Tech Shop"
              description="A complete ecommerce web portal with Gmail login feature.
               Manage profile, product details, product add to wish-list, product add to cart, create invoice, etc.
               Technology used: HTML, CSS, Bootstrap, React.js,Node.js, Express.js, MongoDB"
              ghLink="https://github.com/Majaharulsoft/Tech-Shop"
              demoLink="https://best-tech-shop.vercel.app/"
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

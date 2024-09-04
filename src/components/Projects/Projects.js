import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Graffiti from "../../Assets/Projects/Graffiti.png";
import Rana_shop from "../../Assets/Projects/Rana_shop.png";
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
              imgPath={Rana_shop}
              isBlog={false}
              title="Rana-Shop"
              description="Full Stack E-Commerce Responsive MERN App with Auth, Search, Filter, Upload Product,
                payment gateway and order.This project was built wtih HTML, CSS, Tailwind CSS, React.js, Node.js,
                Express.js, MongoDB. "
              ghLink="https://github.com/Majaharulsoft/Full-Stack-Ecommerce"
              demoLink="https://fullstack-mern-ecommerce.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Graffiti}
              isBlog={false}
              title="Gen-z Graffiti"
              description="On this website GEN Z will upload their graffiti, the graffiti will be saved and rewards will be
                available. This website is built with HTML, CSS, Tailwind CSS, Next.js, MySQL"
              ghLink="https://github.com/Majaharulsoft/gen-z-graffiti-client"
              demoLink="https://www.artlit.com.bd/en"
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
          
          

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

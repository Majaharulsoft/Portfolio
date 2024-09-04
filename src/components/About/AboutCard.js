import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", letterSpacing: "-1px" }}>
            Hi Everyone, I am <span className="purple">Majaharul Islam Rana </span>
            from <span className="purple"> khilkhet, Dhaka, Bangladesh.</span>
            <br />I completed my graduation in Computer Science and Engineering from Northern University Bangladesh this year.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Majaharul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

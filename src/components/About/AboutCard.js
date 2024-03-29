import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kalaiyarasan </span>
            from <span className="purple"> Tamil Nadu, India.</span>
            <br />I am a junior pursuing B.Tech Information Technology in Mookambigai College of Engineering
            ,Pudukkottai.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The world rewards you for value provided, not time spent!"{" "}
          </p>
          <footer className="blockquote-footer">James clear</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

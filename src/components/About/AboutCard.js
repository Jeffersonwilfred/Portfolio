import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jefferson wilfred </span>
            from <span className="purple"> Thoothukudi, TAMIL NADU.</span>
            <br />
            I hold an Integrated (BCA) from <span className="purple">st john's college palayamkottai</span> and 
            <br />
            A Master's in Computer Applications (MCA) from <span className="purple"> Manonmaniam Sundaranar University. </span>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Wacthing Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          
        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/sagiralogo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={1}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={11} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/fatima-abubakar-sadiq-88456825b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
                <a href="https://x.com/Sagirahsadiq?t=HaXkxlFvwjK7fkAFG4LHNQ&s=09" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Twitter" /></a>
                <a href="https://www.facebook.com/sagirah.sadiq.7?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Facebook" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
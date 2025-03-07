import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer"  style={{ padding: "20px 0", height: "120px", backgroundColor:"black"  }}>
      <Container>
        <Row className="align-items-center">
          
      
          <Col size={12} sm={6}>
          <h1 style={{ fontSize: "2rem",color:"#fff", fontWeight: "bold" }}>SYED</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/syed-mohammad-baqir-husain-994444246/"><img src={navIcon1} alt="Icon ddds" /></a>
              <a href="https://github.com/msyed74"><img src={navIcon2} alt="Icon  dd" /></a>
              <a href="https://x.com/smhusain7804"><img src={navIcon3} alt="Icon dff" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

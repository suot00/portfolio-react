import React from "react";
import "./Portfolio.css";
import { Container, Row, Col } from "reactstrap";
import img01 from "../../assets/images/project1.jpg";
import img02 from "../../assets/images/project2.png";
import img03 from "../../assets/images/project1.jpg";

const portfolioData = [
  { imgUrl: img01, title: "React Landing Page", url: "#" },
  { imgUrl: img02, title: "React Landing Page", url: "#" },
  { imgUrl: img03, title: "React Landing Page", url: "#" },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="12" className="portfolio_top mb-5">
            <h6>Explore my word and give a feedback</h6>
            <h2>Portfolio</h2>
          </Col>
          {portfolioData.map((item, index) => (
            <Col lg="4" md="6" sm="6" key={index}>
              <div className="portfolio_card">
                <div className="portfolio_img">
                  <img src={item.imgUrl} alt="" className="w-100"></img>
                </div>

                <div className="portfolio_content">
                  <h5>{item.title}</h5>
                  <a href={item.url}>View live demo</a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;

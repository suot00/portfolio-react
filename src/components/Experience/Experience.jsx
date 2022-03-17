import React from "react";
import "./Experience.css";
import { Container, Row, Col } from "reactstrap";

const developmentExperienceData = [
  {
    year: "2029-2020",
    title: "Sr. Frontend Developer",
    desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros nunc fringilla id rutrum nibh. Orci convallis pulvinar urna fusce at purus neque nam leo Suspendisse semper facilisi parturient sit euismod placerat",
  },
  {
    year: "2020-2021",
    title: "Sr. Frontend Developer",
    desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros nunc fringilla id rutrum nibh. Orci convallis pulvinar urna fusce at purus neque nam leo Suspendisse semper facilisi parturient sit euismod placerat",
  },
  {
    year: "2021-2022",
    title: "Sr. Frontend Developer",
    desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros nunc fringilla id rutrum nibh. Orci convallis pulvinar urna fusce at purus neque nam leo Suspendisse semper facilisi parturient sit euismod placerat",
  },
  {
    year: "2022-2022",
    title: "Sr. Frontend Developer",
    desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros nunc fringilla id rutrum nibh. Orci convallis pulvinar urna fusce at purus neque nam leo Suspendisse semper facilisi parturient sit euismod placerat",
  },
];
const Experience = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>Experience</h2>
          </Col>
          <Col lg="6" md="6">
            <div className="single_experience-container">
              {developmentExperienceData.map((item, index) => (
                <div className="single_experience" key={index}>
                  <span className="experience_icon">
                    <i className="ri-briefcase-line"></i>
                  </span>
                  <h6>{item.year}</h6>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="single_experience-container">
              {developmentExperienceData.map((item, index) => (
                <div className="single_experience" key={index}>
                  <span className="experience_icon">
                    <i className="ri-briefcase-line"></i>
                  </span>
                  <h6>{item.year}</h6>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;

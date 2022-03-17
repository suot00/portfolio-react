import React, { useState } from "react";
import "./About.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assets/images/avatar.png";
import Education from "./Education";
import Skills from "./Skills";
import Award from "./Award";
const About = () => {
  const [aboutFilter, setAboutFilter] = useState("ABOUT");
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>About Me</h2>
          </Col>
          <Col lg="4" md="3">
            <div className="about_btns d-flex flex-column align-items-center">
              <button
                className={`about_btn ${
                  aboutFilter === "ABOUT" ? "about_btn-active" : ""
                }`}
                onClick={() => setAboutFilter("ABOUT")}
              >
                About Me
              </button>
              <button
                className={`about_btn ${
                  aboutFilter === "EDUCATION" ? "about_btn-active" : ""
                }`}
                onClick={() => setAboutFilter("EDUCATION")}
              >
                Education
              </button>
              <button
                className={`about_btn ${
                  aboutFilter === "SKILLS" ? "about_btn-active" : ""
                }`}
                onClick={() => setAboutFilter("SKILLS")}
              >
                Skills
              </button>
              <button
                className={`about_btn ${
                  aboutFilter === "AWARD" ? "about_btn-active" : ""
                }`}
                onClick={() => setAboutFilter("AWARD")}
              >
                Award
              </button>
            </div>
          </Col>
          <Col lg="8" md="9">
            {aboutFilter === "ABOUT" && (
              <div className="about_content_wrapper d-flex gap-5">
                <div className="about_img w-25">
                  <img src={aboutImg} alt="" className="w-100" />
                </div>

                <div className="about_content w-75">
                  <h2>I'm Truong Khac Suot</h2>
                  <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Primis
                    eros nunc fringilla id rutrum nibh. Orci convallis pulvinar
                    urna fusce at purus neque nam leo? Suspendisse semper
                    facilisi parturient sit euismod placerat.
                  </p>
                  <div className="social_links">
                    <h6 className="mb-4">Connect with me :</h6>
                    <span>
                      <a href="#">
                        <i className="ri-facebook-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="ri-youtube-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="ri-github-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="ri-instagram-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="ri-linkedin-line"></i>Name
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            )}
            {aboutFilter === "EDUCATION" && <Education />}
            {aboutFilter === "SKILLS" && <Skills />}
            {aboutFilter === "AWARD" && <Award />}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

import React, { useEffect, useRef } from "react";
import "./Hero-Section.css";
import { Container, Row, Col } from "reactstrap";
import img from "../../assets/images/avatar.png";
import { init } from "ityped";
const HeroSection = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      showCursor: true,
      strings: ["Truong Khac Suot", "A Web Developer", "Content Creator"],
    });
  });
  return (
    <section className="hero_section" id="home">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero_content">
              <p className="mb-2">Welcome to my world !</p>
              <h2 className="title mb-4">
                I'm <span ref={textRef}></span>
              </h2>
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros
                nunc fringilla id rutrum nibh. Orci convallis pulvinar urna
                fusce at purus neque nam leo? Suspendisse semper facilisi
                parturient sit euismod placerat.
              </p>
              <div className=" mt-5 btns d-flex align-items-center gap-4">
                <button className="btn hire_btn">
                  <a href="#">Hire me</a>
                </button>
                <button className="btn">Contact</button>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="img">
              <img
                src={img}
                alt=""
                className="w-100"
                style={{ paddingTop: "20%", paddingLeft: "5%" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;

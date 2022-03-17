import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Testimonial.css";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeech: 3000,
    swipeToSlide: true,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5 text-center">
            <h2>What my clients says</h2>
          </Col>
          <Col lg="6" className="m-auto">
            <Slider {...settings}>
              <div>
                <div className="single_testimonial">
                  <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Primis
                    eros nunc fringilla id rutrum nibh. Orci convallis pulvinar
                    urna fusce at purus neque nam leo? Suspendisse semper
                    facilisi parturient sit euismod placerat.
                  </p>
                  <h6>Truong Khac Suot</h6>
                  <p className="title"> Web Developer</p>
                </div>
              </div>
              <div>
                <div className="single_testimonial">
                  <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Primis
                    eros nunc fringilla id rutrum nibh. Orci convallis pulvinar
                    urna fusce at purus neque nam leo? Suspendisse semper
                    facilisi parturient sit euismod placerat.
                  </p>
                  <h6>Truong Khac Suot</h6>
                  <p className="title"> Web Developer</p>
                </div>
              </div>
              <div>
                <div className="single_testimonial">
                  <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Primis
                    eros nunc fringilla id rutrum nibh. Orci convallis pulvinar
                    urna fusce at purus neque nam leo? Suspendisse semper
                    facilisi parturient sit euismod placerat.
                  </p>
                  <h6>Truong Khac Suot</h6>
                  <p className="title"> Web Developer</p>
                </div>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;

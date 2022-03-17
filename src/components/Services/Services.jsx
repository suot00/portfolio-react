import React from "react";
import "./Services.css";
import { Container, Row, Col } from "reactstrap";

const servicesData = [
  {
    icon: "ri-code-line",
    title: "Web Design",
    desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros nunc fringilla id rutrum nibh. Orci convallis pulvinar urna fusce at purus neque nam leo Suspendisse semper facilisi parturient sit euismod placerat",
  },
  {
    icon: "ri-code-s-slash-line",
    title: "Web Development",
    desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros nunc fringilla id rutrum nibh. Orci convallis pulvinar urna fusce at purus neque nam leo Suspendisse semper facilisi parturient sit euismod placerat",
  },
  {
    icon: "ri-qr-code-line",
    title: "App Development",
    desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros nunc fringilla id rutrum nibh. Orci convallis pulvinar urna fusce at purus neque nam leo Suspendisse semper facilisi parturient sit euismod placerat",
  },
  {
    icon: "ri-search-line",
    title: "SEO",
    desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros nunc fringilla id rutrum nibh. Orci convallis pulvinar urna fusce at purus neque nam leo Suspendisse semper facilisi parturient sit euismod placerat",
  },
  {
    icon: "ri-landscape-line",
    title: "Graphics Design",
    desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros nunc fringilla id rutrum nibh. Orci convallis pulvinar urna fusce at purus neque nam leo Suspendisse semper facilisi parturient sit euismod placerat",
  },
  {
    icon: "ri-gallery-line",
    title: "UI/UX",
    desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros nunc fringilla id rutrum nibh. Orci convallis pulvinar urna fusce at purus neque nam leo Suspendisse semper facilisi parturient sit euismod placerat",
  },
];
const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="12" className="services_top mb-5">
            <h6>Features</h6>
            <h2>what services I provide</h2>
          </Col>

          {servicesData.map((item, index) => (
            <Col lg="4" md="6" sm="6" key={index} className="mb-4">
              <div className="single_service">
                <span className="service_icon">
                  <i className={item.icon}></i>
                </span>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;

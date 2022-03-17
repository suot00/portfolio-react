import React from "react";
import "./Contact.css";
import Form from "../Form/Form";
import { Container, Row, Col } from "reactstrap";
const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2> Get In Touch</h2>
          </Col>
          <Col lg="6" md="6">
            <div className="contact_info-container d-flex align-items-center gap-5">
              <div className="single_info-box w-50">
                <h6>Address</h6>
                <p>Ho Chi Minh City</p>
              </div>

              <div className="single_info-box  w-50">
                <h6>Phone</h6>
                <p>0383592661</p>
              </div>
            </div>
            <div className="contact_info-container d-flex align-items-center gap-5">
              <div className="single_info-box  w-50">
                <h6>Email</h6>
                <p>examle@gmail.com</p>
              </div>

              <div className="single_info-box  w-50">
                <h6>Location</h6>
                <p>123 123 123</p>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

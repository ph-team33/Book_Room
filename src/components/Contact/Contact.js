import React from 'react';
import './Contact.css'
import { Col, Container, Row } from "react-bootstrap";


const Contact = () => {
       
    return (
            <section className = "py-4">
      <Container>
        <div className="contact-form-box">
          <h3 className="text-center text-black mt-4 mb-3">GET IN TOUCH</h3>
          <p className=" text-center text-black">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <Row>
            <Col md={7}>
              <h4 className=" text-black pb-3 pt-5 pt-md-1">Message Me</h4>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-4 mb-md-0">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>

                <br />
                <input
                  className="form-control form-control-lg"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
                <br />
                <textarea
                  className="form-control form-control-lg"
                  placeholder="Message"
                  rows="4"
                  name="message"
                  required
                ></textarea>
                <br />
                <button className="btn btn-success btn-lg">SEND MESSAGE</button>
              </form>
            </Col>
            <Col md={5} className="text-black my-auto">
              <h5 className="text-black pb-3 pt-5 pt-md-0"> Contact Info</h5>
              <h6 className="border-bottom mb-4 pb-3">
                Organization:{" "}
                <span className="text-black h5"> Book Room</span>
              </h6>
              <h6 className="border-bottom mb-4 pb-3">
                Location:{" "}
                <span className="text-black h5">Dhaka, Bangladesh</span>
              </h6>
              <h6 className="border-bottom mb-4 pb-3">
                Phone: <span className="text-black h5"> +880145782658</span>
              </h6>
              <h6 className="border-bottom mb-4 pb-3">
                Email: {" "}
                <span className="text-black h5">
                  bookroom.org@gmail.com
                </span>
              </h6>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
       
    );
};

export default Contact;
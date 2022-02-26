import React from "react";
import Carousel from 'react-bootstrap/Carousel'

const Customers = () => {
  return (
    <div className="container-fluid gtco-testimonials">
      <div className="container">
        <Carousel fade>
          <Carousel.Item>
            <img
              className=" d-block w-100 "
              src="/images/customer1.jpg"
              alt="First slide"
              height={500}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" d-block w-100 "
              src="/images/customer2.jpg"
              alt="Second slide"
              height={500}
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="/images/customer3.jpg"
              alt="Third slide"
              height={500}
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Customers;

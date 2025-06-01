import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";

const TestimonialSection = () => {
  return (
    <TestimonialContainer>
      <div className="container-fluid">
        {" "}
        {/* Use container-fluid for full width */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Carousel>
              <Carousel.Item>
                <TestimonialItem>
                  <TestimonialQuote>
                    "Rai Consultancy Services's collaborative approach made all
                    the difference. Their team seamlessly integrated with ours,
                    delivering exceptional results. A reliable consultancy for
                    any business."
                  </TestimonialQuote>
                  <TestimonialFooter>
                    <TestimonialImage
                      src="https://raiconsultancyservices.com/wp-content/uploads/2024/01/testi1.jpg"
                      alt="Amah Holland"
                    />
                    <div className="text-center">
                      <TestimonialName>Amah Holland</TestimonialName>
                      <br />
                      <TestimonialRole>
                        Social Media Manager of MG
                      </TestimonialRole>
                    </div>
                  </TestimonialFooter>
                </TestimonialItem>
              </Carousel.Item>
              <Carousel.Item>
                <TestimonialItem>
                  <TestimonialQuote>
                    "Rai Consultancy Services transformed our business strategy.
                    Their tailored approach and expert guidance brought
                    measurable success. Highly recommended!"
                  </TestimonialQuote>
                  <TestimonialFooter>
                    <TestimonialImage
                      src="https://raiconsultancyservices.com/wp-content/uploads/2024/01/testi3.jpg"
                      alt="Denden Mushi"
                    />
                    <div className="text-center">
                      <TestimonialName>Denden Mushi</TestimonialName>
                      <br />
                      <TestimonialRole>
                        Mobile Developer of Avelie
                      </TestimonialRole>
                    </div>
                  </TestimonialFooter>
                </TestimonialItem>
              </Carousel.Item>
              <Carousel.Item>
                <TestimonialItem>
                  <TestimonialQuote>
                    "Working with Rai Consultancy Services was a game-changer.
                    Their innovative solutions and responsive communication
                    exceeded our expectations. Truly a strategic partner!"
                  </TestimonialQuote>
                  <TestimonialFooter>
                    <TestimonialImage
                      src="https://raiconsultancyservices.com/wp-content/uploads/2024/01/testi2.jpg"
                      alt="Natsu Dragnell"
                    />
                    <div className="text-center">
                      <TestimonialName>Natsu Dragnell</TestimonialName>
                      <br />
                      <TestimonialRole>
                        Lead Designer of DolanDolen
                      </TestimonialRole>
                    </div>
                  </TestimonialFooter>
                </TestimonialItem>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </TestimonialContainer>
  );
};

export default TestimonialSection;

// Styled Components

const TestimonialContainer = styled.section`
  background-color: #f8f9fa;
  text-align: center;
  width: 100;
`;

const TestimonialItem = styled.div`
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 30px;
`;

const TestimonialQuote = styled.p`
  font-style: italic;
  margin-bottom: 20px;
`;

const TestimonialFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TestimonialImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const TestimonialName = styled.span`
  font-weight: bold;
  text-align: center;
`;

const TestimonialRole = styled.span`
  color: #6c757d;
  font-size: 14px;
  text-align: center;
`;

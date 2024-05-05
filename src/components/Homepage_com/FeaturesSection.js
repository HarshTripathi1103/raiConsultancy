import React from "react";
import styled from "styled-components";

const FeaturesSection = () => {
  return (
    <Section className="p-5">
      <Container>
        <Row>
          <Column>
            <Widget>
              <Content>
                <Heading>10+</Heading>
                <Subheading>Years of Expertise</Subheading>
              </Content>
            </Widget>
          </Column>
          <Column>
            <Widget>
              <Content>
                <Heading>100+</Heading>
                <Subheading>Satisfied Clients</Subheading>
              </Content>
            </Widget>
          </Column>
          <Column>
            <Widget>
              <Content>
                <Heading>500+</Heading>
                <Subheading>Successful Projects</Subheading>
              </Content>
            </Widget>
          </Column>
          <Column>
            <Widget>
              <Content>
                <Heading>24/7</Heading>
                <Subheading>Customer Support</Subheading>
              </Content>
            </Widget>
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

export default FeaturesSection;

const Section = styled.section`
  padding: 80px 0;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 15px;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const Column = styled.div`
  flex: 1;
  text-align: center;
  max-width: 250px;

  @media screen and (max-width: 768px) {
    flex: 1 1 50%;
    max-width: none;
  }
`;

const Widget = styled.div`
  margin-bottom: 30px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Content = styled.div`
  margin-top: 20px;
`;

const Heading = styled.h2`
  font-size: 20px;
  color: #007bff;
  margin-bottom: 10px;
`;

const Subheading = styled.h3`
  font-size: 18px;
  color: #333;
`;

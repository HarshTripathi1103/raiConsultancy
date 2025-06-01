import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Section className="bg-warning">
      <Container>
        <Column>
          <Heading>
            Rai Consultancy Services Services. All Rights Reserved
          </Heading>
        </Column>
        <Column>
          <SocialShare>
            <ul>
              <li>
                <a href="#" className="facebook">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="#" className="twitter">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#" className="linkedin">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </SocialShare>
        </Column>
      </Container>
    </Section>
  );
};

export default Footer;

const Section = styled.section`
  background: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div`
  flex: 1;
`;

const Heading = styled.p`
  font-size: 16px;
  margin: 0;
  color: #333;
`;

const SocialShare = styled.div`
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: flex-end;
  }

  li {
    margin-left: 10px;
  }

  a {
    color: #333;
    text-decoration: none;
    display: inline-block;
    font-size: 24px;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #007bff;
  }
`;

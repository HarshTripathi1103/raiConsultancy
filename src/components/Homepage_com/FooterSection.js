import styled from "styled-components";

const FooterSection = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Column>
            <Logo>
              <h1 className="d-inline-block align-top font-weight-bold">
                <span className="text-primary">Rai </span>Consultancy {""}
                <span className="text-primary">Services</span>
              </h1>
            </Logo>
            <Description>
              <p>
                At Rai Consultancy Services, we look into your expertise to find
                the strategic and innovative solution for your business to move
                upwards. Shape the future of your business and make it thrive.
              </p>
            </Description>
          </Column>
          <Column>
            <Heading>Subscribe Now</Heading>
            <PageList>
              <PageListItem>
                <a href="/" target="_blank" rel="nofollow">
                  Home
                </a>
              </PageListItem>
              <PageListItem>
                <a href="/about" target="_blank" rel="nofollow">
                  About Us
                </a>
              </PageListItem>
              <PageListItem>
                <a href="/features" target="_blank" rel="nofollow">
                  Features
                </a>
              </PageListItem>
              <PageListItem>
                <a href="/services" target="_blank" rel="nofollow">
                  Services
                </a>
              </PageListItem>
            </PageList>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <ContactList>
              <ContactItem>
                <a href="mailto:raiconsultancyservices.info@gmail.com">
                  raiconsultancyservices.info@gmail.com
                </a>
              </ContactItem>
              <ContactItem>
                <a href="tel:+1(415)723-5882">+1 (415) 723-5882</a>
              </ContactItem> 
            </ContactList>
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

export default FooterSection;

const Section = styled.section`
  background-color: #f8f9fa;
  padding: 50px 0;
`;

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div`
  flex: 1 1 33%;
  padding: 0 15px;
  margin-bottom: 30px;
  text-align: center;

  @media screen and (max-width: 768px) {
    flex-basis: 50%;
  }

  @media screen and (max-width: 480px) {
    flex-basis: 100%;
  }
`;

const Logo = styled.div`
  margin-bottom: 20px;

  img {
    width: 100%;
    max-width: 200px;
  }
`;

const Description = styled.div`
  p {
    color: #333;
    line-height: 1.5;
  }
`;

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const PageList = styled.div`
  margin-bottom: 20px;
`;

const PageListItem = styled.div`
  a {
    color: #333;
    text-decoration: none;
    display: block;
    margin-bottom: 5px;
    transition: color 0.3s ease;

    &:hover {
      color: #007bff;
    }
  }
`;

const ContactList = styled.div``;

const ContactItem = styled.div`
  margin-bottom: 10px;

  a {
    color: #333;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #007bff;
    }
  }
`;

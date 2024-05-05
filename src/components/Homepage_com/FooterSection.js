import React from 'react';
import styled from 'styled-components';

const FooterSection = () => {
    return (
        <Section>
            <Container>
                <Row>
                    <Column>
                        <Logo>
                            <a href="https://wpmet.com/plugin/elementskit/" target="_blank" rel="nofollow">
                                <img src="https://raiconsultancyservices.com/wp-content/uploads/2024/01/logo_3-removebg-preview.png" alt="" />
                            </a>
                        </Logo>
                        <Description>
                            <p>At Rai consultancy, we look into your expertise to find the strategic and innovative solution for your business to move upwards. Shape the future of your business and make it thrive.</p>
                        </Description>
                    </Column>
                    <Column>
                        <Heading>Subscribe Now</Heading>
                        <PageList>
                            <PageListItem>
                                <a href="https://raiconsultancyservices.com/home/" target="_blank" rel="nofollow">Home</a>
                            </PageListItem>
                            <PageListItem>
                                <a href="https://raiconsultancyservices.com/sample-page/" target="_blank" rel="nofollow">About Us</a>
                            </PageListItem>
                            <PageListItem>
                                <a href="https://raiconsultancyservices.com/features/" target="_blank" rel="nofollow">Features</a>
                            </PageListItem>
                            <PageListItem>
                                <a href="https://raiconsultancyservices.com/services/" target="_blank" rel="nofollow">Services</a>
                            </PageListItem>
                        </PageList>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <ContactList>
                            <ContactItem>
                                <a href="mailto:info@raiconsultancyservices.com">info@raiconsultancyservices.com</a>
                            </ContactItem>
                            <ContactItem>
                                <span>10300 49St N STE 427, Clearwater, FL, 33762, USA</span>
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

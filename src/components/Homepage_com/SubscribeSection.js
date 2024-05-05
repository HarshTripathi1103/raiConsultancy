import React from 'react';
import styled from 'styled-components';

const SubscribeSection = () => {
    return (
        <Section>
            <BackgroundOverlay />
            <Container>
                <Row>
                    <Column>
                        <Heading>Subscribe for The Latest Offers!</Heading>
                        <SubHeading>Join thousands of satisfied subscribers to get the latest offers from us.</SubHeading>
                    </Column>
                    <Column>
                        <Form>
                            <FormGroup>
                                <input type="text" name="name" placeholder="Your Name" required />
                            </FormGroup>
                            <FormGroup>
                                <input type="email" name="email" placeholder="Your Email" required />
                            </FormGroup>
                            <FormGroup>
                                <input type="tel" name="phone" placeholder="Phone Number" required pattern="[0-9()#&+*-=.]+" title="Only numbers and phone characters (#, -, *, etc) are accepted." />
                            </FormGroup>
                            <FormGroup>
                                <textarea name="message" rows="4" placeholder="Message"></textarea>
                            </FormGroup>
                            <SubmitButton type="submit">Send</SubmitButton>
                        </Form>
                        <Text>Like what you’ve seen? Get in touch to learn more.</Text>
                    </Column>
                </Row>
            </Container>
        </Section>
    );
};

export default SubscribeSection;

const Section = styled.section`
    position: relative;
    padding:25px;
`;

const BackgroundOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const Container = styled.div`
    max-width: 1140px;
    margin: 0 auto;
    padding: 20px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const Column = styled.div`
    flex: 1;
    color: #ffffff;
    padding: 0 20px;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        margin-bottom: 0;
    }
`;

const Heading = styled.h2`
    font-size: 28px;
    margin-bottom: 10px;
    color: red;
    font-weight: bold;

    @media (min-width: 768px) {
        font-size: 40px;
    }
`;

const SubHeading = styled.p`
    font-size: 16px;
    margin-bottom: 20px;
    color: black;

    @media (min-width: 768px) {
        font-size: 20px;
    }
`;

const Form = styled.form`
    padding: 20px;
    border-radius: 10px;
`;

const FormGroup = styled.div`
    margin-bottom: 15px;

    input,
    textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ced4da;
        border-radius: 5px;
        box-sizing: border-box;
    }

    textarea {
        height: 100px;
    }
`;

const SubmitButton = styled.button`
    width: 100%;
    padding: 10px 0;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: #0056b3;
    }
`;

const Text = styled.p`
    margin-top: 20px;
    color: #ffffff;
    text-align: center;

    @media (min-width: 768px) {
        text-align: left;
    }
`;

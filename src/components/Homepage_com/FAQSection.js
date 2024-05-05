import React, { useState } from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What Services Do You Offer",
      answer: "Feel free to reach out to our team via email at info@raiconsultancyservices.com or give us a call at (555) 123-4567. You can also fill out the contact form on our website, and we’ll get back to you promptly."
    },
    {
      question: "How Can I Contact You To Discuss My Needs",
      answer: "We have a diverse client base, including technology startups, financial institutions, and healthcare providers. Our adaptable approach allows us to bring valuable insights to a wide range of industries."
    },
    {
      question: "Scope And Cost Of A Consulting Project",
      answer: "After an initial consultation, we work closely with you to understand your specific needs and goals. We then provide a detailed proposal outlining the scope, timeline, and cost of the project. Transparency is a cornerstone of our approach."
    },
    {
      question: "Case Studies From Previous Clients",
      answer: "Certainly! Please contact us, and we’ll be happy to share relevant references and case studies that showcase our successful collaborations and positive outcomes."
    },
    {
      question: "Consulting Firm Apart From Others",
      answer: "Rai consultancy service’s Consulting stands out for its innovative solutions and personalized approach. Our team combines industry expertise with a commitment to client satisfaction, delivering measurable results for every project."
    },
    {
      question: "How Do You Ensure Confidentiality",
      answer: "We prioritize the confidentiality of our clients. Our team adheres to strict confidentiality agreements, and we employ robust security measures to safeguard sensitive information throughout the consulting process."
    },
    {
      question: "What Is Your Typical Engagement Process",
      answer: "Our engagement process involves an initial consultation to understand your needs, followed by a comprehensive analysis and proposal. Upon agreement, we work collaboratively to implement tailored solutions, providing regular updates and feedback sessions to ensure success."
    },
    {
      question: "Stay Up-To-Date With Industry Trends",
      answer: "At Rai consultancy service’s, we prioritize staying ahead of the curve. Our team regularly participates in industry conferences, workshops, and continuous professional development. Additionally, we maintain a robust network of professionals and subscribe to various industry publications to ensure we are well-informed about the latest trends and changes. This commitment allows us to offer cutting-edge solutions and insights to our clients."
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section className="px-5">
      <Container>
        <Heading>Frequently Asked Questions</Heading>
        <Subheading>Got questions? We have got the best answers for you.</Subheading>
        <FAQList>
          {faqData.map((faq, index) => (
            <FAQItem key={index}>
              <Question onClick={() => handleToggle(index)}>
                {faq.question}
                <PlusIcon />
              </Question>
              {activeIndex === index && <Answer>{faq.answer}</Answer>}
              <HorizontalLine />
            </FAQItem>
          ))}
        </FAQList>
      </Container>
    </Section>
  );
};

export default FAQSection;

// Styled Components

const Section = styled.section`
  padding: 20px 0;
  background-color: #f8f9fa;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 36px;
  color: #007bff;
  margin-bottom: 20px;
`;

const Subheading = styled.p`
  font-size: 18px;
  color: #333;
  margin-bottom: 40px;
`;

const FAQList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FAQItem = styled.li`
  margin-bottom: 20px;
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  color: #333;
  cursor: pointer;
`;

const PlusIcon = styled(FaPlus)`
  font-size: 24px;
`;

const Answer = styled.div`
  font-size: 16px;
  color: #555;
  margin-top: 10px;
`;

const HorizontalLine = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 20px 0;
`;

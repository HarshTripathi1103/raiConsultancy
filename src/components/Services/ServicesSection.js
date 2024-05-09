import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const ServicesSection = () => {
  return (
    <section className="py-5">
      <Container>
        <Row>
        <Col md={6}>
    <ServiceBox
      title="Strategic Planning"
      image="https://raiconsultancyservices.com/wp-content/uploads/2024/01/strategy-business-planning-analysis-concept-scaled.jpg"
      description="With the strategic planning services offered by soft emerald, you may unleash the potential of your company. We walk you through the complexities of developing a plan, allocating resources, and establishing long-term goals. Our strategic insights open the door to a solid plan that supports your goals and sets up your company for success."
    />
  </Col>
  <Col md={6}>
    <ServiceBox
      title="Market Research"
      image="https://raiconsultancyservices.com/wp-content/uploads/2024/01/paper-analysis-scaled.jpg"
      description="Use the thorough market research services offered by soft emerald to stay ahead of the curve. We explore consumer behavior, market dynamics, and industry trends to give you practical information that can help you make wise decisions. Your tactics will be precisely calibrated to suit the demands of the constantly changing market thanks to our research-driven methodology."
    />
  </Col>
  {/* Add more ServiceBoxes below */}
  <Col md={6}>
    <ServiceBox
      title="Business Analysis"
      image="https://raiconsultancyservices.com/wp-content/uploads/2024/01/analysis-data-information-insight-plan-process-concept-scaled.jpg"
      description="Business analysis is soft emerald's strong suit. They break down complex procedures to find areas where they may be optimized. Because of our strong analytical skills, we can improve productivity, simplify processes, and implement significant improvements that will have a favorable effect on your bottom line."
    />
  </Col>
  <Col md={6}>
    <ServiceBox
      title="Financial Consulting"
      image="https://raiconsultancyservices.com/wp-content/uploads/2024/01/executives-reviewing-last-report-scaled.jpg"
      description="Financial consulting services from soft emerald will help you navigate the complicated financial landscape. Our professionals offer specialized solutions for everything from financial risk management to budgeting and forecasting to guarantee your company's financial stability. You can rely on us to help you achieve both financial stability and sustainable growth."
    />
  </Col>
  <Col md={6}>
    <ServiceBox
      title="Organizational Development"
      image="https://raiconsultancyservices.com/wp-content/uploads/2024/01/plan-planning-strategy-bysiness-ideas-concept-1536x1102.jpg"
      description="With the organizational development experience of soft emerald, cultivate a vibrant corporate culture. We collaborate closely with your team to promote positive change, strengthen leadership, and improve communication. Our complete strategy gives your company the flexibility, expansion, and success it needs in the fast-paced commercial world of today."
    />
  </Col>
  <Col md={6}>
    <ServiceBox
      title="Digital Marketing"
      image="https://raiconsultancyservices.com/wp-content/uploads/2024/01/map-lying-wooden-table-1536x1003.jpg"
      description="soft emerald's digital marketing services infuse creativity into your marketing plans. We improve your brand's online visibility with services including content production, social media management, SEO, and online advertising. We make sure that your digital efforts result in quantifiable results with our data-driven strategy."
    />
  </Col>
  <Col md={6}>
    <ServiceBox
      title="CRM And Tailored Solutions"
      image="https://raiconsultancyservices.com/wp-content/uploads/2024/01/customer-relationship-management-concept-1536x1152.jpg"
      description="Use the CRM solutions from soft emerald to improve your interactions with your customers. To meet your company's demands, we assist you in implementing and optimizing CRM solutions. Improve client encounters, expedite procedures, and create enduring relationships that spur client loyalty and company expansion."
    />
  </Col>
        </Row>
      </Container>
    </section>
  );
};

const ServiceBox = ({ title, image, description }) => {
  return (
    <div className="p-4">
      <Image src={image} alt={title} fluid />
      <h3 className="mt-3">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServicesSection;

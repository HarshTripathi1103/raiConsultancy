import React from "react";

const ServiceBox = ({ title, imageUrl, description }) => {
  return (
    <div className="col-md-6 mb-4">
      <div className="card h-100 border-0 shadow">
        <img
          loading="lazy"
          decoding="async"
          src={imageUrl}
          className="card-img-top rounded-top"
          alt=""
        />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <>
    <section className="p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="mb-4 text-center font-weight-bold">
              Our <span className="text-danger">most preferred</span> expertise
            </h2>
            <p className="text-center text-secondary">
              soft emerald has unparalleled services, here are the most recognized services by us.
            </p>
          </div>
        </div>
        <div className="row">
          <ServiceBox
            title="Strategic Insights"
            imageUrl="https://raiconsultancyservices.com/wp-content/uploads/2024/01/upset-disappointed-businesswoman-entering-office-meeting-room-late-night-scaled.jpg"
            description="Our strategic insights at soft emerald explore deeply into the heart of your company’s operations, going beyond the obvious. We guarantee that every choice is supported by knowledgeable viewpoints for a solid and forward-thinking strategy by offering a thorough grasp of market dynamics, competitor landscapes, and developing trends."
          />
          <ServiceBox
            title="Tailored Solutions"
            imageUrl="https://raiconsultancyservices.com/wp-content/uploads/2024/01/creating-clothes-scaled.jpg"
            description="soft emerald takes pleasure in creating customized solutions that highlight the distinctive features of your company. Our approaches are not one-size-fits-all; rather, they are painstakingly crafted to tackle your unique problems and capitalize on your unique assets, guaranteeing that each resolution is precisely in line with your goals."
          />
          <ServiceBox
            title="Proven Expertise"
            imageUrl="https://raiconsultancyservices.com/wp-content/uploads/2024/01/standard-quality-control-collage-scaled.jpg"
            description="Proven competence is the cornerstone upon which trust is formed, and at soft emerald, our track record speaks for itself. Our staff has a plethora of experience and proven ability to lead your company towards long-term success, having navigated a variety of sectors and overcome obstacles."
          />
          <ServiceBox
            title="Agile Adaptation"
            imageUrl="https://raiconsultancyservices.com/wp-content/uploads/2024/01/colleagues-brainstorming-together-scaled.jpg"
            description="Adaptability is essential in a company environment that is changing quickly. Agile adaptation is soft emerald’s specialty; it allows it to quickly adjust to shifts in project needs or market conditions. Our adaptable strategy guarantees that your initiatives continue to be durable, dynamic, and prepared to take advantage of new possibilities."
          />
          <ServiceBox
            title="Collaborative Approach"
            imageUrl="https://raiconsultancyservices.com/wp-content/uploads/2024/01/hands-holding-puzzle-business-problem-solving-concept-scaled.jpg"
            description="The methodology of soft emerald is centered on collaboration. We are committed to collaborating closely with you, learning about your objectives, and building a relationship that will guarantee our shared success. By fostering an atmosphere of open communication and consensus-building, we enable teamwork to produce the most significant outcomes."
          />
          <ServiceBox
            title="Technology Integration"
            imageUrl="https://raiconsultancyservices.com/wp-content/uploads/2024/01/html-css-collage-concept-with-person-scaled.jpg"
            description="At forefront of technology integration, soft emerald expertly integrates state-of-the-art technologies with your business’s operational procedures. Our services range from streamlining processes to maximizing the potential of digital technologies to make sure that technology drives productivity, creativity, and long-term business success for your company."
          />
        </div>
      </div>
    </section></>
  );
};

export default ServicesSection;

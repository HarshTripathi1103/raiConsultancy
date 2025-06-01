import React from "react";

const ServiceBox = ({ title, imageUrl, description }) => {
  return (
    <div className="col-md-6 mb-4">
      <div className="card h-100 border-0 shadow">
        <img
          loading="lazy"
          decoding="async"
          src={imageUrl}
          className="card-img-top rounded-top img-fluid"
          alt=""
          style={{ objectFit: "cover", height: "250px" }} // Set the height as needed
        />
        <div className="card-body">
          <h3 className="card-title font-weight-bold text-primary text-center">
            {title}
          </h3>
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
                Our <span className="text-danger">most preferred</span>{" "}
                expertise
              </h2>
              <p className="text-center text-secondary">
                Rai Consultancy Services has unparalleled services, here are the
                most recognized services by us.
              </p>
            </div>
          </div>
          <div className="row">
            <ServiceBox
              title="Strategic Insights"
              imageUrl="https://www.statxo.com/wp-content/uploads/2018/11/Strategic-Insights-MI-Image-2-1024x682.jpg"
              description="Our strategic insights at Rai Consultancy Services explore deeply into the heart of your company’s operations, going beyond the obvious. We guarantee that every choice is supported by knowledgeable viewpoints for a solid and forward-thinking strategy by offering a thorough grasp of market dynamics, competitor landscapes, and developing trends."
            />
            <ServiceBox
              title="Tailored Solutions"
              imageUrl="https://www.certum.eu/en/wp-content/uploads/2020/08/Tailored_Solutions.jpg"
              description="Rai Consultancy Services takes pleasure in creating customized solutions that highlight the distinctive features of your company. Our approaches are not one-size-fits-all; rather, they are painstakingly crafted to tackle your unique problems and capitalize on your unique assets, guaranteeing that each resolution is precisely in line with your goals."
            />
            <ServiceBox
              title="Proven Expertise"
              imageUrl="https://www.sineris.com/Content/img/proven-expertise.jpg"
              description="Proven competence is the cornerstone upon which trust is formed, and at Rai Consultancy Services, our track record speaks for itself. Our staff has a plethora of experience and proven ability to lead your company towards long-term success, having navigated a variety of sectors and overcome obstacles."
            />
            <ServiceBox
              title="Agile Adaptation"
              imageUrl="https://www.hh2.com/hubfs/Imported_Blog_Media/63c15821364d23107ef01089_62e00cf6103b2b7ff24a4515_agile-for-construction.jpeg"
              description="Adaptability is essential in a company environment that is changing quickly. Agile adaptation is Rai Consultancy Services’s specialty; it allows it to quickly adjust to shifts in project needs or market conditions. Our adaptable strategy guarantees that your initiatives continue to be durable, dynamic, and prepared to take advantage of new possibilities."
            />
            <ServiceBox
              title="Collaborative Approach"
              imageUrl="https://www.eschoolnews.com/files/2016/01/collaboration.jpg"
              description="The methodology of Rai Consultancy Services is centered on collaboration. We are committed to collaborating closely with you, learning about your objectives, and building a relationship that will guarantee our shared success. By fostering an atmosphere of open communication and consensus-building, we enable teamwork to produce the most significant outcomes."
            />
            <ServiceBox
              title="Technology Integration"
              imageUrl="https://wallpaperaccess.com/full/5665464.jpg"
              description="At forefront of technology integration, Rai Consultancy Services expertly integrates state-of-the-art technologies with your business’s operational procedures. Our services range from streamlining processes to maximizing the potential of digital technologies to make sure that technology drives productivity, creativity, and long-term business success for your company."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;

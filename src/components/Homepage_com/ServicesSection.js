import React from "react";

const ServicesSection = () => {
  const headerStyle = {
    fontSize: "2.8rem",
    marginBottom: "20px",
    color: "#333", // Set text color to a darker shade for better visibility
  };

  return (
    <section className="p-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="font-weight-bold mb-4" style={headerStyle}>
            Our <span style={{ color: "#ff7469" }}>Most Preferred</span>{" "}
            Expertise
          </h2>
          <p className="text-muted">
            soft emerald offers unparalleled services. Here are the most
            recognized services by us.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow">
              <img
                src="https://raiconsultancyservices.com/wp-content/uploads/2024/01/young-businessman-very-busy_1098-3068.jpg"
                className="card-img-top img-fluid"
                alt="Digital Marketing"
                style={{ maxHeight: "250px" }} // Set max height for fixed size
              />
              <div className="card-body">
                <h2 className="card-title text-danger">Digital Marketing</h2>
                <p className="card-text text-muted">
                  Digitization by soft emerald provides its clients with the
                  strategies to build digital platforms and be known digitally.
                  We come up with tactics to emphasize on your digital presence.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow">
              <img
                src="https://raiconsultancyservices.com/wp-content/uploads/2024/01/welcome-tell-us-something-about-your-work-experience_637285-8931.jpg"
                className="card-img-top img-fluid"
                alt="Financial Consulting"
                style={{ maxHeight: "250px" }} // Set max height for fixed size
              />
              <div className="card-body">
                <h2 className="card-title text-danger">Financial Consulting</h2>
                <p className="card-text text-muted">
                  Financial stability and assistance is a goal of all businesses
                  and soft emerald keeps that in mind and builds plans for
                  you that would help your business attain financial stability
                  and growth.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow">
              <img
                src="https://raiconsultancyservices.com/wp-content/uploads/2024/01/ezgif-7-9cf230d00d.png"
                className="card-img-top img-fluid"
                alt="Market Research"
                style={{ maxHeight: "250px" }} // Set max height for fixed size
              />
              <div className="card-body">
                <h2 className="card-title text-danger">Market Research</h2>
                <p className="card-text text-muted">
                  The most important step in marketing is market research. We
                  study your competitors for you and tell you what you can do
                  that they missed on. We provide you with an approach to learn
                  the recent trends to be followed in order to get noticed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

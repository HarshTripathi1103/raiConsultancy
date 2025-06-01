import React from "react";

const AboutUsSection = () => {
  const sectionStyle = {
    backgroundImage:
      "url('http://www.pixelstalk.net/wp-content/uploads/2016/08/Nature-wallpapers-Full-HD-backgroud.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: "100px 0", // Adjust padding as needed
    color: "#fff", // Text color
    textAlign: "center",
  };
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
  };

  const imgStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%", // Rounded shape for the image
    marginBottom: "20px",
  };

  return (
    <div>
      <div style={sectionStyle}>
        <div className="container py-5">
          <h1 className="m-4 font-weight-bold">ABOUT US</h1>
        </div>
      </div>
      <div className="p-5">
        <div className="row d-flex justify-content-center align-items-center text-center">
          <div className="col-lg-5">
            <img
              src="https://raiconsultancyservices.com/wp-content/uploads/2024/01/6-home.jpg"
              className="img-fluid rounded mx-auto d-block mb-4 mb-lg-0"
              width="60%"
              alt="About Story"
            />
          </div>
          <div className="col-lg-6">
            <div className="mx-auto text-center text-lg-left">
              <h2 className="mb-4 font-weight-bold">
                "Driven by Innovation, Defined by Results - Get to Know Our
                Story"
              </h2>
              <p className="text-muted">
                Welcome to <strong>Rai Consultancy</strong>, where{" "}
                <strong>passion</strong> meets <strong>expertise</strong>, and
                innovation fuels success. Our journey began with a shared{" "}
                <strong>vision</strong> to redefine the landscape of business
                consultancy. Our <strong>mission</strong> is clear — to empower
                businesses, large and small, to navigate the complexities of the
                modern marketplace with confidence. We believe in the power of{" "}
                <strong>innovation, strategic thinking</strong>, and the impact
                of collaborative partnerships. Through a{" "}
                <strong>client-centric</strong> approach, we aim to be the
                catalyst for your success, providing not just solutions, but a
                roadmap to enduring <strong>prosperity</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light p-5 d-flex justify-content-center">
        <h1 className="m-4 font-weight-bold w-50 text-center">
          "Beyond Consultation, We Fuel Transformations"
        </h1>
      </div>
      <div className="p-5">
        <div className="row d-flex justify-content-center align-items-center text-center">
          <div className="col-lg-6">
            <div className="mx-auto text-center text-lg-left">
              <h2 className="mb-4 font-weight-bold">
                "Empowering Businesses with Expertise and Excellence - Our
                Journey, Your Success."
              </h2>
              <p className="text-muted">
                The commitment of consultancy and solutions for your business.
                We are the<strong> pioneers</strong> of providing consultancy in
                business <strong>growth</strong> and<strong> developmen</strong>
                t. At Rai Consultancy, we look into your expertise to find the
                strategic and <strong>innovative</strong> solution for your
                business to move upwards. Shape the future of your business and
                make it thrive.
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <img
              src="https://raiconsultancyservices.com/wp-content/uploads/2024/01/6-home.jpg"
              className="img-fluid rounded mx-auto d-block mb-4 mb-lg-0"
              width="60%"
              alt="About Story"
            />
          </div>
        </div>
      </div>
      <div className="bg-light p-5 d-flex justify-content-center text-center">
        <h1 className="m-4 font-weight-bold w-50">
          "Strategies for Tomorrow, Success Today"
        </h1>
      </div>
      <div className="p-5" style={containerStyle}>
        <img
          loading="lazy"
          decoding="async"
          src="https://raiconsultancyservices.com/wp-content/uploads/2024/01/3-about.jpg"
          alt=""
          style={imgStyle}
        />
        <h4 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          Astrid Hartman
        </h4>
        <hr style={{ width: "50%", margin: "10px 0" }} />
        <p style={{ fontSize: "1rem", marginBottom: "20px" }}>
          Excellent service. What I liked most is their customer-centric
          approach
        </p>
        <button className="btn btn-primary">What My Clients Say</button>
      </div>
    </div>
  );
};

export default AboutUsSection;

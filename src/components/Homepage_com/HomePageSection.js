import React from "react";

const HomePageSection = () => {
  const sectionStyle = {
    backgroundImage:
      "url(https://wallpapercave.com/wp/wp7098419.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "100px 0",
    fontFamily: "Poppins, sans-serif",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Lightened the background overlay
  };

  const headerStyle = {
    fontSize: "2.8rem", // Slightly increased font size
    marginBottom: "20px",
    color: "#fff", // Set text color to white
  };

  const paragraphStyle = {
    marginBottom: "20px",
    lineHeight: "1.8",
    fontSize: "1.1rem", // Increased font size
    color: "#fff", // Set text color to white
  };

  const formControlStyle = {
    marginBottom: "20px",
  };

  const formParaStyle = {
    fontSize: "1rem", // Increased font size
    color: "#fff", // Set text color to white
  };

  const formContainerStyle = {
    maxWidth: "100%", // Adjusted form container width for responsiveness
    borderRadius: "15px", // Added border radius
  };

  return (
    <section className="mask" style={sectionStyle}>
      <div className="container">
        <div className="row align-items-center text-white">
          <div className="col-md-6 px-md-5 p-5">
            <h1 className="font-weight-bold" style={headerStyle}>
              An expert advice to climb up the stairs of your business’s success
            </h1>
            <p style={paragraphStyle}>
              The commitment of consultancy and solutions for your business. We
              are the pioneers of providing consultancy in business growth and
              development. At Rai consultancy, we look into your expertise to
              find the strategic and innovative solution for your business to
              move upwards. Shape the future of your business and make it
              thrive.
            </p>
          </div>
          <div className="col-md-6 shadow-lg p-4" style={{ ...formContainerStyle, backgroundColor: "rgba(0, 0, 0, 0.7)", border: "1px solid #333" }}>
            <div className="text-left mb-4">
              <p className="px-3" style={formParaStyle}>
                Get guidance on strategies and plans for your business with the
                proven experts. Get in touch with us to know the potential
                success that your business can achieve. Go beyond limits of
                success.
              </p>
            </div>
            <form className="p-4">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                style={formControlStyle}
              />
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                style={formControlStyle}
              />
              <button type="submit" className="btn btn-success btn-lg btn-block">
                Sign-Me Up!
              </button>
            </form>
            <p className="px-3" style={{ ...formParaStyle, marginBottom: "0" }}>
              Thank you for taking the first step towards success with Rai
              Consultancy Services. Our experts are ready to transform your
              challenges into opportunities. Expect a tailored response soon!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageSection;

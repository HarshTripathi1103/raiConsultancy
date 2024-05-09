import React from "react";

const ExampleComponent = () => {
  return (
    <div className="container p-3">
      <div className="row align-items-center">
        <div className="col-md-8 mb-4 p-5" style={{ maxWidth: "100%" }}>
          <h2>A strategic<span style={{ color: "#ff7469" }}> journey to perfection </span>in your business</h2>
          <p>A journey so precise that decides the triumph and future of your business.</p>
          <div className="row">
            <div className="col-md-6 mb-4">
              <h2>Expert Guidance</h2>
              <p>Guidance by the experienced is not a low but a great beginning to the journey of success. soft emerald has experienced individuals that know exactly how to help your business reach heights. Let’s begin your progress with the first step.</p>
            </div>
            <div className="col-md-6">
              <h2>Tailored Solutions</h2>
              <p>Our experts know just what your business needs to fulfill its goals. We have the perfectly strategized solutions tailored for your business issues</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <h2>Proven Results</h2>
              <p>Show confidence in our track record of accomplishments. With its proven experience, soft emerald transforms obstacles into opportunities and produces measurable, life-changing outcomes.</p>
            </div>
            <div className="col-md-6">
              <h2>Collaborative Approach</h2>
              <p>Our culture is ingrained with cooperation. soft emerald Services takes a collaborative approach, collaborating closely with you to achieve common objectives and long-term success.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-center">
            <img loading="lazy" decoding="async" width="360" height="540" src="https://raiconsultancyservices.com/wp-content/uploads/2024/01/closeup-business-team-working-with-financial-documents_160672-28737.jpg" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleComponent;

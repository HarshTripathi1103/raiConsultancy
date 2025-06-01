import React from "react";

const StepByStepSection = () => {
  const imageStyles = {
    maxWidth: "100%",
    height: "auto",
  };

  const contentStyles = {
    padding: "0 20px",
  };

  const titleStyles = {
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const listStyles = {
    marginBottom: 0,
    paddingLeft: 0,
  };

  const listItemStyles = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  };

  const iconStyles = {
    marginRight: "10px",
  };

  return (
    <section style={{ backgroundColor: "#f8f9fa" }}>
      <div className="d-flex justify-content-center">
        <div className="row w-75">
          <div className="col-md-6 p-4">
            <img
              src="https://raiconsultancyservices.com/wp-content/uploads/2024/01/smiling-bank-manager-showing-his-senior-customers-where-sign-contract-during-meeting-office_637285-1180.jpg"
              alt="Step by step"
              style={imageStyles}
            />
          </div>
          <div
            className="col-md-6 d-flex align-items-center"
            style={contentStyles}
          >
            <div>
              <h2 style={titleStyles}>
                A closer look at the{" "}
                <span style={{ color: "#ff7469" }}>step by step</span>{" "}
                functionality of Rai Consultancy
              </h2>
              <p className="text-secondary">
                Rai Consultancy follows a step by step process in a timely
                manner to attain your business’ success and stability. The
                process goes by:
              </p>
              <ul style={listStyles} className="text-secondary">
                <li style={listItemStyles}>
                  <svg
                    className="mr-2 text-success"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    style={iconStyles}
                  >
                    <path d="M0 0v16h16V0H0zm12.854 4.646a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0L3.5 9.707a.5.5 0 0 1 .708-.708L6 10.793l6.146-6.147z" />
                  </svg>
                  Informed Analysis
                </li>
                <li style={listItemStyles}>
                  <svg
                    className="mr-2 text-success"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    style={iconStyles}
                  >
                    <path d="M0 0v16h16V0H0zm12.854 4.646a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0L3.5 9.707a.5.5 0 0 1 .708-.708L6 10.793l6.146-6.147z" />
                  </svg>
                  Personalized Answers
                </li>
                <li style={listItemStyles}>
                  <svg
                    className="mr-2 text-success"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    style={iconStyles}
                  >
                    <path d="M0 0v16h16V0H0zm12.854 4.646a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0L3.5 9.707a.5.5 0 0 1 .708-.708L6 10.793l6.146-6.147z" />
                  </svg>
                  Recognized Skills
                </li>
                <li style={listItemStyles}>
                  <svg
                    className="mr-2 text-success"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    style={iconStyles}
                  >
                    <path d="M0 0v16h16V0H0zm12.854 4.646a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0L3.5 9.707a.5.5 0 0 1 .708-.708L6 10.793l6.146-6.147z" />
                  </svg>
                  Team-based Strategy
                </li>
                <li style={listItemStyles}>
                  <svg
                    className="mr-2 text-success"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    style={iconStyles}
                  >
                    <path d="M0 0v16h16V0H0zm12.854 4.646a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0L3.5 9.707a.5.5 0 0 1 .708-.708L6 10.793l6.146-6.147z" />
                  </svg>
                  Revolutionary Outcomes
                </li>
                <li style={listItemStyles}>
                  <svg
                    className="mr-2 text-success"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    style={iconStyles}
                  >
                    <path d="M0 0v16h16V0H0zm12.854 4.646a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0L3.5 9.707a.5.5 0 0 1 .708-.708L6 10.793l6.146-6.147z" />
                  </svg>
                  Quick Adaptability
                </li>
                <li style={listItemStyles}>
                  <svg
                    className="mr-2 text-success"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    style={iconStyles}
                  >
                    <path d="M0 0v16h16V0H0zm12.854 4.646a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0L3.5 9.707a.5.5 0 0 1 .708-.708L6 10.793l6.146-6.147z" />
                  </svg>
                  Tech Inclusion
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepByStepSection;

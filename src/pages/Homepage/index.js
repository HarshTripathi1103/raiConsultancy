import HomePageSection from "../../components/Homepage_com/HomePageSection";
import Navbar from "../../components/Homepage_com/Navbar";
import ServicesSection from "../../components/Homepage_com/ServicesSection";
import StepByStepSection from "../../components/Homepage_com/StepByStepSection";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HomePageSection />
      <ServicesSection/>
      <StepByStepSection/>
    </div>
  );
};

export default Homepage;

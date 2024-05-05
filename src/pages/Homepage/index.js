import ExampleComponent from "../../components/Homepage_com/ExampleComponent";
import FAQSection from "../../components/Homepage_com/FAQSection";
import FeaturesSection from "../../components/Homepage_com/FeaturesSection";
import Footer from "../../components/Homepage_com/Footer";
import FooterSection from "../../components/Homepage_com/FooterSection";
import HomePageSection from "../../components/Homepage_com/HomePageSection";
import Navbar from "../../components/Homepage_com/Navbar";
import ServicesSection from "../../components/Homepage_com/ServicesSection";
import StepByStepSection from "../../components/Homepage_com/StepByStepSection";
import SubscribeSection from "../../components/Homepage_com/SubscribeSection";
import TestimonialSection from "../../components/Homepage_com/TestimonialSection";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HomePageSection />
      <ServicesSection/>
      <StepByStepSection/>
      <ExampleComponent/>
      <TestimonialSection/>
      <FeaturesSection/>
      <FAQSection/>
      <SubscribeSection/>
      <FooterSection/>
      <Footer/>
    </div>
  );
};

export default Homepage;

import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/common/Hero";
import Features from "../../components/common/Features";
import HowItWorks from "../../components/common/HowItWorks";
import TopColleges from "../../components/common/TopColleges";
import Footer from "../../components/layout/Footer";

const Landing = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <TopColleges />
         <Footer />
    </>
  );
};

export default Landing;
import Banner from "../Banner/Banner";
import CardSection from "../CardSection/CardSection";
import Footer from "../Footer/Footer";
import FourthSection from "../FourthSection/FourthSection";
import Navbar from "../Navbar/Navbar";
import TeamMeet from "../TeamMeet/TeamMeet";
import TeamSection from "../TeamSection/TeamSection";
import Testimonials from "../Testimonials/Testimonials";
import ThirdSection from "../ThirdSection/ThirdSection";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Navbar></Navbar>
      <Banner></Banner>
      <CardSection></CardSection>
      <ThirdSection></ThirdSection>
      <FourthSection></FourthSection>
      <TeamSection></TeamSection>
      <TeamMeet></TeamMeet>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
};

export default Home;

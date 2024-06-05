import Slider from "./carousel/Slider";
import Work from "./howItWorks/Work";
import Testimonial from "./testimonial/Testimonial";
import Topper from "./topper/Topper";

const Home = () => {
  return (
    <div className="min-h-[500px]">
    <Slider></Slider>
    <Work></Work>
    <Topper></Topper>
    <Testimonial></Testimonial>

    </div>
  );
};

export default Home;
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <div className="">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        
        className="custom-carousel"
      >
        <div className="h-80 md:h-96 lg:h-[550px]">
          <img
            src="https://images.unsplash.com/photo-1515847049296-a281d6401047?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Slide 1"
            className="object-cover w-full h-full"
          />
          <div className="legend">Legend 1</div>
        </div>
        <div className="h-80 md:h-96  lg:h-[550px]">
          <img
            src="https://images.unsplash.com/photo-1515847049296-a281d6401047?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Slide 2"
            className="object-cover w-full h-full"
          />
          <div className="legend">Legend 2</div>
        </div>
        <div className="h-80 md:h-96  lg:h-[550px]">
          <img
            src="https://images.unsplash.com/photo-1515847049296-a281d6401047?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Slide 3"
            className="object-cover w-full h-full"
          />
          <div className="legend">Legend 3</div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;

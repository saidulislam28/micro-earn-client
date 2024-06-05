import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Slider = () => {
  return (
    <Carousel >
      <div>
        <img src="https://images.unsplash.com/photo-1515847049296-a281d6401047?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <div className="legend">
         
        </div>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1515847049296-a281d6401047?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1515847049296-a281d6401047?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <p className="legend">Legend 2</p>
      </div>
     
    </Carousel>
  );
};

export default Slider;

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
        <div className="relative h-80 md:h-96 lg:h-[550px]">
          <img
            src="https://images.unsplash.com/photo-1517097473408-c0d7983cb95c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Complete Tasks, Earn Coins"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
            <h2 className="text-2xl md:text-4xl font-bold">Complete Tasks, Earn Coins</h2>
            <p className="text-lg md:text-2xl">Turn your skills into rewards by completing simple tasks.</p>
          </div>
        </div>
        <div className="relative h-80 md:h-96 lg:h-[550px]">
          <img
            src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Convert Coins to Dollars"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
            <h2 className="text-2xl md:text-4xl font-bold">Convert Coins to Dollars</h2>
            <p className="text-lg md:text-2xl">Easily withdraw your earned coins as real money.</p>
          </div>
        </div>
        <div className="relative h-80 md:h-96 lg:h-[550px]">
          <img
            src="https://images.unsplash.com/photo-1515847049296-a281d6401047?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Maximize Your Earnings"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
            <h2 className="text-2xl md:text-4xl font-bold">Maximize Your Earnings</h2>
            <p className="text-lg md:text-2xl">Unlock new tasks and boost your income every day.</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;

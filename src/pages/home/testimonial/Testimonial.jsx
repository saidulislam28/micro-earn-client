import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import "./test.css";

const Testimonial = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="text-center max-w-[300px] m-5  py-10 px-5 bg-transparent rounded-xl ">
            <div className="avatar">
              <div className="w-24 rounded">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <h3 className="m-5 font-semibold text-2xl">Md Saidul</h3>
            <p className="mt-3 text-lg">
            This platform has made it so easy to earn extra income by completing simple tasks. Highly recommended!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center max-w-[300px] m-5 py-10 px-5  rounded-xl">
          <div className="avatar">
              <div className="w-24 rounded">
                <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww" />
              </div>
            </div>
            <h3 className="m-5 font-semibold text-2xl">Register</h3>
            <p className="mt-3 text-lg">
            Creating and managing tasks is a breeze. The interface is user-friendly and payments are secure.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center max-w-[300px] m-5  py-10 px-5  rounded-xl">
          <div className="avatar">
              <div className="w-24 rounded">
                <img src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww" />
              </div>
            </div>
            <h3 className="m-5 font-semibold text-2xl">Register</h3>
            <p className="mt-3 text-lg">
            I love how I can work on tasks at my own pace and earn rewards. This platform is amazing!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center max-w-[300px] m-5  py-10 px-5  rounded-xl">
          <div className="avatar">
              <div className="w-24 rounded">
                <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww" />
              </div>
            </div>
            <h3 className="m-5 font-semibold text-2xl">Register</h3>
            <p className="mt-3 text-lg">
            Great platform for freelancers. The variety of tasks keeps things interesting and the rewards are great!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;

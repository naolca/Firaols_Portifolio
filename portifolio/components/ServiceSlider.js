// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket, RxArrowTopLeft,
} from "react-icons/rx";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import {Swiper, SwiperSlide} from 'swiper/react';
import { FaGears } from "react-icons/fa6";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import  {FreeMode, Pagination} from 'swiper';
// data
const serviceData = [
  {
    icon: <MdOutlineWeb />,
    title: 'Frontend development',
    description: 'With proficiency in frameworks like React, NextJs and Angular, I believe I can build you a beautiful and responsive websites.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile App development',
    description: 'Having spent more than a year working with Flutter, I have the necessary knowledge to build aesthetically pleasing and performant mobile apps.',
  },
  {
    icon: <FaGears />,
    title: 'Backend development',
    description: 'I have experience working with NodeJs and ExpressJs to build robust and scalable backend systems.',
  },
 
];

const ServiceSlider = () => {
  return <Swiper breakpoints={{
    320: {
        slidesPerView: 1,
        spaceBetween: 15
    },
    640: {
        slidesPerView: 1,
        spaceBetween: 15
    }
}} freeMode={true} pagination={
    {
        clickable: true
    }

  }
  modules={[FreeMode, Pagination]}
  className={`h-[240px] sm:h-[340px] w-full`}>
    {
        serviceData.map((service, index) => {
          return <SwiperSlide>
            <div className={`bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer`}>
              {/* Icon */}
              <div>{service.icon}</div>
                {/* Title  and description */}
                <div>
                    <div>{service.title}</div>
                    <div>{service.description}</div>

            </div>
             
                
            </div>


          </SwiperSlide>
    })
    }
  </Swiper>;
};

export default ServiceSlider;

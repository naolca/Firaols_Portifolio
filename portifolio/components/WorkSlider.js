// icons
import {
 RxArrowTopLeft,
} from "react-icons/rx";

import { MdOutlineEngineering } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import {Swiper, SwiperSlide} from 'swiper/react';




import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import  {FreeMode, Pagination} from 'swiper';
import Link from "next/link";
import { icons } from "react-icons";
// data
const serviceData = [
  
    {
      icon:<MdOutlineEngineering />,
      link:"https://mentee-deployment-new-frontend.vercel.app/",
      title: "Mentee",
      description: "Served as the Lead Backend Engineer for an e-learning platform developed using the MERN stack poised to revolutionize the education landscape in Ethiopia and across Africa. With Express.js, I've skillfully crafted a resilient backend, ensuring the project's core strength and reliability.",
  
    },
    {
      icon:<CgWebsite />,
      link:"https://data-nest-3ei5.vercel.app/",
      title:"Limitless",

      description:"Pioneered the deployment of a generative AI application Built using the MERN stack, catalyzing a paradigm shift in user assistance by obviating knowledge cut-off limitations.Utilizing React, I've seamlessly fused the frontend and backend, ensuring a harmonious and fluid user experience."
  
  
    }
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
  className={`h-[240px] sm:h-[340px]`}>
    {
        serviceData.map((service, index) => {
          return <SwiperSlide key={index} className="self-center">
            <div  className={`bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group  cursor-pointer m-auto`}>
              {/* Icon */}
              <div>{service.icon}</div>
                {/* Title  and description */}
                <div>
                    <div>{service.title}</div>
                    <div>{service.description}</div>

                </div>
              {/* Arrow */}
                <Link

                 href={service.link} className={`text-3xl hover:text-accent transition-all duration-75 hover:text-4xl`}>
                  <RxArrowTopLeft />
                </Link>
            </div>


          </SwiperSlide>
    })
    }
  </Swiper>;
};

export default ServiceSlider;

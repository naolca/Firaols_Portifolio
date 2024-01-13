
import { motion } from "framer-motion";
import {fadeIn} from "../../variants";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { MdOutlineEngineering } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import Bulb from "../../components/Bulb";

import {Swiper, SwiperSlide} from 'swiper/react';
import {RxArrowTopLeft} from "react-icons/rx";
import WorkSlider from "../../components/WorkSlider";



const works = [
  {
    icon:<MdOutlineEngineering />,
    title: "Mentee",
    description: "Served as the Lead Backend Engineer y.",

  },
  {
    icon:<CgWebsite />,
    title:"Limitless",
    description:"•Pioneered the deployment of a gener",

  }
]




const Work = () => {
  return (
    <div className={"h-full w-full bg-primary/30 py-36 flex items-center"}>
    <Circles />
    <div className="container mx-auto w-full">
      <div className={`flex  xl:flex-grow gap-x-8`}>
        {/* Text */}
        <div className={`text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0`}>
        <h2 className={`h2 xl:mt-8`}> My Works <span className={`text-accent`}>.</span> </h2>
          <p className={`mb-4 max-w-[400px] mx-auto lg:mx-0`}>
            I've honed my skills in fullstack web and mobile development, 
          embracing the challenge of crafting seamless digital experiences. 
         </p>



        </div>
         <WorkSlider />
        {/* slider */}
      </div>
    </div>
    <Bulb />
  </div>)
};

export default Work;


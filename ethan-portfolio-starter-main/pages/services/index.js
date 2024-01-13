
import  {} from 'react-icons/rx';

import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

import {motion} from 'framer-motion';
import {fadeIn} from '../../variants'


const Services = () => {
  return <div className={"h-full bg-primary/30 py-36 flex items-center"}>
    <Circles />
    <div className="container mx-auto">
      <div className={`flex  xl:flex-grow gap-x-8`}>
        {/* Text */}
        <div className={`text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0`}>
        <h2 className={`h2 xl:mt-8`}> My services <span className={`text-accent`}>.</span> </h2>
          <p className={`mb-4 max-w-[400px] mx-auto lg:mx-0`}>
          Delivering excellence in software engineering, I specialize in fullstack web and mobile development.
           As a software engineer who strives to grow, my services blend technical expertise with a creative touch.
            From crafting robust web solutions to building dynamic mobile applications, I bring a commitment to precision and innovation to every project.
            </p>



        </div>
        {/* slider */}
         <ServiceSlider />
      </div>
    </div>
    <Bulb />
  </div>;
};

export default Services;

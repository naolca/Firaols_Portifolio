// icons
import React, {useState} from "react";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaAngular,
} from "react-icons/fa";
import { SiFlutter, SiExpress, SiNestjs } from "react-icons/si";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

import { motion } from "framer-motion";
import {fadeIn} from "../../variants";
//  data
import CountUp from "react-countup";
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Frontend Development',
        icons: [
          <FaHtml5 key={1} />,
          <FaCss3 key={1} />,
          <FaJs key={1} />,
          <FaReact key={1} />,
          <SiNextdotjs key={1} />,
          <SiFramer key={1} />,
          <FaAngular key={1} />,
        ],
      },
      {
        title: 'Backend development',
        icons: [<SiNestjs key={1} />,<SiExpress key={1} />, ],
      },
      {
        title: 'Mobile Development',
        icons: [<SiFlutter key={1} />],
      },
    ],
  },
  
  {
    title: 'experience',
    info: [
      {
        title: ' Software Engineering intern - Yenneta code ',
        stage: ' May, 2023 - Sep, 2023',
      },
      {
        title: ' Product Management intern - A2SV ',
        stage: ' Jul, 2023 - Sep,2012',
      },
   
    ],
  },
  {
    title: 'Education',
    info: [
      {
        title: ' Bachelor in Software Engineering - Addis Ababa University ',
        stage: ' 2020 - 2025',
      },
      {
        title: ' Coding Academy - A2SV ',
        stage: '2022 - 2023',
      },
    
    ],
  },
];

const About = () => {
    const [index, setIndex] = useState(0);

  return <div className={`h-full bg-primary/30 py-32 text-center xl:text-left`}>
    <Circles />
    {/* Avatar Image */}
    <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit= 'hidden'
        className="hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar />
    </motion.div>
    <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
      {/* text */}

      <div className={`flex-1 flex flex-col justify-center`}>
        <h2 className={`h2`}><span className={`text-accent`}>Innovative</span> Software Engineer and Creative Problem Solver</h2>
        <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit= 'hidden'
            className={`max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0`}
        >
      
      As a fourth-year Software Engineering student at AAIT and a proud member of A2SV GROUP 44, 
      I bring a passion for fullstack web and mobile development.
      Firmly committed to excellence, I believe in dedicating time to pursuits
        that resonate with my values. For me, programming is akin to a superpower,
        motivating me to continuously improve and explore creative applications of this digital magic.
          Beyond coding, I find joy in writing, indulging in poetry, 
          and savoring good music—a multifaceted individual with a love for both the logical 
        and the artistic realms.
        </motion.p>
        {/* Counters */}
        <motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit= 'hidden'
            className={`hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8`}
        >
          <div className={`flex flex-1 xl:gap-x-4 `}>
            {/* experience */}
            <div className={`relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0`}>
              <div className={`text-2xl xl:text-4xl font-extrabold text-accent`}>
                <CountUp start={0} end={2} duration={3} /> +
              </div>
              <div className={`text-xs uppercase tracking-[1px] leading-[1.4px]`}>
                Years of exp.
              </div>
            </div>
            {/* clients */}
            <div className={`relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0`}>
              <div className={`text-2xl xl:text-4xl font-extrabold text-accent`}>
                <CountUp start={0} end={600} duration={5} /> +
              </div>
              <div className={`text-xs uppercase tracking-[1px] leading-[1.4px] `}>
                Leetcode Questions
              </div>
            </div>
            <div className={`relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0`}>
              <div className={`text-2xl xl:text-4xl font-extrabold text-accent`}>
                <CountUp start={0} end={200} duration={5} /> +
              </div>
              <div className={`text-xs uppercase tracking-[1px] leading-[1.4px] `}>
                Codeforces Questions
              </div>
            </div>

          </div>
        </motion.div>
      </div>
      <div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit= 'hidden'
          className={`flex flex-col w-full xl:max-w-[48%] h-[480px]`}>
        <div className={`flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4`}>
          {aboutData.map((item, itemIndex) => {
                return <div key = {itemIndex} className={`${index === itemIndex && `text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300`} cursor-pointer capitalize xl:text-lg relative after:w-8
                after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}>
                  {item.title}
                </div>
              }
            )}
        </div>
        <div className={`py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start `}>
            {aboutData[index].info.map((item, itemIndex) => {
              return <div key={itemIndex} className={`flex-1 flex flex-col md:flex-row max-w-max `}>
                {/* title */}
                <div className={`font-light mb-2 md:mb-0`}>
                  {item.title}
                </div>
                <div className={`hidden md:flex`}>-</div>
                <div className={`hidden md:flex`}>{item.stage}</div>
                {/* icons */}
                <div className={`flex gap-x-4`}>
                    {item.icons && item.icons.map((icon, iconIndex) => {
                      return <div key={iconIndex} className={`text-2xl text-white`}>
                        {icon}
                        </div>
                    }
                    )}
                </div>

              </div>
            }
            )}
        </div>
      </div>
    </div>
  </div>;
};

export default About;

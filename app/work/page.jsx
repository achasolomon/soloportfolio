"use client";

import {motion} from 'framer-motion';
import React, {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import {BsArrowUpRight, BsGithub} from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link'; 
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';


const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'Simple Fashion E-commerce site',
    description: "A sleek and modern frontend for a fashion e-commerce website, designed to provide an intuitive and visually appealing user experience. The application leverages Redux for efficient state management, ensuring seamless user interactions and a smooth shopping experience.",
    stack: [
      {name: 'React, Redux'},  {name: 'Typescript'},  {name: 'CSS'},  
    ],
    image: "/assets/work/shopper.png",
    live: "",
    github: "",
  },
  {
    num: '02',
    category: 'frontend',
    title: 'Cell State',
    description: "A robust security application designed to manage individuals convicted of crimes across various law enforcement agencies in Nigeria. The app ensures streamlined tracking, data integration, and security, offering a centralized database for authorities to monitor convicts and maintain order.",
    stack: [
      {name: 'React, Redux'},  {name: 'Typescript'},  {name: 'Bootstrap, CSS'},  
    ],
    image: "/assets/work/cellstate.png",
    live: "",
    github: "",
  },
  {
    num: '03',
    category: 'Full Stack',
    title: 'Simple Medical Coding App',
    description: "A complete medical coding solution combining both frontend and backend functionality to facilitate accurate and efficient coding of medical diagnoses and procedures. The app features a user-friendly interface for medical professionals, integrated with a robust backend system for secure data handling and coding accuracy.",
    stack: [
      {name: 'React, Redux,'},  {name: 'Typescript'}, {name: 'Express'}, {name: 'MySQL'},  {name: 'Tailwind'},  
    ],
    image: "/assets/work/medical.png",
    live: "",
    github: "",
  },
  {
    num: '04',
    category: 'frontend',
    title: 'Simple Finance Tracker',
    description: "An intuitive personal finance tracker app built to help users manage their income and expenses effectively. With real-time visualizations, users can monitor their financial health, track their spending habits, and plan budgets, all while maintaining full control over their financial data.",
    stack: [
      {name: 'React, Redux'},  {name: 'Typescript'},  {name: 'Tailwind'},  
    ],
    image: "/assets/work/financetracker.png",
    live: "",
    github: "",
  },
  {
    num: '05',
    category: 'frontend',
    title: 'File Manager System',
    description: "A versatile file management software designed for efficient document storage, organization, and retrieval. The platform enables seamless file sharing, categorization, and access control, ensuring users can easily manage their digital assets with enhanced security and accessibility.",
    stack: [
      {name: 'React, Redux'},  {name: 'Typescript'},  {name: 'Tailwind'},  
    ],
    image: "/assets/work/filemanager.png",
    live: "",
    github: "",
  },
  {
    num: '06',
    category: 'Full Stack',
    title: 'Church members manager',
    description: "A comprehensive church management solution designed to assist churches in organizing their activities and improving communication with congregants. The app offers features for member management, event scheduling, financial tracking, and resource allocation, creating a seamless church experience.",
    stack: [
      {name: 'React, Redux,'},  {name: 'Typescript'}, {name: 'Express'}, {name: 'MySQL'},  {name: 'Tailwind'},  
    ],
    image: "/assets/work/churchmanagement.png",
    live: "",
    github: "",
  },
  {
    num: '07',
    category: 'Graphics',
    title: 'IT Brand flyer',
    description: "A sleek and modern IT brand graphic designed to represent innovation, technology, and reliability. The design incorporates dynamic shapes, contemporary typography, and a color palette that reflects cutting-edge digital solutions, making it the perfect visual representation for an IT brand.",
    stack: [
      {name: 'Canva'}
    ],
    image: "/assets/work/branding.png",
    live: "",
    github: "",
  },
  {
    num: '08',
    category: 'Graphic',
    title: 'Food flyer',
    description: "A vibrant and eye-catching food flyer designed to entice customers with mouth-watering visuals and tempting offers. Featuring high-quality food imagery, the flyer communicates the essence of the culinary experience, with clear call-to-action elements to drive customer engagement.",
    stack: [
      {name: 'corel draw'}  
    ],
    image: "/assets/work/food.png",
    live: "",
    github: "",
  },
  {
    num: '09',
    category: 'Graphics',
    title: 'Medical Outreach flyer',
    description: "A professionally designed flyer for a medical outreach program, highlighting the mission to provide healthcare services to underserved communities. The flyer features a clean, compassionate design with key details about the outreach, ensuring it attracts attention and encourages participation.",
    stack: [
      {name: 'Photoshop'},  
    ],
    image: "/assets/work/outreach.png",
    live: "",
    github: "",
  },
  {
    num: '10',
    category: 'Graphics',
    title: 'Funeral poster',
    description: "A respectful and dignified funeral poster designed to honor the life and legacy of the departed. The design uses subtle colors, elegant fonts, and meaningful imagery, creating a tasteful and comforting visual tribute that reflects the solemnity of the occasion.",
    stack: [
      {name: 'Canva'},  
    ],
    image: "/assets/work/poster.png",
    live: "",
    github: "",
  },
  {
    num: '11',
    category: 'Graphic',
    title: 'Food flyer',
    description: "A vibrant and eye-catching food flyer designed to entice customers with mouth-watering visuals and tempting offers. Featuring high-quality food imagery, the flyer communicates the essence of the culinary experience, with clear call-to-action elements to drive customer engagement.",
    stack: [
      {name: 'Canva'},   
    ],
    image: "/assets/work/food2.png",
    live: "",
    github: "",
  },

]



const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper)=> {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  }
    return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/*outline nuber */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
                </div>
                {/*projet category */}
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category} project</h2>
                {/*project description */}
                <p className="text-white/60">{project.description}</p>
                {/*stack */}
                <ul className='flex gap-4'>
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className='text-xl text-accent'>
                        {item.name}
                        {/*remove the last comma */}
                        {index !== project.stack.lenght-1 && ","}
                        </li>
                    )
                  })}
                </ul>
                <div className="border border-white/20"></div>
                {/*buttons */}
                <div className='flex items-center gap-4'>
                  {/*live project button */}
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className='text-white text-3xl group-hover:text-accent'/>
                          <TooltipContent>
                            <p>Live project</p>
                          </TooltipContent>
                        </TooltipTrigger>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>

                   {/*github project button */}
                   <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className='text-white text-3xl group-hover:text-accent'/>
                          <TooltipContent>
                            <p>Github project</p>
                          </TooltipContent>
                        </TooltipTrigger>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
                
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper spaceBetween={30} sliderperview={1} className='xl:h-[520px] mb-12' onSlideChange={handleSlideChange}>
              {projects.map((project, index)=> {
                return (
                  <SwiperSlide key={index} className='w-full'>
                 <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                  {/*overlay */}
                  <div className='absolute top-0 button-0 w-full h-full bg-black/10 2-10'></div>
                  {/*image */}
                  <div className='relative w-full h-full '>
                    <Image src={project.image} fill className='object-cover' alt=""/>
                  </div>

                 </div>

                  </SwiperSlide>
                )
              })}
              {/**slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 
              xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  )
    
  }
   export default Work; 
"use client"

import { SiTailwindcss, SiNextdotjs, SiBootstrap, SiDjango, SiCanva, SiCoreldraw, SiTypescript, SiExpress, SiWordpress } from 'react-icons/si';
import { FaHtml5, FaCss3, FaJs, FaReact, FaPhp, FaNodeJs, } from 'react-icons/fa'


//about data
const about = {
  title: "About me",
  Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tempore dolorum non consectetur ducimus eaque. Suscipit harum nam nostrum itaque, ipsum laborum.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Acha Solomon Ona"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+234) 07019606522 || 09060460269",
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years"
    },
    {
      fieldName: "Linkendin",
      fieldValue: "www.linkedin.com/in/acha-solomon"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigerian"
    },
    {
      fieldName: "Email",
      fieldValue: "achasolomon20@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hausa, Efik, Ibibio, Pigin"
    },
  ]
};
//exprience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Work experience",
  description:
    "I am a versatile and results-driven professional with expertise in software development, search engine optimization (SEO), e-commerce solutions, graphic design, data entry, and data analysis. My core strength lies in creating scalable, efficient, and user-centric applications while incorporating SEO best practices to enhance online visibility and user engagement. In addition to building cutting-edge e-commerce platforms that drive business growth and customer satisfaction, leveraging emerging technologies to deliver innovative and forward-thinking results. My experience in data analysis equips me with the ability to derive actionable insights from complex datasets, while my attention to detail in data entry ensures accuracy and reliability. With a keen eye for aesthetics, I bring creativity to my work as a graphic designer, delivering visually appealing and functional designs. My diverse skill set and dedication to excellence enable me to provide comprehensive solutions that bridge technical expertise, creative design, and strategic thinking. Whether it's developing robust software, optimizing websites, analyzing data, or exploring decentralized technologies, I am committed to delivering exceptional results that exceed expectations.",
  items: [
    {
      company: "Algoteam Software Labs, Abuja",
      postion: "Full Stack Developer",
      duration: "2023 - Present",
    },
    {
      company: "Algoteam Software Labs, Abuja",
      postion: "Software Quality Assurance Engineer/Backend developer",
      duration: "2020 - 2023",
    },
    {
      company: "Total Child JAMB center, Abuja",
      postion: "Data entry officer",
      duration: "2020",
    },
    {
      company: "Compudata institute, Abuja",
      postion: "Computer Operator/Graphic designer",
      duration: "2017 - 2019",
    },
    {
      company: "SamyIke Cafe, Abuja, FCT, Nigeria",
      postion: "Computer Tutor",
      duration: "2016 - 2017",
    }
  ],
};

//educational data

const education = {
  icon: "/assets/resume/cap-education-hat-svgrepo-com.svg",
  title: "Educational Qualification",
  description:
    "I have a diverse educational background that spans across fields of human physiology and software development. I initially pursued a Bachelor's degree in Human Physiology, which honed my analytical and problem-solving skills. Later, I expanded my technical expertise by completing a Diploma in Computer Applications, followed by a Diploma in Software Development with a focus on Full Stack Web Development (MERN). This combination of scientific study and technical training allows me to approach challenges with a unique, cross-disciplinary perspective.",
  items: [
    {
      institution: "University of Calabar, Calabar, Nigeria",
      degree: "B.sc Human Physiology",
      duration: "2018 - 2023",
    },
    {
      institution: "Algoteam Software Labs, Abuja, Nigeria",
      degree: "Software development",
      duration: "2019 - 2020",
    },
    {
      institution: "O'Net Computer Institute, Abuja, Nigeria",
      degree: "Computer Application",
      duration: "2015 - 2016",
    },
    {
      institution: "Amazing Grace School, Madalla, Niger state, Nigeria",
      degree: "Senior Secondary Certificate Examination (SSCE)",
      duration: "2017",
    },
  ],
};

//skills
const skills = {
  title: "Skills",
  description: "I am a versatile developer with a strong foundation in both front-end and back-end technologies. I specialize in Node.js and Express for building scalable and efficient web applications. I am also proficient in JavaScript, TypeScript, and frameworks like React and Next.js, allowing me to create dynamic, responsive websites. My front-end skills extend to HTML, CSS, Bootstrap, and Tailwind CSS, ensuring a seamless and modern user experience. Additionally, I have experience working with PHP and Django for backend development. Beyond coding, I am skilled in graphic design using tools like Canva, CorelDRAW, and Adobe Photoshop, which helps me craft both visually appealing and functional designs. My diverse skill set empowers me to deliver full-stack solutions with a blend of technical expertise and creative vision.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5"
    },
    
    {
      icon: <FaCss3 />,
      name: "CSS"
    },
    {
      icon: <SiBootstrap />,
      name: "Bootstrap"
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS"
    },
    {
      icon: <FaJs />,
      name: "Javascript"
    },
    {
      icon: <FaReact />,
      name: "React.js"
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js"
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js"
    },
    {
      icon: <SiTypescript />,
      name: "Typescript"
    },
    {
      icon: <SiExpress />,
      name: "Express"
    },
    {
      icon: <FaPhp />,
      name: "PHP"
    },
    {
      icon: <SiDjango />,
      name: "Django"
    },
    {
      icon: <SiWordpress />,
      name: "Wordpress"
    },
    {
      icon: <SiCanva />,
      name: "Canva"
    },
    {
      icon: <SiCoreldraw />,
      name: "Corel Draw"
    },
   


  ],
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Tooltip, TooltipContent, TooltipProvider} from "@/components/ui/tooltip"
import {ScrollArea} from "@/components/ui/scroll-area"
import {motion} from "framer-motion";
import { TooltipTrigger } from '@radix-ui/react-tooltip';


const Resume = () => {
    return (
    <motion.div 
    initial={{opacity: 0}} 
    animate={{opacity: 1, 
    transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
  }}
  className='min-h-[80vh] flex items-center justify-center py-12 x:py-0'
  >
    <div className="container mx-auto">
      <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Work Experience</TabsTrigger>
          <TabsTrigger value="education">Educational Qualification</TabsTrigger>
          <TabsTrigger value="skills">Skills Set</TabsTrigger>
          <TabsTrigger value="about">Personal Details</TabsTrigger>
        </TabsList>
        {/*content */}
        <div className='min-h-[70vh] w-full'>
          {/*experience */}
          <TabsContent value="experience" className="w-full">
              
          <ScrollArea className="h-[350px]">
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 xl:text-justify'>{experience.description}</p>
               
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return(
                        <li key={index} className='bg-[#232329] h-[184px] py-7 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w[260px] min-h-[60px] text-center lg:text-left'>{item.postion}</h3>
                          <div className='flex items-center gap-3'>
                            {/*dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
              </div>
              </ScrollArea>

          </TabsContent>

           {/*education */}
           <TabsContent value="education" className="w-full">
           <ScrollArea className="h-[350px]">
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 xl:text-justify'>{education.description}</p>
               
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return(
                        <li key={index} className='bg-[#232329] h-[184px] py-7 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                          <div className='flex items-center gap-3'>
                            {/*dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
              </div>
              </ScrollArea>
          </TabsContent>
           {/*skills */}
           <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 xl:text-justify'>{skills.description}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                  {skills.skillList.map((skill, index) =>{
                    return (
                      <li key={index}>
                       <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                              <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize'> {skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                       </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
          </TabsContent>
           {/*about */}
           <TabsContent value="about" className="w-full h-full text-center xl:textjustify">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index)=> {
                    return (
                      <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-white/60'>{item.fieldValue}</span>
                      </li>
                    )
                  }
                  )}
                </ul>
              </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
    </motion.div>
    )

  }
export default Resume; 
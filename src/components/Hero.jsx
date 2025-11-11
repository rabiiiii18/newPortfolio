import React from 'react'
import { Facebook, Github, House, Instagram, Linkedin, } from "lucide-react";
// import { motion } from "motion/react";
import { ReactTyped } from "react-typed";
// import { easeInOut, motion } from "motion/react";


const Hero = () => {
  const socials = [
    { Icon: Facebook, url: "https://www.facebook.com/fb.rabishresthaa" },
    { Icon: Instagram, url: "https://www.instagram.com/rabii_dgaf/" },
    { Icon: Linkedin, url: "https://www.linkedin.com/in/ravi-shrestha-279077238/" },
    { Icon: Github, url: "https://github.com/rabiiiii18" },
  ];
  return (
    <div className="container  flex items-center justify-center">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-[35%] w-full p-10 relative">
          <div className="bg-[var(--primary)] h-[150px] w-[100%] absolute top-[-10px] left-0 z-0"></div>
          <div className="flex justify-center items-center gap-5 absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20">
            {socials.map(({ Icon, url }, index) => (
              <div
                key={index}
                onClick={() => window.open(url, "_blank")}
                className="bg-[var(--primary)] text-white p-2 rounded-full w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] cursor-pointer hover:bg-[#000] transition-all ease-in duration-300 flex items-center justify-center"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            ))}
          </div>

          <img
            className="w-full h-full object-cover rounded-lg shadow-lg relative z-10"
            src="/photo.webp"
            alt="Ravi"
          />
          {/* <div className="bg-[var(--primary)] h-[150px] w-[100%] absolute bottom-[-10px] left-0 z-0"></div> */}
        </div>

        <div className="md:w-[60%] w-full bg-white rounded-xl h-auto p-3 py-6 md:p-10 mx-4 sm:mx-6">
          <h3 className='text-[20px] leading-[28px] font-normal text-[var(--text-color)]'>Hello there!</h3>
          <h1 className='text-[48px] font-bold leading-[58px] uppercase mt-8 '>I'm <span className='text-decoration'>ravi shrestha</span>,  I create beautifully minimal<span className='text-decoration'> code and designs </span> with <span className='text-decoration'>passion.</span>  </h1>
          <div className="my-[20px]">
            <span className='text-[18px]'>I'm <ReactTyped
              className=" text-[18px] tracking-widest font-bold text-[var(--primary)]"
              strings={["Frontend Developer", "React Enthustic", "Wordpress Developer"]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />

            </span>

            {/* <p className=" text-[18px] tracking-widest">
              Full Stack Developer <span className="px-3">|</span> React <span className="px-3">|</span> Next.js <span className="px-3">|</span> Wordpress
            </p> */}
          </div>
          <div>
            <button className='px-4 py-3 bg-[var(--primary)] cursor-pointer rounded-md text-white text-[16px] leading-[20px] font-normal hover:bg-[#161616]  transition-all ease-in border-0 outline-0'>Download CV</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero

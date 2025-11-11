import React from 'react'
import Form from '../Form'
import { ArrowUpRight, Copy, Github, Instagram, InstagramIcon, Linkedin, LinkedinIcon, Mail, MapPinHouse, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <div className="container">
      <div className='flex justify-center items-center flex-col gap-4  py-6 md:p-10 '>
        <h3 className='text-base md:leading-[28px] leading-[20px] font-nornal text-[var(--text-color)]'>Contact</h3>
        <h2 className='md:text-[50px] text-[24px] md:leading-[60px] leading-[26px] font-semibold'>Get In Touch With Me! </h2>
      </div>

      <div className='flex justify-between md:flex-row flex-col'>
        <div className='flex justify-between flex-col md:w-[29%] w-full'>
          <div className=' p-6 flex flex-col gap-6 bg-white rounded-xl mb-5 md:mb-0'>
            <div className='flex  gap-6  items-center'>
              <MapPinHouse size={30} className='text-[var(--primary)]' />
              <p className='md:text-[18px] md:leading-[28px] text-base leading-[20px] font-normal'>Sanepa-2, Lalitpur</p>
            </div>
            <div className='flex gap-6  items-center'>
              <Phone size={30} className='text-[var(--primary)]' />
              <p className='md:text-[18px] md:leading-[28px] text-base leading-[20px] font-normal'>+977- 9861826472</p>
            </div>
            <div className='flex gap-6  items-center'>
              <Mail size={30} className='text-[var(--primary)]' />
              <p className='md:text-[18px] md:leading-[28px] text-base leading-[20px] font-normal'>ravishrestha@gmail.com</p>
            </div>
          </div>

          <div className=' p-6 flex flex-col gap-2 bg-white rounded-xl mb-5 md:mb-0'>
            <div className='flex  gap-6 p-2  items-center hover:bg-[#ebf3f1] cursor-pointer rounded-xl'>
              <Github size={35} className='text-[var(--primary)]' />
              <div className='flex justify-between w-full items-center'>
                <div>
                  <p>Follow me on Github</p>
                  <p className='flex items-center gap-2'><Copy size={18} />@ravi</p>
                </div>
                <div>
                  <ArrowUpRight className='text-[var(--primary)]' />
                </div>
              </div>
            </div>
            <div className='flex  gap-6 p-2  items-center  hover:bg-[#ebf3f1] cursor-pointer rounded-xl'>
              <LinkedinIcon size={35} className='text-[var(--primary)]' />
              <div className='flex justify-between w-full items-center'>
                <div>
                  <p>Connect on Linkedin</p>
                  <p className='flex items-center gap-2'><Copy size={18} />@ravi</p>
                </div>
                <div>
                  <ArrowUpRight className='text-[var(--primary)]' />
                </div>
              </div>
            </div>
            <div className='flex  gap-6 p-2  items-center  hover:bg-[#ebf3f1] cursor-pointer  rounded-xl'>
              <InstagramIcon size={35} className='text-[var(--primary)]' />
              <div className='flex justify-between w-full items-center'>
                <div>
                  <p>Follow me on Instagram</p>
                  <p className='flex items-center gap-2'><Copy size={18} />@ravi</p>
                </div>
                <div>
                  <ArrowUpRight className='text-[var(--primary)]' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='md:w-[68%] w-full'>
          <Form />
        </div>

      </div>

    </div>
  )
}

export default Contact

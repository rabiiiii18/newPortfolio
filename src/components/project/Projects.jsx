import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const Projects = () => {
    return (
        <div className='container'>
            <div className=' bg-white rounded-xl'>
                <div className='flex justify-center items-center flex-col gap-4 py-6 md:px-1 px-4'>
                    <h2 className='md:text-[50px] md:leading-[60px] text-[24px] leading-[28px] font-semibold'>Works & Projects</h2>
                    <h3 className=' max-w-2xl  text-center text-base md:leading-[28px] leading-[24px] font-nornal text-[var(--text-color)]'>Take a look at my design projects — each one made with care, creativity, and attention to detail.</h3>
                </div>
                <div className='px-10 md:py-14 py-6  grid md:grid-cols-3 grid-cols-1 gap-10'>
                    <div className='border border-gray-300 rounded-bl-xl rounded-br-xl'>
                        <div className="h-[70%] relative overlay overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 overlay-hover transition-all ease-in duration-200 cursor-pointer">
                                <ArrowUpRight
                                    size={60}
                                    className="text-white bg-[var(--primary)] rounded-full p-4"
                                />
                            </div>
                            <img
                                className="h-full w-full object-cover"
                                src="/work1.jpg"
                                alt=""
                            />
                        </div>


                        <div className='p-4 flex flex-col gap-2'>
                            <h2 className='md:text-[22px] text-[20px] md:leading-[28px] leading-[24px] text-[var(--text-color)] font-bold'>Mobile Application Design</h2>
                            <p className='md:text-[18px] text-base md:leading-[30px] leading-[24px] font-normal'>Simple mobile app design</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects

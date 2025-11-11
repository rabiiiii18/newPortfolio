import { BriefcaseBusiness } from 'lucide-react'
import React from 'react'

const EducationExperience = () => {
    return (
        <div className='container'>
            <div className='flex justify-between flex-col md:flex-row items-center my-10 gap-10'>
                <div className=' bg-white rounded-xl md:w-1/2  w-full md:px-10 md:py-10 px-8 py-6'>
                    <h3 className='text-[24px] leading-[26px] text-[var(--text-color)] font-semibold'>Experience</h3>
                    <div className='flex flex-col gap-8 pt-6 '>
                        <div className='flex gap-10'>
                            <div className="bg-[rgba(67,139,115,0.15)] p-3 rounded-md flex items-center h-max w-max">
                                <BriefcaseBusiness size={30} color="var(--primary)" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='text-[18px] leading-base text-[var(--text-color)] font-normal'>2024 - Present</span>
                                <h3 className='md:text-[24px] text-[20px] md:leading-[28px] leading-[22px] font-bold text-[var(--text-color)] '>Splendour Group</h3>
                                <h4 className='md:text-[18px] text-base leading-base text-[var(--text-color)] font-normal'>Frontend Developer</h4>
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-[var(--primary)] md:my-4"></div>

                        <div className='flex gap-8'>
                            <div className="bg-[rgba(67,139,115,0.15)] p-3 rounded-md flex items-center h-max w-max">
                                <BriefcaseBusiness size={30} color="var(--primary)" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='text-[18px] leading-base text-[var(--text-color)] font-normal'>2024 - Present</span>
                                <h3 className='md:text-[24px] text-[20px] md:leading-[28px] leading-[22px] font-bold text-[var(--text-color)] '>Splendour Group</h3>
                                <h4 className='md:text-[18px] text-base leading-base text-[var(--text-color)] font-normal'>Frontend Developer</h4>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=' bg-white rounded-xl md:w-1/2  w-full   md:px-10 md:py-10 px-8 py-6'>
                    <h3 className='text-[23px] leading-[26px] text-[var(--text-color)] font-semibold'>Education</h3>
                    <div className='flex flex-col gap-8 pt-6 '>
                        <div className='flex gap-10'>
                            <div className="bg-[rgba(67,139,115,0.15)] p-3 rounded-md flex items-center h-max w-max">
                                <BriefcaseBusiness size={30} color="var(--primary)" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='text-[18px] leading-base text-[var(--text-color)] font-normal'>2024 - Present</span>
                                <h3 className='md:text-[24px] text-[20px] md:leading-[28px] leading-[22px] font-bold text-[var(--text-color)] '>Splendour Group</h3>
                                <h4 className='md:text-[18px] text-base leading-base text-[var(--text-color)] font-normal'>Frontend Developer</h4>
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-[var(--primary)] md:my-4"></div>

                        <div className='flex gap-8'>
                            <div className="bg-[rgba(67,139,115,0.15)] p-3 rounded-md flex items-center h-max w-max">
                                <BriefcaseBusiness size={30} color="var(--primary)" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='text-[18px] leading-base text-[var(--text-color)] font-normal'>2024 - Present</span>
                                <h3 className='md:text-[24px] text-[20px] md:leading-[28px] leading-[22px] font-bold text-[var(--text-color)] '>Splendour Group</h3>
                                <h4 className='md:text-[18px] text-base leading-base text-[var(--text-color)] font-normal'>Frontend Developer</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EducationExperience

import { Clover, Earth, LayoutPanelTop } from 'lucide-react'
import React from 'react'

const Service = () => {
    return (
        <div className='container '>
            <div className='bg-white rounded-xl '>
                <div className='flex justify-center items-center flex-col gap-4  py-6 md:px-10  md:py-10 md:mt-[120px] mt-[50px]'>
                    <h3 className='text-base md:leading-[28px] leading-[20px] font-nornal text-[var(--text-color)]'>Service</h3>
                    <h2 className='md:text-[50px] text-[24px] md:leading-[60px] leading-[26px] font-semibold'>Quality Services</h2>
                </div>
                <div className='flex md:gap-10 gap-6 md:px-10 md:py-10 px-8  md:pb-10 pb-6  flex-col md:flex-row '>
                    <div className="flex-1 border border-gray-300 rounded-xl px-8 py-10 transition-all ease-in duration-3   00 hover:border-[#438b73]" >
                        <Earth size={55} color='var(--primary)' />
                        <h3 className='text-[20px] leading-[22px] text-[var(--text-color)] font-semibold my-6'>Brand Identity Design</h3>
                        <p className='text-[18px] leading-[28px] font-normal text-[var(--text-color)]'>Ravi gives you the blocks & kits you need to create a true website within minutes.</p>
                    </div>
                    <div className="flex-1 border border-gray-300 rounded-xl px-8 py-10 transition-all ease-in duration-3   00 hover:border-[#438b73]" >
                        <Clover size={55} color='var(--primary)' />
                        <h3 className='text-[20px] leading-[22px] text-[var(--text-color)] font-semibold my-6'>Website Design</h3>
                        <p className='text-[18px] leading-[28px] font-normal text-[var(--text-color)]'>Ravi gives you the blocks & kits you need to create a true website within minutes.</p>
                    </div>
                    <div className="flex-1 border border-gray-300 rounded-xl px-8 py-10 transition-all ease-in duration-3   00 hover:border-[#438b73]" >
                        <LayoutPanelTop size={55} color='var(--primary)' />
                        <h3 className='text-[20px] leading-[22px] text-[var(--text-color)] font-semibold my-6'>Application Design</h3>
                        <p className='text-[18px] leading-[28px] font-normal text-[var(--text-color)]'>Ravi gives you the blocks & kits you need to create a true website within minutes.</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Service

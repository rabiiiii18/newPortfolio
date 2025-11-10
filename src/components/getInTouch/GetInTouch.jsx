import React from 'react'

const getInTouch = () => {
  return (
    <div className='flex justify-center items-center flex-col '>
      <div className="mt-[10%] md:max-w-[55%] w-full  py-10 md:py-40">
        <p className=" text-[45px] leading-[60px] text-center text-[#141414] uppercase font-bold">
        Your next big project deserves <span className='text-decoration'>the right touch.</span> 
        </p>
        <p className="text-[18px] leading-[28px] text-center mt-6  text-[#141414]">
        I’d love to collaborate and make it happen.
        </p>
        <div className="flex justify-center items-center my-10">
          <button className="border px-3 py-3 rounded-md text-[16px] font-bold cursor-pointer bg-[var(--primary)] text-[#fff]">
            Work with Me
          </button>
        </div>
      </div>

    </div>
  )
}

export default getInTouch

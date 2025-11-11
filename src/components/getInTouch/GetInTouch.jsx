import React from 'react'

const getInTouch = () => {
  return (
    <div className='flex justify-center items-center flex-col '>
      <div className="mt-[10%] md:max-w-[55%] w-full  py-10 md:py-40">
        <p className=" md:text-[48px] text-[30px] md:leading-[58px] leading-[40px] text-center text-[#141414] uppercase font-bold">
          Your next big project deserves <span className='text-decoration'>the right touch.</span>
        </p>
        <p className="md:text-[18px] text-base md:leading-[28px]  leading-[20px] text-center mt-6  text-[#141414]">
          I’d love to collaborate and make it happen.
        </p>
        <div className="flex justify-center items-center my-10">
          <button

            className="border px-3 py-3 rounded-md md:text-[18px] text-base  font-semibold cursor-pointer bg-[var(--primary)] text-[#fff]"
          >
            Work with me
          </button>
        </div>
      </div>

    </div>
  )
}

export default getInTouch

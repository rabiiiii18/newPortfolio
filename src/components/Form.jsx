import React from "react";
const Form = () => {
    return (
        <div className="bg-white p-8 rounded-xl">
            <form>
                <div className="flex lg:gap-15  gap-5 flex-col lg:flex-row items-center">
                    <input
                        type="text"
                        placeholder="Ravi Shrestha"
                        name="name"
                        required
                        className="lg:w-[50%] w-full font-semibold px-3 py-4 border border-gray-300 focus:border-[var(--primary)] focus:outline-none rounded-md transition-all duration-500 ease-in"
                    />
                    <input
                        type="email"
                        placeholder="ravi@gmail.com"
                        name="email"
                        required
                        className="lg:w-[50%] w-full px-3 font-semibold py-4 border border-gray-300 focus:border-[var(--primary)]  focus:outline-none rounded-md transition-all duration-500 ease-in"
                    />
                </div>

                <div className="flex lg:gap-15  gap-5 flex-col lg:flex-row items-center mt-8">
                    <input
                        type="text"
                        placeholder="Your subject"
                        required
                        name="subject"
                        className="lg:w-[50%] w-full font-semibold px-3 py-4 border border-gray-300 focus:border-[var(--primary)]  focus:outline-none rounded-md transition-all duration-500 ease-in"
                    />
                    <input
                        type="number"
                        placeholder="9861826472"
                        name="phone"
                        className="lg:w-[50%] font-semibold w-full px-3 py-4 border border-gray-300 focus:border-[var(--primary)] focus:outline-none rounded-md transition-all duration-500 ease-in"
                    />
                </div>
                <div className="mt-5">
                    <textarea
                        name="message"
                        placeholder="Write your message...."
                        rows="6"
                        cols="90"
                        required
                        className="w-full px-4 py-3 mb-4 font-semibold outline-0 border border-gray-300 rounded-md focus:border-[var(--primary)]  focus:outline-none transition-all duration-500 ease-in"
                    ></textarea>
                </div>
                <div>
                    <button

                        className="border px-3 py-3 rounded-md text-[18px] font-bold cursor-pointer bg-[var(--primary)] text-[#fff]"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;

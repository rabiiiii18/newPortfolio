import React from "react";
import { ToastContainer, toast } from 'react-toastify';
const Form = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
      
        formData.append("access_key", "4379bd16-faac-4815-84c4-ef24f6199b80");
      
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
      
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
      
        if (res.success) {
            toast.success("Message sent successfully.");
            event.target.reset();
        }
      };
      
    return (
        <div className="bg-white p-8 rounded-xl">
            <form onSubmit={onSubmit}>
                <div className="flex lg:gap-15  gap-5 flex-col lg:flex-row items-center">
                    <input
                        type="text"
                        placeholder="Ravi Shrestha"
                        name="name"
                        required
                        className="lg:w-[50%] w-full font-normal px-3 py-4 border border-gray-300 focus:border-[var(--primary)] focus:outline-none rounded-md transition-all duration-500 ease-in"
                    />
                    <input
                        type="email"
                        placeholder="ravi@gmail.com"
                        name="email"
                        required
                        className="lg:w-[50%] w-full px-3 font-normal py-4 border border-gray-300 focus:border-[var(--primary)]  focus:outline-none rounded-md transition-all duration-500 ease-in"
                    />
                </div>

                <div className="flex lg:gap-15  gap-5 flex-col lg:flex-row items-center mt-8">
                    <input
                        type="text"
                        placeholder="Your subject"
                        required
                        name="subject"
                        className="lg:w-[50%] w-full font-normal px-3 py-4 border border-gray-300 focus:border-[var(--primary)]  focus:outline-none rounded-md transition-all duration-500 ease-in"
                    />
                    <input
                        type="number"
                        placeholder="9861826472"
                        name="phone"
                        className="lg:w-[50%] font-normal w-full px-3 py-4 border border-gray-300 focus:border-[var(--primary)] focus:outline-none rounded-md transition-all duration-500 ease-in"
                    />
                </div>
                <div className="mt-5">
                    <textarea
                        name="message"
                        placeholder="Write your message...."
                        rows="6"
                        cols="90"
                        required
                        className="w-full px-4 py-3 mb-4 font-normal outline-0 border border-gray-300 rounded-md focus:border-[var(--primary)]  focus:outline-none transition-all duration-500 ease-in"
                    ></textarea>
                </div>
                <div>
                    <button type="submit"

                        className="border px-3 py-3 rounded-md md:text-[18px] text-base  font-semibold cursor-pointer bg-[var(--primary)] text-[#fff]"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;

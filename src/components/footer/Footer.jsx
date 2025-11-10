import React from "react";

import { Facebook, Github, House, Instagram, Linkedin, Twitter } from "lucide-react";


const socials = [
    { Icon: Facebook, url: "https://www.facebook.com/fb.rabishresthaa" },
    { Icon: Instagram, url: "https://www.instagram.com/rabii_dgaf/" },
    { Icon: Linkedin, url: "https://www.linkedin.com/in/ravi-shrestha-279077238/" },
    { Icon: Github, url: "https://github.com/rabiiiii18" },
];

const Footer = () => {
    return (
        <div
            className="py-5 flex justify-center items-center flex-col"
        >
            <div className="flex gap-5 lg:right-13 lg:top-5">
                {socials.map(({ Icon, url }, index) => (
                    <div
                        key={index}
                        onClick={() => window.open(url, "_blank")}
                        className="bg-[var(--primary)] text-white p-2 rounded-full w-[45px] h-[45px] cursor-pointer"

                    >
                        <div>
                            <Icon className="w-full h-full" />
                        </div>
                    </div>
                ))}
            </div>

            <span
                className="mt-6 text-[#141414] font-semibold"

            >
                © Copyright All rights reserved RaviShrestha
            </span>
        </div>
    );
};

export default Footer;

import React from "react";

import Logo from "../assets/Logo.webp";

import { DUMMY_COMPANY_LABEL_FOR_APPLICATION, FOOTER_DATA, QUICK_LINKS } from "./constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black border-t border-gray-200 py-10 px-6 md:px-20 animate-fade-in">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        {/* Logo & Icons */}
        <div className="space-y-10">
          <div className="flex justify-center gap-6 p-4">
            <img src={Logo} alt="Greptile logo" className="w-12 h-12" />
            <span className="text-4xl font-medium">{DUMMY_COMPANY_LABEL_FOR_APPLICATION}</span>
          </div>
        </div>

        <div className="hidden md:block"></div>

        <div className="flex flex-col justify-center items-center sm:items-start gap-3 p-3">
          <h3 className="text-4xl font-medium mb-3">{QUICK_LINKS}</h3>
          <ul className="space-y-2 text-sm">
            {FOOTER_DATA.map((item) => (
              <li
                key={item.id}
                className="transition duration-200 cursor-pointer flex items-center gap-8 mt-4"
              >
                <item.icon className="text-2xl" />
                <a href={item.href} target="_blank" className="text-xl underline cursor-pointer text-green-600">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

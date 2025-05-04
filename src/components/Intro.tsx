import React from "react";

import HeroImage from "../assets/HeroImage.png";

import ReviewButton from "./ReviewButton";

import {
  NAME,
  GREPTILE_TWITTER_URL,
  JOB_ROLE_LINK,
  HERO_TEXT,
  HERO_SUB_TEXT,
  JOB_ROLE_LABEL,
  COMPANY_LABEL,
} from "./constants";

const Intro: React.FC = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left p-4">
          <h1 className="text-6xl sm:text-5xl text-gray-900 leading-tight">
            {HERO_TEXT} <br /> <span className="font-bold">{NAME}</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            {HERO_SUB_TEXT}
            <br />
            <a target="_blank" href={JOB_ROLE_LINK} className="underline mr-2">
              {JOB_ROLE_LABEL}
            </a>
            <a target="_blank" href={GREPTILE_TWITTER_URL} className="text-green-700">
              @{COMPANY_LABEL}
            </a>
          </p>
          <div className="flex justify-center lg:justify-start"><ReviewButton /></div>
        </div>

        {/* Right Content */}
        <div className="flex-1 rounded-3xl border-1 border-green-700 max-w-fit max-h-fit p-4 bg-gray-100">
          <img src={HeroImage} alt="Greptile logo" className="rounded-3xl" />
        </div>
      </div>
    </section>
  );
};

export default Intro;

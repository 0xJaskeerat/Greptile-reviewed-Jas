import React from "react";
import { motion } from "framer-motion";

import Logo from "../assets/Logo.webp";

import { COMPANY_LABEL, FINAL_REVIEW, FOOTER_DATA } from "./constants";

const FinalReview: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-start gap-4 p-3 rounded-lg border-1 border-green-700"
    >
      {/* Icon */}
      <div className="flex-shrink-0">
        <div className="w-12 h-12 border-1 border-green-700 rounded-xl flex items-center justify-center">
          <img src={Logo} alt="Greptile logo" className="w-6 h-6" />
        </div>
      </div>

      <div className="flex-1">
        {/* Header */}
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-green-800">
              {COMPANY_LABEL}
            </span>
            <span className="text-sm border-1 border-white-200 text-white px-2 rounded-full">
              {FINAL_REVIEW.BOT}
            </span>
          </div>
          <span className="text-xs text-gray-500">{FINAL_REVIEW.TIMING}</span>
        </div>

        {/* Message Text */}
        <div className="text-sm text-white">
          {FINAL_REVIEW.review.map((item) => (
            <p>{item}</p>
          ))}

          <br />
          <p className="text-green-700 font-extrabold">{FINAL_REVIEW.result}</p>
          <a href={FOOTER_DATA[3].href} target="_blank" className="text-lg underline text-green-500 cursor-pointer">More Details ...</a>
        </div>
      </div>
    </motion.div>
  );
};

export default FinalReview;

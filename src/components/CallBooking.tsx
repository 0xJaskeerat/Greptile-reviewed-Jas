import { useState } from "react";

import CalIntegration from "./CaIntegration";

import { BUTTONS, MAIN_TEXT } from "./constants";

const CallBooking = () => {
  const [visibleType, setVisibleType] = useState<"quick-chat" | "discussion" | "">("");

  const toggleCalendar = (type: "quick-chat" | "discussion") => () => {
    setVisibleType((prev) => (prev === type ? "" : type));
  };

  const buttonClass =
    "my-4 mx-4 w-[30vw] max-w-xs flex items-center justify-center " +
    "bg-[#D1FADF] text-black font-semibold px-4 py-2 rounded-md border " +
    "border-green-300 shadow-sm hover:bg-[#bff6c6] transition cursor-pointer";

  return (
    <div id="book-call" className="w-full">
      <p className="w-full text-center text-4xl font-semibold text-green-700">
        {MAIN_TEXT}
      </p>

      <div className="w-full flex justify-center items-center my-8 flex-wrap">
        <button onClick={toggleCalendar("quick-chat")} className={buttonClass}>
          {BUTTONS.QUICK_CHAT}
        </button>
        <button onClick={toggleCalendar("discussion")} className={buttonClass}>
          {BUTTONS.DISCUSSION}
        </button>
      </div>

      <div className="w-full flex justify-center transition-all duration-500 ease-in-out">
        {visibleType && (
          <div className="w-full max-w-4xl px-4">
            <CalIntegration type={visibleType} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CallBooking;

import { useEffect, useState } from "react";

import FinalReview from "./FinalReview";
import ReviewInProgress from "./ReviewInProgress";

import { REVIEW_SECTIONS } from "./constants";

export const AnimatedReview: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < REVIEW_SECTIONS.length - 1) {
      // display each sentence for 2ms
      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <>
      <div className="relative w-full max-w-full h-full max-h-full mx-auto p-4 bg-black rounded-xl shadow-xl overflow-hidden flex items-center justify-center">
        {index !== REVIEW_SECTIONS.length - 1 ? (
          <ReviewInProgress index={index} />
        ) : (
          <FinalReview />
        )}
      </div>
    </>
  );
};

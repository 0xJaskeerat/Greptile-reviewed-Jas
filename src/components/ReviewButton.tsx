import React, { useState } from "react";
import { createPortal } from "react-dom";

import { FiArrowRight } from "react-icons/fi";

import ReviewModal from "./ReviewModal";

import { BUTTONS } from "./constants";

const ReviewButton: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onClickReview = (): void => {
    setShowModal(true);
  };

  const onModalClose = (): void => {
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={onClickReview}
        className="mt-6 flex items-center space-x-1 bg-[#D1FADF] text-black font-semibold px-4 py-2 rounded-md border border-green-300 shadow-sm hover:bg-[#bff6c6] transition cursor-pointer"
      >
        <span>{BUTTONS.START_REVIEW}</span>
        <FiArrowRight className="text-md" />
      </button>

      {createPortal(
        <ReviewModal onClose={onModalClose} isOpen={showModal} />,
        document.getElementById('modal-root')!
      )}
    </>
  );
};

export default ReviewButton;

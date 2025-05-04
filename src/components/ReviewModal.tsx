import React from "react";

import { FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

import { ReviewDetails } from "./ReviewDetails";
import { BUTTONS } from "./constants";

interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
}

const ReviewModal: React.FC<ModalProps> = ({ onClose, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-[1000]"
          onClick={onClose}
        >
          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
              width: "20px",
              height: "20px",
              borderRadius: "100%",
            }}
            animate={{
              scale: 1,
              opacity: 1,
              width: "90%",
              height: "84vh",
              borderRadius: "0.5rem",
            }}
            exit={{
              scale: 0,
              opacity: 0,
              width: "20px",
              height: "20px",
              borderRadius: "100%",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="bg-white p-4 shadow-lg flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <ReviewDetails />

            <div className="flex justify-end pt-4">
              <button
                onClick={onClose}
                className="flex items-center gap-1 bg-[#D1FADF] text-black font-semibold px-4 py-2 rounded-md border border-green-300 shadow-sm hover:bg-[#bff6c6] transition cursor-pointer"
              >
                <span>{BUTTONS.CLOSE}</span>
                <FiX className="text-lg" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReviewModal;

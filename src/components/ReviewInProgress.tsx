import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { REVIEW_SECTIONS } from "./constants";

interface ReviewInProgressProps {
  index: number
}

const ReviewInProgress: React.FC<ReviewInProgressProps> = ({ index }) => {
  return (
    <AnimatePresence mode="wait">
    <motion.p
      key={REVIEW_SECTIONS[index]}
      initial={{ opacity: 0, scale: 1, y: 20 }}
      animate={{ opacity: 1, y: 40 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="text-center text-green-700 font-mono text-xl sm:text-base px-4"
    >
      {REVIEW_SECTIONS[index]}
    </motion.p>
  </AnimatePresence>
  )
}

export default ReviewInProgress
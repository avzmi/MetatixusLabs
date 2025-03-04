import { motion } from "framer-motion"
export default function Press({ children, className }) {
  return (
    <motion.div
      className={`cursor-pointer ${className ? className : ""}`}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", duration: 0.1 }}
    >
      {children}
    </motion.div>
  )
}

import React from 'react';
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      
    >
      <div className="flex items-center justify-center text-center flex-col px-6 py-20">
      <h1 className="text-4xl font-semibold text-gray-700">About Page</h1>
      <p className="mt-4 text-lg text-gray-600">
        This is the About page with smooth transitions.
      </p>
      </div>
    </motion.div>
  );
}
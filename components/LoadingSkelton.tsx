"use client";

import { motion } from "framer-motion";

export default function FancyLoading() {
  return (
    <div className="flex items-center space-x-2 text-lg font-medium text-gray-700 dark:text-gray-300">
      <span>Loading page content</span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        .
      </motion.span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
      >
        .
      </motion.span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
      >
        .
      </motion.span>
    </div>
  );
}

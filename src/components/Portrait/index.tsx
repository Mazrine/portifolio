import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Portrait() {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible ? (
        <motion.div
          key="portrait"
          className="flex flex-col bg-[#a064ee] p-1 gap-1 shadow-xl shadow-purple-900/50 rounded-sm border border-[#2d1b5a]"
          initial={{ opacity: 1, x: 0 }} // Start at original position
          exit={{ opacity: 0, x: 50 }} // Move right (x: 100) while fading and scaling
          transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
        >
          <div className="bg-[#d4b3ff] w-full p-1 rounded-sm flex flex-row gap-2 align-center items-center justify-between border border-[#2d1b5a]">
            <div className="flex flex-row gap-2 align-center items-center justify-between">
              <div className="w-4 h-4 rounded-sm bg-[#2d1b5a]"></div>
              <span className="text-[#2d1b5a]">me.jpg</span>
            </div>
            <div className="flex flex-row gap-2 align-center items-center justify-between">
              <div className="text-[#2d1b5a] hover:text-purple-500 hover:border-purple-500 transition-colors cursor-pointer border border-[#2d1b5a] rounded-sm p-[2px]">
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={14}
                  height={14}
                >
                  <path
                    d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9V2zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4h4z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="text-[#2d1b5a] hover:text-purple-500 hover:border-purple-500 transition-colors cursor-pointer border border-[#2d1b5a] rounded-sm p-[2px]">
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={14}
                  height={14}
                >
                  <path
                    d="M5 2h4v2H7v2H5V2Zm0 10H3V6h2v6Zm2 2H5v-2h2v2Zm2 2v-2H7v2H3v-2H1v2h2v2h4v4h2v-4h2v-2H9Zm0 0v2H7v-2h2Zm6-12v2H9V4h6Zm4 2h-2V4h-2V2h4v4Zm0 6V6h2v6h-2Zm-2 2v-2h2v2h-2Zm-2 2v-2h2v2h-2Zm0 2h-2v-2h2v2Zm0 0h2v4h-2v-4Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                className="text-[#2d1b5a] hover:text-purple-500 hover:border-purple-500 transition-colors cursor-pointer border border-[#2d1b5a] rounded-sm"
                onClick={handleClose}
              >
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={18}
                  height={18}
                >
                  <path
                    d="M5 5h2v2H5V5zm4 4H7V7h2v2zm2 2H9V9h2v2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm2-2v2h-2V9h2zm2-2v2h-2V7h2zm0 0V5h2v2h-2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <Image
            className="rounded-sm border border-[#2d1b5a]"
            src="/me.jpg"
            alt="Mazrine"
            width={300}
            height={76}
            priority
          />
          <div className="flex flex-row gap-2 align-center items-center justify-start">
            <div className="w-8 h-2 rounded-sm bg-[#d4b3ff] border border-[#2d1b5a]" />
            <div className="w-2 h-2 rounded-sm bg-[#d4b3ff] border border-[#2d1b5a]" />
            <div className="w-2 h-2 rounded-sm bg-[#d4b3ff] border border-[#2d1b5a]" />
            <div className="w-2 h-2 rounded-sm bg-[#d4b3ff] border border-[#2d1b5a]" />
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="close-state"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          ( ✖ ︿ ✖ )
        </motion.div>
      )}
    </AnimatePresence>
  );
}

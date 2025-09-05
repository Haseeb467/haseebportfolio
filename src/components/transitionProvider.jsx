"use client";

import { AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <AnimatePresence mode="wait">
        <div key={pathName} className="relative min-h-screen">
          {/* Top to Bottom Transition Overlay */}
          <motion.div
            className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
            animate={{ height: "0vh" }}
            exit={{ height: "140vh" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          
          {/* Page Title Animation - Bottom Left */}
          <motion.div
            className="fixed bottom-8 left-8 text-white text-6xl md:text-8xl cursor-default z-50 font-bold pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {pathName === "/" ? "Home" : pathName.substring(1).charAt(0).toUpperCase() + pathName.substring(2)}
          </motion.div>
          
          {/* Bottom to Top Transition Overlay */}
          <motion.div
            className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
            initial={{ height: "140vh" }}
            animate={{ height: "0vh", transition: { delay: 0.5 } }}
          />

          {/* Navbar */}
          <div className="relative z-11">
            <Navbar />
          </div>
          
          {/* Main Content */}
          <motion.main
            className="relative z-10 pt-24"
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, delay: 0.8, ease: "easeOut" }
            }}
            exit={{ 
              opacity: 0, 
              y: -20,
              transition: { duration: 0.3, ease: "easeIn" }
            }}
          >
            {children}
          </motion.main>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default TransitionProvider;
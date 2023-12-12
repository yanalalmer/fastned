"use client";
import React, { ReactNode, FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
// ROUTER
import { usePathname } from "next/navigation";
// TYPES
interface ILayoutProps {
  children: ReactNode;
}

const PageTransitionLayout: FC<ILayoutProps> = ({ children }) => {
  const router = usePathname();
  console.log(router);
  return (
    <AnimatePresence mode={"wait"}>
      <motion.main
        key={router}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          type: "tween",
          duration: 0.5,
        }}
        variants={{
          initialState: {
            x: "100vw",
          },
          animateState: {
            x: 0,
          },
          exitState: {
            x: "-100vw",
          },
        }}
        className="min-h-screen w-full"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

export default PageTransitionLayout;

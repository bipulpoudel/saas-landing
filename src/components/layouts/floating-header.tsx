"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import { Button } from "@/components/ui/button";

const FloatingHeader = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="flex justify-between items-center w-full fixed top-2 z-50 max-sm:top-0"
      >
        <header className="container flex items-center w-full px-4 py-3 justify-between bg-background shadow-xl border rounded-lg max-sm:rounded-none max-sm:shadow">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/logo.svg"
              alt="SaaS Starter Kit"
              width={160}
              height={40}
            />
          </Link>

          <nav className="flex items-center gap-2 max-sm:hidden">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">About us</Button>
            <Button variant="ghost">Pricing</Button>
            <Button variant="ghost">Features</Button>

            <Button variant="outline" size="lg">
              Sign in
            </Button>

            <Button size="lg">Get started</Button>
          </nav>
          <Button variant="ghost" size="icon" className="hidden max-sm:flex">
            <Menu className="w-7 h-7" />
          </Button>
        </header>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingHeader;

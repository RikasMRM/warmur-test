"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import warmur from "../../public/warmurlogo.png";
import Link from "next/link";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={warmur}
              alt="warmur"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="mt-10"
            />
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="font-bold text-6xl mb-10 mt-10">
          We&apos;ve built the ultimate home energy{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-400">
            {" "}
            calculator.
          </span>
        </div>

        <div className="font-medium text-4xl text-base mt-5">
          Helping homeowners to accurately predict runnings costs for Heat
          Pumps, Solar PV, Battery & Off Peak Tariffs
        </div>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link href="https://www.warmur.co.uk/" target="_blank">
          <div className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10">
            <span className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-blue-500 to-orange-500">
              {" "}
              Join CarbonFreeHome
            </span>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}

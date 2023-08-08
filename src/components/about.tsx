"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About us</SectionHeading>
      <p className="mb-3">
        <span className="font-medium">Warmur</span>is a new renewable
        energy calculator, due to be released late in October 2023. Our mission
        is to help home owners navigate the journey to a carbon free home. We
        can even help you find an installer for your project. By signing up from
        the homepage, you&apos;ll be the first know when our calculator is ready for
        use.
        <br />
        <br />
        <span className="font-bold">Why?</span>
        <br />
        But calculators abound, you say! There are several calculators online
        which let you estimate your solar energy production, and some of them
        also model the impact of installing a battery. Others still can give you
        an idea of your heat pump running costs. A few calculators combine all
        of these technologies to give you a more complete view. By answering a
        few simple questions about your home and habits, we&apos;ll show you your
        projected savings from combining not just solar, battery & heat pump,
        but also off-peak electricty tarrifs, a crucial component of considering
        your future home energy bills. It&apos;s our mission to build the most
        intuitive home energy calculator, helping you decarbonise your home,
        minimising running costs. Warmur is the missing calculator for
        navigating your path to a #NetZero home.
      </p>
    </motion.section>
  );
}

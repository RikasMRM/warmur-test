"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 10,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Get In touch!</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Like the sound of Warmur? Get in touch if you have questions or
        suggestions. We&apos;d love to hear from you!{" "}
        <a className="underline" href="mailto:info@warmur.co.uk">
          info@warmur.co.uk
        </a>{" "}
        <br />
        <br />
        Warmur Technology Ltd - Company No. SC771872
      </p>
    </motion.section>
  );
}

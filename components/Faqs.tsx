'use client'

import { accordionItems, judgingPara } from "@/util";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Accordion from "./Accordion";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <section
        className={`flex px-4 py-12 relative md:px-24 flex-col md:flex-row-reverse items-center border-b`}
        id="faqs"
      >
        <div className={`basis-1/2 my-4`}>
          <Image
            src="/images/cwok_casual_21 1.png"
            alt=""
            width={700}
            height={700}
          />

        </div>
        <div className="basis-1/2 text-white text-center md:text-start">
          <h1 className="font-bold  text-2xl mb-4">
            Frequently Ask <br /> <span className="text-primary">Question</span>
          </h1>

          <p className="py-4 pe-8 text-xl">
            We got answers to the questions that you might want to ask about{" "}
            <span className="font-bold">getlinked Hackathon 1.0</span>
          </p>
          
            {accordionItems.map((item, index) => (
              <Accordion key={index} title={item.title} content={item.content} isOpen={index === openIndex}
              toggleAccordion={() => toggleAccordion(index)} />
            ))}
  
        </div>
      </section>
    </>
  );
};

export default Faqs;

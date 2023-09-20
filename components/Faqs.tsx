import { judgingPara } from "@/util";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Faqs = () => {
  return (
    <>
      <section
        className={`flex p-4 relative md:px-24 min-h-[85vh] flex-col md:flex-row-reverse items-center border-b`}
      >
        <div className={`basis-1/2 md:mt-24`}>
          <Image
            src="/images/cwok_casual_21 1.png"
            alt=""
            width={500}
            height={500}
          />

          <div className="bg-gradient h-[134] w-[134] rounded-full absolute"></div>
        </div>
        <div className="basis-1/2 md:py-8 text-white text-center md:text-start">
          <h1 className="font-bold  text-2xl mb-4">
            Frequently Ask <br /> <span className="text-primary">Question</span>
          </h1>

          <p className="py-4 pe-8 text-xl">
            We got answers to the questions that you might want to ask about{" "}
            <span className="font-bold">getlinked Hackathon 1.0</span>
          </p>
          {judgingPara.map((para, index) => (
            <div>dddddkdkkdkd</div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Faqs;

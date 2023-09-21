import { judgingPara } from "@/util";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Judging = () => {
  
  return (
    <>
      <section
        className={`flex p-4 relative md:px-24 min-h-[85vh] flex-col md:flex-row items-center border-b`}
      >
        <div className={`basis-1/2 my-4 relative`}>
          <div className="bg-gradient h-[80px] w-[80px] -top-4 left-12 rounded-full absolute"></div>
          <Image
            src="/images/8046554 1.png"
            alt=""
            className="z-[99]"
            width={500}
            height={500}
          />

        </div>
        <div className="basis-1/2 md:py-8 text-white text-center md:text-start">
          <h1 className="font-bold  text-2xl mb-4">
            Judging Criteria <br />{" "}
            <span className="text-primary">Key attributes</span>
          </h1>
        {
          judgingPara.map((para, index) => (

          <p key={index} className="text-sm text-center md:text-start py-2">
            <span className="text-primary">{para.title}</span>{" "}
            {para.description}
          </p>
          ))
        }

          <Link href={'/register'} className="bg-gradient p-2 px-4 inline-block mt-4 rounded text-white">Read More</Link>
        </div>
      </section>
    </>
  );
};

export default Judging;

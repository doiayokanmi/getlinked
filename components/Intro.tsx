import Image from 'next/image'
import React from 'react'

interface IntroProps {
    image: string;
    heading: string;
    sub_heading: string;
    paragraph: string;
    reversed: boolean;
}

const Intro = ({image, heading, sub_heading, paragraph, reversed}: IntroProps) => {
  return (
    <>
    <section className={`flex p-4 md:px-24 min-h-[85vh] flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center border-b`}>
        <div className={`basis-1/2 p-8 flex ${!reversed ? 'justify-end' : ''}`}>
          <Image
            src={image}
            alt=""
            className="self-end"
            objectFit="contain"
            width={500}
            height={500}
          />
        </div>
        <div className="basis-1/2 md:p-8 text-white">
          <h1 className="font-bold text-center md:text-start text-2xl mb-8">
            {heading} <br />{" "}
            <span className="text-primary">{sub_heading}</span>
          </h1>

          <p className="md:text-lg text-center md:text-start">
            {paragraph}
          </p>
        </div>
      </section>
    </>
  )
}

export default Intro
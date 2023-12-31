import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <>
    <header className="flex flex-col md:flex-row md:h-[85vh] items-center border-b">
        <div className="basis-1/2 text-white text-center md:text-start p-4 py-8 md:px-24">
          <h1 className="font-bold text-4xl md:text-7xl md:-me-56">
            getLinked Tech <br /> Hackathon{" "}
            <span className="text-primary">1.0</span>
          </h1>

          <p className="py-8 text-lg">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>

          <Link href={'/register'} className="bg-gradient mx-auto md:mx-0 p-2 px-4 rounded text-white">Register</Link>

        </div>
        <div className="basis-1/2 h-full bg-lefthead bg-contain bg-no-repeat bg-right-bottom flex justify-center relative items-center">
          <Image
            src="/images/Image 1.png"
            alt=""
            objectFit="contain"
            width={500}
            height={500}
          />

          <Image src="/images/Purple-Lens-Flare-PNG.png" alt="" width={500} height={500} className="absolute -top-24 right-0" />
        </div>
      </header>
    </>
  )
}

export default Hero
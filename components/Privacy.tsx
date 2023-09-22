import Image from 'next/image'
import React from 'react'

const Privacy = () => {
  return (
    <>
    <section className="flex flex-col md:flex-row py-8 px-4 md:px-24 text-white border-b">
        <div className="basis-1/2 py-8 md:mt-24">
        <div className="text-center md:text-start">
            <h1 className="font-bold text-2xl mb-2">
              Privacy Policy and
              <br /> <span className="text-primary">Terms</span>
            </h1>

            <p className='mb-4'>
            Last updated on September 12, 2023
            </p>

            <p>
            Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant
            </p>
        </div>

        <div className="border border-primary p-4 md:p-12 mt-8 rounded">
            <p>
            At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.
            </p>

            <div className="py-4">
            <h1 className="text-primary font-semibold">
            Licensing Policy
            </h1>
            <p className="font-semi-bold">
            Here are terms of our Standard License:
            </p>
            </div>

            <ul>
                <li>
                The Standard License grants you a non-exclusive right to navigate and register for our event
                </li>
                <li>
                You are licensed to use the item available at any free source sites, for your project developement
                </li>
            </ul>
        </div>
        </div>
        <div className="basis-1/2 flex justify-center relative p-8">
            <Image className='self-end mt-12 relative z-50' src={'/images/privacy2.png' } width={350} height={350} alt="" />
            <Image className='absolute right-0 top-0' src={'/images/privacy.png' } width={400} height={400} alt="" />

        </div>
    </section>
    </>
  )
}

export default Privacy
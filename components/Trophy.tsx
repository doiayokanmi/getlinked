import Image from "next/image";
import React from "react";

const Trophy = () => {
  return (
    <>
      <section className="border-b text-white px-4 md:px-24 py-12">
        <div className="md:flex justify-end">
          <div className="basis-1/2 text-center md:text-start">
            <h1 className="font-bold text-2xl mb-4">
              Prizes and
              <br /> <span className="text-primary">Rewards</span>
            </h1>

            <p>
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </div>
        </div>

        <div className="flex items-end flex-col md:flex-row">
          <div className="basis-1/2 relative">
            <Image
              className="absolute -top-16 transform rotate-180 right-0"
              src={"/images/Purple-Lens-Flare-PNG.png"}
              width={400}
              height={400}
              alt=""
            />
            <Image
              className="z-50"
              src={"/images/trophy.png"}
              width={400}
              height={400}
              alt=""
            />
          </div>
          <div className="basis-1/2 flex items-center space-x-2  pt-12 mt-16">
            <div className="basis-1/3 p-2 pt-8 font-bold text-xl text-center border border-primary rounded">
              <Image
                className="-mt-24 md:-mt-32"
                src={"/images/silver_medal.png"}
                width={350}
                height={350}
                alt=""
              />

              <h1 className="py-2">
                2nd <br /> Runner
              </h1>
              <h1 className="text-primary py-2">N300,000</h1>
            </div>

            <div className="basis-1/3 font-bold relative text-xl md:pt-24 pt-8 text-center bg-primary/70 border border-secondary rounded">
              <Image
                className="-mt-24 md:-mt-32"
                src={"/images/gold_medal.png"}
                objectFit="cover"
                fill
                alt=""
              />

              <div className="">
              <h1 className="p-2">
                1st <br /> Runner
              </h1>
              <h1 className="text-secondary p-2">N400,000</h1>
              </div>
            </div>

            <div className="basis-1/3 p-2 pt-8 font-bold text-xl text-center border border-primary rounded">
              <Image
                className="-mt-24 md:-mt-32"
                src={"/images/bronze_medal.png"}
                width={350}
                height={350}
                alt=""
              />

              <h1 className="py-2">
                2nd <br /> Runner
              </h1>
              <h1 className="text-primary py-2">N150,000</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trophy;

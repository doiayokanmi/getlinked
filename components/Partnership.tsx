import Image from "next/image";
import React from "react";

const Partnership = () => {
  return (
    <>
      <section className="px-4 py-12 md:px-24 text-white">
        <h1 className="font-semibold md:text-4xl text-xl text-center">
          Partners and Sponsors
        </h1>
        <p className="md:w-1/2 text-center mx-auto py-4">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>

        <div className="p-4 md:p-16 border rounded border-primary">

    

          <div className="grid grid-cols-3">
            <div className="border relative border-t-0 flex justify-center items-center border-l-0 border-primary p-2">
              <Image
                src={"/images/Liberty.png"}
                width={100}
                height={100}
                alt=""
              />

              <div className="bg-background -bottom-4 -right-4 rounded-full p-4 absolute"></div>
            </div>
            <div className="border border-t-0 flex justify-center items-center border-primary p-2">
              <Image
                src={"/images/LibertyPay.png"}
                width={100}
                height={100}
                alt=""
              />
            </div>
            <div className="border border-t-0 flex justify-center items-center border-r-0 border-primary p-2">
            <Image
                src={"/images/Winwise.png"}
                width={100}
                height={100}
                alt=""
              />
            </div>
            <div className="border border-b-0 flex justify-center items-center border-l-0  border-primary p-2">
            <Image
                src={"/images/wisper.png"}
                width={100}
                height={100}
                alt=""
              />
            </div>
            <div className="border border-b-0 flex justify-center items-center border-primary p-2">
            <Image
                src={"/images/Paybox.png"}
                width={100}
                height={100}
                alt=""
              />
            </div>
            <div className="border relative border-b-0 flex justify-center items-center border-r-0 border-primary p-2">
            <Image
                src={"/images/Vizual.png"}
                width={100}
                height={100}
                alt=""
              />
               <div className="bg-background -top-4 -left-4 rounded-full p-4 absolute"></div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partnership;

import Image from "next/image";
import React from "react";

const Judging = () => {
  return (
    <>
      <section
        className={`flex p-4 md:px-24 min-h-[85vh] flex-col md:flex-row items-center border-b`}
      >
        <div className={`basis-1/2`}>
          <Image
            src="/images/8046554 1.png"
            alt=""
            className="self-end"
            objectFit="contain"
            width={500}
            height={500}
          />
        </div>
        <div className="basis-1/2 md:py-8 text-white text-center md:text-start">
          <h1 className="font-bold  text-2xl mb-4">
            Judging Criteria <br />{" "}
            <span className="text-primary">Key attributes</span>
          </h1>

          <p className="text-center md:text-start py-2">
            <span className="text-primary">Innovation and Creativity:</span>{" "}
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>

          <p className="text-center md:text-start py-2">
            <span className="text-primary">Innovation and Creativity:</span>{" "}
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>

          <p className="text-center md:text-start py-2">
            <span className="text-primary">Innovation and Creativity:</span>{" "}
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>

          <p className="text-center md:text-start py-2">
            <span className="text-primary">Innovation and Creativity:</span>{" "}
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>
        </div>
      </section>
    </>
  );
};

export default Judging;

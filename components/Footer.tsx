import { Facebook, Instagram, Linkedin, MapPin, PhoneCall, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="relative text-white px-4 py-8 md:px-24 flex flex-col md:flex-row w-full bg-background-darker">
        <div className="flex flex-col basis-1/2 justify-between p-4">
          <div>
            <Link href="/" className="font-bold text-2xl">
              get<span className="text-primary">Linked</span>
            </Link>
            <p className="py-4">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>
          <p>
            <Link href={"#"}>Terms of Use</Link>{" "}
            <span className="text-primary">|</span>{" "}
            <Link href={"#"}>Privacy Policy</Link>
          </p>
        </div>

        <div className="basis-1/2 p-4 flex flex-col md:flex-row">
          <div className="flex flex-col basis-1/2">
            <h1 className="text-primary mb-2 font-semibold">Useful Links</h1>
            <Link href={"#"} className="mb-2">
              Overview
            </Link>
            <Link href={"#"} className="mb-2">
              Timeline
            </Link>
            <Link href={"#"} className="mb-2">
              FAQs
            </Link>
            <Link href={"#"} className="mb-2">
              Register
            </Link>

            <div className="flex items-end space-x-2">
              <span className="text-primary">Follow us</span>{" "}
              <Link href={"#"}>
                <Instagram />
              </Link>{" "}
              <Link href={"#"}>
                <Facebook />
              </Link>
              <Link href={"#"}>
                <Twitter />
              </Link>
              <Link href={"#"}>
                <Linkedin />
              </Link>
            </div>
          </div>
          <div className="flex flex-col mt-4 md:mt-0 basis-1/2 text-white md:px-4">
            <h1 className="text-primary mb-2 font-semibold">Contact Us</h1>
            <div className="my-4 flex">
            <PhoneCall className="mr-4" />  +234 6707653444
            </div>
            <div className="flex">
            <MapPin className="mr-4" /> 
            <p>
            27, Alara Street ,<br /> Yaba 100012, <br /> Lagos State
            </p>
            </div>
          </div>
        </div>
      </footer>
      <p className="text-center text-white pb-4">
        All rights reserved. © getlinked Ltd.
      </p>
    </>
  );
};

export default Footer;

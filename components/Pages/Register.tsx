"use client";

import Image from "next/image";
import React, { useState } from "react";
import { RegisterForm } from "../RegisterForm";
import DialogSlide from "../DialogSlide";

const Register = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <section className="flex flex-col md:flex-row p-4 md:py-12 md:px-24">
        <div className="basis-1/2 relative my-4">
          <Image src={"/images/register.png"} alt="" width={500} height={500} />
        </div>
        <div className="basis-1/2 md:my-4 relative shadow-xl text-white md:bg-register flex-1 md:p-8 rounded">
          <h1 className="text-primary font-semibold mb-4">Register</h1>
          <p className="mb-2">Be part of this movement! 🌡☄🌬</p>
          <h2 className="font-bold text-xl mb-4">CREATE YOUR ACCOUNT</h2>

          <RegisterForm open={open} setOpen={setOpen} />
          <DialogSlide open={open} setOpen={setOpen} />
          
        </div>
      </section>
    </>
  );
};

export default Register;

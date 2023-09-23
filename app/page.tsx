'use client'

import Navbar from "@/components/Navbar";
import Contact from "@/components/Pages/Contact";
import LandingPage from "@/components/Pages/LandingPage";
import Register from "@/components/Pages/Register";
import { useState } from "react";

export default function Home() {
  const [curPage, setCurPage] = useState(1);
  const pages = {
    1: <LandingPage />,
    2: <Contact />,
    3: <Register />,
  };
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar curPage={curPage} setCurPage={setCurPage} />
      {pages[curPage as keyof typeof pages]}
      
    </main>
  );
}

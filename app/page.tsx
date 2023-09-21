import Faqs from "@/components/Faqs";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Judging from "@/components/Judging";
import Navbar from "@/components/Navbar";
import Trophy from "@/components/Trophy";
import { introPage } from "@/util";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      {introPage.map((intro, index) => {
        return (
          <Intro
            key={index}
            image={intro.image}
            heading={intro.heading}
            sub_heading={intro.sub_heading}
            paragraph={intro.paragraph}
            reversed={intro.reversed}
          />
        );
      })}

      <Judging />
      <Faqs />
      <Trophy />
    </main>
  );
}

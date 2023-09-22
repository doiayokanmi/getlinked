import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Judging from "@/components/Judging";
import Navbar from "@/components/Navbar";
import Partnership from "@/components/Partnership";
import Privacy from "@/components/Privacy";
import TimelineComp from "@/components/Timeline";
import Trophy from "@/components/Trophy";
import { introPage } from "@/util";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
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
      <TimelineComp />
      <Trophy />
      <Partnership />
      <Privacy />
      <Footer />
    </main>
  );
}

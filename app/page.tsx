import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  const introPage = [
    {
      heading: 'Introduction to getlinked',
      sub_heading: 'tech Hackathon 1.0',
      image: "/images/The Big Idea.png",
      reversed: false,
      paragraph: "Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!",
    },
    {
      heading: 'Introduction to getlinked',
      sub_heading: 'tech Hackathon 1.0',
      image: "/images/The Big Idea.png",
      reversed: true,
      paragraph: "Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!",
    },
  ]
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      {
        introPage.map((intro, index) => {
          return (
            <Intro
              key={index}
              image={intro.image}
              heading={intro.heading}
              sub_heading={intro.sub_heading}
              paragraph={intro.paragraph}
              reversed={intro.reversed}
            />
          )
        })
      }
    </main>
  );
}

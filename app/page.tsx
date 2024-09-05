"use client";

import Hero from "@/Components/Hero";
import Grid from "@/Components/Grid";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import RecentProjects from "@/Components/RecentProjects";
import { navItems } from "@/data";
import Skills from "@/Components/Skills";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems}/>
          <Hero />
          <Grid />
          <Skills />
          <RecentProjects />
          <Footer />
        </div>
      </main>
  );
}

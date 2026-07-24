"use client";

import { useState } from "react";
import { Loader } from "@/components/Loader";
import { BackgroundFX } from "@/components/BackgroundFX";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Certifications } from "@/components/Certifications";
import { RolesLookingFor } from "@/components/RolesLookingFor";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export function HomeShell() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <BackgroundFX />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main aria-hidden={loading}>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <RolesLookingFor />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

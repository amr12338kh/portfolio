import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Parallax from "@/components/Parallax";
import ParallaxPages from "@/components/ParallaxPages";
import {
  getProjects,
  getSkills,
  getAbout,
  getWhatIBrings,
  getWhyChoose,
  getHero,
} from "@/lib/utils";
import {
  ProjectsDataProps,
  SkillsDataProps,
  AboutProps,
  WhatIBringProps,
  WhyChooseMeProps,
  HeroProps,
} from "@/types";

export default async function Home() {
  const projects: ProjectsDataProps[] = await getProjects();
  const skills: SkillsDataProps[] = await getSkills();
  const about: AboutProps = await getAbout();
  const whatIBrings: WhatIBringProps[] = await getWhatIBrings();
  const WhyChoose: WhyChooseMeProps[] = await getWhyChoose();
  const heroData: HeroProps = await getHero();

  return (
    <main>
      <section id="hero" className="container">
        <Hero heroData={heroData} />
      </section>

      <section id="about" className="container">
        <About skills={skills} aboutData={about} />
      </section>

      <section className="h-[80vh]">
        <Parallax type="first" />
      </section>

      <section className="container">
        <ParallaxPages
          type="first"
          whyChoose={WhyChoose}
          whatIBrings={whatIBrings}
        />
      </section>

      <section className="h-[80vh]">
        <Parallax type="sec" />
      </section>

      <section className="container min-h-[70vh]">
        <ParallaxPages
          type="sec"
          whyChoose={WhyChoose}
          whatIBrings={whatIBrings}
        />
      </section>

      <section id="projects" className="container">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="container">
        <Contact />
      </section>
    </main>
  );
}

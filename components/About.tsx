"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { AboutProps, SkillsDataProps } from "@/types"
import Skills from "./Skills"

interface Props {
  skills: SkillsDataProps[],
  aboutData: AboutProps
}

const About = ({ skills, aboutData }: Props) => {

  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 my-auto">
      <motion.div
        className="border p-2 rounded-xl"
        initial={{
            x: -200,
            opacity: 0,
        }}
        whileInView={{
            x: 0,
            opacity: 1,
        }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Image 
          src={aboutData.image.url} 
          alt="Amr" 
          width={350} 
          height={350} 
          className=" rounded-lg max-w-[130px] max-h-[130px] sm:max-w-[230px] sm:max-h-[230px] md:max-w-[380px] md:max-h-[380px] object-cover" 
        />
      </motion.div>
      <div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <h3 className=" uppercase text-xl xs:text-2xl sm:text-4xl tracking-wider font-bold">About Me</h3>
          <div className="flex flex-col sm:gap-5 items-center text-center">
            <h4 className="text-xs text-center text-muted-foreground">{aboutData.subtitle}</h4>
            <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-4/5 my-2" />
            <p className="sm:text-base text-xs xs:text-sm sm:w-10/12 font-light max-w-4xl">{aboutData.description}</p>
          </div>
        </motion.div>
        <div className="flex gap-1 flex-wrap xs:gap-2 sm:gap-3 justify-center mt-20">
          <Skills skills={skills} />
        </div>
      </div>
    </div>
  )
}

export default About
"use client"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { SkillsDataProps } from "@/types"
import { motion } from "framer-motion"
import Image from "next/image"

interface Props {
  skills: SkillsDataProps[]
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1},
};

const Skills = ({ skills }: Props) => {
  return (
    skills.map((skill) => (
      <HoverCard key={skill.skill_id}>
        <HoverCardTrigger>
          <motion.div 
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{
              delay: skill.skill_id * 0.12,
              ease: "easeInOut",
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="flex justify-center items-center w-[33px] h-[33px] ms:w-[40px] ms:h-[40px] sm:w-[50px] sm:h-[50px] rounded-lg bg-accent"
          >
            <Image 
              src={skill.skill_Image.url}
              alt={skill.skill_title}
              width={30}
              height={30}
              className="object-contain w-[18px] ms:w-[23px] sm:w-[30px]"
            />
          </motion.div>
          <HoverCardContent className="w-full text-xs p-[5px]">
            {skill.skill_title}
          </HoverCardContent>
        </HoverCardTrigger>
      </HoverCard>
    ))
  )
}

export default Skills
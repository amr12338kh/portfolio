"use client"

import { 
  motion, 
  useScroll, 
  useSpring, 
  useTransform 
} from "framer-motion"
import { useRef } from "react"
import { ProjectsDataProps } from "@/types"
import Image from "next/image"
import useWindowSize from "@/hooks/useWindowSize"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { RxExternalLink } from "react-icons/rx";
import Link from "next/link"

const Single = ({ 
  title, 
  description, 
  projectCode, 
  projectLink, 
  projectImage, 
  date, 
  release, 
  isFav 
}: ProjectsDataProps) => {

  const ref = useRef(null)
  const size = useWindowSize()
  const { scrollYProgress } = useScroll({
    target: ref, 
  })

  return (
    <div className="h-screen snap-center m-auto flex flex-col lg:flex-row items-center gap-10">
      <div className="lg:flex-1 flex items-center max-h-80 w-full lg:w-[650px] lg:h-1/2 pt-20 sm:pt-60 md:pt-80 lg:p-0" ref={ref}>
        <AspectRatio ratio={16 / 9} className="relative">
          <Image 
            src={projectImage.url} 
            alt={title} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="object-contain" 
          />
          {!release && <span className=" absolute top-0 left-0 bg-destructive rounded p-[5px] text-[10px] xs:text-xs font-bold">In Development</span>}
          {isFav && <span className=" absolute top-0 left-0 bg-muted rounded p-[5px] text-[10px] xs:text-xs font-bold">Favourite</span>}
        </AspectRatio>
      </div>
      <motion.div 
        className="flex-1 flex flex-col gap-4 md:gap-5 transform-none lg:transform" 
        style={{
          y:  useTransform( 
              scrollYProgress,  [0, 1], size.width <= 639 
              ? [0, 600] 
              : size.width <= 850 
                ? [200, 600]
                : size.width <= 1023 
                  ?  [250, 600]
                  : [-300, 300]
            )
          }} 
        >
        <h2 className="text-2xl min-[400px]:text-3xl xl:text-5xl text-[color:var(--primary)] font-semibold">{title}</h2>
        <p className=" text-sm md:text-lg max-w-xl font-light text-muted-foreground">{description}</p>
        <h3 className=" text-muted-foreground text-xs xs:text-sm">Date:&nbsp;
          <span className="text-primary">
            {release ? `${date}` : `Project will be finished on ${date}`}
          </span>
        </h3>
        {release ? (
          <div className="flex gap-4">
            <Link href={projectLink} target="_blank">
              <Button size="sm">Live Demo</Button>
            </Link>
            <Link href={projectCode} target="_blank">
              <Button 
                size="sm" 
                variant="secondary"
                className="flex gap-2"
              >
                <span>Code</span> 
                <RxExternalLink size={20} />
              </Button>
            </Link>
          </div>
        ) : (
          <div>
            <Button size="sm" disabled>Coming Soon...</Button>
          </div>
        )}
      </motion.div>
    </div>
  )
}

interface Props {
  projects: ProjectsDataProps[]
}

const Projects = ({ projects }: Props) => {

  const ref = useRef(null)
  const size = useWindowSize()

  const { scrollYProgress } = useScroll({
    target: ref, 
    offset: ["end end", "start start"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  const sortedProjects = projects.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="relative" ref={ref}>
      <div className={`sticky ${size.width <= 1023 ? "top-[85vh]" : "top-0" } left-0 pt-6 sm:pt-12 text-center z-10`}>
        <h3 className="uppercase tracking-wider sm:text-4xl  text-lg mb-4 font-bold">Projects</h3>
        <motion.div 
          className="h-1 bg-primary rounded-[100px]" 
          style={{ scaleX }}
        ></motion.div>
      </div>
      {sortedProjects.map((project) => {
        return (
          <Single key={project.projectId} {...project} />
        )
      })}
    </div>
  )
}

export default Projects

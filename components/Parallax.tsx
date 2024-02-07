"use client"
import { useRef } from "react"
import { 
  motion, 
  useScroll, 
  useTransform, 
} from "framer-motion"

interface ParallaxProps {
    type: string
}

const Parallax = ({ type }: ParallaxProps) => {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "1800%"])
    // const yBg = useTransform(scrollYProgress, [0, 2], ["0%", "100%"])

  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden" ref={ref}>
      <motion.h1 
          className=" text-xl absolute xs:text-[25px] ms:text-[35px] text-center sm:text-[45px] xl:text-[65px] tracking-wider font-bold z-10"
          style={{y: yText}}
      >
          {type === "first" ? "What I Bring to the Table" : "Why Choose Me"}
      </motion.h1>
    </div>
  )
}

export default Parallax
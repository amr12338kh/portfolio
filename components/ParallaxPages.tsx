"use client"
import Image from "next/image"
import { WhatIBringProps, WhyChooseMeProps } from "@/types"
import { motion } from "framer-motion"

interface Props {
    type: string,
    whyChoose: WhyChooseMeProps[],
    whatIBrings: WhatIBringProps[],
}

const variants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
};

const ParallaxPages = ({ type, whyChoose, whatIBrings }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {type === "first"
                ? (
                    whatIBrings.map((item: WhatIBringProps) => (
                      <motion.div 
                        key={item.itemId}
                        variants={variants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{
                          delay: item.itemId * 0.15,
                          ease: "easeInOut",
                          duration: 0.5,
                        }}
                        viewport={{ once: true }}
                        className=" h-full"
                      >
                        <Image 
                          src={item.image.url}
                          alt={item.title}
                          width={350}
                          height={350}
                          className=" object-contain rounded border w-full h-[250px] p-4"
                          loading="lazy"
                        />
                        <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-4" />
                        <p className=" text-sm">
                            <strong>{item.title}: </strong> 
                            <span className=" font-light text-xs text-muted-foreground">{item.description}</span>
                        </p>
                      </motion.div>
                      ))
                )
                : (
                    whyChoose.map((item: WhyChooseMeProps) => (
                      <motion.div 
                        key={item.itemId}
                        variants={variants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{
                          delay: item.itemId * 0.15,
                          ease: "easeInOut",
                          duration: 0.5,
                        }}
                        viewport={{ once: true }}
                        className=" h-full"
                      >
                        <Image 
                          src={item.image.url}
                          alt={item.title}
                          width={350}
                          height={350}
                          className=" object-contain rounded border w-full h-[250px] p-4"
                          loading="lazy"
                        />
                        <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-4" />
                        <p className=" text-sm">
                            <strong>{item.title}: </strong> 
                            <span className=" font-light text-xs text-muted-foreground">{item.description}</span>
                        </p>
                      </motion.div>
                      ))
                )
            }
        </div>
      </div>
    </div>
  )
}

export default ParallaxPages
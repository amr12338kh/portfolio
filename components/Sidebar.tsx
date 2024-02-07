"use client"
import { motion } from "framer-motion"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { SocialIcon } from "react-social-icons";

const Sidebar = () => {

  return (
    <Sheet>
      <SheetTrigger className=" fixed z-50 left-[10px] top-[-10px] rotate-90 pl-6 p-3 rounded-full bg-muted text-primary">
        <TbLayoutSidebarLeftExpandFilled size={18} />
      </SheetTrigger>
      <SheetContent side="top" className="w-full h-fit" >
        <SheetHeader>
          <div className="w-full flex items-center justify-between">
            <motion.div 
              className="flex items-center"
              initial={{
                  x: -500,
                  opacity: 0,
                  scale: 0.5,
              }}
              animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
              }}
              transition={{
                  duration: 0.7,
                  type: "spring",
                  delay: 0.2,
              }}>
              <SocialIcon 
                  url="https://www.instagram.com/amrrkhaled_9/" 
                  fgColor="gray"
                  bgColor="transparent"
                  target="_blank"
              />
              <SocialIcon 
                  url="https://www.linkedin.com/in/amr-khaled-a411bb217/" 
                  fgColor="gray"
                  bgColor="transparent"
                  target="_blank"
              />
              <SocialIcon 
                  url="https://github.com/amr12338kh" 
                  fgColor="gray"
                  bgColor="transparent"
                  target="_blank"
              />
            </motion.div>
            <motion.div 
              className="flex items-center text-gray-300 cursor-pointer"
              initial={{
                  x: 500,
                  opacity: 0,
                  scale: 0.5,
              }}
              animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
              }}
              transition={{
                  duration: 0.7,
                  type: "spring",
                  delay: 0.2,
              }}>
              <div>
                <SocialIcon 
                    className="cursor-pointer"
                    network="email" 
                    fgColor="gray"
                    bgColor="transparent"
                    url="#contact"
                />
                  <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Toch </p>
              </div>
             <ThemeSwitcher />
            </motion.div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default Sidebar
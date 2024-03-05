import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import React, { useState } from "react";
export const Footer = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 10) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full flex p-10 h-screen bg-zinc-900'>
    <div className=" w-1/2 text-7xl font-bold tracking-tighter leading-none">
    <h1>TO-</h1>
    <h1>CONTACT ME</h1>
        <div className='text-4xl h-1/2 mt-10 w-sfull tracking-normal'>
         Email :&nbsp;&nbsp;ak914014@gmail.com 
        </div>
        <motion.div
        variants={{
          visible: { width: 0 },
          hidden: { width: "38vw" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
        className="w-1/2 h-1/2 -mt-56 bg-cover bg-[url('./public/img/robot.jpg')] rounded-3xl"
      ></motion.div>
    </div>
    
    <div className="w-1/2 text-7xl font-bold tracking-tighter leading-none">
    <h1>SKILLS</h1>
    <div className='text-4xl h-1/2 mt-10 w-sfull tracking-normal'>
    JAVA,&nbsp; JavaScript,&nbsp;HTML,&nbsp;CSS,&nbsp;
    Talwind CSS,
    &nbsp;
    ReactJS,&nbsp;MongoDB,&nbsp;Node JS ,
    &nbsp;
    Express JS
   </div>
    </div>
    </div>
  )
}

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import React, { useState } from "react";

export const About = () => {
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
    <div 
    data-scroll data-scroll-section data-scroll-speed=".04"
     className="w-full p-20 overflow-hidden bg-[#CDEA68] rounded-tl-3xl  rounded-tr-3xl text-black ">
      <h1 className="text-[3.5vw] w-[75vw] leading-[4vw] tracking-tight font-['Neue_Montreal']">
        Hii! 🙋‍♂️ my name is Ajay I'm Full-Stack developer. I'm created this
        animated webpage to add new porject in my Portpholio and gaind knowledge
        in front-end thakyou.😎
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-14 border-[#54632578]">
        <div className="w-1/2">
          <h1 className="text-5xl">Approach</h1>
          <button className=" flex gap-10 uppercase items-center px-10 text-[1.2vw] py-4 bg-zinc-900 mt-10 rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <motion.div
          variants={{
            visible: { width: 0 },
            hidden: { width: "38vw" },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
          className="w-1/2 h-[70vh] bg-cover bg-[url('./public/img/robot.jpg')] rounded-3xl"
        ></motion.div>
      </div>
    </div>
  );
};

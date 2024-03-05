import { motion, useAnimation } from "framer-motion";
import React from "react";

export const Featured1 = () => {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const handelHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handelHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className="w-full py-20 bg-[#F1F1F1] relative"
    >
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl text-black font-['Neue_Montreal'] tracking-tighter">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handelHover(0)}
            onHoverEnd={() => handelHoverEnd(0)}
            className="cardContainer relative w-1/2 h-[80vh]"
          >
            <h1 className=" absolute flex text-[#CDEA68] overflow-hidden right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.83, 0, 0.17, 1], delay: index * 0.05 }}
                  className=" inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div
          className=" bg-[url('./public/img/FeatureImg.png')] hover:scale-95  grayscale-1 transition   bg-cover ease-in-out items-center justify-center flex  delay-500 card w-full h-full rounded-xl overflow-hidden">
              <img
                className="hover:scale-150 rounded-md grayscale-1 transition ease-in-out delay-500  h-2/3 w-2/3 bg-cover"
                src="./public/img/FeatureImg.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handelHover(1)}
            onHoverEnd={() => handelHoverEnd(1)}
            className="cardContainer relative w-1/2 h-[80vh]"
          >
            <h1 className=" absolute flex text-[#CDEA68] overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  transition={{ ease: [0.83, 0, 0.17, 1], delay: index * 0.05 }}
                  animate={cards[1]}
                  className=" inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div
            className=" bg-[url('./public/img/FeatureImg2.png')] hover:scale-95  grayscale-1 transition  bg-cover ease-in-out items-center justify-center flex  delay-200 card w-full h-full rounded-xl overflow-hidden">
                <img
                  className="hover:scale-150 rounded-md grayscale-1 transition  ease-in-out delay-500  h-2/3 w-2/3 bg-cover"
                  src="./public/img/FeatureImg2.png"
                  alt=""
                />
              </div>
            
          </motion.div>
        </div>
        <div className="cards w-full flex gap-10 mt-10">
        <motion.div
          onHoverStart={() => handelHover(2)}
          onHoverEnd={() => handelHoverEnd(2)}
          className="cardContainer relative w-1/2 h-[80vh]"
        >
          <h1 className=" absolute flex text-[#CDEA68] overflow-hidden right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl">
            {"FYDE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[2]}
                transition={{ ease: [0.83, 0, 0.17, 1], delay: index * 0.05 }}
                className=" inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div
          className=" bg-[url('./public/img/FeatureImg3.png')] hover:scale-95  grayscale-1 transition  bg-cover ease-in-out items-center justify-center flex  delay-200 card w-full h-full rounded-xl overflow-hidden">
              <img
                className="hover:scale-150 rounded-md grayscale-1 transition  ease-in-out delay-500  h-2/3 w-2/3 bg-cover"
                src="./public/img/FeatureImg3.png"
                alt=""
              />
            </div>
          
        </motion.div>
        <motion.div
          onHoverStart={() => handelHover(3)}
          onHoverEnd={() => handelHoverEnd(3)}
          className="cardContainer relative w-1/2 h-[80vh]"
        >
          <h1 className=" absolute flex text-[#CDEA68] overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl">
            {"VISE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                transition={{ ease: [0.83, 0, 0.17, 1], delay: index * 0.05 }}
                animate={cards[3]}
                className=" inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div
          className=" bg-[url('./public/img/FeatureImg4.png')] hover:scale-95  grayscale-1 transition  bg-cover ease-in-out items-center justify-center flex  delay-200 card w-full h-full rounded-xl overflow-hidden">
              <img
                className="hover:scale-150 rounded-md grayscale-1 transition  ease-in-out delay-500  h-2/3 w-2/3 bg-cover"
                src="./public/img/FeatureImg4.png"
                alt=""
              />
            </div>
          
        </motion.div>
      </div>
      </div>
    </div>
  );
};

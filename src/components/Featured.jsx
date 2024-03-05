import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

export const Featured = () => {

  const cards=  [useAnimation(), useAnimation()]
  const handelHOver = ()=>{
       cards[index].start({x:"0"})
  }
  return (
    <div className="w-full py-20 bg-[#F1F1F1]">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-6xl text-black tracking-tight font-["Neue_Montreal"]'>
          Featured projects
        </h1>
      </div>
      <div className="cards w-full flex gap-5 px-20 py-20">
      <motion.div 
      onHoverStart ={()=> handelHOver(0)}
      className="cardContainer relative  w-1/2 h-[80vh]"
        >
          <h1
            className="bg-red-500  ml-48 w-full absolute felx  left-full -translate-x-1/2   top-1/2 -translate-y-1/2
            font-[FoundersGrotesk,Roboto,sans-serif] text-[#CDEA68] font-semibold leading-none tracking-tighter text-8xl z-[9]"
          >
            {"FYDE".split("").map((item, index) => (
              <motion.span 
             initial={{x:"100%"}}
             animate ={cards[0]}
              className=" inline-block" key={index}>
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="w-full h-full bg-zinc-300 overflow-hidden rounded-[12px]">
            <img
              className="w-full h-full bg-cover"
              src="./public/img/FeatureImg.png"
              alt=""
            />
          </div>
        </motion.div>
        <div
         
          className=" cardContainer  relative w-1/2 h-[80vh] "
        >
          <h1
            className=" overflow-hidden ml-48 w-full absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2
        font-[FoundersGrotesk,Roboto,sans-serif] text-[#CDEA68] font-semibold leading-none tracking-tighter text-8xl z-[9]"
          >
            {"VISE".split("").map((item, index) => (
              <span
                
                className=" inline-block"
                key={index}
              >
                {item}
              </span>
            ))}
          </h1>
          <div className="w-full h-full bg-zinc-300 overflow-hidden rounded-[12px]">
            <img
              className="w-full h-full bg-cover"
              src="./public/img/FeatureImg2.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="cards w-full flex gap-5 px-20 py-20">
        <div
          
          className="cardContainer relative  w-1/2 h-[80vh]"
        >
          <h1
            className=" overflow-hidden ml-48 w-full absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2
            font-[FoundersGrotesk,Roboto,sans-serif] text-[#CDEA68] font-semibold leading-none tracking-tighter text-8xl z-[9]"
          >
            {"TRAWA".split("").map((item, index) => (
              <span
                
                className=" inline-block"
                key={index}
              >
                {item}
              </span>
            ))}
          </h1>
          <div className="w-full h-full bg-zinc-300 overflow-hidden rounded-[12px]">
            <img
              className="w-full h-full bg-cover"
              src="./public/img/FeatureImg3.png"
              alt=""
            />
          </div>
        </div>
        <div
          
          className="cardContainer  relative w-1/2 h-[80vh] "
        >
          <h1
            className="overflow-hidden ml-48 w-full absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2
        font-[FoundersGrotesk,Roboto,sans-serif] text-[#CDEA68] font-semibold leading-none tracking-tighter text-8xl z-[9]"
          >
            {"PREMIUM BLEND".split("").map((item, index) => (
              <span
               
                className=" inline-block"
                key={index}
              >
                {item}
              </span>
            ))}
          </h1>
          <div className="w-full h-full bg-zinc-300 overflow-hidden rounded-[12px]">
            <img
              className="w-full h-full bg-cover"
              src="./public/img/FeatureImg4.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

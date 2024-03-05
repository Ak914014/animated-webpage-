import { motion } from "framer-motion";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function LandingPage() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure  mt-40 px-20">
        {["Modern", "animeted", "WebSite"].map((itme, index) => {
          return (
            <div key={index} className=" masker  ">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className="w-[9vw] h-[5vw] bg-cover rounded-xl bg-[url('./public/img/robot.jpg')]"></motion.div>
                )}
                <h1 className="uppercase text-[6vw] leading-[6vw] tracking-tighter font-[FoundersGrotesk,Roboto,sans-serif] font-semibold">
                  {itme}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-28 flex justify-between items-center px-20 py-5">
        {[
          "Modern animated webpage",
          "Modern animated webpage",
        ].map((item, index) => (
          <p
            className="text-md font-light tracking-tight leading-none"
            key={index}
          >
            {item}
          </p>
        ))}
        <div className="start  flex justify-center gap-5">
          <div className="px-10 py-2 border-[1px] border-zinc-500 rounded-full font-light text-md uppercase">
            start
          </div>
          <div className="w-10 h-10 border-[1px] border-zinc-500 rounded-full  flex justify-center">
            <GoArrowUpRight className="  mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

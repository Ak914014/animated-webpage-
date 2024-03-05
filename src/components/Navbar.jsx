import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import React, { useEffect, useState } from "react";

function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // useEffect(() => {
  //   const unsub = scrollY.on("change", (latest) => {
  //     return () => unsub();
  //   });
  // }, [scrollY]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: [0.83, 0, 0.17, 1] }}
      className=" backdrop-blur-[2px] fixed z-[999] w-full h-[5vw] px-20 py-8 flex  justify-between items"
    >
      <div className="logo text-3xl">Portpholio</div>

      <div className="links flex gap-10">
        {["search", "Work", "About me", "home", "contact"].map(
          (item, index) => (
            <a
              className={`text-md capitalize font-light ${
                index === 4 && "ml-32"
              } `}
              key={index}
            >
              {item}
            </a>
          )
        )}
      </div>
    </motion.div>
  );
}

export default Navbar;

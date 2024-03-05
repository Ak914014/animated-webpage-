import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.7"
        className=" relative w-full h-full bg-cover bg-center bg-[url('./public/img/eye-img.jpg')] "
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  flex gap-10">
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white">
            <div
              style={{
                transform: `translate(0%, -80%) rotate(${rotate}deg)`,
              }}
              className="line  absolute top-2/3  w-3/2 h-[9vw]"
            >
              <div className=" translate-x-[-10%] relative w-[9vw] h-[9vw] rounded-full bg-black">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="line  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                >
                  <div className="w-7 h-7 rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white">
            <div
              style={{
                transform: `translate(0%, -80%) rotate(${rotate}deg)`,
              }}
              className="line  absolute top-2/3  w-3/2 h-[9vw]"
            >
              <div className=" translate-x-[-10%] relative w-[9vw] h-[9vw] rounded-full bg-black">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="line  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                >
                  <div className="w-7 h-7 rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;

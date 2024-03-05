import React from "react";

export const Cards = () => {
  return (
    <>
      <h1 data-scroll data-scroll-section className='text-6xl text-zinc-100 tracking-tight pt-[5vw]  pb-[5vw] px-20 font-["Neue_Montreal"]'>
      Certificates
      </h1>
      <div className="w-full h-screen flex gap-5 border-t-[1px] border-zinc-700 px-16 py-32">
        <div className="cardcontainer h-[50vh]  w-1/2">
          <div className=" relative card w-full h-full rounded-[12px] bg-[#004D43]">
            <p className="font-[FoundersGrotesk,Roboto,sans-serif] text-[#CDEA68] font-semibold leading-none tracking-tighter text-6xl w-1/2 absolute translate-x-[9vw] translate-y-[5vw] ">
              Excelence in MERN Stack
            </p>
            <button className=" absolute left-10 bottom-10 px-6 py-2   border-2 font-semibold leading-none tracking-tighter rounded-[25px]">
              Click here
            </button>
          </div>
        </div>
        <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
          <div className=" relative card w-1/2 h-full rounded-[12px] bg-[#F1F1F1]">
            <p className="font-[FoundersGrotesk,Roboto,sans-serif] text-black font-semibold leading-none tracking-tighter text-5xl w-full absolute translate-x-[2vw] translate-y-[5vw] ">
              Excelence in DSA
            </p>
            <button className=" absolute text-black left-10 border-black bottom-10 px-6 py-2   border-2 font-semibold leading-none tracking-tighter rounded-[25px]">
              Click here
            </button>
          </div>
          <div className=" relative card w-1/2 h-full rounded-[12px] bg-[#F1F1F1]">
            <p className="font-[FoundersGrotesk,Roboto,sans-serif]  text-black font-semibold leading-none tracking-tighter text-5xl w-full absolute translate-x-[2vw] translate-y-[5vw] ">
              Excelence in Java
            </p>
            <button className=" absolute text-black left-10 border-black bottom-10 px-6 py-2   border-2 font-semibold leading-none tracking-tighterborder-2 rounded-[25px]">
              Click here
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

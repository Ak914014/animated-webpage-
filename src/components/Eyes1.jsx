import React from 'react'
import Eye from './Eye'

export const Eyes1 = () => {
  return (
    <div className="eyes w-full h-screen overflow-hidden">
    <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.7"
        className=" relative w-full h-full bg-cover bg-center bg-[url('./public/img/eye-img.jpg')] "
      >
      <Eye/>
      </div>
    </div>)
}

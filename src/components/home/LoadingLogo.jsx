"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loading() {
  const overlayRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const PTL = gsap.timeline()
    PTL.to(logoRef.current,
      {
        opacity: 1,
        duration: 1,
        scale:1,
        ease: "power1.inOut",
      }
    );
    PTL.to(logoRef.current,
      {
        delay:0.5,
        duration: 0.7,
        scale:0.7,
        top:'5.5%',
        opacity:0,
        left:"9%",
        ease: "power4.inOut",
      },'a1'
    );
     PTL.to(overlayRef.current,
      {
        delay:0.7,
        opacity: 0,
        duration:0.5,
        ease: "power4.inOut",
        pointerEvents:'none'
      },'a1'
    );

  
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[2000] w-full h-svh flex items-center  justify-center bg-white "
    >
      <img
        ref={logoRef}
        src="/icons/logo.png"
        alt="Indosol Exports"
        className="w-[10rem] md:w-[12rem] object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-[0.9]"
      />
    </div>
  );
}
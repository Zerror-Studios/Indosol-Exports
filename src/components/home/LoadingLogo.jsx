// // "use client";

// // import { useEffect, useRef } from "react";
// // import gsap from "gsap";

// // export default function Loading() {
// //   const overlayRef = useRef(null);
// //   const logoRef = useRef(null);

// //   useEffect(() => {
// //     const PTL = gsap.timeline()
// //     PTL.to(logoRef.current,
// //       {
// //         opacity: 1,
// //         duration: 1,
// //         scale:1,
// //         ease: "power1.inOut",
// //       }
// //     );
// //     PTL.to(logoRef.current,
// //       {
// //         delay:0.5,
// //         duration: 0.7,
// //         scale:0.7,
// //         top:'5.5%',
// //         opacity:0,
// //         left:"9%",
// //         ease: "power4.inOut",
// //       },'a1'
// //     );
// //      PTL.to(overlayRef.current,
// //       {
// //         delay:0.7,
// //         opacity: 0,
// //         duration:0.5,
// //         ease: "power4.inOut",
// //         pointerEvents:'none'
// //       },'a1'
// //     );

  
// //   }, []);

// //   return (
// //     <div
// //       ref={overlayRef}
// //       className="fixed inset-0 z-[2000] w-full h-svh flex items-center  justify-center overflow-hidden "

// //     >
// //       <video muted autoPlay loop src={`/PRBG.mp4`} className="w-full h-svh object-cover object-center" ></video>
// //       <img
// //         ref={logoRef}
// //         src="/icons/logo.png"
// //         alt="Indosol Exports"
// //         className="w-[10rem] md:w-[12rem] object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-[0.9]"
// //       />
// //     </div>
// //   );
// // }


// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export default function Loading() {
//   const overlayRef = useRef(null);
//   const logoRef = useRef(null);

//   useEffect(() => {
//     const logo = logoRef.current;
//     const overlay = overlayRef.current;

//     // Keep the logo perfectly centered using transforms (not top/left)
//     // so every later animation stays on the GPU-accelerated path.
//     gsap.set(logo, {
//       xPercent: -50,
//       yPercent: -50,
//       force3D: true,
//       willChange: "transform, opacity",
//     });

//     const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

//     tl.from('.MMKP', {
//       opacity: 0,
//       duration: 0.5,
//       ease: "power2.out",
//     });


//     // 1. Fade + scale logo in
//     tl.to(logo, {
//       opacity: 1,
//       scale: 1,
//       duration: 1.1,
//       ease: "power2.out",
//     });
    
//     // 2. Hold briefly, then shrink + slide to the corner
//     //    Using x/y (px) instead of top/left keeps this on the compositor.
//     tl.to(
//       logo,
//       {
//         scale: 0.7,
//         x: () => -window.innerWidth * 0.41, // moves it toward ~9% from left
//         y: () => -window.innerHeight * 0.445, // moves it toward ~5.5% from top
//         opacity: 0,
//         duration: 0.9,
//         ease: "power3.inOut",
//       },
//       "+=0.4" // small pause after the intro before it moves
//     );

//     // 3. Fade the overlay out, overlapping the tail end of the move
//     tl.to(
//       overlay,
//       {
//         opacity: 0,
//         duration: 0.7,
//         ease: "power3.inOut",
//         pointerEvents: "none",
//       },
//       "-=0.6" // start slightly before the logo finishes moving
//     );

//     return () => {
//       tl.kill();
//     };
//   }, []);

//   return (
//     <div
//       ref={overlayRef}
//       className="fixed inset-0 z-[2000] w-full h-svh flex items-center justify-center overflow-hidden bg-white"
//     >
//       {/* <video
//         muted
//         autoPlay
//         loop
//         playsInline
//         src="/PRBG.mp4"
//         className="w-full h-svh object-cover object-center"
//       /> */}
//       <img src={`/mapM1.png`} alt="om" className="w-full h-full object-cover object-center opacity-25 MMKP" />
//       <img
//         ref={logoRef}
//         src="/icons/logo.png"
//         alt="Indosol Exports"
//         className="w-[10rem] md:w-[12rem] object-contain absolute top-1/2 left-1/2 opacity-0 scale-[0.9]"
//       />
//     </div>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loading() {
  const overlayRef = useRef(null);
  const logoRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const logo = logoRef.current;
    const overlay = overlayRef.current;
    const bg = bgRef.current;

    gsap.set(logo, {
      xPercent: -50,
      yPercent: -50,
      force3D: true,
      willChange: "transform, opacity",
    });

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Fade the map background in to its target opacity (0.25)
    tl.to(bg, {
      opacity: 0.10,
      duration: 0.5,
      ease: "power2.out",
    });

    // 1. Fade + scale logo in
    tl.to(logo, {
      opacity: 1,
      scale: 1,
      duration: 1.1,
      ease: "power2.out",
    });

    // 2. Hold briefly, then shrink + slide to the corner
    tl.to(
      logo,
      {
        scale: 0.7,
        x: () => -window.innerWidth * 0.41,
        y: () => -window.innerHeight * 0.445,
        opacity: 0,
        duration: 0.9,
        ease: "power3.inOut",
      },
      "+=0.4"
    );

    // 3. Fade the overlay out
    tl.to(
      overlay,
      {
        opacity: 0,
        duration: 0.7,
        ease: "power3.inOut",
        pointerEvents: "none",
      },
      "-=0.6"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[2000] w-full h-svh flex items-center justify-center overflow-hidden bg-white"
    >
      <img
        ref={bgRef}
        src="/MDP.png"
        alt="background map"
        className="w-full h-full object-cover object-center opacity-0"
      />
      <img
        ref={logoRef}
        src="/icons/logo.png"
        alt="Indosol Exports"
        className="w-[10rem] md:w-[12rem] object-contain absolute top-1/2 left-1/2 opacity-0 scale-[0.9]"
      />
    </div>
  );
}
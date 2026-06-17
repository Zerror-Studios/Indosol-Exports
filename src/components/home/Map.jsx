// "use client";
// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const MAPIMAGES = {
//   Africa: `/images/map/Africa.png`,
//   Asia: `/images/map/Asia.png`,
//   MiddleEast: `/images/map/MiddleEast.png`,
//   Europe: `/images/map/Europe.png`,
//   SouthAmerica: `/images/map/SouthAmerica.png`,
//   SoutheastAsia: `/images/map/SoutheastAsia.png`,
// };

// const Map = () => {
//   useEffect(() => {
//     const headings = gsap.utils.toArray(".heading");

//     // Initial state
//     gsap.set(headings, {
//       opacity: 0,
//       scale: 0.8,
//       filter: "blur(10px)",
//       y: 0,
//     });

//     // Show first text initially
//     gsap.set(headings[0], {
//       opacity: 1,
//       scale: 1,
//       filter: "blur(0px)",
//     });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".MapTopMainCont",
//         start: "top top",
//         end: "bottom bottom",
//         scrub: 1.5,
//       },
//     });

//     // Animate all headings
//     headings.forEach((heading, index) => {
//       if (index !== headings.length - 1) {
//         // Current heading OUT
//         tl.to(heading, {
//           opacity: 0,
//           scale: 2,
//           y: "-100%",
//           filter: "blur(12px)",
//           duration: 1,
//         });

//         // Next heading IN
//         tl.to(
//           headings[index + 1],
//           {
//             opacity: 1,
//             scale: 1,
//             y: 0,
//             filter: "blur(0px)",
//             duration: 1,
//           },
//           "<",
//         );
//       }
//     });

//     // Map icon animation after all text animations
//     tl.from(".MapIcon", {
//       opacity: 0,
//       top: "20%",
//       duration: 1,
//     });

//     return () => {
//       tl.kill();
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, []);
//   return (
//     <div className="MapTopMainCont relative h-[400svh] w-full bg-white">
//       <div className="sticky top-0 left-0 h-screen w-full overflow-hidden">
//         {/* Text */}
//         <div className="absolute top-[8%] left-0 z-20 flex w-full items-center justify-center capitalize">
//           <div className="relative flex h-[30vh] w-full items-center justify-center">
//             <h1 className="heading TextDarkGray absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
//               Africa
//             </h1>

//             <h1 className="heading TextDarkGray absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
//               Asia
//             </h1>

//             <h1 className="heading TextDarkGray absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
//               Middle East
//             </h1>

//             <h1 className="heading TextDarkGray absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
//               Europe
//             </h1>

//             <h1 className="heading TextDarkGray absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
//               South America
//             </h1>

//             <h1 className="heading TextDarkGray absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
//               Southeast Asia
//             </h1>
//           </div>
//         </div>

//         {/* Map */}
//         <div className="absolute bottom-0 left-0 z-[1] flex h-[70vh] w-full items-center justify-center pb-[5vh]">
//           <img
//             src="/images/Home/map.svg"
//             alt="map"
//             className="h-full w-full object-cover object-center"
//           />

//           {/* <div className="w-[150px] MapIcon opacity-100  absolute top-[15%] left-[50%] z-2">
//             <img
//               src={`/images/Home/PopUp.png`}
//               alt="IMG"
//               className="w-full object-cover object-center"
//             />
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Map;


"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MAPIMAGES = {
  Africa: "/images/map/Africa.png",
  Asia: "/images/map/Asia.png",
  MiddleEast: "/images/map/MiddleEast.png",
  Europe: "/images/map/Europe.png",
  SouthAmerica: "/images/map/SouthAmerica.png",
  SoutheastAsia: "/images/map/SoutheastAsia.png",
};

const countries = [
  {
    name: "Africa",
    image: MAPIMAGES.Africa,
  },
  {
    name: "Asia",
    image: MAPIMAGES.Asia,
  },
  {
    name: "Middle East",
    image: MAPIMAGES.MiddleEast,
  },
  {
    name: "Europe",
    image: MAPIMAGES.Europe,
  },
  {
    name: "South America",
    image: MAPIMAGES.SouthAmerica,
  },
  {
    name: "Southeast Asia",
    image: MAPIMAGES.SoutheastAsia,
  },
];

const Map = () => {
  useEffect(() => {
    const headings = gsap.utils.toArray(".heading");
    const maps = gsap.utils.toArray(".country-map");

    // Initial heading state
    gsap.set(headings, {
      opacity: 0,
      scale: 0.8,
      filter: "blur(10px)",
      y: 0,
    });

    gsap.set(headings[0], {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    });

    // Initial map state
    gsap.set(maps, {
      opacity: 0,
    });

    gsap.set(maps[0], {
      opacity: 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".MapTopMainCont",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    headings.forEach((heading, index) => {
      if (index !== headings.length - 1) {
        // Current heading OUT
        tl.to(heading, {
          opacity: 0,
          scale: 2,
          y: "-100%",
          filter: "blur(12px)",
          duration: 1,
        });

        // Next heading IN
        tl.to(
          headings[index + 1],
          {
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
          },
          "<"
        );

        // Current map OUT
        tl.to(
          maps[index],
          {
            opacity: 0,
          },
          "<"
        );

        // Next map IN
        tl.to(
          maps[index + 1],
          {
            opacity: 1,
          },
          "<"
        );
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);


  return (
    <div className="MapTopMainCont relative h-[400svh] w-full bg-white">
      <div className="sticky top-0 left-0 h-screen w-full overflow-hidden">
        {/* Text Section */}
        <div className="absolute top-[8%] left-0 z-20 flex w-full items-center justify-center capitalize">
          <div className="relative flex h-[30vh] w-full items-center justify-center">
            {countries.map((country, index) => (
              <h1
                key={index}
                className="heading TextDarkGray absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-center"
              >
                {country.name}
              </h1>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="absolute bottom-0 left-0 z-[1] flex h-[70vh] w-full items-center justify-center pb-[5vh]">
          <div className="relative h-full w-full">
            {/* Base World Map */}
            {/* <img
              src="/images/Home/map.svg"
              alt="World Map"
              className="absolute inset-0 h-full w-full object-cover object-center"
            /> */}

            {/* Country Highlight Maps */}
            {countries.map((country, index) => (
              <img
                key={index}
                src={country.image}
                alt={country.name}
                className={`country-map absolute inset-0 h-full w-full object-contain opacity-0 `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
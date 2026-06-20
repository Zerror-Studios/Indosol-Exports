// 'use client'
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useSplitTextMaskAnimation } from "@/utils/useSplitTextMaskAnimation";
// import React, { useEffect, useRef, useState } from "react";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Marker,
// } from "react-simple-maps";

// gsap.registerPlugin(ScrollTrigger);

// const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// const countries = [
//   {
//     name: "Africa",
//   },
//   {
//     name: "Asia",
//   },
//   {
//     name: "Middle East",
//   },
//   {
//     name: "Europe",
//   },
//   {
//     name: "South America",
//   },
//   {
//     name: "Southeast Asia",
//   },
// ];

// // Marker data
// const markers = [
//   { name: "USA", coordinates: [-98.5795, 39.8283] },
//   { name: "UK", coordinates: [-0.1276, 51.5074] },
//   { name: "Africa", coordinates: [31.2357, 30.0444] },
//   { name: "Switzerland", coordinates: [8.2275, 46.8182] },
//   { name: "Dubai", coordinates: [55.2708, 25.2048] },
//   { name: "India", coordinates: [78.9629, 20.5937] },
//   { name: "Singapore", coordinates: [103.8198, 1.3521] },
// ];

// // Country names for blue fill
// const africanCountries = [
//   "Algeria",
//   "Angola",
//   "Benin",
//   "Botswana",
//   "Burkina Faso",
//   "Burundi",
//   "Cabo Verde",
//   "Cameroon",
//   "Central African Republic",
//   "Chad",
//   "Comoros",
//   "Democratic Republic of the Congo",
//   "Republic of the Congo",
//   "Côte d'Ivoire",
//   "Djibouti",
//   "Egypt",
//   "Equatorial Guinea",
//   "Eritrea",
//   "Eswatini",
//   "Ethiopia",
//   "Gabon",
//   "Gambia",
//   "Ghana",
//   "Guinea",
//   "Guinea-Bissau",
//   "Kenya",
//   "Lesotho",
//   "Liberia",
//   "Libya",
//   "Madagascar",
//   "Malawi",
//   "Mali",
//   "Mauritania",
//   "Mauritius",
//   "Morocco",
//   "Mozambique",
//   "Namibia",
//   "Niger",
//   "Nigeria",
//   "Rwanda",
//   "São Tomé and Príncipe",
//   "Senegal",
//   "Seychelles",
//   "Sierra Leone",
//   "Somalia",
//   "South Africa",
//   "South Sudan",
//   "Sudan",
//   "Tanzania",
//   "Togo",
//   "Tunisia",
//   "Uganda",
//   "Zambia",
//   "Zimbabwe",
// ];

// const blueCountryNames = new Set([
//   ...africanCountries,
//   "United States of America",
//   "United Kingdom",
//   "Switzerland",
//   "United Arab Emirates",
//   "India",
//   "Singapore",
// ]);

// const WorldMap = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const titleRef = useRef();
//   const tlRef = useRef(null);

//   useEffect(() => {
//     // Exit early on mobile
//     if (window.innerWidth < 700) return;

//     const headings = gsap.utils.toArray(".heading");
//     const maps = gsap.utils.toArray(".country-map");

//     if (headings.length === 0 || maps.length === 0) return;

//     // Initial heading state
//     gsap.set(headings, {
//       opacity: 0,
//       scale: 0.8,
//       filter: "blur(10px)",
//       y: 0,
//     });

//     gsap.set(headings[0], {
//       opacity: 1,
//       scale: 1,
//       filter: "blur(0px)",
//     });

//     // // Initial map state
//     // gsap.set(maps, {
//     //   opacity: 0,
//     // });

//     // gsap.set(maps[0], {
//     //   opacity: 1,
//     // });

//     // Create timeline with ScrollTrigger
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".MapTopMainCont",
//         start: "top top",
//         end: "bottom bottom",
//         scrub: 1.5,
//         markers: false, // Set to true for debugging
//       },
//     });

//     tlRef.current = tl;

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
//           },
//           "<"
//         );

//         // // Current map OUT
//         // tl.to(
//         //   maps[index],
//         //   {
//         //     opacity: 0,
//         //   },
//         //   "<"
//         // );

//         // // Next map IN
//         // tl.to(
//         //   maps[index + 1],
//         //   {
//         //     opacity: 1,
//         //   },
//         //   "<"
//         // );
//       }
//     });

//     return () => {
//       if (tlRef.current) {
//         tlRef.current.kill();
//       }
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, []);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 767);
//     };
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   useSplitTextMaskAnimation([titleRef]);

//   return (
//     <div className="MapTopMainCont relative h-[400svh] max-sm:h-fit w-full bg-white">
//       <div className="sticky top-0 left-0 w-full h-svh flex items-end">
//         <div className="absolute top-[3%] left-0 z-20 max-sm:hidden flex w-full items-center justify-center capitalize">
//           <div className="relative flex h-[30vh] w-full items-center justify-center">
//             {countries.map((country, index) => (
//               <h1
//                 key={index}
//                 className="heading TextDarkGray absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-center"
//               >
//                 {country.name}
//               </h1>
//             ))}
//           </div>
//         </div>

//         <div
//           id="world-map"
//           className="country-map"
//           style={{
//             width: "100%",
//             height: "80vh",
//             overflow: "hidden",
//             userSelect: "none",
//             backgroundColor: "#ffffff",
//           }}
//         >
//           <ComposableMap
//             projectionConfig={{ scale: 200 }}
//             width={1000}
//             height={600}
//             style={{ width: "100%", height: "100%" }}
//           >
//             <Geographies geography={geoUrl}>
//               {({ geographies }) =>
//                 geographies.map((geo) => {
//                   const countryName = geo.properties.name;
//                   const isBlue = isMobile && blueCountryNames.has(countryName);

//                   return (
//                     <Geography
//                       key={geo.rsmKey}
//                       geography={geo}
//                       style={{
//                         default: {
//                           fill: isBlue ? "#00247D" : "#F5F5f5",
//                           outline: "none",
//                         },
//                         hover: {
//                           fill: "#00247D",
//                           outline: "none",
//                         },
//                         pressed: {
//                           fill: "#D6D6DA",
//                           outline: "none",
//                         },
//                       }}
//                     />
//                   );
//                 })
//               }
//             </Geographies>

//             {markers.map(({ name, coordinates }, i) => (
//               <Marker key={name} coordinates={coordinates}>
//                 <circle r={4} fill="#0A1E37" stroke="#fff" strokeWidth={2} />
//                 <text
//                   textAnchor="middle"
//                   y={-10}
//                   x={i === 3 ? 30 : 0}
//                   style={{
//                     fontFamily: "system-ui",
//                     fill: "#2D2D2D",
//                     fontWeight: "bold",
//                     fontSize: 13,
//                   }}
//                 >
//                   {name}
//                 </text>
//               </Marker>
//             ))}
//           </ComposableMap>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WorldMap;


'use client'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSplitTextMaskAnimation } from "@/utils/useSplitTextMaskAnimation";
import React, { useEffect, useRef, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

gsap.registerPlugin(ScrollTrigger);

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Country data with their respective countries
const countries = [
  {
    name: "Africa",
    countriesList: [
      "Algeria",
      "Angola",
      "Benin",
      "Botswana",
      "Burkina Faso",
      "Burundi",
      "Cabo Verde",
      "Cameroon",
      "Central African Republic",
      "Chad",
      "Comoros",
      "Democratic Republic of the Congo",
      "Republic of the Congo",
      "Côte d'Ivoire",
      "Djibouti",
      "Egypt",
      "Equatorial Guinea",
      "Eritrea",
      "Eswatini",
      "Ethiopia",
      "Gabon",
      "Gambia",
      "Ghana",
      "Guinea",
      "Guinea-Bissau",
      "Kenya",
      "Lesotho",
      "Liberia",
      "Libya",
      "Madagascar",
      "Malawi",
      "Mali",
      "Mauritania",
      "Mauritius",
      "Morocco",
      "Mozambique",
      "Namibia",
      "Niger",
      "Nigeria",
      "Rwanda",
      "São Tomé and Príncipe",
      "Senegal",
      "Seychelles",
      "Sierra Leone",
      "Somalia",
      "South Africa",
      "South Sudan",
      "Sudan",
      "Tanzania",
      "Togo",
      "Tunisia",
      "Uganda",
      "Zambia",
      "Zimbabwe",
    ],
  },
  {
    name: "Asia",
    countriesList: [
      "Afghanistan",
      "Armenia",
      "Azerbaijan",
      "Bahrain",
      "Bangladesh",
      "Bhutan",
      "Brunei",
      "Cambodia",
      "China",
      "Georgia",
      "Hong Kong",
      "India",
      "Indonesia",
      "Iran",
      "Iraq",
      "Israel",
      "Japan",
      "Jordan",
      "Kazakhstan",
      "North Korea",
      "South Korea",
      "Kuwait",
      "Kyrgyzstan",
      "Laos",
      "Lebanon",
      "Macao",
      "Malaysia",
      "Maldives",
      "Mongolia",
      "Myanmar",
      "Nepal",
      "Oman",
      "Pakistan",
      "Palestine",
      "Philippines",
      "Qatar",
      "Saudi Arabia",
      "Singapore",
      "Sri Lanka",
      "Syria",
      "Taiwan",
      "Tajikistan",
      "Thailand",
      "Timor-Leste",
      "Turkey",
      "Turkmenistan",
      "United Arab Emirates",
      "Uzbekistan",
      "Vietnam",
      "Yemen",
    ],
  },
  {
    name: "Middle East",
    countriesList: [
      "Bahrain",
      "Iran",
      "Iraq",
      "Israel",
      "Jordan",
      "Kuwait",
      "Lebanon",
      "Oman",
      "Qatar",
      "Saudi Arabia",
      "Syria",
      "Turkey",
      "United Arab Emirates",
      "Yemen",
      "Palestine",
    ],
  },
  {
    name: "Europe",
    countriesList: [
      "Albania",
      "Andorra",
      "Austria",
      "Belarus",
      "Belgium",
      "Bosnia and Herzegovina",
      "Bulgaria",
      "Croatia",
      "Cyprus",
      "Czechia",
      "Denmark",
      "Estonia",
      "Finland",
      "France",
      "Germany",
      "Greece",
      "Hungary",
      "Iceland",
      "Ireland",
      "Italy",
      "Kosovo",
      "Latvia",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Malta",
      "Moldova",
      "Monaco",
      "Montenegro",
      "Netherlands",
      "North Macedonia",
      "Norway",
      "Poland",
      "Portugal",
      "Romania",
      "Russia",
      "San Marino",
      "Serbia",
      "Slovakia",
      "Slovenia",
      "Spain",
      "Sweden",
      "Switzerland",
      "Ukraine",
      "United Kingdom",
    ],
  },
  {
    name: "South America",
    countriesList: [
      "Argentina",
      "Bolivia",
      "Brazil",
      "Chile",
      "Colombia",
      "Ecuador",
      "Guyana",
      "Paraguay",
      "Peru",
      "Suriname",
      "Uruguay",
      "Venezuela",
    ],
  },
  {
    name: "Southeast Asia",
    countriesList: [
      "Brunei",
      "Cambodia",
      "Indonesia",
      "Laos",
      "Malaysia",
      "Myanmar",
      "Philippines",
      "Singapore",
      "Thailand",
      "Timor-Leste",
      "Vietnam",
    ],
  },
];

// Marker data
const markers = [
  { name: "USA", coordinates: [-98.5795, 39.8283] },
  { name: "UK", coordinates: [-0.1276, 51.5074] },
  { name: "Africa", coordinates: [31.2357, 30.0444] },
  { name: "Switzerland", coordinates: [8.2275, 46.8182] },
  { name: "Dubai", coordinates: [55.2708, 25.2048] },
  { name: "India", coordinates: [78.9629, 20.5937] },
  { name: "Singapore", coordinates: [103.8198, 1.3521] },
];

const Map = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const titleRef = useRef();
  const tlRef = useRef(null);

  // Get current blue countries based on active index
  const getCurrentBlueCountries = () => {
    const countrySet = new Set(countries[activeIndex].countriesList);
    return countrySet;
  };

  const blueCountryNames = getCurrentBlueCountries();

  useEffect(() => {
    // Exit early on mobile
    if (window.innerWidth < 700) return;

    const headings = gsap.utils.toArray(".heading");
    const maps = gsap.utils.toArray(".country-map");

    if (headings.length === 0) return;

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

    // Create timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".MapTopMainCont",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        markers: false,
        onUpdate: (self) => {
          // Calculate which heading should be active based on scroll progress
          const progress = self.progress;
          const numHeadings = headings.length;
          const activeIdx = Math.min(
            Math.floor(progress * numHeadings),
            numHeadings - 1
          );
          setActiveIndex(activeIdx);
        },
      },
    });

    tlRef.current = tl;

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
      }
    });

    return () => {
      if (tlRef.current) {
        tlRef.current.kill();
      }
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 767);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useSplitTextMaskAnimation([titleRef]);

  return (
    <div className="MapTopMainCont relative h-[400svh] max-sm:h-fit w-full bg-white">
      <div className="sticky top-0 left-0 w-full h-svh flex items-end">
        <div className="absolute top-[3%] left-0 z-20 max-sm:hidden flex w-full items-center justify-center capitalize">
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

        <div
          id="world-map"
          className="country-map"
          style={{
            width: "100%",
            height: "80vh",
            overflow: "hidden",
            userSelect: "none",
            backgroundColor: "#ffffff",
          }}
        >
          <ComposableMap
            projectionConfig={{ scale: 200 }}
            width={1000}
            height={600}
            style={{ width: "100%", height: "100%" }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const countryName = geo.properties.name;
                  const isBlue = blueCountryNames.has(countryName);

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: {
                          fill: isBlue ? "#00247D" : "#F5F5f5",
                          outline: "none",
                          transition: "fill 0.3s ease",
                        },
                        hover: {
                          fill: isBlue ? "#001a57" : "#E0E0E0",
                          outline: "none",
                          cursor: "pointer",
                        },
                        pressed: {
                          fill: "#D6D6DA",
                          outline: "none",
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>

            {/* {markers.map(({ name, coordinates }, i) => (
              <Marker key={name} coordinates={coordinates}>
                <circle r={4} fill="#0A1E37" stroke="#fff" strokeWidth={2} />
                <text
                  textAnchor="middle"
                  y={-10}
                  x={i === 3 ? 30 : 0}
                  style={{
                    fontFamily: "system-ui",
                    fill: "#2D2D2D",
                    fontWeight: "bold",
                    fontSize: 13,
                  }}
                >
                  {name}
                </text>
              </Marker>
            ))} */}
          </ComposableMap>
        </div>
      </div>
    </div>
  );
};

export default Map;
// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { FaInstagram } from "react-icons/fa";
// import { GrFacebookOption } from "react-icons/gr";

// gsap.registerPlugin(ScrollTrigger);

// export default function LeadershipSection() {
//   const sectionRef = useRef(null);
//   const headingRef = useRef(null);
//   const descRef = useRef(null);
//   const btnRef = useRef(null);
//   const cardRefs = useRef([]);
//   const overlayRefs = useRef([]);
//   const bioRefs = useRef([]);

//   const teamMembers = [
//     {
//       name: "Bimal Shah",
//       role: "Experience of more than 29 years in bulk drug manufacturing facility and handled production, quality as well as purchasing of the plant with a manufacturing capacity of 2400 MT Per Annum. Handling marketing of bulk drugs and chemicals.",
//       image: "/P1.png",
//     },
//     {
//       name: "Manish Shah",
//       role: "Experience of more than 31 years in Bulk Drug Manufacturing Facility and handled marketing quantity of 2400 MT per annum of Sulphamethoxazole, with a spread of 50 countries around the globe and locally to almost all the multinational companies. Visited more then 32 Countries and set up a successful base for the company all around the world. Currently managing Indosol Exports with sales to more then 40 countries Globally.",
//       image: "/P2.png",
//     },
//   ];

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // ── Left content: heading, desc, button stagger up ──────────
//       gsap.fromTo(
//         [headingRef.current, descRef.current, btnRef.current],
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           ease: "power3.out",
//           stagger: 0.15,
//           scrollTrigger: {
//             trigger: headingRef.current,
//             start: "top 85%",
//             toggleActions: "play none none none",
//             scrub: true,
//           },
//         },
//       );

//       // ── Team cards stagger up ────────────────────────────────────
//       gsap.fromTo(
//         cardRefs.current,
//         { opacity: 0, y: 60 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.75,
//           ease: "power3.out",
//           stagger: 0.18,
//           scrollTrigger: {
//             trigger: cardRefs.current[0],
//             start: "top 85%",
//             toggleActions: "play none none none",
//           },
//         },
//       );

//       // ── Hover lift on cards ──────────────────────────────────────
//       cardRefs.current.forEach((card, index) => {
//         const overlay = overlayRefs.current[index];
//         const bio = bioRefs.current[index];

//         const tl = gsap.timeline({ paused: true });

//         tl.to(card, {
//           // y: -8,
//           duration: 0.4,
//           ease: "power3.out",
//         })
//           .to(
//             overlay,
//             {
//               y: 0,
//               duration: 0.45,
//               ease: "power3.out",
//             },
//             0,
//           )
//           .to(
//             bio,
//             {
//               y: 0,
//               opacity: 1,
//               duration: 0.3,
//               ease: "power2.out",
//             },
//             0.15,
//           );

//         card.addEventListener("mouseenter", () => {
//           tl.play();
//         });

//         card.addEventListener("mouseleave", () => {
//           tl.reverse();
//         });
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full bg-[#f5f5f5] py-[6rem] overflow-hidden"
//     >
//       <div className="max-w-[90vw] mx-auto flex flex-col lg:flex-row items-start justify-between gap-[5rem]">
//         {/* Left Content */}
//         <div className="w-full lg:w-[30vw]">
//           <h1
//             ref={headingRef}
//             className="font-medium TextDarkGray"
//             style={{ opacity: 0 }}
//           >
//             Leadership Behind
//             <br />
//             Our Success
//           </h1>

//           <p
//             ref={descRef}
//             className="text-[#7b8494] mt-[2rem] max-w-[24rem]"
//             style={{ opacity: 0 }}
//           >
//            Meet the experienced professionals driving Indosol Exports' global reach, quality standards, and trusted partnerships across 40+ countries.
//           </p>

//           {/* <button
//             ref={btnRef}
//             className="mt-[5rem] flex items-center gap-[1rem] bg-white border border-[#d9dce3] rounded-full py-[0.7rem] pl-[2rem] pr-[2rem] hover:shadow-md duration-300"
//             style={{ opacity: 0 }}
//           >
//             <span className="text-[1rem] TextDarkGray">Learn More</span>
//           </button> */}
//         </div>

//         {/* Right Team Cards */}
//         <div className="w-full lg:w-[55vw] grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               ref={(el) => {
//                 if (el && !cardRefs.current.includes(el))
//                   cardRefs.current[index] = el;
//               }}
//               className="w-full cursor-pointer"
//               style={{ opacity: 0, willChange: "transform" }}
//             >
//               {/* Image Card */}
//               <div className="relative bg-white rounded-[1.4rem] aspect-square overflow-hidden border flex justify-center items-center bg-amber-200 border-[#ececec] group">
//                <img
//   src={member.image}
//   alt={member.name}
//  className={`

//   h-full
//   object-cover 
//   object-center  
//   grayscale
//   hover:grayscale-0
//   duration-500
//   relative
//   z-50
// `}
// />

//                 {/* Gradient Overlay */}
//                 {/* <div
//                   ref={(el) => (overlayRefs.current[index] = el)}
//                   className={`
//       absolute 
//       bottom-0 
//       left-0 
//        rounded-tl-xl
//        rounded-tr-xl
//       w-full 
//       h-[50%]
//       bg-gradient-to-r 
//       from-[#1145d6]
//       to-[#8b1dd4]
//       z-10
//     `}
//                   style={{
//                     transform: "translateY(100%)",
//                   }}
//                 /> */}

//                 {/* View Bio Button
//                 <button
//                   ref={(el) => (bioRefs.current[index] = el)}
//                   className={`
//       absolute
//       bottom-5
//       right-5
//       bg-white
//       text-[#1145d6]
//       rounded-full
//       px-4
//       py-2
//       text-[0.8rem]
//       font-medium
//       z-99
//     `}
//                   style={{
//                     opacity: 0,
//                     transform: "translateY(20px)",
//                   }}
//                 >
//                   View Full Bio
//                 </button> */}
//               </div>

//               {/* Content */}
//               <div className="flex items-start justify-between mt-[1.5rem]">
//                 <div>
//                   <h2 className="text-[1.3rem] font-medium TextDarkGray">
//                     {member.name}
//                   </h2>
//                   <p className="TextLiteGray font-light leading-tight mt-[0.4rem]">{member.role}</p>
//                 </div>

//                 {/* Social Icons */}
//                 {/* <div className="flex items-center gap-[0.8rem]">
//                   <a
//                     href="#"
//                     className="w-[2rem] h-[2rem] rounded-full border border-[#d7dbe3] flex items-center justify-center text-[0.9rem] text-[#5b6475] hover:bg-[#1450d2] hover:text-white duration-300"
//                   >
//                     <FaInstagram />
//                   </a>
//                   <a
//                     href="#"
//                     className="w-[2rem] h-[2rem] rounded-full border border-[#d7dbe3] flex items-center justify-center text-[0.9rem] text-[#5b6475] hover:bg-[#1450d2] hover:text-white duration-300"
//                   >
//                     <GrFacebookOption />
//                   </a>
//                 </div> */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPlus, FaTimes } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function LeadershipSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const cardRefs = useRef([]);
  const plusRefs = useRef([]);

  const modalRef = useRef(null);
  const modalContentRef = useRef(null);

  const [activeMember, setActiveMember] = useState(null);

  const teamMembers = [
    {
      name: "Bimal Shah",
      role: "Experience of more than 29 years in bulk drug manufacturing facility and handled production, quality as well as purchasing of the plant with a manufacturing capacity of 2400 MT Per Annum. Handling marketing of bulk drugs and chemicals.",
      image: "/P1.png",
      Des:'(Director, Operations & Quality Assurance)'
    },
    {
      name: "Manish Shah",
      role: "Experience of more than 31 years in Bulk Drug Manufacturing Facility and handled marketing quantity of 2400 MT per annum of Sulphamethoxazole, with a spread of 50 countries around the globe and locally to almost all the multinational companies. Visited more then 32 Countries and set up a successful base for the company all around the world. Currently managing Indosol Exports with sales to more then 40 countries Globally.",
      image: "/P2.png",
      Des:'(Director, Global Sales & Business Development)'
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Left content: heading, desc, button stagger up ──────────
      gsap.fromTo(
        [headingRef.current, descRef.current, btnRef.current],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
            scrub: true,
          },
        },
      );

      // ── Team cards stagger up ────────────────────────────────────
      gsap.fromTo(
        cardRefs.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.18,
          scrollTrigger: {
            trigger: cardRefs.current[0],
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // ── Hover: plus icon slides in from bottom-right ─────────────
      cardRefs.current.forEach((card, index) => {
        const plus = plusRefs.current[index];
        if (!card || !plus) return;

        const tl = gsap.timeline({ paused: true });

        tl.to(plus, {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.7)",
        });

        card.addEventListener("mouseenter", () => tl.play());
        card.addEventListener("mouseleave", () => tl.reverse());
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ── Modal open/close animation ──────────────────────────────────
  useEffect(() => {
    if (!modalRef.current) return;

    if (activeMember) {
      gsap.set(modalRef.current, { display: "flex" });
      gsap.fromTo(
        modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" },
      );
      gsap.fromTo(
        modalContentRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power3.out" },
      );
    }
  }, [activeMember]);

  const closeModal = () => {
    gsap.to(modalContentRef.current, {
      opacity: 0,
      y: 40,
      scale: 0.95,
      duration: 0.25,
      ease: "power2.in",
    });
    gsap.to(modalRef.current, {
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(modalRef.current, { display: "none" });
        setActiveMember(null);
      },
    });
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#f5f5f5] py-[6rem] overflow-hidden relative"
    >
      <div className="max-w-[90vw] mx-auto flex flex-col lg:flex-row items-start justify-between gap-[5rem]">
        {/* Left Content */}
        <div className="w-full lg:w-[30vw]">
          <h1
            ref={headingRef}
            className="font-medium TextDarkGray"
            style={{ opacity: 0 }}
          >
            Leadership Behind
            <br />
            Our Success
          </h1>

          <p
            ref={descRef}
            className="text-[#7b8494] mt-[2rem] max-w-[24rem]"
            style={{ opacity: 0 }}
          >
            Meet the experienced professionals driving Indosol Exports'
            global reach, quality standards, and trusted partnerships across
            40+ countries.
          </p>
        </div>

        {/* Right Team Cards */}
        <div className="w-full lg:w-[55vw] grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el && !cardRefs.current.includes(el))
                  cardRefs.current[index] = el;
              }}
              className="w-full cursor-pointer"
              style={{ opacity: 0, willChange: "transform" }}
            >
              {/* Image Card */}
              <div className="relative bg-white rounded-[1.4rem] aspect-square overflow-hidden border flex justify-center items-center bg-amber-200 border-[#ececec] group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-top grayscale hover:grayscale-0 duration-500 relative z-10"
                />

                {/* + Icon Button (bottom-right) */}
                <button
                  ref={(el) => (plusRefs.current[index] = el)}
                  onClick={() => setActiveMember(member)}
                  aria-label={`View bio of ${member.name}`}
                  className={`
                    absolute
                    bottom-5
                    right-5
                    w-[3rem]
                    h-[3rem]
                    rounded-full
                    bg-white
                    text-[#0D40A2]
                    flex
                    items-center
                    justify-center
                    text-[1.1rem]
                    shadow-lg
                    z-20
                    hover:bg-[#0D40A2]
                    hover:text-white
                    duration-150
                  `}
                  // style={{
                  //   opacity: 0,
                  //   transform: "translate(20px, 20px) scale(0.5)",
                  // }}
                >
                  <FaPlus />
                </button>
              </div>

              {/* Content */}
              <div className="flex items-start justify-between mt-[1.5rem]">
                <div>
                  <h2 className="text-[1.3rem] font-medium TextDarkGray">
                    {member.name}
                  </h2>
                  {/* <p className="TextLiteGray font-light leading-tight mt-[0.4rem]">
                    {member.role}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bio Popup Modal ────────────────────────────────────────── */}
      <div
        ref={modalRef}
        onClick={closeModal}
        className="fixed inset-0 z-[999] bg-black/60 items-center justify-center px-[1.5rem]"
        style={{ display: "none", opacity: 0 }}
      >
        <div
          ref={modalContentRef}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white rounded-[1.4rem] max-w-[40rem] w-full max-h-[85vh] overflow-y-auto p-[2.5rem]"
        >
          <button
            onClick={closeModal}
            aria-label="Close"
            className="absolute top-[1.2rem] right-[1.2rem] w-[2.2rem] h-[2.2rem] rounded-full bg-[#f0f1f4] flex items-center justify-center text-[#5b6475] hover:bg-[#1145d6] hover:text-white duration-300"
          >
            <FaTimes />
          </button>

          {activeMember && (
            <>
              <div className="w-[5rem] h-[5rem]  overflow-hidden mb-[1.5rem] border border-[#ececec]">
                <img
                  src={activeMember.image}
                  alt={activeMember.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h2 className="text-[1.6rem] font-medium TextDarkGray">
                {activeMember.name}
              </h2>
              <span className="text-[#202020]/70 mt-[0.5rem] leading-relaxed">
                {activeMember.Des}
              </span>
              <p className="text-[#7b8494] mt-[1rem] leading-relaxed">
                {activeMember.role}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

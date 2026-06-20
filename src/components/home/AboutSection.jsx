"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GrStatusGood } from "react-icons/gr";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdOutlineStarPurple500 } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ─────────────────────────────────────────────
      // TEXT SCROLL COLOR ANIMATION
      // ─────────────────────────────────────────────
      const words = headingRef.current.querySelectorAll(".heading-word");

      gsap.fromTo(
        words,
        {
          
        },
        {
          opacity: 1,
          color: (i, target) =>
            target.classList.contains("blue-word") ? "#0D40A2" : "#6B7280",

          stagger: 0.06,
          ease: "power3.out",

          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            end: "top 30%",
            scrub: 1,
          },
        },
      );

      // ─────────────────────────────────────────────
      // CARDS ENTRANCE ANIMATION
      // ─────────────────────────────────────────────
      const cards = [card1Ref.current, card2Ref.current, card3Ref.current];

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 55,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.15,

          scrollTrigger: {
            trigger: card1Ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // ─────────────────────────────────────────────
      // CARD HOVER EFFECT
      // ─────────────────────────────────────────────
      // cards.forEach((card) => {
      //   const icon = card.querySelector(".card-icon");

      //   const handleEnter = () => {
      //     gsap.to(card, {
      //       boxShadow:
      //         "0 24px 48px rgba(29,78,216,0.12), 0 4px 12px rgba(0,0,0,0.06)",
      //       borderColor: "rgba(29,78,216,0.25)",
      //       duration: 0.35,
      //       ease: "power2.out",
      //     });

      //     gsap.to(icon, {
      //       rotation: 25,
      //       scale: 1.1,
      //       duration: 0.4,
      //       ease: "power2.out",
      //       transformOrigin: "center center",
      //     });
      //   };

      //   const handleLeave = () => {
      //     gsap.to(card, {
      //       boxShadow: "0 0 0 rgba(0,0,0,0)",
      //       borderColor: "#ececec",
      //       duration: 0.2,
      //       ease: "none",
      //     });

      //     gsap.to(icon, {
      //       rotation: 0,
      //       scale: 1,
      //       duration: 0.4,
      //       ease: "power2.out",
      //     });
      //   };

      //   card.addEventListener("mouseenter", handleEnter);
      //   card.addEventListener("mouseleave", handleLeave);
      // });

      // ─────────────────────────────────────────────
      // CARD HOVER EFFECT
      // ─────────────────────────────────────────────
      cards.forEach((card) => {
        const iconWrapper = card.querySelector(".icon-wrapper");
        const icon = card.querySelector(".card-icon");
        const title = card.querySelector(".card-title");
        const desc = card.querySelector(".card-desc");

        const handleEnter = () => {
          gsap.to(card, {
            backgroundColor: "#0D40A2",
            borderColor: "#0D40A2",
            duration: 0.45,
            ease: "power2.out",
          });

          gsap.to(iconWrapper, {
            backgroundColor: "#f5f5f5",
            duration: 0.45,
            ease: "power2.out",
          });

          gsap.to(icon, {
            rotation: 25,
            scale: 1.1,
            duration: 0.45,
            ease: "power2.out",
            transformOrigin: "center center",
          });

          gsap.to(title, {
            color: "#ffffff",
            duration: 0.35,
          });

          gsap.to(desc, {
            color: "#dbe4ff",
            duration: 0.35,
          });
        };

        const handleLeave = () => {
          gsap.to(card, {
            backgroundColor: "#ffffff",
            borderColor: "#ececec",
            duration: 0.35,
            ease: "power2.out",
          });

          gsap.to(iconWrapper, {
            backgroundColor: "#ffffff",
            duration: 0.35,
          });

          gsap.to(icon, {
            rotation: 0,
            scale: 1,
            duration: 0.35,
            ease: "power2.out",
          });

          gsap.to(title, {
            color: "#0D40A2",
            duration: 0.25,
          });

          gsap.to(desc, {
            color: "#6B7280",
            duration: 0.25,
          });
        };

        card.addEventListener("mouseenter", handleEnter);
        card.addEventListener("mouseleave", handleLeave);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-[15vh] bg-[#f5f5f5] flex justify-center items-center overflow-hidden"
    >
      <div className="w-[90vw] mx-auto">
        {/* ───────────────────────────── */}
        {/* TOP CONTENT */}
        {/* ───────────────────────────── */}
        <div className="w-full flex justify-center">
          <div ref={headingRef} className="w-full max-w-[52rem] text-center">
            <h2 className="flex flex-wrap justify-center gap-x-2 font-light">
              {[
                "Indosol",
                "Exports",
                "is",
                "an",
                "India-based",
                "pharmaceutical",
                "export",
                "company",
                "specializing",
                "in",
                "Active",

                "Pharmaceutical",
                "Ingredients",
                "(APIs),",

                "excipients,",
                "and",
                "packaging",
                "materials.",

                "We",
                "partner",
                "with",
                "manufacturers,",
                "distributors,",
                "and",
                "healthcare",
                "companies",
                "across",
                "the",
                "globe,",

                "ensuring",
                "every",
                "shipment",
                "meets",
                "international",
                "quality",
                "and",
                "regulatory",
                "standards.",
              ].map((word, index) => (
                <span
                  key={index}
                  className={` text-[#ffffff]  relative z-90
                    ${
                      word === "Active" ||
                      word === "Pharmaceutical" ||
                      word === "Ingredients" ||
                      word === "(APIs),"
                        ? "italic "
                        : ""
                    }`}
                >
                  {word}

                  <span
                  key={index}
                  className={`heading-word text-[#b0b0b0] absolute top-0 left-0 z-99
                    ${
                      word === "Active" ||
                      word === "Pharmaceutical" ||
                      word === "Ingredients" ||
                      word === "(APIs),"
                        ? "italic blue-word"
                        : ""
                    }`}
                >
                  {word}
                </span>
                </span>
              ))}
            </h2>
          </div>
        </div>

        {/* ───────────────────────────── */}
        {/* CARDS */}
        {/* ───────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem] mt-[5rem]">
          {/* CARD 1 */}
          <div
            ref={card1Ref}
            className="bg-white rounded-[1.2rem] p-[2.2rem] border border-[#ececec] cursor-pointer"
            style={{
              opacity: 0,
              willChange: "transform",
              boxShadow: "0 0 0 rgba(0,0,0,0)",
            }}
          >
            <div className="icon-wrapper w-[3rem] h-[3rem] flex p-1 items-center justify-center bg-[#f3f3f3] rounded-md">
             <MdOutlineStarPurple500 className="text-[#ED3A1C] text-[1.5rem] " />
            </div>

           <h3 className="card-title text-[1.8rem] font-semibold text-[#0D40A2] mt-[2rem]">
              25+ Years Experience
            </h3>

            <p className="card-desc text-[1.1rem] leading-[2rem] text-[#6B7280] mt-[1rem]">
              Extensive experience exceeding twenty five  in global commerce and
              acquiring high-quality healthcare items.
            </p>
          </div>

          {/* CARD 2 */}
          <div
            ref={card2Ref}
            className="bg-white rounded-[1.2rem] p-[2.2rem] border border-[#ececec] cursor-pointer"
            style={{
              opacity: 0,
              willChange: "transform",
              boxShadow: "0 0 0 rgba(0,0,0,0)",
            }}
          >
            <div className="icon-wrapper w-[3rem] h-[3rem] flex p-1 items-center justify-center bg-[#f3f3f3] rounded-md">
              < AiOutlineGlobal className="text-[#ED3A1C] text-[1.5rem] " />
            </div>

            <h3 className="card-title text-[1.8rem] font-semibold text-[#0D40A2] mt-[2rem]">
              Global Export Network
            </h3>

            <p className="card-desc text-[1.1rem] leading-[2rem] text-[#6B7280] mt-[1rem]">
              Providing services to governed and partly governed markets in
              Asia, Africa, the Middle East, and additional regions.
            </p>
          </div>

          {/* CARD 3 */}
          <div
            ref={card3Ref}
            className="bg-white rounded-[1.2rem] p-[2.2rem] border border-[#ececec] cursor-pointer"
            style={{
              opacity: 0,
              willChange: "transform",
              boxShadow: "0 0 0 rgba(0,0,0,0)",
            }}
          >
            <div className="icon-wrapper w-[3rem] h-[3rem] flex p-1 items-center justify-center bg-[#f3f3f3] rounded-md">
              <GrStatusGood   className="text-[#ED3A1C] text-[1.5rem] " />
            </div>

            <h3 className="card-title text-[1.8rem] font-semibold text-[#0D40A2] mt-[2rem]">
              Quality Certified
            </h3>

            <p className="card-desc text-[1.1rem] leading-[2rem] text-[#6B7280] mt-[1rem]">
              Products are sourced exclusively from WHO/GMP compliant manufacturers, supplied through us — an ISO certified, FSSAI approved, and 3-Star Export House recognised by the Government of India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const contentRefs = useRef([]);
  const innerRefs = useRef([]);

  // Scroll animation refs
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const btnRef = useRef(null);
  const faqRowRefs = useRef([]);

  const faqData = [
    {
      question:
        "What types of pharmaceutical products does Indosol Exports supply?",
      answer:
        "We supply a comprehensive range of pharmaceutical products including Active Pharmaceutical Ingredients (APIs), excipients, and pharmaceutical packaging materials. All products are sourced from reputed and certified Indian manufacturers.",
    },
    {
      question: "Who is JHNH and what is Indosol's relationship with them?",
      answer:
        "JH Nanhang Life Sciences Co., Ltd. (JHNH) is a leading China-based manufacturer of PVP-based pharmaceutical excipients. Effective 1 December 2025, Indosol Exports has been officially appointed as JHNH's Authorised Distributor in India — covering marketing, domestic inventory management, sale, and distribution of their products across the country. Through this partnership, Indosol supplies JHNH's complete excipient range including Povidone, Crospovidone, and Copovidone) directly to large and mid-sized pharmaceutical manufacturers across India.",
    },
    {
      question: "Which countries does Indosol Exports supply to?",
      answer:
        "We export to over 40 countries across Africa, Asia, Latin America, the Middle East, and other global markets. With more than two decades of experience in international pharmaceutical trade, we have built a strong and trusted global clientele.",
    },
    {
      question: "How does Indosol Exports ensure the quality of its products?",
      answer:
        "We work exclusively with manufacturers who comply with international quality standards. Our team conducts factory visits, reviews regulatory documentation, and performs thorough quality checks before procurement to ensure every shipment meets the specifications and regulatory requirements of the destination country.",
    },
    {
      question:
        "Can Indosol Exports assist with documentation and regulatory requirements?",
      answer:
        "Yes. We provide complete export documentation support, including Certificates of Analysis (CoA), Certificates of Origin, GMP certificates, and other regulatory paperwork as required by the buyer’s country. Our experienced team ensures smooth customs clearance and compliance throughout the process.",
    },
    {
      question:
        "Can I source JHNH excipients — Povidone, Crospovidone, and Copovidone — through Indosol Exports?",
      answer:
        "Yes. Effective December 2025, Indosol Exports is the authorised distributor of J H Nanhang (JHNH) products — Povidone, Crospovidone, and Copovidone — for Pan India supply. These high-quality excipients are widely used in the Pharmaceutical, Food, and Cosmetic industries. This strategic partnership strengthens our domestic presence and service capabilities while complementing our global export operations.",
    },
  ];

  // ── Accordion GSAP logic ─────────────────────────────────────────
  useEffect(() => {
    contentRefs.current.forEach((content, index) => {
      const inner = innerRefs.current[index];
      if (index === activeIndex) {
        gsap.to(content, {
          height: inner.offsetHeight,
          duration: 0.5,
          ease: "power3.inOut",
        });
      } else {
        gsap.to(content, {
          height: 0,
          duration: 0.5,
          ease: "power3.inOut",
        });
      }
    });
  }, [activeIndex]);

  // ── Scroll-triggered entrance animations ────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading rises up
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // Button rises up with slight delay
      gsap.fromTo(
        btnRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // FAQ rows stagger up one by one
      gsap.fromTo(
        faqRowRefs.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: faqRowRefs.current[0],
            start: "top 85%",
            toggleActions: "play none none none",
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#FFFFFF] pt-20 pb-20 ">
      <div className="grid lg:grid-cols-[35%_65%] h-fit">
        {/* LEFT SIDE */}
        <div className="lg:sticky lg:top-0 flex items-start justify-center ">
          <div className="w-full px-8 lg:px-8">
            <h1>
              Frequently Asked
              <br />
              Questions
            </h1>

            <p
              className={`
        text-[#6f7280]
        leading-relaxed
        mt-3
        sm:mt-10
        max-w-[420px]
      `}
            >
              Answers to common questions about our products, quality standards,
              and pharmaceutical supply solutions.
            </p>

            <Link href={`/contact`} target="blank">
              <button className="flex items-center sm:my-5 gap-[1rem] mt-10 border bg-white border-[#d9dce3] rounded-full overflow-hidden  py-[0.4rem]  pl-[1rem] pr-[1rem] duration-300 hover:scale-[1.1] group">
                <span className="text-[1rem] TextBlue  transition-all duration-300 group-hover:-translate-x-2 group-hover:mr-[2rem]">
                  Let's Talk
                </span>

                <div className="w-[2rem] h-[2rem] right-0 absolute rounded-full BgBlue text-white flex items-center justify-center text-[0.9rem] transition-all duration-300 translate-x-10 opacity-0 group-hover:translate-x-[-0.3rem] group-hover:opacity-100">
                  <FaArrowRight />
                </div>
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="px-8 lg:px-16  ">
          <div className="">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-[#dddddd]">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-start justify-between gap-6 pt-10 pb-5 text-left"
                >
                  <h3
                    className={`
                  text-[#060622]
                  font-medium
                  text-[1.4rem]
                  md:text-[1.8rem]
                  leading-[1.2]
                  max-w-[85%]
                `}
                  >
                    {item.question}
                  </h3>

                  <div
                    className={`
                  flex-shrink-0
                  w-12 h-12
                  rounded-lg
                  BgBlue
                  text-white
                  flex items-center justify-center
                  text-xl
                  transition-transform duration-300
                `}
                  >
                    {activeIndex === index ? "−" : "+"}
                  </div>
                </button>

                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="overflow-hidden h-0"
                >
                  <div
                    ref={(el) => (innerRefs.current[index] = el)}
                    className="pb-10 pr-16"
                  >
                    <p
                      className={`
                    text-[#6f7280]
                    text-lg
                    leading-relaxed
                    max-w-[700px]
                  `}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

//  <section
//       ref={sectionRef}
//       className="w-full bg-[#ffffff] py-[6rem] overflow-hidden"
//     >
//       <div className="w-[90vw] mx-auto">
//         {/* Top Header */}
//         <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[3rem] mb-[4rem]">
//           <div ref={headingRef} style={{ opacity: 0 }}>
//             <h1 className="text-[3.5rem] leading-[4rem] font-medium TextDarkGray">
//               Frequently Asked
//               <br />
//               Questions
//             </h1>
//           </div>

//           <Link href={`/contact`}>
//             <button
//               ref={btnRef}
//               className="flex items-center gap-[1rem] border border-[#d9dce3] rounded-full overflow-hidden bg-white py-[0.4rem]  pl-[1rem] pr-[1rem] duration-300 hover:scale-[1.1] group"
//               style={{ opacity: 0 }}
//             >
//               <span className="text-[1rem] TextDarkGray transition-all duration-300 group-hover:-translate-x-2 group-hover:mr-[2rem]">
//                 Get In Touch
//               </span>

//               <div className="w-[2rem] h-[2rem] right-0 absolute rounded-full BgBlue flex items-center justify-center text-white text-[0.9rem] transition-all duration-300 translate-x-10 opacity-0 group-hover:translate-x-[-0.3rem] group-hover:opacity-100 group-hover:rotate-45">
//                 <FaArrowRight />
//               </div>
//             </button>
//           </Link>
//         </div>

//         {/* FAQ Container */}
//         <div className="border-t border-[#d9dce3]">
//           {faqData.map((item, index) => (
//             <div
//               key={index}
//               ref={(el) => {
//                 if (el && !faqRowRefs.current.includes(el))
//                   faqRowRefs.current.push(el);
//               }}
//               className={`relative border-b border-[#d9dce3] overflow-hidden ${
//                 activeIndex === index ? "bg-[#f7f7f7]" : "bg-transparent"
//               }`}
//               style={{ opacity: 0, willChange: "transform" }}
//             >
//               {/* Animated Top Blue Border */}
//               <div className="absolute top-0 left-0 w-full h-[0.18rem]">
//                 <div
//                   className={`h-full BgBlue transition-all duration-500 ease-in-out ${
//                     activeIndex === index ? "w-full" : "w-0"
//                   }`}
//                 />
//               </div>

//               {/* Question */}
//               <button
//                 onClick={() => toggleAccordion(index)}
//                 className="w-full flex items-center justify-between gap-[2rem] py-[2rem] px-[2rem] text-left"
//               >
//                 <h3
//                   className={` font-medium duration-300 ${
//                     activeIndex === index ? "TextBlue" : "TextDarkGray"
//                   }`}
//                 >
//                   {item.question}
//                 </h3>

//                 <span
//                   className={`text-[2rem] leading-none duration-300 ${
//                     activeIndex === index
//                       ? "text-[#ff4d4d] rotate-180"
//                       : "text-[#1450d2]"
//                   }`}
//                 >
//                   {activeIndex === index ? "−" : "+"}
//                 </span>
//               </button>

//               {/* Animated Content */}
//               <div
//                 ref={(el) => (contentRefs.current[index] = el)}
//                 className="h-0 overflow-hidden"
//               >
//                 <div
//                   ref={(el) => (innerRefs.current[index] = el)}
//                   className="px-[2rem] pb-[2rem]"
//                 >
//                   <p className=" TextLiteGray max-w-[55rem]">{item.answer}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>

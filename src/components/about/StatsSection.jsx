"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function StatsSection() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const statsData = [
    {
      number: "25+",
      title: "Years of Experience",
      description:
        "Over two decades of expertise in international pharmaceutical trade, sourcing and supplying high-quality APIs, excipients, and packaging materials worldwide.",
    },
    {
      number: "45+",
      title: "Countries",
      description:
        "Supplying to over 45+ countries across Asia, Africa, the Middle East, Latin America, and beyond — backed by strong manufacturer relationships and reliable logistics.",
    },
    {
      number: "3",
      title: "Certifications",
      certifications: [
        {
          description: "ISO 9001:2015 Standards",
          link: `/certificates/IE ISO 9001-2015 - 02.04.2028.pdf`,
        },
        {
          description: "COA & MSDS Availability",
          link: `/certificates/IE FSSAI License Valid 04-09-2027.pdf`,
        },
        {
          description: "International Export Compliance",
          link: `/certificates/IE Export House Certificate 3 star Valid 31-03-2028.pdf`,
        },
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards — staggered fade + slide up
      gsap.from(cardRefs.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
        y: 50,
        opacity: 0,
        duration: 0.75,
        stagger: 0.18,
        ease: "power3.out",
      });

      // Animated number count-up for each stat
      cardRefs.current.forEach((card) => {
        if (!card) return;
        const numEl = card.querySelector("[data-count]");
        if (!numEl) return;

        const raw = numEl.getAttribute("data-count"); // e.g. "20", "30", "4"
        const suffix = numEl.getAttribute("data-suffix") || ""; // e.g. "+"

        const obj = { val: 0 };
        gsap.to(obj, {
          val: parseFloat(raw),
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            once: true,
          },
          onUpdate() {
            numEl.textContent = Math.round(obj.val) + suffix;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#ffffff] py-[2vw] pb-[8vw] overflow-hidden">
      <div className="w-[90vw] max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 border-l border-r border-[#dddddd]">
          {statsData.map((item, index) => {
            // Split number into numeric part and suffix ("+", "%", etc.)
            const match = item.number.match(/^(\d+)(\D*)$/);
            const numericPart = match ? match[1] : item.number;
            const suffixPart = match ? match[2] : "";

            const isCertificationsCard = Boolean(item.certifications);

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="px-[3vw] py-[1rem] text-center border-b md:border-b-0 md:border-r border-[#dddddd] last:border-r-0"
              >
                {/* Animated Number */}
                <h1
                  data-count={numericPart}
                  data-suffix={suffixPart}
                  className="text-[4.5rem] leading-[4.5rem] TextBlue font-semibold"
                >
                  0{suffixPart}
                </h1>

                {/* Title */}
                <h2 className="TextDarkGray mt-5">{item.title}</h2>

                {isCertificationsCard ? (
                  // Certifications list — each with its own description + link
                  <ul className="mt-[1.5rem] max-w-[22rem] mx-auto space-y-3">
                    {item.certifications.map((cert, certIndex) => (
                      <li key={certIndex} className="flex  justify-center gap-2 items-center">
                        <span className="TextLiteGray">{cert.description}</span>
                        <Link target="_blank" href={cert.link}>
                          <span className="TextBlue font-medium mt-1 hover:underline tracking-tight select-none cursor-pointer">
                            Learn More
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  // Regular stat card — single description, no link
                  <p className="TextLiteGray mt-[1.5rem] max-w-[22rem] mx-auto">
                    {item.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
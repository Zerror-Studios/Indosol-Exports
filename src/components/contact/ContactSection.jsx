"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Top Content Animation
      gsap.from(".contact-top", {
        y: "6rem",
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-top",
          start: "top 85%",
          toggleActions: "play none none reset",
        },
      });

      // Form Animation
      gsap.from(".contact-form", {
        x: "-8vw",
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 85%",
          toggleActions: "play none none reset",
        },
      });

      // Right Content Animation
      gsap.from(".contact-right", {
        x: "8vw",
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-right",
          start: "top 85%",
          toggleActions: "play none none reset",
        },
      });

      // Inputs Animation
      gsap.from(".input-field", {
        y: "3rem",
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });

      // Image Zoom Animation
      gsap.from(".contact-image", {
        scale: 1.2,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-image",
          start: "top 85%",
          toggleActions: "play none none reset",
        },
      });

      // Button Hover Animation
      const button = document.querySelector(".submit-btn");
      const arrow = document.querySelector(".submit-arrow");

      if (button && arrow) {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, {
            paddingRight: "1.4rem",
            duration: 0.3,
            ease: "power3.out",
          });

          gsap.to(arrow, {
            x: "0.4rem",
            rotate: -45,
            duration: 0.3,
            ease: "power3.out",
          });
        });

        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            paddingRight: "0.5rem",
            duration: 0.3,
            ease: "power3.out",
          });

          gsap.to(arrow, {
            x: 0,
            rotate: 0,
            duration: 0.3,
            ease: "power3.out",
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#f4f4f4] py-[6rem] pt-[10vw] overflow-hidden max-sm:pt-[15vh] relative"
    >
      <div className="w-full h-[10vh] bg-gradient-to-b absolute top-0 left-0 from-black/30 to-transparent"></div>
      <div className="w-[90vw] max-w-[90rem] mx-auto">
        {/* Top Content */}
        <div className="contact-top w-full  border-[#dddddd] pb-[4rem]">
          {/* <div className="flex items-center gap-[0.6rem] mb-[1.2rem]">
            <div className="w-[0.4rem] h-[0.4rem] bg-[#1846b3]" />

            <p className="text-[0.95rem] font-[500] text-[#374151]">
              Contact us
            </p>
          </div> */}

          <h1 className="TextDarkGray max-w-[42rem]">
            Trusted Export Support Starts Here
          </h1>

          <p className="leading-[2rem] TextLiteGray max-w-[48rem] mt-[1.8rem]">
            Connect with our team for reliable pharmaceutical sourcing,
            regulatory support, and seamless global export solutions tailored to
            your business needs.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Form */}
          <div className="contact-form pt-[4rem] pr-[3vw]">
            <form className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.6rem]">
                {/* First Name */}
                <div className="input-field w-full">
                  <label className="block text-[1rem] font-[500] TextBlue mb-[0.8rem] flex gap-2">
                    First Name
                    <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full h-[3.8rem] bg-white border border-[#e5e7eb] rounded-[0.6rem] px-[1rem] text-[1rem] outline-none transition-all duration-300 focus:border-[#1846b3]"
                  />
                </div>

                {/* Last Name */}
                <div className="input-field w-full">
                  <label className="block text-[1rem] font-[500] TextBlue mb-[0.8rem]">
                    Last Name

                  </label>

                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full h-[3.8rem] bg-white border border-[#e5e7eb] rounded-[0.6rem] px-[1rem] text-[1rem] outline-none transition-all duration-300 focus:border-[#1846b3]"
                  />
                </div>

                {/* Number */}
                <div className="input-field w-full">
                  <label className="block text-[1rem] font-[500] TextBlue mb-[0.8rem] flex gap-2">
                    Phone Number
                    <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="(xxx) xxx xxxx"
                    className="w-full h-[3.8rem] bg-white border border-[#e5e7eb] rounded-[0.6rem] px-[1rem] text-[1rem] outline-none transition-all duration-300 focus:border-[#1846b3]"
                  />
                </div>

                {/* Email */}
                <div className="input-field w-full">
                  <label className="block text-[1rem] font-[500] TextBlue mb-[0.8rem] flex gap-2">
                    Email
                    <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    placeholder="support@example.com"
                    className="w-full h-[3.8rem] bg-white border border-[#e5e7eb] rounded-[0.6rem] px-[1rem] text-[1rem] outline-none transition-all duration-300 focus:border-[#1846b3]"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="input-field mt-[1.8rem]">
                <label className="block text-[1rem] font-[500] TextBlue mb-[0.8rem] flex gap-2">
                  Message
                  <span className="text-red-500">*</span>
                </label>

                <textarea
                  placeholder="Type Message..."
                  className="w-full h-[12rem] bg-white border border-[#e5e7eb] rounded-[0.6rem] p-[1rem] text-[1rem] outline-none resize-none transition-all duration-300 focus:border-[#1846b3]"
                />
              </div>

              {/* Bottom Text */}
              <div className="input-field text-[0.8rem] leading-[0.9rem] TextLiteGray mt-[1.8rem] max-w-[36rem]">
                By submitting this form, you agree to our <Link href={`/privacy-policy`}> <span className="TextBlue underline"> Privacy Policy</span> </Link> and to
                share your interaction data to improve the quality and relevance
                of this service.
              
                <button className="flex items-center sm:my-5 gap-[1rem] py-[0.8rem] mt-10  BgBlue  rounded-full overflow-hidden  py-[0.4rem]  pl-[1rem] pr-[1rem] duration-300 hover:scale-[1.1] group">
                <span className="text-[1rem] text-white  transition-all duration-300 group-hover:-translate-x-2 group-hover:mr-[2rem]">
                  Submit Message
                </span>

                <div className="w-[2rem] h-[2rem] right-0 absolute rounded-full TextBlue bg-white flex items-center justify-center text-[0.9rem] transition-all duration-300 translate-x-10 opacity-0 group-hover:translate-x-[-0.3rem] group-hover:opacity-100">
                  <FaArrowRight />
                </div>
              </button>
              </div>

              {/* Button */}
            </form>
          </div>

          {/* Right Content */}
          <div className="contact-right pt-[4rem] border-l border-[#dddddd] pl-[3vw]">
            {/* Image */}
            <div className="w-full overflow-hidden rounded-[1rem]">
              <img
                src="/images/contact/CUS.jpg"
                alt="contact"
                className="contact-image w-full h-[26rem] object-cover"
              />
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2.5rem] mt-[2.5rem]">
              {/* Address */}
              <div className="input-field">
                <h4 className="text-[1.2rem] font-[700] TextBlue mb-[1rem]">
                  Address
                </h4>

                <p className="text-[1rem] leading-[2rem] TextLiteGray">
                  804, 8th Floor, Arcadia Building, 195 NCPA Marg, Nariman
                  Point,Mumbai - 400021, India
                </p>

                <h4 className="text-[1.2rem] font-[700] TextBlue mt-[2rem] mb-[1rem]">
                  Email
                </h4>

                <div className="flex flex-col gap-[0.6rem]">
                  {[
                    "admin@indosolexports.in",
                    "bimal@iscpl.com",
                    "manish0307@gmail.com",
                  ].map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="text-[1rem] TextLiteGray hover:underline"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              {/* Phone */}
              <div className="input-field">
                <h4 className="text-[1.2rem] font-[700] TextBlue mb-[1rem]">
                  Phone
                </h4>

                <div className="flex flex-col gap-[0.8rem]">
                  <p className="text-[1rem] TextLiteGray">
                    +91-22-2287 8889/ 90/ 91
                  </p>

                  <p className="text-[1rem] TextLiteGray">+ 91 98193 88509</p>

                  <p className="text-[1rem] TextLiteGray">+ 91 98211 64770</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

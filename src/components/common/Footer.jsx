"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full bg-[#001B57] text-white pt-14 md:pt-20 pb-8 px-6 md:px-[5vw]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10 pb-10 text-center md:text-left">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="w-fit h-fit bg-white pl-2 py-1">
              <img
                src="/icons/logo.png"
                alt="Indosol Exports"
                className="w-36 md:w-[150px] object-contain "
              />
            </div>

            <h3 className="text-2xl md:text-[2.2rem] md:leading-[2.8rem] font-medium">
              Trusted Quality
              <br />
              Pharmaceutical Exporter
            </h3>
          </div>

          {/* Social */}
          {/* <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#001B57] transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#001B57] transition"
            >
              <FaFacebookF />
            </a>
          </div> */}
        </div>

        {/* Company */}
        <div className="md:border-l md:border-white/10 md:pl-[3vw]">
          <h3 className="text-xl mb-5 font-medium">Company</h3>

          <ul className="space-y-3 text-white/70">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>

            <li>
              <Link href="/products" className="hover:text-white transition">
                Products
              </Link>
            </li>

            <li>
              <Link href="/imports" className="hover:text-white transition">
                Imports
              </Link>
            </li>

            <li>
              <Link href="/exports" className="hover:text-white transition">
                Exports
              </Link>
            </li>
          </ul>
        </div>

        {/* Utility */}
        <div className="md:border-l md:border-white/10 md:pl-[3vw]">
          <h3 className="text-xl mb-5 font-medium">Utility</h3>

          <ul className="space-y-3 text-white/70">
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>

            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>
            </li>

            {/* <li>
              <Link
                href="/terms-condition"
                className="hover:text-white transition"
              >
                Terms & Conditions
              </Link>
            </li> */}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:border-l md:border-white/10 md:pl-[3vw]">
          <h3 className="text-xl mb-5 font-medium">Contact</h3>

          <div className="space-y-6 text-white/70 text-base">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <FaPhoneAlt className="text-white mt-1" />

              <div className="flex flex-col gap-1">
                <a
                  href="tel:+912222878889"
                  className="hover:text-white transition"
                >
                  +91-22-2287 8889 / 90 / 91
                </a>

                <a
                  href="tel:+919819388509"
                  className="hover:text-white transition"
                >
                  +91 98193 88509
                </a>

                <a
                  href="tel:+919821164770"
                  className="hover:text-white transition"
                >
                  +91 98211 64770
                </a>
              </div>
            </div>

            <div className="flex gap-5 max-sm:flex-col w-fit h-fit  relative max-sm:mx-auto">
              <MdEmail className="text-white mt-1 max-sm:mx-auto" />
              <div className="flex flex-col ">
                {[
                  "bimal@iscpl.com",
                  "mshah0307@gmail.com",
                  "admin@indosolexports.in",
                ].map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="text-[1rem]  hover:text-white"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <FaMapMarkerAlt className="text-white mt-1" />

              <p className="leading-7">
                804, 8th Floor, Arcadia Building,
                <br />
                195 NCPA Marg, Nariman Point,
                <br />
                Mumbai - 400021, India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="pt-6 flex justify-between items-center max-sm:flex-col text-sm md:text-base text-white/60">
        © 2026 Indosol Exports. All Rights Reserved.
        <a href="https://www.zerrorstudios.com/" target="blank">
          <span className=" relative flex w-fit  group  font-light  cursor-pointer select-none ">
            {" "}
            <span className="mr-2">Developed by </span>
            <div>
              <span className="text-white font-light ">Zerror Studios </span>
              <div className="h-[1px] w-[0px] bg-white transition-all duration-150 ease-in-out font-light group-hover:w-full select-none  "></div>
            </div>
          </span>
        </a>
      </div>
    </footer>
  );
}

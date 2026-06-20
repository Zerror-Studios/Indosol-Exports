// "use client";

// import {
//   FaInstagram,
//   FaFacebookF,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
// } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="w-full bg-[#001B57] text-white pt-[5rem] pb-[2rem] px-[5vw]">
//       {/* Top Section */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-[3rem] border-b border-white/10 pb-[3rem] text-center md:text-left">
//         {/* Left Content */}
//         <div className="flex flex-col gap-[2rem] items-center md:items-start">
//           {/* Logo */}
//           <div className="flex flex-col gap-[1rem] items-center md:items-start max-sm:mb-[5vh]">
//             <img
//               src="/icons/logo.png"
//               alt="Indosol Exports"
//               className="w-[150px] max-sm:w-[10rem] object-contain"
//             />

//             <h3 className="text-[2.2rem] leading-[2.8rem]">
//               Trusted Quality
//               <br />
//               Global Supply
//             </h3>
//           </div>

//           {/* Social Icons */}
//           <div className="flex items-center gap-[1rem] justify-center md:justify-start">
//             <a
//               href="#"
//               className="w-[2rem] h-[2rem] rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#001B57] duration-300"
//             >
//               <FaInstagram className="text-[1rem]" />
//             </a>

//             <a
//               href="#"
//               className="w-[2rem] h-[2rem] rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#001B57] duration-300"
//             >
//               <FaFacebookF className="text-[1rem]" />
//             </a>
//           </div>
//         </div>

//         {/* Company */}
//         <div className="md:border-l md:border-white/10 md:pl-[3vw]">
//           <h3 className="text-[1.5rem]  mb-[2rem]">Company</h3>

//           <ul className="flex flex-col gap-2 text-white/70 items-center md:items-start">
//             <li>
//               <a href="/" className="hover:text-white duration-300">
//                 <p>Home</p>
//               </a>
//             </li>
//             <li>
//               <a href="/about" className="hover:text-white duration-300">
//                 <p>About us</p>
//               </a>
//             </li>
//             <li>
//               <a href="/products" className="hover:text-white duration-300">
//                 <p>Products</p>
//               </a>
//             </li>
//             <li>
//               <a href="/imports" className="hover:text-white duration-300">
//                 <p>Imports</p>
//               </a>
//             </li>
//             <li>
//               <a href="/exports" className="hover:text-white duration-300">
//                 <p>Exports</p>
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Utility */}
//         <div className="md:border-l md:border-white/10 md:pl-[3vw]">
//           <h3 className="text-[1.5rem]  mb-[2rem]">Utility</h3>

//           <ul className="flex flex-col gap-2 text-white/70 items-center md:items-start">
//             <li>
//               <a href="/contact" className="hover:text-white duration-300">
//                 <p>Contact</p>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-white duration-300">
//                 <p>Privacy & Policy</p>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-white duration-300">
//                 <p>Terms & Condition</p>
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div className="md:border-l md:border-white/10 md:pl-[3vw]">
//           <h3 className="text-[1.5rem] mb-[2rem]">Contact</h3>

//           <div className="flex flex-col gap-[2rem] text-white/70 text-[1.15rem] leading-[2rem] items-center md:items-start">
//             {/* Phone */}
//             <div className="flex flex-col md:flex-row items-center md:items-start gap-[1rem]">
//               <FaPhoneAlt className="text-[1rem] text-white mt-0 md:mt-[0.4rem]" />

//               <div className="flex flex-col">
//                 <a href="tel:+912222878889">
//                   <p>+91-22-2287 8889/ 90/ 91</p>
//                 </a>

//                 <a href="tel:+919819388509">
//                   <p>+91 98193 88509</p>
//                 </a>

//                 <a href="tel:+919821164770">
//                   <p>+91 98211 64770</p>
//                 </a>
//               </div>
//             </div>

//             {/* Address */}
//             <div className="flex flex-col md:flex-row items-center md:items-start gap-[1rem]">
//               <FaMapMarkerAlt className="text-white mt-0 md:mt-[0.4rem]" />

//               <p>
//                 804, 8th floor, arcadia building,
//                 <br />
//                 195 ncpa marg, nariman point,
//                 <br />
//                 mumbai - 400 021, india
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom */}
//       <div className="pt-[2rem] text-center text-white/60 text-[1.1rem]">
//         © All Right Reserved. 2026. Indosol Exports
//       </div>
//     </footer>
//   );
// }

"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#001B57] text-white pt-14 md:pt-20 pb-8 px-6 md:px-[5vw]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10 pb-10 text-center md:text-left">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src="/icons/logo.png"
              alt="Indosol Exports"
              className="w-36 md:w-[150px] object-contain"
            />

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

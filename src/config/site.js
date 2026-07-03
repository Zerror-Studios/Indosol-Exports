export const siteConfig = {
  name: "Indosol Exports",
  description:
    "Indosol Exports is a Mumbai-based pharmaceutical export company supplying APIs, excipients, intermediates, and packaging materials to global markets.",
  url: "https://www.indosolexports.com",
  locale: "en_IN",
  language: "en-IN",
  ogImage: "/og.png",
  logo: "/icons/logo.png",
  favicon: "/favicon.ico",
  appleTouchIcon: "/favicon/apple-touch-icon.png",
  manifest: "/favicon/site.webmanifest",
  keywords: [
    "Indosol Exports",
    "pharmaceutical exports India",
    "API exporter",
    "pharmaceutical excipients",
    "pharmaceutical packaging materials",
    "JHNH distributor India",
    "Povidone",
    "Crospovidone",
    "Copovidone",
    "Mumbai pharmaceutical exporter",
  ],
  contact: {
    phone: "+91-22-2287 8889 / 90 / 91",
    alternatePhones: ["+91 98193 88509", "+91 98211 64770"],
    email: "admin@indosolexports.in",
    alternateEmails: ["bimal@iscpl.com", "mshah0307@gmail.com"],
  },
  address: {
    street: "804, 8th Floor, Arcadia Building, 195 NCPA Marg, Nariman Point",
    city: "Mumbai",
    state: "Maharashtra",
    postalCode: "400021",
    country: "IN",
  },
  socials: {
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
  },
};

export const siteRoutes = [
  {
    path: "/",
    label: "Home",
    title: "Global Pharma API, Excipient & Packaging Distributors",
    description: siteConfig.description,
    priority: 1,
  },
  {
    path: "/about",
    label: "About Us",
    title: "About Indosol Exports",
    description:
      "Learn about Indosol Exports, a Mumbai-based pharmaceutical export company with global trade expertise across APIs, excipients, packaging materials, and JHNH products.",
    priority: 0.8,
  },
  {
    path: "/products",
    label: "Products",
    title: "Global Pharmaceutical Products & API Solutions",
    description:
      "Explore Indosol Exports' pharmaceutical products, including APIs, excipients, intermediates, and packaging materials supplied to global markets.",
    priority: 0.9,
  },
  {
    path: "/imports",
    label: "Imports",
    title: "JH Nanhang (JHNH) Lifesciences Products",
    description:
      "Indosol Exports is an authorised distributor of JH Nanhang Life Sciences excipients in India, including Povidone, Copovidone, and Crospovidone.",
    priority: 0.8,
  },
  {
    path: "/exports",
    label: "Exports",
    title: "Global Pharmaceutical Export Solutions",
    description:
      "Indosol Exports supplies APIs, excipients, intermediates, and packaging materials to customers across Africa, the Middle East, Asia, Europe, and other global markets.",
    priority: 0.9,
  },
  {
    path: "/contact",
    label: "Contact Us",
    title: "Contact Indosol Exports",
    description:
      "Contact Indosol Exports for pharmaceutical sourcing, regulatory support, and global export solutions from Mumbai, India.",
    priority: 0.7,
  },
  {
    path: "/privacy-policy",
    label: "Privacy Policy",
    title: "Privacy Policy",
    description:
      "Read the Indosol Exports privacy policy to understand how website visitor and enquiry information is collected, used, and protected.",
    priority: 0.3,
  },
];

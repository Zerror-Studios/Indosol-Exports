"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function PP() {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  // const categories = [
  //   {
  //     title: "Active Pharmaceutical Ingredients (APIs)",
  //     products: [
  //       ["ParaCure", "Analgesic & Antipyretic", "Paracetamol 500 mg", "Tablet"],
  //       ["MediFlex", "Pain Relief", "Ibuprofen 400 mg", "Capsule"],
  //       ["HealMax", "Antibiotic", "Azithromycin 250 mg", "Tablet"],
  //       ["CefroMed", "Anti-Infective", "Cefixime 200 mg", "Tablet"],
  //       ["Respira", "Respiratory Care", "Montelukast 10 mg", "Tablet"],
  //     ],
  //   },
  //   {
  //     title: "Antibiotics & Anti-Infectives",
  //     products: [
  //       ["BioCure", "Antibiotic", "Amoxicillin 500 mg", "Capsule"],
  //       ["Infex", "Anti-Bacterial", "Ciprofloxacin 250 mg", "Tablet"],
  //       ["ZyMed", "Infection Control", "Metronidazole 400 mg", "Tablet"],
  //       ["DoxiHeal", "Broad Spectrum", "Doxycycline 100 mg", "Capsule"],
  //     ],
  //   },
  //   {
  //     title: "Anti-Allergic & Respiratory Products",
  //     products: [
  //       ["AllerFree", "Anti-Allergic", "Cetirizine 10 mg", "Tablet"],
  //       ["BreatheX", "Respiratory", "Salbutamol Syrup", "Syrup"],
  //       ["MontAir", "Asthma Care", "Montelukast 5 mg", "Tablet"],
  //       ["Respinol", "Cough Relief", "Ambroxol Syrup", "Liquid"],
  //     ],
  //   },
  //   {
  //     title: "Veterinary & Specialty APIs",
  //     products: [
  //       ["VetCare", "Veterinary", "Albendazole 600 mg", "Bolus"],
  //       ["AniCure", "Animal Health", "Ivermectin Injection", "Injection"],
  //       ["FarmMed", "Livestock Care", "Oxytetracycline", "Capsule"],
  //       ["PetHeal", "Pet Care", "Vitamin Supplement", "Tablet"],
  //     ],
  //   },
  //   {
  //     title: "Excipients & Chemicals",
  //     products: [
  //       ["ChemPure", "Chemical", "Microcrystalline Cellulose", "Powder"],
  //       ["ExciPro", "Excipient", "Magnesium Stearate", "Powder"],
  //       ["BindWell", "Binder", "Povidone K30", "Powder"],
  //       ["FlowChem", "Industrial", "Talc USP", "Powder"],
  //     ],
  //   },
  // ];

  // const headers = ["Brand Name", "Product Group", "Drug & Strength", "Dosage Form"];

  const categories = [
    {
      title: "Active Pharmaceutical Ingredients (APIs)",
      products: [
        ["Albendazole"],
        ["Allopurinol USP"],
        ["Ambroxol HCL BP"],
        ["Amitriptyline HCL"],
        ["Amoxicillin Trihydrate"],
        ["Ampicillin Trihydrate"],
        ["Artemether"],
        ["Artesunate"],
        ["Atorvastatin Calcium"],
        ["Bisoprolol Fumarate"],
        ["Bromhexine HCL"],
        ["Caffeine Powder"],
        ["Celecoxib"],
        ["Cetirizine Di HCL"],
        ["Chlorhexidine Gluconate 20% Solution"],
        ["Chloroquine Phosphate"],
        ["Ciprofloxacin HCL BP"],
        ["Cloxacillin Sodium"],
        ["Colchicine"],
        ["Cyproheptadine HCL"],
        ["Dextromethorphan Hydrobromide"],
        ["Diclofenac Sodium / Potassium"],
        ["Dicyclomine HCL"],
        ["Dimenhydrinate"],
        ["Diminazine Aceturate"],
        ["Diphenhydramine HCL"],
        ["Domperidone Base"],
        ["Erythromycin Salts"],
        ["Fexofenadine HCL"],
        ["Fluconazole"],
        ["Fluoxetine HCL"],
        ["Frusemide"],
        ["Glibenclamide"],
        ["Guaifenesin"],
        ["Hydroxyzine HCL"],
        ["Ibuprofen"],
        ["Ketoconazole"],
        ["Lidocaine Base / HCL"],
        ["Loperamide HCL"],
        ["Loratadine"],
        ["Lumefantrine"],
        ["Magnesium Hydroxide"],
        ["Mebendazole All Grades"],
        ["Meloxicam"],
        ["Metformin HCL"],
        ["Miconazole Nitrate"],
        ["Minoxidil HCL"],
        ["Niclosamide"],
        ["Paracetamol"],
        ["Piroxicam"],
        ["Povidone Iodine"],
        ["Promethazine HCL"],
        ["Rosuvastatin Calcium"],
        ["Sitagliptin Phosphate Monohydrate"],
        ["Telmisartan"],
        ["Tinidazole"],
        ["Zinc Sulphate Monohydrate"],
      ],
    },

    {
      title: "Narcotic Drugs",
      products: [
        ["Chlordiazepoxide HCL"],
        ["Diazepam"],
        ["Phenobarbitone"],
        ["Tramadol HCL"],
      ],
    },

    {
      title: "Excipients",
      products: [
        ["Croscarmellose Sodium"],
        ["Dextrose Monohydrate"],
        ["Lactose Monohydrate"],
        ["Liquid Glucose"],
        ["Magnesium Stearate"],
        ["Maize Starch"],
        ["Methyl Paraben / Propyl Paraben"],
        ["Microcrystalline Cellulose"],
        ["Pregelatinized Starch"],
        ["Sodium Starch Glycolate"],
        ["Sorbitol Solution 70%"],
      ],
    },

    {
      title: "JH Nanhang Life Sciences Products",
      products: [
        ["Copovidone VA64 (PVP/VA64)"],
        ["Crospovidone XL 10 Type B Grade"],
        ["Crospovidone XL Type A Grade"],
        ["Povidone K 15"],
        ["Povidone K 30 USP"],
        ["Povidone K 90 USP"],
      ],
    },

    {
      title: "Hormones",
      products: [
        ["Doxapram HCL"],
        ["Estradiol Hemihydrate"],
        ["Glycopyrronium Bromide"],
        ["Hydroxyprogesterone Caproate"],
        ["Mecobalamine (Methylcobalamine)"],
        ["Medroxyprogesterone Acetate"],
        ["Mifepristone"],
        ["Norethisterone"],
        ["Norethisterone Acetate"],
        ["Progesterone"],
        ["Testosterone"],
      ],
    },

    {
      title: "Packing Materials",
      products: [
        ["Aluminium Caps"],
        ["Aluminium Collapsible Tubes"],
        ["Aluminium Foil (Printed)"],
        ["Glass Bottles (Amber & Plain Colors)"],
        ["Plastic Dropper with Black Rubber"],
        ["Plastic Screw Caps"],
        ["Plastic Spoons"],
        ["PVC & PVDC Films"],
      ],
    },

    {
      title: "China Products",
      products: [
        ["Acyclovir"],
        ["Azithromycin"],
        ["Carbocisteine"],
        ["Clindamycin HCL"],
        ["Doxycycline Hyclate"],
        ["Griseofulvin"],
        ["Neomycin Sulphate"],
        ["Perphenazine"],
        ["Sulfadoxine"],
      ],
    },

    {
      title: "Petroleum Base Specialty Products",
      products: [
        ["Fully Refined Paraffin Wax"],
        ["Heavy Mineral Oil"],
        ["Heavy Paraffin Oil"],
        ["Light Liquid Paraffin"],
        ["Light Mineral Oil"],
        ["Light Paraffin Oil"],
        ["Petroleum Jelly"],
      ],
    },
  ];

  const headers = ["Product Name"];

  useEffect(() => {
    contentRefs.current.forEach((content, index) => {
      if (!content) return;
      if (activeIndex === index) {
        gsap.to(content, {
          height: "auto",
          opacity: 1,
          duration: 0.6,
          ease: "power3.inOut",
        });
      } else {
        gsap.to(content, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power3.inOut",
        });
      }
    });
  }, [activeIndex]);

  const splitProducts = (products) => {
    const middle = Math.ceil(products.length / 2);
    return [products.slice(0, middle), products.slice(middle)];
  };

  return (
    <section className="w-full bg-white py-16 md:py-[7rem] border-t border-[#dfdfdf]">
      <div className="w-[90vw] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-[5rem]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] leading-[1.15] TextDarkGray">
            Products Of JHNH
            <br className="hidden sm:block" /> Product Range
          </h1>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-6 md:gap-[2rem] ">
          {categories.map((category, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-[#F8F8F8] border border-[#dfdfdf] rounded-[1rem] overflow-hidden "
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="w-full flex items-center justify-between px-5 py-5 sm:px-8 sm:py-8 md:px-[1/5rem] md:py-[1rem] text-left gap-4"
                >
                  <h2 className="text-lg sm:text-2xl md:text-[2rem] TextDarkGray leading-[1.3]">
                    {category.title}
                  </h2>
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#d6d6d6] flex items-center justify-center text-base sm:text-[1.2rem] text-[#2347a3] bg-white">
                    {isActive ? <FiMinus /> : <FiPlus />}
                  </div>
                </button>

                {/* Accordion Content */}
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="overflow-hidden h-0 opacity-0"
                >
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6 md:px-[3rem] md:pb-[3rem]">
                    {/* ── DESKTOP TABLE (md+) ── */}
                    <div className="hidden md:block border border-[#d9d9d9] rounded-[1.5rem] overflow-hidden bg-white">
                      {/* Head */}
                      <div className="grid grid-cols-4 bg-[#08256d] px-[2rem] py-[2rem]">
                        {headers.map((h) => (
                          <h3 key={h} className="text-white text-[1.4rem]">
                            {h}
                          </h3>
                        ))}
                      </div>
                      {/* Body */}
                      <div className="grid grid-cols-2 gap-[1rem] p-[1rem] bg-[#f7f7f7]">
                        {splitProducts(category.products).map(
                          (column, index) => (
                            <div
                              key={index}
                              className="flex flex-col gap-[1rem] "
                            >
                              {column.map((row, i) => (
                                <div
                                  key={i}
                                  className="bg-white rounded-[0.8rem] px-[1.5rem] py-[1.8rem] cursor-pointer transition-all duration-300 hover:bg-[#08256D] group"
                                >
                                  <p className="text-[1.35rem] text-[#08256D] transition-colors duration-300 group-hover:text-white">
                                    {row[0]}
                                  </p>
                                </div>
                              ))}
                            </div>
                          ),
                        )}
                      </div>
                      {/* <div className="p-[1rem] flex flex-col gap-[1rem] bg-[#f7f7f7]">
                        {category.products.map((row, i) => (
                          <div
                            key={i}
                            className="grid grid-cols-4 bg-white rounded-[0.8rem] px-[1.5rem] py-[1.8rem]"
                          >
                            {row.map((cell, ci) => (
                              <p
                                key={ci}
                                className="text-[1.35rem] text-[#6b7280]"
                              >
                                {cell}
                              </p>
                            ))}
                          </div>
                        ))}
                      </div> */}
                    </div>

                    {/* ── MOBILE CARDS (below md) ── */}
                    <div className="flex flex-col gap-3 md:hidden">
                      <div className="p-[1rem] grid grid-cols-2 gap-[1rem] bg-[#f7f7f7]">
                        {category.products.map((row, i) => (
                          <div
                            key={i}
                            className="bg-white rounded-[0.8rem] px-[1.5rem] py-[1.8rem]"
                          >
                            <p className="text-[1.35rem] text-[#6b7280]">
                              {row[0]}
                            </p>
                          </div>
                        ))}
                      </div>
                      {/* {category.products.map((row, i) => (
                        <div
                          key={i}
                          className="bg-white border border-[#e5e7eb] rounded-xl p-4 flex flex-col gap-2"
                        >
                          {headers.map((label, ci) => (
                            <div
                              key={ci}
                              className="flex justify-between items-start gap-2"
                            >
                              <span className="text-xs font-medium text-[#08256d] uppercase tracking-wide w-[40%] flex-shrink-0">
                                {label}
                              </span>
                              <span className="text-sm text-[#6b7280] text-right">
                                {row[ci]}
                              </span>
                            </div>
                          ))}
                        </div>
                      ))} */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

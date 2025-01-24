'use client'
import React, { useState } from "react";
import Image from 'next/image'
import accordionIcon from '@/common/assets/images/chevronDown.svg'
const App = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionData = [
    {
      heading: "Kompensieren",
      links: [
        {
          text: "Flug kompensieren ",
          url: "/",
        },
        {
          text: "CO₂-Eventrechner",
          url: "/",
        },
        {
          text: "Wunschmenge CO₂ kompensieren",
          url: "/",
        },
        {
          text: "Standards & Transparenz",
          url: "/",
        },
      ],
    },
    {
      heading: "Projekte",
      links: [
        {
          text: "Klimaschutzprojekte",
          url: "/",
        },
        {
          text: "Projekt Auswahlverfahren",
          url: "/",
        },
      ],
    },
    {
      heading: "Fliegen & Klima",
      links: [
        {
          text: "Flugverkehr & Klimalösungen",
          url: "/",
        },
        {
          text: "atmosfair Airline Index",
          url: "/",
        },
      ],
    },
    {
      heading: "Grün reisen",
      links: [
        {
          text: "Smart Travel Tool (STT)",
          url: "/",
        },
        {
          text: "Nachhaltiger reisen",
          url: "/",
        },

        {
          text: "Ihr persönliches Klimabudget",
          url: "/",
        },
      ],
    },
    {
      heading: "Businesslösungen",
      links: [
        {
          text: "Geschäftsreisen Reporting",
          url: "/",
        },
        {
          text: "CO₂-kompensierte Veranstaltung",
          url: "/",
        },
        {
          text: "Kompensation & Projektförderung",
          url: "/",
        },
      ],
    },
    {
      heading: "Über uns",
      links: [
        {
          text: "Was macht atmosfair",
          url: "/",
        },
        {
          text: "atmosfair Team",
          url: "/",
        },
        {
          text: "Andere über uns",
          url: "/",
        },
        {
          text: "Jahresberichte",
          url: "/",
        },
        {
          text: "Newsletter",
          url: "/",
        },
        {
          text: "Stellenangebote",
          url: "/",
        },
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container mx-auto">
      <div id="accordion-collapse" data-accordion="e" className="flex flex-col gap- dark:bg-white">
        {accordionData.map((item, index) => (
          <div key={index}>
            <h2 id={`accordion-collapse-heading-${index} dark:bg-white hover:bg-white`}>
              <button
                type="button"
                className={`flex text-start items-center justify-start w-full border-none focus:outline-none text-lato text-[#373940] font-semibold hover:bg-white dark:bg-white  ${
                  activeIndex === index ? "rounded-t-xl text-[#9AA628] font-semibold" : ""
                }  dark:text-gray-400  dark:bg-white gap-3`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`accordion-collapse-body-${index}`}
              >
                <span>{item.heading}</span>

                <Image
                 className={`w-3 h-3 shrink-0 transform  ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                src={accordionIcon} alt='icon' />
              </button>
            </h2>
            <div
              id={`accordion-collapse-body-${index}`}
              className={`overflow-hidden transition-max-height duration-300 ease-in-out dark:bg-white  ${
                activeIndex === index ? "max-h-screen" : "max-h-0"
              }`}
              aria-labelledby={`accordion-collapse-heading-${index}`}
            >
              <div className=" dark:bg-gray-900 ">
                <p className=" text-gray-500 dark:text-gray-400 flex gap-8flex flex-col gap-8 dark:bg-white">
                  {item.content}
                </p>
                {item.links && (
                  <ul className="ps-3 text-gray-500 list-disc dark:text-gray-400 flex flex-col gap-4 dark:bg-white">
                    {item.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.url}
                          className="text-base text-[#5D606D] font-lato"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

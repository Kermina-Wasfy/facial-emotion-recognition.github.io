"use client";

import React, { useState } from "react";
import SpecializeFieldsCards from "@/components/general/Cards/SpecializeFieldsCards";

const servicesData = [
  {
    icon: "/interior-design.svg",
    title: "Interior Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Egestas dui mattis vulputate vel. Lorem ipsum dolor sit amet consectetur. Egestas dui mattis vulputate vel.",
  },
  {
    icon: "/architecture.svg",
    title: "Architecture",
    description:
      "Lorem ipsum dolor sit amet consectetur. Egestas dui mattis vulputate vel. Lorem ipsum dolor sit amet consectetur. Egestas dui mattis vulputate vel.",
  },
  {
    icon: "/execution-drawings.svg",
    title: "Execution Drawings",
    description:
      "Lorem ipsum dolor sit amet consectetur. Egestas dui mattis vulputate vel. Lorem ipsum dolor sit amet consectetur. Egestas dui mattis vulputate vel.",
  },
  {
    icon: "/interior-design.svg",
    title: "Landscape Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Egestas dui mattis vulputate vel. Lorem ipsum dolor sit amet consectetur. Egestas dui mattis vulputate vel.",
  },
  {
    icon: "/architecture.svg",
    title: "Furniture Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Egestas dui mattis vulputate vel. Lorem ipsum dolor sit amet consectetur. Egestas dui mattis vulputate vel.",
  },
];

export default function ServicesSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(servicesData.length / cardsPerPage);

  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const visibleCards = servicesData.slice(startIndex, endIndex);

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  return (
    <section className="container mx-auto text-white py-16 mt-24">
      <div className="container mx-auto flex flex-col items-center gap-8">
        {/* Heading */}
        <div className="text-center">
          <p className="text-lg md:text-2xl font-light text-white">
            Company Services
          </p>
          <h2 className="text-2xl md:text-5xl font-semibold mt-2 text-white">
            We specialize in these fields.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {visibleCards.map((service, index) => (
            <SpecializeFieldsCards
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Navigation */}
       <div className="flex items-center justify-center gap-6 mt-8">
  <button
    onClick={handlePrev}
    disabled={currentPage === 0}
    className="w-10 h-10 flex items-center justify-center bg-transparent disabled:opacity-40"
  >
    <img src="/left-arrow.svg" alt="Previous" className="w-6 h-6" />
  </button>

  <div className="flex items-center gap-2">
    <span className="text-4xl italic relative -top-2 font-charis">
      {String(currentPage + 1).padStart(2, "0")}
    </span>
    <span className="block w-px h-8 bg-white"></span>
    <span className="text-4xl italic relative top-2 font-charis">
      {String(totalPages).padStart(2, "0")}
    </span>
  </div>

  <button
    onClick={handleNext}
    disabled={currentPage === totalPages - 1}
    className="w-10 h-10 flex items-center justify-center bg-transparent disabled:opacity-40"
  >
    <img src="/right-arrow.svg" alt="Next" className="w-6 h-6" />
  </button>
</div>

      </div>
    </section>
  );
}

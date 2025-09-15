"use client";

import { useQuery } from "@tanstack/react-query";
import { getHomeData } from "@/apis/pages/home";    

export default function AboutSection() {

  const { data, isLoading, error } = useQuery({
    queryKey: ["home-data"],
    queryFn: getHomeData,
  });

  if (isLoading) {
    return (
      <section id="about" className="py-20">
        <div className="container mx-auto text-center">Loading...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="about" className="py-20">
        <div className="container mx-auto text-center text-red-500">
          Something went wrong!
        </div>
      </section>
    );
  }

  const whoWeAre = data?.who_we_are;

  return (
    <section id="about" className="relative 2xl:py-48 py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50"
         style={{ backgroundImage: `url(${whoWeAre?.image || "/about-bg.png"})` }}
      ></div>

      <div className="container mx-auto relative z-10 text-start max-w-md">
        <h2 className="text-4xl font-bold mb-6 text-[#F5F5F5]">
          {whoWeAre?.title || "Who we are"}
        </h2>
        <p className="text-lg leading-relaxed text-[#C4C4C4] max-w-2xl">
          {whoWeAre?.description ||
            "No description available."}
        </p>
      </div>
    </section>
  );
}

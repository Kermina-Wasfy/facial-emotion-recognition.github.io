"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getHomeData } from "@/apis/pages/home"; 

export default function ContactUsSection() {
  
  const { data, isLoading, error } = useQuery({
    queryKey: ["home-data"],
    queryFn: getHomeData,
  });

  if (isLoading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="p-10 text-center text-red-500">
        Something went wrong!
      </div>
    );
  }
 
  const contactCities = data?.contact_us || [];

 
  const hurghada = contactCities.find((c) => c.title.toLowerCase() === "hurghada");
  const cairo = contactCities.find((c) => c.title.toLowerCase() === "cairo");

  return (
    <section id="contact" className="container mx-auto px-6 py-16">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-10">Contact us</h2>

      {/* Main Row */}
      <div className="grid md:grid-cols-2 gap-6 h-full">
        {/* Left Column: Hurghada */}
        <div
          className="relative rounded-xl p-8 overflow-hidden bg-contain bg-center h-full flex-1"
          style={{ backgroundImage: "url('/contact-left.png')" }}
        >
          <h3 className="text-lg font-bold mb-4">{hurghada?.title}</h3>
          <div className="space-y-4">
            {hurghada?.branches?.map((branch, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Image
                    src="/address-icon.svg"
                    alt="location"
                    width={18}
                    height={18}
                  />
                  <span>{branch.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/phone-icon.svg"
                    alt="phone"
                    width={18}
                    height={18}
                  />
                  <span>{branch.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Cairo */}
        <div className="flex flex-col gap-6 h-full flex-1">
          {/* Top Row: contact-right behind text */}
          <div className="relative rounded-xl p-8 overflow-hidden flex-1">
            <div
              className="absolute inset-0 -z-10 bg-no-repeat bg-contain"
              style={{
                backgroundImage: "url('/contact-right.png')",
                backgroundPosition: "left top",
                backgroundSize: "contain",
              }}
            ></div>

            <h3 className="text-lg font-bold mb-4 relative z-10">{cairo?.title}</h3>
            <div className="space-y-2 relative z-10">
              {cairo?.branches?.map((branch, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/address-icon.svg"
                      alt="location"
                      width={18}
                      height={18}
                    />
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/phone-icon.svg"
                      alt="phone"
                      width={18}
                      height={18}
                    />
                    <span>{branch.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row: contact-theta image */}
          <div
            className="relative rounded-xl p-8 overflow-hidden flex-1"
            style={{
              backgroundImage: "url('/contact-theta.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getHomeData } from "@/apis/pages/home";
import { getMobileApps } from "@/apis/main";

export default function HeroSection() {
  const {
    data: homeData,
    isLoading: homeLoading,
    error: homeError,
  } = useQuery({
    queryKey: ["home-data"],
    queryFn: getHomeData,
  });

  const {
    data: mobileAppsData,
    isLoading: appsLoading,
    error: appsError,
  } = useQuery({
    queryKey: ["mobile-apps"],
    queryFn: getMobileApps,
  });



  if (homeError || appsError)
    return (
      <div className="text-center py-10 text-red-500">
        Something went wrong loading hero section
      </div>
    );

  const firstBanner = homeData?.banners?.[0];

  // Mobile apps
  const mobileApps = mobileAppsData?.mobile_apps || [];
  const androidApp = mobileApps.find(
    (app) => app.os.toLowerCase() === "android"
  );
  const iosApp = mobileApps.find((app) => app.os.toLowerCase() === "ios");

  return (
    <section
      className="py-20"
      style={{
        background: "linear-gradient(to bottom, #e5e5e5 , #ffffff)",
      }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          {/* title image */}
          <Image
            src="/hero-title.png"
            alt="Theta application"
            width={300}
            height={100}
            className="mx-auto lg:mx-0"
          />

          <p className="text-[#646363] text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
            {firstBanner?.description ||
              "Lorem ipsum dolor sit amet consectetur. Volutpat etiam donec eget magna nunc ullamcorper cursus lacus. Cras sollicitudin sagittis gravida mattis lectus nisl blandit. Viverra ullamcorper odio dictum aliquet accumsan amet."}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            {androidApp && (
              <a
                href={androidApp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-[#062516] text-[#062516] px-6 py-2 rounded-md hover:bg-gray-100"
              >
                <Image
                  src="/playstore-icon.svg"
                  alt="Play Store"
                  width={20}
                  height={20}
                />
                Play store
              </a>
            )}
            {iosApp && (
              <a
                href={iosApp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-[#062516] text-[#062516] px-6 py-2 rounded-md hover:bg-gray-100"
              >
                <Image
                  src="/appstore-icon.svg"
                  alt="App Store"
                  width={20}
                  height={20}
                />
                App store
              </a>
            )}
          </div>
        </div>

        {/* Right Video */}
        <div className="relative lg:w-1/2 flex justify-center">
          <div className="absolute w-[450px] h-[450px] bg-[#F5F4F4] rounded-full z-1 top-10 shadow-lg"></div>

          <video
            src={firstBanner?.image || "/hero-video.mp4"}
            autoPlay
            muted
            loop
            playsInline
            className="z-2 w-[250px] h-[500px] rounded-[2rem] border-8 border-[#062516] shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

"use client";

import { useQuery } from "@tanstack/react-query";
import { getPrivacyPolicy } from "@/apis/pages/privacy";

export default function PrivacyPolicyPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["privacy-policy"],
    queryFn: getPrivacyPolicy,
  });

  if (isLoading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="p-10 text-center text-red-500">Something went wrong!</div>;
  }

  const policy = data?.privacy_policy;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${policy?.cover || "/privacy-banner.png"})` }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        {/* العنوان */}
        <h1 className="relative z-10 text-white text-3xl md:text-4xl font-medium">
          {policy?.title}
        </h1>
      </div>

      {/* Content Section */}
      <section className="container mx-auto bg-white py-10">
        <div className="mx-auto space-y-12">
          <div>
            <p className="text-[#646363] leading-relaxed whitespace-pre-line">
              {policy?.description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

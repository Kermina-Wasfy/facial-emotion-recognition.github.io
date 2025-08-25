import HeroSection from "@/components/pages/Home/HeroSection";
import LatestStudioProjects from "@/components/pages/Home/LatestStudioProjects";
import Constructions from "@/components/pages/Home/Constructions";
import ContactUsSection from "@/components/pages/Home/ContactUsSection";
import SpecializeFields from "@/components/pages/Home/SpecializeFields";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Krass",
    description: "Home page",
  };
}

export default async function Home() {
  return (
    <>
      <HeroSection />
      <LatestStudioProjects/>
      <Constructions/>
      <SpecializeFields/>
      <ContactUsSection />
    </>
  );
}

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative h-screen w-screen flex justify-center items-center pb-340">
      {/* background */}
      <Image
        src="/hero-bg.png"
        alt="Background"
        fill
        className="object-cover"
        priority
        style={{WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",}}
      />

      {/* Overlay text */}
      <div className="container absolute inset-0 flex flex-col justify-between items-center text-center text-white py-8 pt-28">
        {/* upper text */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg md:text-3xl font-light">
            Welcome to Krass Interior Design
          </p>
          <h1 className="text-xl md:text-4xl font-bold mt-2">
            Architecture firm with unrivalled residential design expertise
          </h1>
          <p className="text-sm md:text-2xl mt-2 max-w-4xl">
            Two architects dreaming to achieve and spread the innovative styles
            of architecture and interior  designs enrich with creativity
            architecture dialogue and more that led to an Architecture
            Office that applies the examination of images in consulting and
            design to build distinct identities and  new environments
          </p>
        </div>
      </div>
    </div>
  );
}

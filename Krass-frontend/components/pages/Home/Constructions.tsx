import Image from "next/image";

export default function Constructions() {
  return (
    <div className="relative h-screen w-screen flex justify-center items-center py-140 mt-24">
      {/* background */}
      <Image
        src="/construction-bg.png"
        alt="Background"
        fill
        className="object-cover"
        priority
        style={{WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 20%, black 90%, transparent)",}}
      />

      {/* Overlay text */}
      <div className="container absolute inset-0 flex flex-col justify-between items-center text-center text-white">
        {/* bottom text */}
        <div className="flex flex-col items-center mt-180 w-full">
          <h2 className="md:text-8xl  font-bold">KRASS</h2>
          <h2 className="md:text-8xl font-semibold">CONSTRUCTIONS</h2>
          <p className="text-sm md:text-base max-w-2xl my-8">
            We're excited to partner with Krass Construction, bringing together
            our expertise to deliver exceptional solutions for our clients.
          </p>
          <button className=" px-12 py-2 bg-white text-black rounded-md text-center text-lg font-medium">
            Krass Construction
          </button>
        </div>
      </div>
    </div>
  );
}

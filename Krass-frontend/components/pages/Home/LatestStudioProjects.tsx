import Image from "next/image";

export default function ProjectsGrid() {
  const projects = [
    { id: 1, title: "King Mariout Villa", img: "/king-mariout1.png" },
    { id: 2, title: "King Mariout Villa", img: "/king-mariout2.png" },
    { id: 3, title: "King Mariout Villa", img: "/king-mariout3.png" },
    { id: 4, title: "King Mariout Villa", img: "/king-mariout4.png" },
  ];

  return (
    <section className="w-full max-w-12xl mx-auto px-4 pb-16">
      {/* Title Section */}
      <div className="text-center mb-8">
        <p className="text-lg md:text-2xl font-light text-white">Projects Preview</p>
        <h2 className="text-2xl md:text-5xl font-semibold mt-2 text-white">
          Latest Studio Projects
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group h-[300px] md:h-[400px] overflow-hidden"
          >
            {/* Background Image */}
            <Image
              src={project.img}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Text + Lines */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              {/* Top Line */}
              <div className="w-12 border-t-2 border-[#EACAB5] mb-3"></div>

              {/* Title */}
              <h3 className="text-lg md:text-3xl font-semibold">
                {project.title}
              </h3>

              {/* Bottom Line */}
              <div className="w-12 border-t-2 border-[#EACAB5] mt-3"></div>
            </div>
          </div>
        ))}

        {/* Button Row */}
        <div className="col-span-full flex justify-center py-8">
          <button className="px-20 py-3 bg-transparent text-white border-2 border-white rounded-md text-center text-lg font-medium hover:bg-white hover:text-black transition">
            View all Projects
          </button>
        </div>
      </div>
    </section>
  );
}

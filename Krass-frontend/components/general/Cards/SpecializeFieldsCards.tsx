import React from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-[#252424] border border-gray-400 rounded-md py-6 pl-6 flex flex-col gap-4 text-white hover:border-white transition relative cursor-pointer">
      {/* L Shape */}
      <div className="border-gray-400 absolute top-4 left-4 w-16 h-16 border-t-1 border-l-1"></div>

      {/* Icon + Title Row */}
      <div className="flex items-center relative">
        {/* Icon on the left */}
        <div className="w-16 h-16">
          <img src={icon} alt={title} className="w-full h-full object-contain" />
        </div>

        {/* Title centered absolutely */}
        <h3 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-semibold whitespace-nowrap">
          {title}
        </h3>
      </div>

      {/* Line aligned to the right */}
      <hr className="border-gray-400 self-end w-2/3" />

      {/* Description */}
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;

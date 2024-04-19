import { Icon } from "@iconify/react/dist/iconify.js";
import { Service } from "../types";

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="h-11 w-11 flex justify-center items-center bg-coral-red rounded-full">
        <Icon
          icon={service.imgURL}
          width={24}
          height={24}
          className="text-white"
        />
      </div>

      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {service.label}
      </h3>
      <p className="mt-3 break-words text-lg font-montserrat leading-normal text-slate-gray">{service.subtext}</p>
    </div>
  );
};

export default ServiceCard;

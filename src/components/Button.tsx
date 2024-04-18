import { Icon } from "@iconify/react/dist/iconify.js";

const Button = ({label, iconURL} : {label:string, iconURL : string}) => {
  return <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg bg-coral-red rounded-full text-white border-coral-red">
    {label}
    <Icon icon={iconURL} className="ml-2 rounded-full w-5 h-5" />
  </button>;
};

export default Button;

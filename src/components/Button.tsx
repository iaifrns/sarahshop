import { Icon } from "@iconify/react/dist/iconify.js";

const Button = ({
  label,
  iconURL,
  backgroundColor = "bg-coral-red",
  borderColor = "border-coral-red",
  textColor = "text-white",
}: {
  label: string;
  iconURL?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg ${backgroundColor} rounded-full ${textColor}  ${borderColor}`}
    >
      {label}
      {iconURL && <Icon icon={iconURL} className="ml-2 rounded-full w-5 h-5" />}
    </button>
  );
};

export default Button;

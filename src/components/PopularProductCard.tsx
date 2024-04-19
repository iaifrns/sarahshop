import { Icon } from "@iconify/react/dist/iconify.js";
import { Product } from "../types";

const PopularProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <div className="p-2 bg-primary rounded-xl">
        <img
          src={product.imgURL}
          alt={product.name}
          className="w-[280px] h-[280px]"
        />
      </div>
      <div className="mt-8 flex gap-1 items-center">
        <Icon icon="mdi:star" width={24} height={24} color="red" />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          ({product.value})
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{product.name}</h3>
      <p className="mt-2 font-montserrat text-xl font-semibold leading-normal text-coral-red">{product.price}</p>
    </div>
  );
};

export default PopularProductCard;

import { Shoe } from "../types";

const ShoeCard = ({
  imgURL,
  changeBigShoe,
  bigShoeImg,
}: {
  imgURL: Shoe;
  changeBigShoe: (a: string) => void;
  bigShoeImg: string;
}) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoe(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 ${
        bigShoeImg == imgURL.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1 rounded-xl`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-slate-300 bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-cover h-full"
        />
      </div>
    </div>
  );
};

export default ShoeCard;

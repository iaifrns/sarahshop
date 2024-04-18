import { useState } from "react";
import { imgShoe5 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";

const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(imgShoe5);

  return (
    <section
      id="home"
      className="w-full flex md:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative md:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="md:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={"bxs:right-arrow"} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((data, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{data.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {data.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex justify-center items-center md:max-h-screen max-md:py-40 bg-primary bg-cover bg-center max-sm:px-6">
        <img
          src={bigShoeImg}
          alt="first nike shoe"
          width={610}
          className="object-cover h-full"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%]">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard imgURL={shoe} changeBigShoe={img => setBigShoeImg(img)} bigShoeImg={bigShoeImg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

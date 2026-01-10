import React from "react";
import Grocery from "../../assets/grocery.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div>
      <section>
        <div className="max-w-[1200px] px-10  mx-auto flex md:flex-row flex-col items-center  mt-10 min-h-screen ">
          <div className="flex-1   ">
            {/* You can add text or content here */}

            <span className=" bg bg-orange-200  text-orange-400  px-5 py-2  rounded-4xl ">
              Exporting Items from day 1
            </span>

            <h1 className=" text-5xl/15 font-bold mt-5 mb-5">
              Lorem <span className="text-orange-400">fruits</span> ipsum dolor
              sit amet consectetur.
            </h1>
            <p className=" text-zinc-600 mb-5 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod.
            </p>

            <Button content="Shop Now" />
          </div>
          <div className="flex-1 ">
            <div>
              <img src={Grocery} alt="Grocery" />
            </div>

            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

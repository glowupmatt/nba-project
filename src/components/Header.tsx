import React from "react";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full relative">
        <div className="absolute h-full w-full z-[10] md:justify-center">
          <h2 className="text-white backdrop-blur-[3px] flex text-start items-center h-full w-full text-[4rem] font-bold p-4 leading-[3.5rem] md:justify-center">
            NBA
            <br />
            STATS
          </h2>
        </div>
        <div className="md:w-[100vw] md:h-[26rem] md:flex justify-center items-center relative">
          <Image
            src="/nbaheader.jpeg"
            alt="header Image"
            height={1920}
            width={1080}
            className="md:absolute top-0 left-0 object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

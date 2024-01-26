"use client";

import { PlayerTypeAPI, UpdatePlayerType } from "@/utils/types";
import React, { useContext, useState } from "react";
import Image from "next/image";
import FilterComp from "./totalsComps/FilterComp";
import CardCarousel from "./playerCardComps/CardCarousel";

type Props = {
  players: PlayerTypeAPI[];
};

export default function TopFivePlayersByTotal(props: Props) {
  const { players } = props;
  const [sortType, setSortType] = useState("points");

  return (
    <div className="flex flex-col gap-4 w-full md:grid grid-cols-2">
      <FilterComp sortType={sortType} setSortType={setSortType} />
      <div className="relative">
        <div className="w-full h-full rounded-md p-[.2rem] relative z-20">
          <div className="bg-[#292929]">
            <CardCarousel players={players} sortType={sortType} />
          </div>
        </div>
      </div>

      <Image
        alt="orange-ball"
        src="/orangeBall.svg"
        width={60}
        height={60}
        className="absolute w-[13rem] h-[23rem] top-[29rem] right-[15rem] md:hidden"
      />
    </div>
  );
}

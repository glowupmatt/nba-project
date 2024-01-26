"use client";

import { PlayerTypeAPI, UpdatePlayerType } from "@/utils/types";
import React, { useContext, useEffect, useState } from "react";
import FilterComp from "./totalsComps/FilterComp";
import CardCarousel from "./playerCardComps/CardCarousel";
import { DataContext } from "@/AppContext";

type Props = {
  players: PlayerTypeAPI[];
};

export default function TopFivePlayersByTotal(props: Props) {
  const { players } = props;
  const [sortType, setSortType] = useState("points");

  return (
    <div className="flex flex-col gap-4 w-full md:grid grid-cols-2">
      <FilterComp sortType={sortType} setSortType={setSortType} />
      <div className="w-full h-full rounded-md p-[.2rem] relative z-20">
        <div className="bg-[#292929] min-h-[25rem]">
          <CardCarousel players={players} sortType={sortType} />
        </div>
      </div>
    </div>
  );
}

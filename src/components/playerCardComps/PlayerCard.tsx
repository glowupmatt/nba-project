"use client";
import React, { useContext, useEffect } from "react";
import Image from "next/image";
import { UpdatePlayerType } from "@/utils/types";
import PlayerHeader from "./PlayerHeader";
import PlayerStats from "./PlayerStats";
import { DataContext } from "@/AppContext";

type Props = {
  player: UpdatePlayerType;
  index: number;
};

const PlayerCard = (props: Props) => {
  const { player, index } = props;
  const { totalStats } = player;
  const { isLoading, setIsLoading } = useContext(DataContext);

  useEffect(() => {
    if (totalStats === undefined) {
      setIsLoading(false);
    }
  }, [totalStats, setIsLoading]);

  return (
    <div className="flex flex-col w-[16rem] items-center p-0 rounded-lg shadow-md relative">
      <div className="absolute z-[100] min-w-[14rem] min-h-[25rem] w-full h-full flex justify-center items-center flex-col">
        {isLoading === false ? (
          <h2>LOADING PLAYERS</h2>
        ) : (
          <div>
            <PlayerHeader player={player} index={index} />
            <div className="w-full ">
              {totalStats && <PlayerStats totalStats={totalStats} />}
            </div>
          </div>
        )}
      </div>
      <div className="relative h-full">
        <Image
          src="/cardBgSilver.svg"
          alt="card-bg"
          width={1080}
          height={1920}
          className="h-[25rem] w-full"
        />
      </div>
    </div>
  );
};

export default PlayerCard;

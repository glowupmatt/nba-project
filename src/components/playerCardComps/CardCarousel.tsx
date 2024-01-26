import { sortPlayersTotal } from "@/lib/sortingFunctions";
import { UpdatePlayerType } from "@/utils/types";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import PlayerCard from "./PlayerCard";
import Autoplay from "embla-carousel-autoplay";

type Props = {
  players: UpdatePlayerType[];
  sortType: string;
};

const CardCarousel = (props: Props) => {
  const { players, sortType } = props;
  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true, loop: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "center",
        loop: true,
      }}
      className="flex flex-col"
    >
      <CarouselContent className="z-30 relative">
        {sortPlayersTotal(players, sortType)
          .slice(0, 5)
          .map((player: UpdatePlayerType, index: number) => {
            return (
              <CarouselItem
                key={player.id}
                className="flex justify-center items-center w-full h-full basis-[70%] lg:basis-[45%]"
              >
                <PlayerCard player={player} index={index} />
              </CarouselItem>
            );
          })}
      </CarouselContent>
    </Carousel>
  );
};

export default CardCarousel;

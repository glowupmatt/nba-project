"use client";

import React, { useState, useContext } from "react";
import OffensivePlayerTable from "./OffensivePlayerTable";
import { offensiveColumns } from "@/components/playerTableComps/offensiveColumnsData";
import { defensiveColumns } from "@/components/playerTableComps/defensiveColumnsData";
import { PlayerTypeAPI } from "@/utils/types";
import { DataContext } from "@/AppContext";
import Filters from "./headerControls/Filters";
import SearchInput from "./headerControls/SearchInput";
import { sortAndFilterData } from "@/lib/sortingFunction";
import Pagination from "./Pagination";
import {
  offensiveFantasyPointsConversion,
  defensiveFantasyPointsConversion,
} from "@/lib/fantasyPoints";
import { Button } from "../ui/button";

type Props = {
  players: PlayerTypeAPI[];
};

const TableDisplay = (props: Props) => {
  const { players } = props;
  const { sortBy, paginationPage, searchTerm, variant, setVariant, isLoading } =
    useContext(DataContext);

  const offensiveFantasyPoints = offensiveFantasyPointsConversion(players);
  const defensiveFantasyPoints = defensiveFantasyPointsConversion(players);
  const sortedData = sortAndFilterData(
    variant === "offense" ? offensiveFantasyPoints : defensiveFantasyPoints,
    sortBy,
    searchTerm,
    paginationPage
  );

  const variantValue =
    variant === "offense" ? offensiveColumns : defensiveColumns;

  const handleVariant = () => {
    if (variant === "offense") {
      setVariant("defense");
    } else {
      setVariant("offense");
    }
  };

  return (
    <div className="backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gradient-to-r from-gray-300 to-gray-500">
      <div className="flex w-full justify-between gap-4 p-4">
        <SearchInput />
        <Filters />
      </div>
      {isLoading ? (
        <div className="w-full justify-center items-center flex">
          <h1>LOADING PLAYERS</h1>
        </div>
      ) : (
        <div>
          <div className="w-full flex justify-center items-center">
            <Button
              className="w-full bg-white/20 border rounded-[1rem] border-black p-2 max-w-[50%]"
              onClick={handleVariant}
            >
              Show {variant[0].toUpperCase() + variant.slice(1)} Data
            </Button>
          </div>
          <div className="overflow-hidden">
            <OffensivePlayerTable columns={variantValue} data={sortedData} />
          </div>
          <Pagination sortedData={sortedData} />
        </div>
      )}
    </div>
  );
};
export default TableDisplay;

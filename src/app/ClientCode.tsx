"use client";
import React, { useState, useEffect, useContext } from "react";
import TopFivePlayersByTotal from "@/components/TopFivePlayersByTotal";
import TableDisplay from "@/components/playerTableComps/TableDisplay";
import axios from "axios";
import { DataContext } from "@/AppContext";

type Props = {};

const ClientCode = (props: Props) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    try {
      const fetchPlayers = async () => {
        const { data } = await axios.get("/api/players-actions");
        setPlayers(data);
      };
      fetchPlayers();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <section className="flex justify-center items-center flex-col gap-[5rem] w-full">
      <TopFivePlayersByTotal players={players} />
      <div className="max-w-[90%] w-screen border-black overflow-scroll rounded-[1rem] border-[.3rem] md:overflow-hidden">
        <TableDisplay players={players} />
      </div>
    </section>
  );
};

export default ClientCode;

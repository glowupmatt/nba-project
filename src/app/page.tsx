import { getAllPlayers } from "@/db/players";
import Header from "@/components/Header";
import TopFivePlayersByTotal from "@/components/TopFivePlayersByTotal";
import TableDisplay from "@/components/playerTableComps/TableDisplay";
import { PlayerTypeAPI, UpdatePlayerType } from "@/utils/types";

export default async function Home() {
  const players: PlayerTypeAPI[] = await getAllPlayers();
  return (
    <main className="md:flex justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-4 md:max-w-screen-xl">
        <Header />
        <TopFivePlayersByTotal players={players} />
        <div className="max-w-[90%] w-screen border-black overflow-scroll rounded-[1rem] border-[.3rem] md:max-w-full md:overflow-hidden">
          <TableDisplay players={players} />
        </div>
      </div>
    </main>
  );
}

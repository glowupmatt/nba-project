import { getAllPlayers } from "@/db/players";
import Header from "@/components/Header";
import { PlayerTypeAPI, UpdatePlayerType } from "@/utils/types";
import ClientCode from "@/app/ClientCode";

export default async function Home() {
  return (
    <main className="md:flex justify-center items-center">
      <div className="flex flex-col items-center gap-4 md:max-w-screen-xl min-h-screen justify-start">
        <Header />
        <ClientCode />
      </div>
    </main>
  );
}

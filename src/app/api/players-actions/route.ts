import prisma from "@/db/prismaDb";
import { UpdateData } from "@/utils/types";
import { NextResponse } from "next/server";
import { getPlayerJson } from "@/getJsonData/getPlayerJson";

export async function POST(req: Request, res: Response) {
  const playerData = await getPlayerJson();
  const playersToCreate = playerData.filter(
    (player) =>
      player.playerName &&
      player.age &&
      player.playerImage &&
      player.team &&
      player.position
  );
  try {
    const createdPlayers = await prisma.player.createMany({
      data: playersToCreate,
    });
    console.log(`CREATED ${createdPlayers.count} PLAYERS`);
    return new NextResponse(JSON.stringify(createdPlayers), { status: 200 });
  } catch (error) {
    console.log(error, "ERROR IN CREATE PLAYER, CONTROLLER");
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
}

export async function GET(req: Request, res: Response) {
  try {
    const players = await prisma.player.findMany({
      include: {
        games: true,
        totalStats: true,
      },
    });
    console.log(`FOUND ${players.length} PLAYERS`);
    return new NextResponse(JSON.stringify(players), { status: 200 });
  } catch (error) {
    console.log(error, "ERROR IN GET ALL PLAYERS");
  }
}

export async function DELETE(req: Request, res: Response) {
  try {
    await prisma.player.deleteMany({});
    console.log(`DELETED ALL PLAYERS FROM DB`);
    return new NextResponse(JSON.stringify(`DELETED ALL PLAYERS FROM DB`), {
      status: 200,
    });
  } catch (error) {
    console.log(error, "ERROR IN DELETE ALL PLAYERS");
  }
}

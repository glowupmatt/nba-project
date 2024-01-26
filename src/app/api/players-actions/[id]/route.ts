import prisma from "@/db/prismaDb";
import { NextResponse } from "next/server";

export async function deleteAllPlayers(
  req: Request,
  res: Response,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    await prisma.player.delete({
      where: {
        id,
      },
      include: {
        games: true,
        totalStats: true,
      },
    });
    console.log(`DELETED ${id} FROM DB`);
    return new NextResponse(JSON.stringify(`DELETED ${id} FROM DB`), {
      status: 200,
    });
  } catch (error) {
    console.log(error, "ERROR IN DELETE ALL PLAYERS");
  }
}

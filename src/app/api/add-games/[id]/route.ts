import prisma from "@/db/prismaDb";
import { UpdateData } from "@/utils/types";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const rawData = await new Response(req.body).text();
    const parsedBody = JSON.parse(rawData);
    console.log(parsedBody, "BODDDDDYYYYYYYYY IN GAME STATS");
    const { id } = params;

    const player = await prisma.player.update({
      where: {
        id,
      },
      data: {
        games: {
          create: {
            playerName: parsedBody.playerName,
            minutesPlayed: parsedBody.minutesPlayed,
            fieldGoals: parsedBody.fieldGoals,
            fieldGoalAttempts: parsedBody.fieldGoalAttempts,
            fieldGoalPercentage: parsedBody.fieldGoalPercentage,
            threePointers: parsedBody.threePointers,
            twoPointers: parsedBody.twoPointers,
            totalRebounds: parsedBody.totalRebounds,
            assists: parsedBody.assists,
            blocks: parsedBody.blocks,
            turnovers: parsedBody.turnovers,
            points: parsedBody.points,
          },
        },
      },
    });
    console.log(`updated ${parsedBody.playerName} game stats`);
    return new NextResponse(JSON.stringify(player), { status: 200 });
  } catch (error) {
    console.log(error, "ERROR IN CREATE GAMES");
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
}

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
    console.log(parsedBody, "BODDDDDYYYYYYYYY IN TOTAL STATS");
    const { id } = params;
    const player = await prisma.player.update({
      where: {
        id,
      },
      data: {
        totalStats: {
          create: {
            totalGamesPlayed: parsedBody.totalGamesPlayed,
            totalGamesStarted: parsedBody.totalGamesStarted,
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
            freeThrows: parsedBody.freeThrows,
            freeThrowAttempts: parsedBody.freeThrowAttempts,
            steals: parsedBody.steals,
          },
        },
      },
    });
    console.log(`updated ${parsedBody.playerName} total stats`);
    return new NextResponse(JSON.stringify(player), { status: 200 });
  } catch (error) {
    console.log(error, "ERROR IN CREATE TOTAL STATS");
    return new NextResponse(JSON.stringify("ERROR IN CREATE TOTAL STATS"), {
      status: 500,
    });
  }
}

import prisma from "@/db/prismaDb";
import { UpdateData } from "@/utils/types";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, res: Response) {
  try {
    await prisma.game.deleteMany({});
    console.log(`DELETED ALL STATS FROM DB`);
    return new NextResponse(JSON.stringify(`DELETED ALL STATS FROM DB`), {
      status: 200,
    });
  } catch (error) {
    console.log(error, "ERROR DELETE ALL STATS FROM DB");
  }
}

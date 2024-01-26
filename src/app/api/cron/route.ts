import axios from "axios";
import createAllStats from "@/utils/updatePlayerData";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }
  try {
    console.log("CRON JOB STARTED");
    //   await createAllStats("game");
    //     await createAllStats("total");
    return new NextResponse();
  } catch (err) {
    console.log(err);
  }
}

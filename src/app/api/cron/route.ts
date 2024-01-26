import axios from "axios";
import createAllStats from "@/utils/updatePlayerData";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    console.log("CRON JOB STARTED");
    await createAllStats("game");
    await createAllStats("total");
    return new NextResponse("CRON JOB FINISHED");
  } catch (err) {
    console.log(err);
  }
}

import axios from "axios";
import { UpdateData } from "@/utils/types";

const URL = process.env.DEVELOPMENT_URL || "http://localhost:3000";

//TotalStats ACTIONS

export const createTotalStats = async (id: string, body: UpdateData) => {
  try {
    if (body.playerName === "undefined") {
      console.log("PLAYER NAME UNDEFINED");
      return;
    } else {
      console.log(body, "BODY");
      const dbData: UpdateData = {
        playerName: body.playerName,
        totalGamesPlayed: body.totalGamesPlayed,
        totalGamesStarted: body.totalGamesStarted,
        minutesPlayed: body.minutesPlayed,
        fieldGoals: body.fieldGoals,
        fieldGoalAttempts: body.fieldGoalAttempts,
        fieldGoalPercentage: body.fieldGoalPercentage,
        threePointers: body.threePointers,
        twoPointers: body.twoPointers,
        totalRebounds: body.totalRebounds,
        assists: body.assists,
        blocks: body.blocks,
        turnovers: body.turnovers,
        points: body.points,
        freeThrows: body.freeThrows,
        freeThrowAttempts: body.freeThrowAttempts,
        steals: body.steals,
      };
      const response = await axios.put(`${URL}/add-total-stats/${id}`, dbData);
      const data = response.data;
      console.log(`called api for ${body.playerName} total stats`);
      return data;
    }
  } catch (error) {
    console.log(error, "ERROR IN CREATE TOTAL STATS, ROUTER");
  }
};

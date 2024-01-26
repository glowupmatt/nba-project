import axios from "axios";
import { UpdateData } from "@/utils/types";

const URL = process.env.DEVELOPMENT_URL || "http://localhost:3000";

//GAME ACTIONS

export const createGames = async (id: string, body: UpdateData) => {
  try {
    console.log(id, "GAMES ID");
    if (!body.playerName) {
      console.log("PLAYER NAME UNDEFINED");
      return;
    } else {
      const dbData: UpdateData = {
        playerName: body.playerName,
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
      };

      const response = await axios.put(`${URL}/add-games/${id}`, dbData);
      const data = response.data;
      console.log(`called api for ${body.playerName} game stats`);
      return data;
    }
  } catch (error) {
    console.log(error, "ERROR IN CREATE GAMES, ROUTER");
  }
};

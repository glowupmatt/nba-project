import axios from "axios";
import { url } from "inspector";

const URL = process.env.DEVELOPMENT_URL || "http://localhost:3000";

//PLAYER ACTIONS

export const createPlayers = async () => {
  try {
    axios.post(`https://nba-project-iota.vercel.app/api/players-actions`);
  } catch (error) {
    console.log(error, "ERROR IN CREATE PLAYERS, ROUTER");
  }
};

export const getAllPlayers = async () => {
  try {
    const players = await axios.get(
      "https://nba-project-iota.vercel.app/api/players-actions"
    );
    return players;
  } catch (error) {
    console.log(error, "ERROR IN GET ALL PLAYERS, ROUTER");
  }
};

export const deleteAllPlayers = async () => {
  try {
    axios.delete(`https://nba-project-iota.vercel.app/api/players-actions`);
  } catch (error) {
    console.log(error, "ERROR IN DELETE ALL PLAYERS, ROUTER");
  }
};

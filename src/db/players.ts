import axios from "axios";
import { url } from "inspector";

const URL = process.env.DEVELOPMENT_URL || "http://localhost:3000";

//PLAYER ACTIONS

export const createPlayers = async () => {
  try {
    axios.post(`${URL}/players-actions`);
  } catch (error) {
    console.log(error, "ERROR IN CREATE PLAYERS, ROUTER");
  }
};

export const getAllPlayers = async () => {
  try {
    const players = await axios.get(`${URL}/players-actions`);
    return players.data;
  } catch (error) {
    console.log(error, "ERROR IN GET ALL PLAYERS, ROUTER");
  }
};

export const deleteAllPlayers = async () => {
  try {
    axios.delete(`${URL}/players-actions`);
  } catch (error) {
    console.log(error, "ERROR IN DELETE ALL PLAYERS, ROUTER");
  }
};

import createAllStats from "../utils/updatePlayerData";

export default async function addTotalStats() {
  try {
    await createAllStats("total");
  } catch (error) {
    console.log(error, "ERROR IN ADD TOTAL STATS, ROUTER");
  }
}

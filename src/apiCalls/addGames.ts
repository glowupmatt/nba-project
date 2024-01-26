import createAllStats from "../utils/updatePlayerData";

export default async function addGames(req: Request, res: Response) {
  try {
    console.log(req.body);
    await createAllStats("game");
  } catch (error) {
    console.log(error, "ERROR IN ADD TOTAL STATS, ROUTER");
  }
}

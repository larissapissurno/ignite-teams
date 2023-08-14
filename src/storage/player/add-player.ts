import { AppError } from "@utils/AppError";
import { getPlayersByGroup } from "./get-players-by-group";
import { PLAYER_COLLECTION } from "@storage/storage-config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type PlayerDTO = {
  team: string;
  name: string;
};

export async function addPlayer(
  newPlayer: PlayerDTO,
  groupName: string
): Promise<void> {
  try {
    const players = await getPlayersByGroup(groupName);

    const playerExists = players.find(
      (player: PlayerDTO) => player.name === newPlayer.name
    );

    if (playerExists) {
      throw new AppError(`Player already exists on team ${playerExists.team}`);
    }

    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${groupName}`,
      JSON.stringify([...players, newPlayer])
    );
  } catch (error) {
    throw error;
  }
}

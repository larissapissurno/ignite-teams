import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerDTO } from "./add-player";
import { getPlayersByGroup } from "./get-players-by-group";
import { PLAYER_COLLECTION } from "@storage/storage-config";

export async function removePlayer(
  playerName: string,
  groupName: string
): Promise<PlayerDTO[]> {
  try {
    const players = await getPlayersByGroup(groupName);

    const newPlayerList = players.filter(
      (player: PlayerDTO) => player.name !== playerName
    );

    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${groupName}`,
      JSON.stringify(newPlayerList)
    );

    return newPlayerList;
  } catch (error) {
    throw error;
  }
}

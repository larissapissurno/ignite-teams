import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerDTO } from "./add-player";
import { PLAYER_COLLECTION } from "@storage/storage-config";

export async function getPlayersByGroup(
  groupName: string
): Promise<PlayerDTO[]> {
  try {
    const collection = await AsyncStorage.getItem(
      `${PLAYER_COLLECTION}-${groupName}`
    );

    return collection ? JSON.parse(collection) : [];
  } catch (error) {
    throw error;
  }
}

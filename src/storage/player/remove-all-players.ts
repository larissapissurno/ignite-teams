import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storage-config";

export async function removeAllPlayers(groupName: string): Promise<void> {
  try {
    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${groupName}`,
      JSON.stringify([])
    );
  } catch (error) {
    throw error;
  }
}

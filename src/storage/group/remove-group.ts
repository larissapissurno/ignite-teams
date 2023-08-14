import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllGroups } from "./get-all-groups";
import { GROUP_COLLECTION } from "@storage/storage-config";
import { removeAllPlayers } from "@storage/player/remove-all-players";

export async function removeGroup(groupName: string): Promise<string[]> {
  try {
    const groups = await getAllGroups();

    const newGroupList = groups.filter((group) => group !== groupName);

    await removeAllPlayers(groupName);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(newGroupList));

    return newGroupList;
  } catch (error) {
    throw error;
  }
}

import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storage-config";
import { getAllGroups } from "./get-all-groups";

export async function newGroup(newGroupName: string): Promise<void> {
  try {
    const groups = await getAllGroups();

    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify([...groups, newGroupName])
    );
  } catch (error) {
    throw error;
  }
}

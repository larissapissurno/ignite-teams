import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storage-config";
import { getAllGroups } from "./get-all-groups";
import { AppError } from "@utils/AppError";

export async function newGroup(newGroupName: string): Promise<void> {
  try {
    const groups = await getAllGroups();

    const groupExists = groups.includes(newGroupName);

    if (groupExists) {
      throw new AppError("Group already exists");
    }

    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify([...groups, newGroupName])
    );
  } catch (error) {
    throw error;
  }
}

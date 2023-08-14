import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storage-config";

export async function getAllGroups(): Promise<string[]> {
  try {
    const collection = await AsyncStorage.getItem(GROUP_COLLECTION);
    const groups = collection ? JSON.parse(collection) : [];

    return groups;
  } catch (error) {
    throw error;
  }
}

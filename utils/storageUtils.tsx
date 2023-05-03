import AsyncStorage from "@react-native-async-storage/async-storage";

export async function setItemStorage(key: string, value: any): Promise<any> {
  try {
    await AsyncStorage.setItem("@" + key, JSON.stringify(value));
    return true;
  } catch (e: any) {
    return console.log(e.message);
  }
}

export async function getItemStorage(key: string): Promise<any> {
  try {
    const jsonValue: any = await AsyncStorage.getItem("@" + key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e: any) {
    return console.log(e.message);
  }
}

export async function clearStorage(): Promise<any> {
  try {
    await AsyncStorage.clear();
    return true;
  } catch (e: any) {
    return console.log(e.message);
  }
}

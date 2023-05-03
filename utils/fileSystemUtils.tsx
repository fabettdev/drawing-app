import * as FileSystem from "expo-file-system";

export async function uriToBase64(uri: string): Promise<string> {
  const fileAsString: string = await FileSystem.readAsStringAsync(uri, {
    encoding: FileSystem.EncodingType.Base64,
  });
  return "data:image/png;base64," + fileAsString;
}

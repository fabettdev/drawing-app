import { RefObject } from "react";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import { captureRef } from "react-native-view-shot";

export async function createScreenshot(
  ref: RefObject<any>,
  fileName: string,
  quality: number
): Promise<MediaLibrary.AssetRef> {
  const localUri: string = await captureRef(ref, {
    fileName,
    quality,
  });

  const asset: MediaLibrary.AssetRef = await MediaLibrary.createAssetAsync(
    localUri
  );

  return asset;
}

export async function addAssetToAlbum(
  albumName: string,
  asset: MediaLibrary.AssetRef
) {
  const album: MediaLibrary.AlbumRef | null = await MediaLibrary.getAlbumAsync(
    albumName
  );

  if (album === null) {
    await MediaLibrary.createAlbumAsync(albumName, asset, false);
  } else {
    await MediaLibrary.addAssetsToAlbumAsync(asset, album, false);
  }
}

export async function pickImage(): Promise<
  ImagePicker.ImagePickerAsset | false
> {
  const result: ImagePicker.ImagePickerResult =
    await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
  if (result.canceled) {
    return false;
  }
  return result.assets[0];
}

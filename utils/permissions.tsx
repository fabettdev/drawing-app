import * as MediaLibrary from "expo-media-library";
import { Camera, PermissionResponse } from "expo-camera";
import { PermissionsObject } from "./types";

export async function getMediaLibraryPermissions(): Promise<PermissionsObject> {
  const response: PermissionsObject = {
    granted: true,
    message: "",
  };

  const isMediaLibraryAvailable: boolean =
    await MediaLibrary.isAvailableAsync();

  if (!isMediaLibraryAvailable) {
    response.granted = false;
    response.message = "Non è disponibile una libreria a cui accedere";
  }

  const permissions: MediaLibrary.PermissionResponse =
    await MediaLibrary.requestPermissionsAsync();

  if (!permissions.granted) {
    response.granted = false;
    response.message = "Per salvare il file bisogna accettare i permessi";
  }

  return response;
}

export async function getCameraPermissions(): Promise<PermissionsObject> {
  const response: PermissionsObject = {
    granted: true,
    message: "",
  };

  const hasPermissions: PermissionResponse =
    await Camera.getCameraPermissionsAsync();

  if (!hasPermissions) {
    const permissions: PermissionResponse =
      await Camera.requestCameraPermissionsAsync();

    if (!permissions.granted) {
      response.granted = false;
      response.message = "Per salvare il file bisogna accettare i permessi";
    }
  }

  return response;
}

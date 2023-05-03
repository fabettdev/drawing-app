// React
import {
  Component,
  useState,
  useEffect,
  useRef,
  EffectCallback,
  ReactNode,
} from "react";
// React Native
import { Image, View, ImageBackground, Dimensions } from "react-native";
// React Native Signature Canvas
import SignatureScreen, {
  SignatureViewRef,
} from "react-native-signature-canvas";
// Types - Interfaces
import { PermissionsObject, PictureObject } from "../../utils/types";
import { PadProps, initialPadState, PadState } from "../../utils/initialStates";
// Events
import { onControlEvents, offControlEvents } from "../../events/events";
// MediaLibrary
import {
  createScreenshot,
  addAssetToAlbum,
  pickImage,
} from "../../utils/mediaLibraryUtils";
// Number functions
import {
  getHeightFromRatio,
  getRandomIntInclusive,
} from "../../utils/numberUtils";
// File System
import { uriToBase64 } from "../../utils/fileSystemUtils";
// ImagePicker
import * as ImagePicker from "expo-image-picker";
// Style
import padStyle, { webStyle } from "./padStyle";
// Permissions
import { getMediaLibraryPermissions } from "../../utils/permissions";

class _Pad extends Component<PadProps, PadState> {
  constructor(props: any) {
    super(props);

    this.state: PadState = initialPadState;
  }

  render(): ReactNode {
    return <></>;
  }
}

export default _Pad;

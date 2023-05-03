// React
import { useState, useEffect, useRef, EffectCallback } from "react";
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

function Pad(props: PadProps): JSX.Element {
  const ref = useRef<SignatureViewRef>(null);
  const viewRef = useRef<View>(null);

  const [state, setState] = useState<PadState>(initialPadState);

  useEffect((): ReturnType<EffectCallback> => {
    onControlEvents(
      clearPad,
      redoPad,
      undoPad,
      setBgPad,
      saveImg,
      startDrawing,
      startErasing,
      changeSize,
      changeColor,
      setPictureBgPad
    );

    return (): void =>
      offControlEvents(
        clearPad,
        redoPad,
        undoPad,
        setBgPad,
        saveImg,
        startDrawing,
        startErasing,
        changeSize,
        changeColor,
        setPictureBgPad
      );
  }, []);

  useEffect((): ReturnType<EffectCallback> => {
    if (state.signature === "") {
      startDrawing();
      props.setDrawing();
    }

    changeSize(props.size);
    changeColor(props.hex);
  }, [state.bgSrc, state.signature]);

  const viewWidth: number = Dimensions.get("window").width;
  const viewHeight: number = Dimensions.get("window").height;

  const top: number =
    state.bgHeight && viewHeight ? (viewHeight - state.bgHeight) / 2 : 0;

  async function setBgPad() {
    const img: ImagePicker.ImagePickerAsset | false = await pickImage();
    if (!img) return;

    const bgSrc: string = await uriToBase64(img.uri);

    const newHeight: number = getHeightFromRatio(
      viewWidth,
      img.width,
      img.height
    );

    setState({
      ...state,
      bgSrc,
      bgHeight: newHeight,
    });
  }

  async function setPictureBgPad(img: PictureObject): Promise<void> {
    const bgSrc: string = await uriToBase64(img.uri);

    const newHeight: number = getHeightFromRatio(
      viewWidth,
      img.width,
      img.height
    );

    setState({
      ...state,
      bgSrc,
      bgHeight: newHeight,
    });
  }

  async function saveImg(): Promise<void> {
    const response: PermissionsObject = await getMediaLibraryPermissions();

    if (!response.granted) {
      return console.log(response.message);
    }

    const filename: string = "draw-app-" + getRandomIntInclusive(1, 500000);
    const asset: any = await createScreenshot(viewRef, filename, 1);

    await addAssetToAlbum("Drawing App", asset);
  }

  function startDrawing(): void {
    ref?.current?.draw();
  }

  function startErasing(): void {
    ref?.current?.erase();
  }

  function changeSize(size: number): void {
    ref?.current?.changePenSize(size, size);
  }

  function changeColor(hex: string): void {
    ref?.current?.changePenColor(hex);
  }

  function clearPad(): void {
    ref?.current?.clearSignature();
    setState({
      ...state,
      signature: "",
      bgSrc: "",
    });
  }

  function undoPad(): void {
    ref?.current?.undo();
  }

  function redoPad(): void {
    ref?.current?.redo();
  }

  function readSignature(): void {
    ref?.current?.readSignature();
  }

  function setSignature(signature: string): void {
    setState({
      ...state,
      signature,
    });
  }

  return (
    <View style={padStyle.container}>
      <View
        ref={viewRef}
        style={[
          padStyle.screenshotView,
          {
            backgroundColor: "white",
            height: state.bgHeight || "100%",
          },
        ]}
      >
        <ImageBackground
          source={{ uri: state.bgSrc !== "" ? state.bgSrc : undefined }}
          style={{
            width: "100%",
            height: state.bgHeight || "100%",
          }}
        >
          <Image
            source={{
              uri: state.signature !== "" ? state.signature : undefined,
            }}
            style={
              (padStyle.screenshotView, { height: state.bgHeight || "100%" })
            }
          />
        </ImageBackground>
      </View>

      <View style={padStyle.container}>
        <SignatureScreen
          style={[
            padStyle.signatureScreen,
            {
              top,
              height: state.bgHeight || "100%",
            },
          ]}
          bgSrc={state.bgSrc}
          bgWidth={viewWidth}
          bgHeight={state.bgHeight}
          webStyle={webStyle}
          ref={ref}
          onOK={setSignature}
          onEnd={readSignature}
          onUndo={readSignature}
          onRedo={readSignature}
        />
      </View>
    </View>
  );
}

export default Pad;

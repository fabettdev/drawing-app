import { useState, useRef } from "react";
// Native
import { View, TouchableOpacity, Modal } from "react-native";
// Style
import cameraModalStyle from "./cameraModalStyle";
// Events
import { takePictureEvent } from "../../events/events";
// Icons
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
// Camera
import { Camera, CameraType, CameraCapturedPicture } from "expo-camera";
// Types - Interfaces
import {
  CameraModalProps,
  CameraModalState,
  initialCameraModalState,
} from "../../utils/initialStates";

function CameraModal(props: CameraModalProps): JSX.Element {
  const camera = useRef<Camera>(null);

  const [state, setState] = useState<CameraModalState>(initialCameraModalState);

  function hideCamera(): void {
    props.hideCamera();
  }

  function toggleCameraType(): void {
    setState({
      ...state,
      type: state.type === CameraType.back ? CameraType.front : CameraType.back,
    });
  }

  async function takePicture(): Promise<void> {
    const img: CameraCapturedPicture | undefined =
      await camera.current?.takePictureAsync();
    takePictureEvent.emit("onTakePicture", img);
    props.hideMenu();
  }

  return (
    <Modal statusBarTranslucent={true}>
      <View style={cameraModalStyle.container}>
        <Camera
          ref={camera}
          style={{
            width: state.screen.width,
            height: (state.screen.width / 9) * 16,
            position: "relative",
          }}
          ratio="16:9"
          type={state.type}
        >
          <View style={cameraModalStyle.actionsContainer}>
            <View style={cameraModalStyle.buttons}>
              <TouchableOpacity onPress={hideCamera}>
                <FontAwesome
                  name="close"
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={takePicture}>
                <MaterialIcons
                  name="motion-photos-on"
                  size={75}
                  color="white"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleCameraType}>
                <Fontisto
                  name="arrow-swap"
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </View>
        </Camera>
      </View>
    </Modal>
  );
}

export default CameraModal;

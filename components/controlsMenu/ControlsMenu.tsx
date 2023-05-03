import { useState } from "react";
// Native
import { Text, View, TouchableOpacity } from "react-native";
// Style
import controlsMenuStyle from "./controlsMenuStyle";
// Components
import CameraModal from "../cameraModal/CameraModal";
// Events
import { clearEvent, pickBgEvent, saveImgEvent } from "../../events/events";
// Icons
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
// Navigation
import { useNavigation } from "@react-navigation/native";
// Types - Interfaces
import {
  ControlsMenuState,
  initialControlsMenuState,
} from "../../utils/initialStates";
// Permissions
import { getCameraPermissions } from "../../utils/permissions";
import { PermissionsObject } from "../../utils/types";

function ControlsMenu(props: any): JSX.Element {
  const navigation: any = useNavigation();

  const [state, setState] = useState<ControlsMenuState>(
    initialControlsMenuState
  );

  function dispatchOnClearPad(): void {
    clearEvent.emit("onClearPad");
    props.hideMenu();
  }

  function dispatchOnPickBgPad(): void {
    pickBgEvent.emit("onPickBgPad");
    props.hideMenu();
  }

  function dispatchOnSaveImg(): void {
    saveImgEvent.emit("onSaveImg");
    props.hideMenu();
  }

  function goToTutorial() {
    props.hideMenu();
    navigation.navigate("Tutorial");
  }

  async function showCamera() {
    const response: PermissionsObject = await getCameraPermissions();

    const showCamera = response.granted;

    if (!showCamera)
      return console.log(
        "Devi accettare i permessi della fotocamera per scattare una fotografia"
      );

    setState({
      ...state,
      showCamera,
    });
  }

  function hideCamera() {
    setState({
      ...state,
      showCamera: false,
    });
  }

  return (
    <>
      <View style={controlsMenuStyle.controlsMenu}>
        <View style={controlsMenuStyle.boxesContainer}>
          <TouchableOpacity
            style={[controlsMenuStyle.box, controlsMenuStyle.boxTopLeft]}
            onPress={dispatchOnClearPad}
          >
            <Entypo
              name="new-message"
              size={34}
              color="#333"
            />
            <Text style={controlsMenuStyle.text}>Nuovo schizzo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[controlsMenuStyle.box, controlsMenuStyle.boxTopRight]}
            onPress={dispatchOnSaveImg}
          >
            <MaterialCommunityIcons
              name="content-save-edit-outline"
              size={34}
              color="#333"
            />
            <Text style={controlsMenuStyle.text}>Salva schizzo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[controlsMenuStyle.box, controlsMenuStyle.boxBottomLeft]}
            onPress={dispatchOnPickBgPad}
          >
            <MaterialIcons
              name="add-photo-alternate"
              size={34}
              color="#333"
            />
            <Text style={controlsMenuStyle.text}>Carica sfondo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[controlsMenuStyle.box, controlsMenuStyle.boxBottomRight]}
            onPress={showCamera}
          >
            <MaterialIcons
              name="add-a-photo"
              size={34}
              color="#333"
            />
            <Text style={controlsMenuStyle.text}>Scatta sfondo</Text>
          </TouchableOpacity>
        </View>

        <View style={controlsMenuStyle.footer}>
          <TouchableOpacity
            style={controlsMenuStyle.tutorial}
            onPress={goToTutorial}
          >
            <MaterialIcons
              name="slideshow"
              size={24}
              color="#333"
            />
            <Text style={controlsMenuStyle.text}>Tutorial</Text>
          </TouchableOpacity>
        </View>
      </View>
      {!!state.showCamera && (
        <CameraModal
          hideCamera={hideCamera}
          hideMenu={props.hideMenu}
        />
      )}
    </>
  );
}

export default ControlsMenu;

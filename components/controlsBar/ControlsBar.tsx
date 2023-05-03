import { useState } from "react";
import { View, TouchableOpacity } from "react-native";
// Style
import controlsBarStyle from "./controlsBarStyle";
// Types - Interfaces
import {
  ControlsBarState,
  initialControlsBarState,
  ControlsBarProps,
} from "../../utils/initialStates";
// Events
import {
  undoEvent,
  redoEvent,
  startDrawingEvent,
  startErasingEvent,
} from "../../events/events";
// Icons
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

function ControlsBar(props: ControlsBarProps): JSX.Element {
  const [state, setState] = useState<ControlsBarState>(initialControlsBarState);

  function dispatchOnUndoPad(): void {
    undoEvent.emit("onUndoPad");
  }

  function dispatchOnRedoPad(): void {
    redoEvent.emit("onRedoPad");
  }

  function dispatchOnDrawPad(): void {
    startDrawingEvent.emit("onDrawPad");
    props.setDrawing();
  }

  function dispatchOnErasePad(): void {
    startErasingEvent.emit("onErasePad");
    props.setErasing();
  }

  function toggleMenu(): void {
    props.toggleMenu();
  }

  function toggleSizeSlider(): void {
    props.toggleSizeSlider();
  }

  function toggleColorPicker(): void {
    props.toggleColorPicker();
  }

  function showBar(): void {
    setState({
      ...state,
      showBar: true,
    });
  }

  function hideBar(): void {
    props.hideControls();
    setState({
      ...state,
      showBar: false,
    });
  }

  return (
    <View style={controlsBarStyle.container}>
      {!!state.showBar ? (
        <View style={controlsBarStyle.innerContainer}>
          <TouchableOpacity
            onPress={dispatchOnUndoPad}
            style={{
              height: "100%",
            }}
          >
            <Ionicons
              name="arrow-undo"
              size={24}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={dispatchOnRedoPad}
            style={{
              height: "100%",
            }}
          >
            <Ionicons
              name="arrow-redo"
              size={24}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={dispatchOnDrawPad}
            style={{
              height: "100%",
            }}
          >
            <Entypo
              name="pencil"
              size={24}
              color={!!props.isDrawing ? "#1073ff" : "black"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={toggleColorPicker}
            style={{
              height: "100%",
            }}
          >
            <Ionicons
              name="color-palette"
              size={24}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={toggleSizeSlider}
            style={{
              height: "100%",
            }}
          >
            <MaterialIcons
              name="line-weight"
              size={24}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={dispatchOnErasePad}
            style={{
              height: "100%",
            }}
          >
            <Entypo
              name="eraser"
              size={24}
              color={!!props.isErasing ? "#1073ff" : "black"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: "100%",
            }}
            onPress={toggleMenu}
          >
            <MaterialIcons
              name="menu-book"
              size={24}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={hideBar}
            style={{
              height: "100%",
            }}
          >
            <AntDesign
              name="menu-fold"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={controlsBarStyle.transparentContainer}>
          <TouchableOpacity onPress={showBar}>
            <AntDesign
              name="menu-fold"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export default ControlsBar;

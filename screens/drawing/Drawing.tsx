import { useState } from "react";
// Style
import drawingStyle from "./drawingStyle";
// Native
import { View } from "react-native";
// Components
import Pad from "../../components/pad/Pad";
import ControlsBar from "../../components/controlsBar/ControlsBar";
import ControlsMenu from "../../components/controlsMenu/ControlsMenu";
import SizeSlider from "../../components/sizeSlider/SizeSlider";
import ColorPicker from "../../components/colorPicker/ColorPicker";
// Types - Interfaces
import { DrawingState, initialDrawingState } from "../../utils/initialStates";

function Drawing(): JSX.Element {
  const [state, setState] = useState<DrawingState>(initialDrawingState);

  function toggleMenu(): void {
    setState((prevState) => ({
      ...prevState,
      showSizeSlider: false,
      showColorPicker: false,
      showMenu: !prevState.showMenu,
    }));
  }

  function toggleSizeSlider(): void {
    setState((prevState) => ({
      ...prevState,
      showMenu: false,
      showColorPicker: false,
      showSizeSlider: !prevState.showSizeSlider,
    }));
  }

  function toggleColorPicker(): void {
    setState((prevState) => ({
      ...prevState,
      showMenu: false,
      showSizeSlider: false,
      showColorPicker: !prevState.showColorPicker,
    }));
  }

  function hideMenu(): void {
    setState({
      ...state,
      showMenu: false,
    });
  }

  function hideControls(): void {
    setState({
      ...state,
      showMenu: false,
      showSizeSlider: false,
      showColorPicker: false,
    });
  }

  function changeSize(size: number): void {
    setState({
      ...state,
      size,
    });
  }

  function changeColor(
    red: number,
    green: number,
    blue: number,
    hex: string
  ): void {
    setState({
      ...state,
      red,
      green,
      blue,
      hex,
    });
  }

  function setDrawing() {
    setState({
      ...state,
      isDrawing: true,
      isErasing: false,
    });
  }

  function setErasing() {
    setState({
      ...state,
      isDrawing: false,
      isErasing: true,
    });
  }

  return (
    <View style={drawingStyle.container}>
      <ControlsBar
        toggleMenu={toggleMenu}
        toggleSizeSlider={toggleSizeSlider}
        toggleColorPicker={toggleColorPicker}
        hideControls={hideControls}
        setDrawing={setDrawing}
        setErasing={setErasing}
        isErasing={state.isErasing}
        isDrawing={state.isDrawing}
      />
      <Pad
        setDrawing={setDrawing}
        hex={state.hex}
        size={state.size}
      />
      {(!!state.showMenu ||
        !!state.showSizeSlider ||
        !!state.showColorPicker) && (
        <View style={drawingStyle.centeredContainer}>
          {!!state.showMenu && <ControlsMenu hideMenu={hideMenu} />}
          {!!state.showSizeSlider && (
            <SizeSlider
              changeSize={changeSize}
              size={state.size}
            />
          )}
          {!!state.showColorPicker && (
            <ColorPicker
              red={state.red}
              green={state.green}
              blue={state.blue}
              hex={state.hex}
              changeColor={changeColor}
            />
          )}
        </View>
      )}
    </View>
  );
}

export default Drawing;

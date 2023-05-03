import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
// Style
import colorPickerStyle from "./colorPickerStyle";
// Types - Interfaces
import { ColorPickerState, ColorPickerProps } from "../../utils/initialStates";
import { ColorItemObject } from "../../utils/types";
// Slider
import { Slider } from "@miblanchard/react-native-slider";
// Events
import { changeColorEvent } from "../../events/events";
// Utils
import { rgbToHex, colors } from "../../utils/colorUtils";

function ColorPicker(props: any): JSX.Element {
  const initialColorPickerState: ColorPickerState = {
    red: props.red,
    green: props.green,
    blue: props.blue,
    hex: props.hex,
  };

  const [state, setState] = useState<ColorPickerState>(initialColorPickerState);

  function setBlue(e: any) {
    const color: number = parseInt(e[0]);
    const hex: string = rgbToHex(state.red, state.green, color);

    setState({
      ...state,
      blue: color,
      hex,
    });
  }

  function setGreen(e: any) {
    const color: number = parseInt(e[0]);
    const hex: string = rgbToHex(state.red, color, state.blue);

    setState({
      ...state,
      green: color,
      hex,
    });
  }

  function setRed(e: any) {
    const color: number = parseInt(e[0]);
    const hex: string = rgbToHex(color, state.green, state.blue);

    setState({
      ...state,
      red: color,
      hex,
    });
  }

  function emitColors() {
    changeColorEvent.emit("onChangeColor", state.hex);
    props.changeColor(state.red, state.green, state.blue, state.hex);
  }

  const setStandardColor =
    (red: number, green: number, blue: number) => (): void => {
      const hex: string = rgbToHex(red, green, blue);
      changeColorEvent.emit("onChangeColor", hex);
      props.changeColor(red, green, blue, hex);
      setState({
        ...state,
        red,
        green,
        blue,
        hex,
      });
    };

  function mapColors(item: ColorItemObject, key: number): JSX.Element {
    return (
      <TouchableOpacity
        key={`${key}-${Math.random()}`}
        onPress={setStandardColor(item.red, item.green, item.blue)}
        style={[
          colorPickerStyle.singleColor,
          {
            backgroundColor: item.hex,
          },
        ]}
      />
    );
  }

  return (
    <View style={colorPickerStyle.container}>
      <View style={colorPickerStyle.colors}>{colors.map(mapColors)}</View>
      <View
        style={[
          colorPickerStyle.colorPreview,
          {
            backgroundColor: state.hex,
          },
        ]}
      />
      <View style={colorPickerStyle.sliders}>
        <Text style={{ flexBasis: "8%" }}>R</Text>
        <View style={{ flexBasis: "80%" }}>
          <Slider
            onSlidingComplete={emitColors}
            onValueChange={setRed}
            value={state.red}
            minimumValue={0}
            maximumValue={255}
            step={1}
            maximumTrackTintColor="#b7b7b7"
            minimumTrackTintColor="#1073ff"
          />
        </View>
        <Text style={{ flexBasis: "12%", textAlign: "right" }}>
          {state.red}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ flexBasis: "8%" }}>G</Text>
        <View style={{ flexBasis: "80%" }}>
          <Slider
            onSlidingComplete={emitColors}
            onValueChange={setGreen}
            value={state.green}
            minimumValue={0}
            maximumValue={255}
            step={1}
            maximumTrackTintColor="#b7b7b7"
            minimumTrackTintColor="#1073ff"
          />
        </View>
        <Text style={{ flexBasis: "12%", textAlign: "right" }}>
          {state.green}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ flexBasis: "8%" }}>B</Text>
        <View style={{ flexBasis: "80%" }}>
          <Slider
            onSlidingComplete={emitColors}
            onValueChange={setBlue}
            value={state.blue}
            minimumValue={0}
            maximumValue={255}
            step={1}
            maximumTrackTintColor="#b7b7b7"
            minimumTrackTintColor="#1073ff"
          />
        </View>
        <Text style={{ flexBasis: "12%", textAlign: "right" }}>
          {state.blue}
        </Text>
      </View>
    </View>
  );
}

export default ColorPicker;

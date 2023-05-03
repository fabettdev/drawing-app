import { useState } from "react";
// Native
import { View, Text } from "react-native";
// Style
import sizeSliderStyle from "./sizeSliderStyle";
// Slider
import { Slider } from "@miblanchard/react-native-slider";
// Events
import { changeSizeEvent } from "../../events/events";
// Types - Interfaces
import { SizeSliderState, SizeSliderProps } from "../../utils/initialStates";

function SizeSlider(props: SizeSliderProps): JSX.Element {
  const initialSizeSliderState: SizeSliderState = {
    size: props.size,
  };

  const [state, setState] = useState<SizeSliderState>(initialSizeSliderState);

  function onValueChange(e: any): void {
    const value: number = parseFloat(e);
    setState({
      ...state,
      size: value,
    });
  }

  function onSlidingComplete(e: any): void {
    const value: number = parseFloat(e);
    changeSizeEvent.emit("onChangeSize", value);
    props.changeSize(value);
  }

  return (
    <View style={sizeSliderStyle.container}>
      <Text style={sizeSliderStyle.heading}>{state.size.toFixed(2)}</Text>
      <Slider
        onValueChange={onValueChange}
        onSlidingComplete={onSlidingComplete}
        value={state.size}
        minimumValue={0.1}
        maximumValue={10}
        step={0.05}
        maximumTrackTintColor="#b7b7b7"
        minimumTrackTintColor="#1073ff"
      />
    </View>
  );
}

export default SizeSlider;

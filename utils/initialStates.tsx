import { Dimensions } from "react-native";
import { CameraType } from "expo-camera";

// ROUTING
export interface RoutingState {
  tutorialDone: boolean;
  isLoading: boolean;
}

export const initialRoutingState: RoutingState = {
  tutorialDone: false,
  isLoading: true,
};

// DRAWING STATE
export interface DrawingState {
  showMenu: boolean;
  showSizeSlider: boolean;
  showColorPicker: boolean;
  size: number;
  hex: string;
  red: number;
  green: number;
  blue: number;
  isDrawing: boolean;
  isErasing: boolean;
}

export const initialDrawingState: DrawingState = {
  showMenu: false,
  showSizeSlider: false,
  showColorPicker: false,
  size: 0.5,
  hex: "#000000",
  red: 0,
  green: 0,
  blue: 0,
  isDrawing: true,
  isErasing: false,
};

// PAD
export interface PadProps {
  setDrawing: Function;
  hex: string;
  size: number;
}

export interface PadState {
  signature: string;
  bgSrc: string;
  bgHeight: number | undefined;
}

export const initialPadState: PadState = {
  signature: "",
  bgSrc: "",
  bgHeight: undefined,
};

// SIZE SLIDER
export interface SizeSliderState {
  size: number;
}

export interface SizeSliderProps {
  size: number;
  changeSize: Function;
}

// CONTROLS MENU
export interface ControlsMenuProps {
  hideMenu: Function;
  navigation: any;
}

export interface ControlsMenuState {
  showCamera: boolean;
}

export const initialControlsMenuState: ControlsMenuState = {
  showCamera: false,
};

// CAMERA MODAL

export interface CameraModalProps {
  hideCamera: Function;
  hideMenu: Function;
}

export interface CameraModalState {
  type: CameraType;
  screen: {
    width: number;
    height: number;
  };
}

export const initialCameraModalState: CameraModalState = {
  type: CameraType.back,
  screen: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
};

// CONTROLS BAR
export interface ControlsBarState {
  showBar: boolean;
}

export const initialControlsBarState: ControlsBarState = {
  showBar: true,
};

export interface ControlsBarProps {
  toggleMenu: Function;
  toggleSizeSlider: Function;
  toggleColorPicker: Function;
  hideControls: Function;
  setDrawing: Function;
  setErasing: Function;
  isErasing: boolean;
  isDrawing: boolean;
}

// COLOR PICKER
export interface ColorPickerState {
  red: number;
  green: number;
  blue: number;
  hex: string;
}

export interface ColorPickerProps {
  red: number;
  green: number;
  blue: number;
  hex: string;
  changeColor: Function;
}

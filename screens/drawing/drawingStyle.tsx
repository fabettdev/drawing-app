import { StyleSheet } from "react-native";

const drawingStyle = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  centeredContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    elevation: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default drawingStyle;

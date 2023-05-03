import { StyleSheet } from "react-native";

const cameraModalStyle = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
  actionsContainer: {
    width: "100%",
    position: "absolute",
    bottom: 30,
    alignItems: "center",
  },
  buttons: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
});

export default cameraModalStyle;

import { StyleSheet } from "react-native";

const colorPickerStyle = StyleSheet.create({
  container: {
    width: "80%",
    backgroundColor: "#EEE",
    borderRadius: 20,
    padding: 20,
  },
  colors: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  singleColor: {
    width: "20%",
    height: 40,
    borderWidth: 1,
    borderColor: "#CCC",
  },
  colorPreview: {
    height: 40,
    marginBottom: 20,
    width: "100%",
  },
  sliders: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default colorPickerStyle;

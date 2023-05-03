import { StyleSheet } from "react-native";

const controlsMenuStyle = StyleSheet.create({
  controlsMenu: {
    backgroundColor: "#EEE",
    borderRadius: 20,
  },
  boxesContainer: {
    width: 220,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  boxTopLeft: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: "#CCC",
    marginTop: 10,
    marginLeft: 10,
  },
  boxTopRight: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#CCC",
    marginTop: 10,
    marginRight: 10,
  },
  boxBottomRight: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#CCC",
    marginBottom: 10,
    marginRight: 10,
  },
  boxBottomLeft: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: "#CCC",
    marginBottom: 10,
    marginLeft: 10,
  },
  text: {
    fontSize: 13,
  },
  footer: {
    paddingVertical: 5,
    borderTopWidth: 3,
    borderTopColor: "#CCC",
    marginHorizontal: 10,
  },
  tutorial: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
});

export default controlsMenuStyle;

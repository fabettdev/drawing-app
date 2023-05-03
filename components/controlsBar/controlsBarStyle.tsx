import { StyleSheet } from "react-native";

const controlsBarStyle = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    height: 40,
    backgroundColor: "#DDD",
    opacity: 0.8,
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  transparentContainer: {
    position: "absolute",
    top: 5,
    right: 10,
  },
});

export default controlsBarStyle;

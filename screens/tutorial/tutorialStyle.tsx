import { StyleSheet } from "react-native";

const tutorialStyle = StyleSheet.create({
  pageContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  iconsBetween: {
    width: "100%",
    height: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconsCentered: {
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "700",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10,
  },
  actionsContainer: {
    width: "100%",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    bottom: 25,
    paddingHorizontal: 40,
  },
  nextPage: {
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    position: "absolute",
    alignItems: "center",
    bottom: 25,
    paddingHorizontal: 40,
  },
  button: {
    backgroundColor: "white",
    width: "100%",
    paddingVertical: 20,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default tutorialStyle;

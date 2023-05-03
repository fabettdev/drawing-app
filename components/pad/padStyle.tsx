import { StyleSheet } from "react-native";

const padStyle = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "white",
  },
  signatureScreen: {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 5,
    elevation: 5,
  },
  screenshotView: {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: -10,
    elevation: -10,
  },
});

export const webStyle = `
    .m-signature-pad {
      position: fixed;
      top: 0;
      left: 0;
      right: 0,
      bottom: 0,
      border: 0;
      box-shadow: 0;
    }

    .m-signature-pad {
      box-shadow: none; border: none;
    } 

    .m-signature-pad--body {
      border: none;
    }

    .m-signature-pad--footer {
      display: none; margin: 0px;
    }
  `;

export default padStyle;

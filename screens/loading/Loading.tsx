import { View, ActivityIndicator, Platform } from "react-native";

function Loading(): JSX.Element {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator
        size={Platform.OS === "android" ? 100 : "large"}
        color="black"
      />
    </View>
  );
}

export default Loading;

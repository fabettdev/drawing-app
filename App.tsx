import Routing from "./routing/Routing";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Routing />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;

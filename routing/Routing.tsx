import { useState, useEffect, EffectCallback } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
// Interface
import { RoutingState, initialRoutingState } from "../utils/initialStates";
// Components
import Drawing from "../screens/drawing/Drawing";
import Tutorial from "../screens/tutorial/Tutorial";
import Loading from "../screens/loading/Loading";
// Async Storage
import { getItemStorage } from "../utils/storageUtils";

const Stack = createNativeStackNavigator();

function Routing(): JSX.Element {
  const [state, setState] = useState<RoutingState>(initialRoutingState);

  useEffect((): ReturnType<EffectCallback> => {
    checkTutorial();
  }, []);

  async function checkTutorial(): Promise<void> {
    const response: any = await getItemStorage("drawing-app-tutorial");
    console.log(typeof response);
    const tutorial: boolean = !!response ?? false;
    setState({
      ...state,
      tutorialDone: tutorial,
      isLoading: false,
    });
  }

  return !!state.isLoading ? (
    <Loading />
  ) : (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={!!state.tutorialDone ? "Drawing" : "Tutorial"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Tutorial"
          component={Tutorial}
        />
        <Stack.Screen
          name="Drawing"
          component={Drawing}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routing;

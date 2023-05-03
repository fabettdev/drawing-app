import { useRef, useState } from "react";
// Style
import tutorialStyle from "./tutorialStyle";
// Native
import { Text, View, TouchableOpacity } from "react-native";
import PagerView from "react-native-pager-view";
// Icons
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
// Async Storage
import { setItemStorage } from "../../utils/storageUtils";
// Navigation
import { useNavigation } from "@react-navigation/native";

function Tutorial(): JSX.Element {
  const pagerRef = useRef(null);
  const navigation: any = useNavigation();

  const [state, setState] = useState({
    index: 1,
  });

  function goToNextPage() {
    pagerRef?.current?.setPage(state.index + 1);
    setState((prevState) => ({
      ...state,
      index: prevState.index + 1,
    }));
  }

  async function goToDrawing() {
    const response: any = await setItemStorage("drawing-app-tutorial", true);
    if (!!response) return navigation.navigate("Drawing");
    return console.log("Qualcosa è andato storto");
  }

  function changeIndex(e: any) {
    setState({
      ...state,
      index: e.nativeEvent.position,
    });
  }

  return (
    <View style={{ flex: 1 }}>
      <PagerView
        initialPage={0}
        ref={pagerRef}
        style={{ flex: 1 }}
        onPageSelected={changeIndex}
      >
        <View
          key="1"
          style={[
            tutorialStyle.pageContainer,
            {
              backgroundColor: "#C6E0F5",
            },
          ]}
        >
          <View style={tutorialStyle.iconsBetween}>
            <MaterialCommunityIcons
              name="draw"
              size={120}
              color="black"
            />
            <FontAwesome
              name="plus"
              size={30}
              color="black"
            />
            <Entypo
              name="eraser"
              size={100}
              color="black"
            />
          </View>

          <View style={{ height: "50%" }}>
            <Text style={tutorialStyle.header}>Inizia a disegnare</Text>
            <Text
              style={{
                textAlign: "center",
              }}
            >
              NOME_APP permette di disegnare con una matita su una tela bianca.
              Scegli lo spessore della matita che preferisci e inizia a creare
              il tuo capolavoro. Se vuoi cancellare, basta usare il pulsante
              apposito.
            </Text>
          </View>
        </View>

        <View
          key="2"
          style={[
            tutorialStyle.pageContainer,
            {
              backgroundColor: "#D8CEFF",
            },
          ]}
        >
          <View style={tutorialStyle.iconsCentered}>
            <Ionicons
              name="color-palette"
              size={150}
              color="black"
            />
          </View>

          <View style={{ height: "50%" }}>
            <Text style={tutorialStyle.header}>Scegli il tuo colore</Text>
            <Text
              style={{
                textAlign: "center",
              }}
            >
              Puoi cambiare il colore del tratto in modo semplice e veloce.
              Scegli tra una vasta gamma di colori e trova quello che più ti
              piace. Puoi anche tornare al colore originale con un solo tocco.
            </Text>
          </View>
        </View>

        <View
          key="3"
          style={[
            tutorialStyle.pageContainer,
            {
              backgroundColor: "#F0D9CA",
            },
          ]}
        >
          <View style={tutorialStyle.iconsBetween}>
            <Entypo
              name="image-inverted"
              size={100}
              color="black"
            />
            <FontAwesome
              name="plus"
              size={30}
              color="black"
            />
            <MaterialCommunityIcons
              name="draw"
              size={120}
              color="black"
            />
          </View>
          <View style={{ height: "50%" }}>
            <Text style={tutorialStyle.header}>
              Carica la tua immagine preferita
            </Text>
            <Text
              style={{
                textAlign: "center",
              }}
            >
              Con la funzione di caricamento dell'immagine, puoi prendere una
              foto dalla galleria del tuo telefono e disegnarci sopra. Questa è
              una fantastica opzione per creare un'opera d'arte personalizzata.
            </Text>
          </View>
        </View>

        <View
          key="4"
          style={[
            tutorialStyle.pageContainer,
            {
              backgroundColor: "#D8CEFF",
            },
          ]}
        >
          <View style={tutorialStyle.iconsBetween}>
            <Entypo
              name="folder-images"
              size={100}
              color="black"
            />
            <FontAwesome
              name="plus"
              size={30}
              color="black"
            />
            <Entypo
              name="save"
              size={100}
              color="black"
            />
          </View>
          <View style={{ height: "50%" }}>
            <Text style={tutorialStyle.header}>Salva il tuo disegno</Text>
            <Text
              style={{
                textAlign: "center",
              }}
            >
              Quando hai finito il tuo capolavoro, puoi salvarlo in un album
              dedicato all'app sul tuo telefono. In questo modo, potrai
              guardarla in qualsiasi momento e condividerla con i tuoi amici e
              familiari.
            </Text>
          </View>
        </View>
      </PagerView>

      {state.index < 3 ? (
        <View style={tutorialStyle.actionsContainer}>
          <Text
            onPress={goToDrawing}
            style={{ fontWeight: "700" }}
          >
            Salta
          </Text>
          <TouchableOpacity
            onPress={goToNextPage}
            style={tutorialStyle.nextPage}
          >
            <Text style={{ fontWeight: "700" }}>Avanti</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={tutorialStyle.buttonContainer}>
          <TouchableOpacity
            onPress={goToDrawing}
            style={tutorialStyle.button}
          >
            <Text style={{ fontWeight: "700" }}>Voglio disegnare</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export default Tutorial;

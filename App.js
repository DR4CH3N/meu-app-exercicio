import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

import Localizacao from "./src/components/Localizacao";

import SeletorDeimagem from "./src/components/SeletorDeimagem";

import VisualizadorDeMapa from "./src/components/VisualizadorDeMapa";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>App 1 - foto de lugares visitados</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do local"
        keyboardType="default"
      />
      <Button
        style={styles.botaoImagem}
        title="pegue uma imagem do rolo da camera"
        onPress={SeletorDeimagem}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  botaoImagem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

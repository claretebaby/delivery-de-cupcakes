import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { cores } from "../tema";

export default function BarraBusca({ valor, onChange }) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Buscar cupcake..."
      placeholderTextColor={cores.textoSuave}
      value={valor}
      onChangeText={onChange}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: cores.branco,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    margin: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: cores.borda,
    color: cores.texto,
  },
});

import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { cores } from "../tema";

type Props = {
  valor: string; // texto atual da busca
  onChange: (texto: string) => void; // chamada a cada letra digitada
};

export default function BarraBusca({ valor, onChange }: Props) {
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
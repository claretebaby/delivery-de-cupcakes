import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { cores, formatarPreco } from '../tema';

export default function CardProduto({ produto, onAdicionar }) {
  return (
    <View style={styles.card}>
      <Image source={ typeof produto.imagem === "string"
      ? { uri: produto.imagem }
      : produto.imagem
  }
  style={styles.imagem}
/>
      <View style={styles.info}>
        <Text style={styles.nome}>{produto.nome}</Text>
        <Text style={styles.descricao}>{produto.descricao}</Text>
        <Text style={styles.preco}>{formatarPreco(produto.preco)}</Text>
        <TouchableOpacity style={styles.botao} onPress={() => onAdicionar(produto)}>
          <Text style={styles.textoBotao}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: cores.branco,
    borderRadius: 14,
    marginHorizontal: 12,
    marginBottom: 12,
    overflow: 'hidden',
    elevation: 2,
  },
  imagem: { width: 110, height: 130 },
  info: { flex: 1, padding: 10 },
  nome: { fontSize: 16, fontWeight: 'bold', color: cores.texto },
  descricao: { fontSize: 13, color: cores.textoSuave, marginVertical: 4 },
  preco: { fontSize: 15, fontWeight: 'bold', color: cores.primaria },
  botao: {
    backgroundColor: cores.primaria,
    borderRadius: 8,
    paddingVertical: 6,
    marginTop: 6,
    alignItems: 'center',
  },
  textoBotao: { color: cores.branco, fontWeight: 'bold' },
});
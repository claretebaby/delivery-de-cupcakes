import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useCarrinho } from '../context/CarrinhoContext'; // carrinho compartilhado
import { cores, formatarPreco } from '../tema'; // cores do app e formatação do preço

export default function Confirmacao() {
  const router = useRouter();
  const { carrinho, limparCarrinho } = useCarrinho(); // itens e função que esvazia o carrinho

  // reduce(): soma preço x quantidade de cada item = valor total do pedido
  const total = carrinho.reduce((soma, item) => soma + item.preco * item.quantidade, 0);

  function voltarAoInicio() { // chamada ao apertar o botão final
    limparCarrinho(); // esvazia o carrinho, porque o pedido já foi feito
    router.replace('/'); // volta ao início, sem deixar a confirmação no histórico
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.emoji}>🧁</Text>

      <Text style={styles.titulo}>Pedido confirmado!</Text>

      <Text style={styles.mensagem}>
        Seu pedido foi enviado para a cozinha e já está sendo preparado com carinho.
      </Text>

      {/* cartão branco com o resumo da compra */}
      <View style={styles.resumo}>
        <Text style={styles.resumoTitulo}>Resumo da compra</Text>

        {/* map(): cria uma linha para cada item do carrinho */}
        {carrinho.map((item) => (
          <View key={item.id} style={styles.linha}>
            <Text style={styles.linhaNome}>{item.quantidade}x {item.nome}</Text>
            <Text style={styles.linhaPreco}>{formatarPreco(item.preco * item.quantidade)}</Text>
          </View>
        ))}

        <View style={styles.divisor} />

        <View style={styles.linha}>
          <Text style={styles.totalTexto}>Total</Text>
          <Text style={styles.totalTexto}>{formatarPreco(total)}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.botao} onPress={voltarAoInicio}>
        <Text style={styles.textoBotao}>Voltar ao início</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: cores.fundo, alignItems: 'center', padding: 24, paddingTop: 40 },
  emoji: { fontSize: 72 },
  titulo: { fontSize: 28, fontWeight: 'bold', color: cores.titulo, marginVertical: 10 },
  mensagem: { fontSize: 16, color: cores.texto, textAlign: 'center', marginBottom: 24 },
  resumo: { width: '100%', backgroundColor: cores.branco, borderRadius: 16, padding: 16, marginBottom: 24 },
  resumoTitulo: { fontSize: 18, fontWeight: 'bold', color: cores.texto, marginBottom: 10 },
  linha: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 3 },
  linhaNome: { flex: 1, color: cores.texto, fontSize: 15 },
  linhaPreco: { color: cores.primaria, fontWeight: 'bold', fontSize: 15 },
  divisor: { height: 1, backgroundColor: cores.borda, marginVertical: 10 },
  totalTexto: { fontSize: 18, fontWeight: 'bold', color: cores.titulo },
  botao: { backgroundColor: cores.primaria, borderRadius: 26, paddingVertical: 14, paddingHorizontal: 40 },
  textoBotao: { color: cores.branco, fontSize: 17, fontWeight: 'bold' },
});
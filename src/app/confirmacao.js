import React from 'react'; // importa o React, necessário para criar telas
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'; // componentes usados na tela
import { useRouter } from 'expo-router'; // hook que permite trocar de tela
import { useCarrinho } from '../context/CarrinhoContext'; // hook que pega o carrinho compartilhado
import { cores, formatarPreco } from '../tema'; // cores do app e função que formata o preço

export default function Confirmacao() { // cria a tela de confirmação (componente funcional)
  const router = useRouter(); // guarda o "router", que sabe navegar entre as telas
  const { carrinho, limparCarrinho } = useCarrinho(); // pega os itens do carrinho e a função que esvazia ele

  // reduce(): soma preço x quantidade de cada item = valor total do pedido
  const total = carrinho.reduce((soma, item) => soma + item.preco * item.quantidade, 0);

  function voltarAoInicio() { // função chamada quando aperta no botão final
    limparCarrinho(); // esvazia o carrinho, porque o pedido já foi feito
    router.replace('/'); // volta para a tela inicial (sem deixar a confirmação no histórico)
  }

  return ( // o que aparece na tela
    <ScrollView
      showsVerticalScrollIndicator={false} // esconde a barra de rolagem
      contentContainerStyle={styles.container} // estilo do conteúdo dentro do scroll
    >
      {/* emoji grande no topo */}
      <Text style={styles.emoji}>🧁</Text>

      {/* título da confirmação */}
      <Text style={styles.titulo}>Pedido confirmado!</Text>

      {/* mensagem de confirmação pedida no enunciado */}
      <Text style={styles.mensagem}>
        Seu pedido foi enviado para a cozinha e já está sendo preparado com carinho.
      </Text>

      {/* cartão branco com o resumo da compra */}
      <View style={styles.resumo}>
        {/* título do resumo */}
        <Text style={styles.resumoTitulo}>Resumo da compra</Text>

        {/* map(): cria uma linha para cada item do carrinho */}
        {carrinho.map((item) => (
          <View key={item.id} style={styles.linha}>
            {/* quantidade e nome do cupcake */}
            <Text style={styles.linhaNome}>{item.quantidade}x {item.nome}</Text>
            {/* preço do item já multiplicado pela quantidade */}
            <Text style={styles.linhaPreco}>{formatarPreco(item.preco * item.quantidade)}</Text>
          </View>
        ))}

        {/* linha fina separando os itens do total */}
        <View style={styles.divisor} />

        {/* linha do total do pedido */}
        <View style={styles.linha}>
          <Text style={styles.totalTexto}>Total</Text>
          <Text style={styles.totalTexto}>{formatarPreco(total)}</Text>
        </View>
      </View>

      {/* botão que esvazia o carrinho e volta ao início */}
      <TouchableOpacity style={styles.botao} onPress={voltarAoInicio}>
        <Text style={styles.textoBotao}>Voltar ao início</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({ // cria os estilos da tela
  container: { flexGrow: 1, backgroundColor: cores.fundo, alignItems: 'center', padding: 24, paddingTop: 40 }, // fundo rosa, tudo centralizado
  emoji: { fontSize: 72 }, // tamanho do emoji
  titulo: { fontSize: 28, fontWeight: 'bold', color: cores.titulo, marginVertical: 10 }, // título grande em rosa escuro
  mensagem: { fontSize: 16, color: cores.texto, textAlign: 'center', marginBottom: 24 }, // mensagem centralizada
  resumo: { width: '100%', backgroundColor: cores.branco, borderRadius: 16, padding: 16, marginBottom: 24 }, // cartão do resumo
  resumoTitulo: { fontSize: 18, fontWeight: 'bold', color: cores.texto, marginBottom: 10 }, // título do resumo
  linha: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 3 }, // nome à esquerda, preço à direita
  linhaNome: { flex: 1, color: cores.texto, fontSize: 15 }, // nome do item ocupa o espaço que sobrar
  linhaPreco: { color: cores.primaria, fontWeight: 'bold', fontSize: 15 }, // preço em rosa
  divisor: { height: 1, backgroundColor: cores.borda, marginVertical: 10 }, // linha fina
  totalTexto: { fontSize: 18, fontWeight: 'bold', color: cores.titulo }, // texto do total em destaque
  botao: { backgroundColor: cores.primaria, borderRadius: 26, paddingVertical: 14, paddingHorizontal: 40 }, // botão rosa arredondado
  textoBotao: { color: cores.branco, fontSize: 17, fontWeight: 'bold' }, // texto branco do botão
});
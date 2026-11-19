import { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import BarraBusca from "../components/BarraBusca";
import CardProduto from "../components/CardProduto";
import { useCarrinho } from "../context/CarrinhoContext";
import { produtos } from "../data/produtos";
import { cores } from "../tema";

export default function Cardapio() {
  const [busca, setBusca] = useState("");
  const { categoria } = useLocalSearchParams<{ categoria?: string }>(); // parâmetro vindo da tela anterior
  const router = useRouter();
  const { carrinho, adicionarAoCarrinho } = useCarrinho();

  // veio alguma categoria? filtra só ela; senão, usa todos os produtos
  const listaCategoria = categoria
    ? produtos.filter((p) => p.categoria === categoria)
    : produtos;

  // mantém só quem tem o texto digitado no nome
  const lista = listaCategoria.filter((p) =>
    p.nome.toLowerCase().includes(busca.toLowerCase()),
  );

  // reduce(): soma as quantidades de todos os itens do carrinho
  const totalItens = carrinho.reduce((soma, item) => soma + item.quantidade, 0);

  return (
    <View style={styles.container}>
      <BarraBusca valor={busca} onChange={setBusca} />
      <FlatList
        data={lista}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CardProduto produto={item} onAdicionar={adicionarAoCarrinho} />
        )}
        contentContainerStyle={{ paddingVertical: 12, paddingBottom: 90 }}
      />
      <TouchableOpacity
        style={styles.botaoCarrinho}
        onPress={() => router.push("/carrinho")}
      >
        <Text style={styles.textoCarrinho}>🛒 Ver carrinho ({totalItens})</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundoClaro,
    padding: 25,
  },
  botaoCarrinho: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: cores.primaria,
    borderRadius: 28,
    paddingVertical: 14,
    alignItems: "center",
  },
  textoCarrinho: {
    color: cores.branco,
    fontSize: 17,
    fontWeight: "bold",
  },
});
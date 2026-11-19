import { useRouter } from "expo-router";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useCarrinho } from "../context/CarrinhoContext";
import { cores, formatarPreco } from "../tema";

export default function Carrinho() {
  const router = useRouter();
  const { carrinho, alterarQuantidade, removerDoCarrinho } = useCarrinho();

  // reduce(): soma as quantidades de todos os itens
  const totalItens = carrinho.reduce((soma, item) => soma + item.quantidade, 0);

  // reduce(): soma preço x quantidade de cada item = valor total
  const total = carrinho.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0,
  );

  // carrinho vazio: mostra uma mensagem e um botão para voltar
  if (carrinho.length === 0) {
    return (
      <View style={styles.vazioContainer}>
        <Text style={styles.vazioEmoji}>🛒</Text>
        <Text style={styles.vazioTexto}>Seu carrinho está vazio</Text>
        <TouchableOpacity style={styles.botao} onPress={() => router.back()}>
          <Text style={styles.textoBotao}>Voltar ao cardápio</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={carrinho}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ paddingTop: 14, paddingBottom: 14 }}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image
              source={
                typeof item.imagem === "string"
                  ? { uri: item.imagem }
                  : item.imagem
              }
              style={styles.foto}
            />

            <View style={styles.dados}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.preco}>
                {formatarPreco(item.preco * item.quantidade)}
              </Text>

              <View style={styles.contador}>
                <TouchableOpacity onPress={() => alterarQuantidade(item.id, -1)}>
                  <Text style={styles.sinal}>−</Text>
                </TouchableOpacity>
                <Text style={styles.qtd}>{item.quantidade}</Text>
                <TouchableOpacity onPress={() => alterarQuantidade(item.id, 1)}>
                  <Text style={styles.sinal}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity onPress={() => removerDoCarrinho(item.id)}>
              <Text style={styles.lixeira}>🗑️</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.resumo}>
        <View style={styles.linha}>
          <Text style={styles.linhaTexto}>Itens</Text>
          <Text style={styles.linhaTexto}>{totalItens}</Text>
        </View>
        <View style={styles.divisor} />
        <View style={styles.linha}>
          <Text style={styles.totalTexto}>Total</Text>
          <Text style={styles.totalTexto}>{formatarPreco(total)}</Text>
        </View>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => router.push("/confirmacao")}
        >
          <Text style={styles.textoBotao}>Finalizar pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: cores.fundoClaro },

  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: cores.branco,
    borderRadius: 16,
    padding: 10,
    marginHorizontal: 14,
    marginBottom: 10,
  },
  foto: { width: 70, height: 70, borderRadius: 12 },
  dados: { flex: 1, marginHorizontal: 12 },
  nome: { fontSize: 15, fontWeight: "bold", color: cores.texto },
  preco: {
    fontSize: 15,
    fontWeight: "bold",
    color: cores.primaria,
    marginTop: 2,
    marginBottom: 6,
  },

  contador: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: cores.fundo,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  sinal: {
    fontSize: 22,
    fontWeight: "bold",
    color: cores.titulo,
    paddingHorizontal: 4,
  },
  qtd: {
    fontSize: 16,
    fontWeight: "bold",
    color: cores.texto,
    marginHorizontal: 12,
  },
  lixeira: { fontSize: 22 },

  resumo: {
    backgroundColor: cores.branco,
    padding: 18,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  linha: { flexDirection: "row", justifyContent: "space-between" },
  linhaTexto: { fontSize: 15, color: cores.textoSuave },
  divisor: { height: 1, backgroundColor: cores.borda, marginVertical: 10 },
  totalTexto: { fontSize: 22, fontWeight: "bold", color: cores.titulo },

  botao: {
    backgroundColor: cores.primaria,
    borderRadius: 28,
    paddingVertical: 14,
    paddingHorizontal: 30,
    alignItems: "center",
    marginTop: 14,
  },
  textoBotao: { color: cores.branco, fontSize: 17, fontWeight: "bold" },

  vazioContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: cores.fundoClaro,
    padding: 20,
  },
  vazioEmoji: { fontSize: 64 },
  vazioTexto: { fontSize: 18, color: cores.textoSuave, marginVertical: 14 },
});
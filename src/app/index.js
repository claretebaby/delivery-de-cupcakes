import { useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  // cria e exporta o componente da tela inicial
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.nomeLoja}>Doce Mordida Cupcakes 🧁 </Text>
        <Text style={styles.greeting}>
          Bem-vindo(a)! Aqui cada cupcake é feito com carinho e um toque de
          açúcar.
        </Text>

        <Text style={styles.title}>Qual cupcake deseja comer hoje?</Text>
      </View>

      <View style={styles.banner}>
        <Text style={styles.offer}>OFERTA ESPECIAL</Text>

        <Text style={styles.bannerTitle}>Caixa com 4 Cupcakes</Text>

        <Text style={styles.bannerTitle}>
          Perfeita para presentear ou dividir
        </Text>

        <TouchableOpacity //botao que diminui a opacidade quando tocado
          style={styles.button} //estilo do botao
          onPress={() => router.push("/cardapio")} //ao tocar, navega para a tela cardapio
        >
          <Text style={styles.buttonText}>Peça agora</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Categorias</Text>

      <View style={styles.categorias}>
        <TouchableOpacity
          style={styles.category}
          onPress={() =>
            router.push({
              pathname: "/cardapio",
              params: { categoria: "Clássicos" },
            })
          }
        >
          <Text style={styles.emoji}>🍫</Text>
          <Text> Clássicos </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.category}
          onPress={() =>
            router.push({
              pathname: "/cardapio",
              params: { categoria: "Frutados" },
            })
          }
        >
          <Text style={styles.emoji}>🍓</Text>
          <Text> Frutados </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.category}
          onPress={() =>
            router.push({
              pathname: "/cardapio",
              params: { categoria: "Especiais" },
            })
          }
        >
          <Text style={styles.emoji}>✨</Text>
          <Text> Especiais </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.category}
          onPress={() =>
            router.push({
              pathname: "/cardapio",
              params: { categoria: "Caixas e Combos" },
            })
          }
        >
          <Text style={styles.emoji}>🎁</Text>
          <Text> Caixas e Combos </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // cria o obejto com todos os estilos
  container: {
    //fundo da tela
    flex: 1, //ocupa todo o espço disponivel
    backgroundColor: "#fff0f6", //cor de fundo
    paddingHorizontal: 20, //espaço interno nas laterais
  },
  header: {
    // estilo do topo
    marginTop: 50, // afastamento do topo
    marginBottom: 16, // espaço do header
  },
  greeting: {
    fontSize: 17, //tamnnho
    color: "#8d6e63", //cor
  },
  title: {
    fontSize: 22, //tamanho
    fontWeight: "bold", //para deixar em negrito
    marginTop: 9, //espaço acima do texto
    color: "#c2185b",
  },
  banner: {
    backgroundColor: "#FF3D81",
    borderRadius: 22, // cantos arredondados
    padding: 22, // espaço interno nos 4 lados
  },
  offer: {
    color: "#FFE066",
    fontWeight: "bold",
    fontSize: 12,
  },
  bannerTitle: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 4, //pequeno espaço
  },
  bannerText: {
    color: "#FFFFFF",
    fontSize: 14,
    marginTop: 16,
  },

  button: {
    backgroundColor: "#FFC83D",
    alignSelf: "flex-start", // so ocupa o tamanho do conteudo
    paddingVertical: 12, //espaço interno em cima e embaixo
    paddingHorizontal: 26, // espaço interno nas laterais
    borderRadius: 24, //bordas arredondadas
    marginTop: 20, // espaço acima do botao
  },

  buttonText: {
    color: "#4A2C2A",
    fontWeight: "bold",
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 30, // espaço acima (separa do banner)
    marginBottom: 12, // espaço abaixo (separa dos cards)
  },
  categorias: {
    flexDirection: "row", //coloca os iten lado a lado
    justifyContent: "space-between", //distribui o espaço entre os itens
    flexWrap: "wrap", // quando nao cabe na linha, joga para lonha abaioxo
    paddingHorizontal: 16,
    rowGap: 16, // espaço vertical entre uma linha de cards
  },

  category: {
    width: "48%", // cada cards ocupa 48 da largura
    borderRadius: 18,
    backgroundColor: "#fff3e6",
    paddingVertical: 24,
    alignItems: "center", //centralizar o conteudo
  },
  emoji: {
    fontSize: 30,
    marginBottom: 5,
  },
  nomeLoja: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#FF3D81",
  },
});

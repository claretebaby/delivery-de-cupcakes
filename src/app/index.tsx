import { useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter(); // navegar para outras telas

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

        <TouchableOpacity // botão que diminui a opacidade quando tocado
          style={styles.button}
          onPress={() => router.push("/cardapio")} // ao tocar, navega para o cardápio
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
              pathname: "/cardapio", // tela de destino
              params: { categoria: "Clássicos" }, // parâmetro enviado
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
  container: {
    flex: 1, // ocupa todo o espaço disponível
    backgroundColor: "#fff0f6",
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 50,
    marginBottom: 16,
  },
  greeting: {
    fontSize: 17,
    color: "#8d6e63",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 9,
    color: "#c2185b",
  },
  banner: {
    backgroundColor: "#FF3D81",
    borderRadius: 22,
    padding: 22,
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
    marginTop: 4,
  },
  bannerText: {
    color: "#FFFFFF",
    fontSize: 14,
    marginTop: 16,
  },
  button: {
    backgroundColor: "#f5ecd5",
    alignSelf: "flex-start", // só ocupa o tamanho do conteúdo
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderRadius: 24,
    marginTop: 20,
  },
  buttonText: {
    color: "#4A2C2A",
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 12,
  },
  categorias: {
    flexDirection: "row", // itens lado a lado
    justifyContent: "space-between",
    flexWrap: "wrap", // quando não cabe, vai para a linha de baixo
    paddingHorizontal: 16,
    rowGap: 16,
  },
  category: {
    width: "48%", // cada card ocupa 48% da largura
    borderRadius: 18,
    backgroundColor: "#fff3e6",
    paddingVertical: 24,
    alignItems: "center",
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
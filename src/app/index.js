import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>
          Olá! Bem-vindo(a) à Doce Mordida. 🧁
        </Text>

        <Text style={styles.title}>Qual cupcake deseja comer hoje?</Text>
      </View>

      <View style={styles.banner}>
        <Text style={styles.offer}>OFERTA ESPECIAL</Text>

        <Text style={styles.bannerTitle}>Caixa com 6 Cupcakes</Text>

        <Text style={styles.bannerTitle}>
          Perfeita para presentear ou dividir
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Peça agora</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Categorias</Text>

      <View style={styles.categorias}>
        <TouchableOpacity style={styles.category}>
          <Text styles={styles.emoji}>🍫</Text>
          <Text> Clássicos </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.category}>
          <Text styles={styles.emoji}>🍓</Text>
          <Text> Frutados </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.category}>
          <Text styles={styles.emoji}>✨</Text>
          <Text> Especiais </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.category}>
          <Text styles={styles.emoji}>🎁</Text>
          <Text> Caixas e Combos </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff0f6",
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 45,
    marginBottom: 16,
  },
  greeting: {
    fontSize: 18,
    color: "#8d6e63",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 5,
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
    backgroundColor: "#FFC83D",
    alignSelf: "flex-start",
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
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingHorizontal: 16,
    rowGap: 16,
  },

  category: {
    width: "48%",
    borderRadius: 18,
    backgroundColor: "#fff3e6",
    paddingVertical: 24,
    alignItems: "center",
  },
  emoji: {
    fontSize: 30,
    marginBottom: 5,
  },
});

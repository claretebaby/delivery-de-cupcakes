import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet ,TouchableOpacity } from "react-native";
import { cores } from "../tema";
import { produtos } from "../data/produtos";
import CardProduto from "../components/CardProduto";
import { router, useLocalSearchParams,useRouter } from "expo-router";
import BarraBusca from "../components/BarraBusca";
import { useCarrinho} from '../context/CarrinhoContext'

export default function Cardapio() {
  const [busca, setBusca] = useState("");
  const { categoria } = useLocalSearchParams(); // pega o parametro que veio da tela anterior
  const { carrinho, adicionarAoCarrinho } = useCarrinho();
  const listaCategoria = categoria //veio alguma categoria?
    ? produtos.filter((p) => p.categoria === categoria) //sim, filtra e deixa somente daquela categoria
    : produtos; // não, usa todos os produtos

  const lista = listaCategoria.filter((p) =>
    p.nome.toLowerCase().includes(busca.toLowerCase()) // mesma coisa acima, mantem so quem tem o texto digitado
  );
    function adicionar(produto) { // função chamada quando aperta em adicionar
      console.log("Adicionou:", produto.nome);
    }
  
  return (
    <View style={styles.container}>
      <BarraBusca valor={busca} onChange={setBusca}/>
      <FlatList
        data={lista} // os dados que a lista vai mostrar
        keyExtractor={(item) => String(item.id)} // converte o id em texto
        renderItem={({ item }) => ( //desenha cada item da lista
          <CardProduto produto={item} onAdicionar={adicionarAoCarrinho} /> // mostra um card, passando o produto
        )}
        contentContainerStyle={{ paddingVertical: 12 }} 
        
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundoClaro,
    padding: 25,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: cores.titulo,
  },
  botaoCarrinho: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: cores.primaria,
    borderRadius: 28,
    paddingVertical: 14,
    alignItems: 'center'
  }, 
  textoCarrinho: {
    color: cores.branco,
    fontSize: 17,
    fontWeight: 'bold'
  }, 
});
